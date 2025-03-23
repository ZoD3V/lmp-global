<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\LMPPolymer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PolymerController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        $lmpPolymer = LMPPolymer::with('images')->get();

        return Inertia::render('Polymer', [
            'banner' => $banner,
            'polymer' => $lmpPolymer,
        ]);
    }
}
