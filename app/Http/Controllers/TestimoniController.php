<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\TestimonialCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TestimoniController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Testimoni');
        })->get();

        $categories = TestimonialCategory::with(['useCases.testimonials'])->get();

        $structuredData = $categories->map(function ($category) {
            return [
                'title' => $category->title,
                'description' => $category->description,
                'useCases' => $category->useCases->map(function ($useCase) {
                    return [
                        'logo' => asset(Storage::url($useCase->logo)),
                        'testimoni' => $useCase->testimonials->map(function ($testimonial) use ($useCase) { // Tambahkan use ($useCase) di sini
                            return [
                                'name' => $useCase->company_name, // Sekarang variabel $useCase tersedia
                                'img' => asset(Storage::url($testimonial->image))
                            ];
                        })->toArray()
                    ];
                })->toArray()
            ];
        });

        return Inertia::render('Testimoni', [
            'banner' => $banner,
            'testimonials' => $structuredData,
        ]);
    }
}
