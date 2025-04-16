<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PhylaxController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Phylax');
        })->get();

        return Inertia::render('Phylax', [
            'banner' => $banner,
        ]);
    }
}
