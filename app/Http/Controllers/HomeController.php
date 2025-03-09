<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        return Inertia::render('Home', [
            'banner' => $banner
        ]);
    }
}
