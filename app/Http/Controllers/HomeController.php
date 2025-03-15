<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Home');
        })->get();

        return Inertia::render('Home', [
            'banner' => $banner
        ]);
    }
}
