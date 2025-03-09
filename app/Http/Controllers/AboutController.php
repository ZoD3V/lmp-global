<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        return Inertia::render('About', [
            'banner' => $banner
        ]);
    }
}
