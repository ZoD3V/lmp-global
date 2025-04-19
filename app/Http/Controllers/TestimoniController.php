<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestimoniController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Testimoni');
        })->get();

        return Inertia::render('Testimoni', [
            'banner' => $banner,
        ]);
    }
}
