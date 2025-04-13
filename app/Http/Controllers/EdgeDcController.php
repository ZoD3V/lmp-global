<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EdgeDcController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'EdgeDc');
        })->get();

        return Inertia::render('EdgeDC', [
            'banner' => $banner,
        ]);
    }
}
