<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DesignCollaborationCenterController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'DesignCollaborationCenter');
        })->get();

        return Inertia::render('DesignCollaborationCenter', [
            'banner' => $banner,
        ]);
    }
}
