<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        return Inertia::render('ProductSolution', [
            'banner' => $banner
        ]);
    }
}
