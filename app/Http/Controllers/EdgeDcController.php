<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\EdgeDcMonitoring;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EdgeDcController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'EdgeDc');
        })->get();

        $monitorings = EdgeDcMonitoring::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($monitoring) {
                return [
                    'id' => $monitoring->id,
                    'title' => $monitoring->title,
                    'image' => $monitoring->image,
                    'description' => $monitoring->description,
                ];
            });

        return Inertia::render('EdgeDC', [
            'banner' => $banner,
            'monitorings' => $monitorings,
        ]);
    }
}
