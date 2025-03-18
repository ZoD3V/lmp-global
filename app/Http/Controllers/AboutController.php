<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Category;
use App\Models\LMPHistory;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        $timeline = LMPHistory::all();
        $product = Category::whereNull('parent_id')->get();
        return Inertia::render('About', [
            'banner' => $banner,
            'timeline' => $timeline,
            'product' => $product,
        ]);
    }
}
