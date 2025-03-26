<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\EdgeDc;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EdgeDCController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'EdgeDc');
        })->get();

        return Inertia::render('EdgeDc', [
            'banner' => $banner,
        ]);
    }
}
