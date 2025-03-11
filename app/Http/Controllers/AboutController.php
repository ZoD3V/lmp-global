<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\LMPHistory;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        $timeline = LMPHistory::all();
        return Inertia::render('About', [
            'banner' => $banner,
            'timeline' => $timeline,
        ]);
    }
}
