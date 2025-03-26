<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PACController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Pac');
        })->get();

        return Inertia::render('PAC', [
            'banner' => $banner,
        ]);
    }
}
