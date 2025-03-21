<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Filament\Pages\Dashboard;
use Illuminate\Support\Facades\Auth;
class RedirectToProperPanelMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check() && Auth::user()->hasRole(['Super-Admin', 'Admin'])) {
            return redirect()->to(Dashboard::getUrl(panel: 'admin'));
        }
        return $next($request);
    }
}
