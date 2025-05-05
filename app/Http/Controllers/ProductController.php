<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductTechnicalSpec;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'ProductSolution');
        })->get();

        $categories = Category::whereNull('parent_id')
            ->with([
                'children' => function ($query) {
                    $query->with([
                        'products' => function ($q) {
                            $q->select('id', 'name', 'category_id');
                        }
                    ]);
                }
            ])
            ->get(['id', 'name', 'image', 'link', 'desc']);

        $formattedCategories = Category::with([
            'children' => function ($query) {
                $query->orderBy('order'); // Urutkan children berdasarkan order
            }
        ])
            ->whereNull('parent_id') // Hanya kategori utama
            ->orderBy('created_at') // Urutkan kategori utama berdasarkan created_at
            ->get()
            ->map(function ($category) {
                return [
                    'name' => $category->name,
                    'image' => $category->image,
                    'desc' => $category->desc,
                    'link' => $category->link,
                    'created_at' => $category->created_at, // Tambahkan jika perlu
                    'children' => $category->children->map(function ($child) {
                        return [
                            'name' => $child->name,
                            'order' => $child->order, // Sertakan order number
                            'products' => $child->products->map(function ($product) {
                                return [
                                    'id' => $product->id,
                                    'name' => $product->name,
                                ];
                            })
                        ];
                    })
                ];
            });

        return Inertia::render('ProductSolution', [
            'banner' => $banner,
            'categories' => $formattedCategories
        ]);
    }

    public function detail($id): Response
    {
        $banner = Banner::all();

        $product = Product::with('keyCharacters')->findOrFail($id);

        $product->keyCharacters->makeHidden('pivot');

        $categoryId = $product->category_id;

        $popularProducts = Product::where('category_id', $categoryId)
            ->where('id', '!=', $id)
            ->take(4)
            ->get();

        return Inertia::render('DetailProduct', [
            'banner' => $banner,
            'product' => $product,
            'popularProducts' => $popularProducts,
        ]);
    }

    public function search(Request $request)
    {
        $keyword = $request->input('keyword');
        $columns = [
            'name',
        ];

        $query = Product::query();

        if ($keyword) {
            $results = Product::query()
                ->select('id', 'name')
                ->when($keyword, fn($q) => $q->whereAny([
                    'name',
                ], 'LIKE', "%$keyword%"))
                ->limit(10)
                ->get()
                ->map(function ($item) {
                    return [
                        'id' => $item->id,
                        'name' => $item->name,
                    ];
                });
        }

        return response()->json([
            'results' => $results,
            'keyword' => $keyword
        ]);
    }

}
