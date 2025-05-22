<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\ContainmentMonitoring;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PhylaxController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Phylax');
        })->get();

        $monitorings = ContainmentMonitoring::where('is_active', true)
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

        return Inertia::render('Phylax', [
            'banner' => $banner,
            'monitorings' => $monitorings,
        ]);
    }
}
