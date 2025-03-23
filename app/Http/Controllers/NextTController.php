<?php

namespace App\Http\Controllers;

use App\Models\NextT;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NextTController extends Controller
{
    public function index()
    {
        $nexT = NextT::all();
        return Inertia::render('Nex-T', [
            'nexT' => $nexT,
        ]);
    }
}
