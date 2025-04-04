<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserHasRoleAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::user()->hasAnyRole(['Super-Admin', 'Admin', 'Maintained'])) {
            return redirect()->to('/app');
        }

        return $next($request);
    }
}
