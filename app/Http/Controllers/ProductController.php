<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        $banner = Banner::all();

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

        $formattedCategories = $categories->map(function ($category) {
            return [
                'name' => $category->name,
                'image' => $category->image,
                'desc' => $category->desc,
                'link' => $category->link,
                'children' => $category->children->map(function ($child) {
                    return [
                        'name' => $child->name,
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
        $product = Product::findOrFail($id);

        return Inertia::render('DetailProduct', [
            'banner' => $banner,
            'product' => $product,
        ]);
    }
}
