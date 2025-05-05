<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\CarouselIndustry;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $images = CarouselIndustry::where('is_active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('Home', [
            'images' => $images,
        ]);
    }
}
