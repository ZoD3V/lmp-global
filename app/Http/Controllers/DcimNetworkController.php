<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DcimNetworkController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Home');
        })->get();

        return Inertia::render('DcimNetworks', [
            'banner' => $banner
        ]);
    }
}
