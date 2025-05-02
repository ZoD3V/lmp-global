<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Event');
        })->get();

        return Inertia::render('Event', [
            'banner' => $banner
        ]);
    }
}
