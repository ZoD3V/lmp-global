<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KyrosMiraeController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'KyrosMirae');
        })->get();

        return Inertia::render('KyrosMirae', [
            'banner' => $banner,
        ]);
    }
}
