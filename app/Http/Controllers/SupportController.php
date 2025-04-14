<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SupportController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Support');
        })->get();

        $Supportbanner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'ProductSolution');
        })->get();


        return Inertia::render('Support', [
            'banner' => $banner,
            'Supportbanner' => $Supportbanner,
        ]);
    }
}
