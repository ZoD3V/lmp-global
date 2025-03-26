<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\LMPPartner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatnersController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Patner');
        })->get();

        $patners = LMPPartner::all();
        return Inertia::render('Patners', [
            'banner' => $banner,
            'patners' => $patners,
        ]);
    }
}
