<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnergyController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Energy');
        })->get();

        return Inertia::render('Energy', [
            'banner' => $banner,
        ]);
    }
}
