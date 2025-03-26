<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Category;
use App\Models\LMPHistory;
use App\Models\LMPProfile;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'About');
        })->get();

        $timeline = LMPHistory::all();
        $lmp_profiles = LMPProfile::all();
        $formatted_profiles = $lmp_profiles->map(function ($profile) {
            return [
                'img' => $profile->image,
                'title' => $profile->name,
                'description' => $profile->description,
            ];
        });
        $product = Category::whereNull('parent_id')->get();
        return Inertia::render('About', [
            'banner' => $banner,
            'timeline' => $timeline,
            'product' => $product,
            'lmp_profile' => $formatted_profiles,
        ]);
    }
}
