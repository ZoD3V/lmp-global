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
        $banner = Banner::all();
        $edgeDc = EdgeDc::all();
        return Inertia::render('EdgeDc', [
            'banner' => $banner,
            'edgeDc' => $edgeDc,
        ]);
    }
}
