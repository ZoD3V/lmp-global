<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatnersController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        return Inertia::render('Patners', [
            'banner' => $banner
        ]);
    }
}
