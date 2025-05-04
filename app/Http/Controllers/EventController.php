<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Event');
        })->get();


        $videos = Video::with([
            'images' => function ($query) {
                $query->orderBy('order', 'asc');
            }
        ])->orderBy('created_at', 'desc')->get();

        return Inertia::render('Event', [
            'banner' => $banner,
            'videos' => $videos
        ]);
    }
}
