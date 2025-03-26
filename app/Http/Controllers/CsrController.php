<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Csr;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CsrController extends Controller
{
    public function index()
    {
        $banner = Banner::whereHas('page', function ($query) {
            $query->where('name', 'CSR');
        })->get();

        $csr = Csr::all();
        return Inertia::render('CSR', [
            'banner' => $banner,
            'csr' => $csr,
        ]);
    }
}
