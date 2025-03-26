<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResearchDevelopmentController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'ResearchDevelopment');
        })->get();

        return Inertia::render('ResearchDevelopment', [
            'banner' => $banner
        ]);
    }
}
