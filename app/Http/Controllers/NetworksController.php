<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\LmpNetwork;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NetworksController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'Network');
        })->get();

        $lmpNetworks = LmpNetwork::with('images')->get();

        $formattedData = $lmpNetworks->map(function ($network) {
            return [
                'title' => $network->title,
                'desc' => $network->desc,
                'module_info' => $network->module_info,
                'patch_cord_info' => $network->patch_cord_info,
                'products' => $network->images->map(function ($image) {
                    return [
                        'id' => $image->id,
                        'image_path' => $image->image_path,
                        'caption' => $image->caption,
                    ];
                }),
            ];
        });



        return Inertia::render('Networks', [
            'banner' => $banner,
            'networks' => $formattedData,
        ]);
    }
}
