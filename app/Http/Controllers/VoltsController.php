<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\LmpVolt;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VoltsController extends Controller
{
    public function index()
    {
        $banner = Banner::all();
        $lmpVolts = LmpVolt::all();

        return Inertia::render('Volts', [
            'banner' => $banner,
            'volts' => $lmpVolts,
        ]);
    }
}
