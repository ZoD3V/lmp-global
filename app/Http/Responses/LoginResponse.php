<?php

namespace App\Http\Responses;
use Filament\Pages\Dashboard;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Livewire\Features\SupportRedirects\Redirector;
use Filament\Http\Responses\Auth\LoginResponse as BaseLoginResponse;

class LoginResponse extends BaseLoginResponse
{
    public function toResponse($request): RedirectResponse|Redirector
    {
        if (Auth::user()->hasRole(['Super-Admin', 'Admin', 'Maintained'])) {
            return redirect()->to(Dashboard::getUrl(panel: 'admin'));
        }

        return parent::toResponse($request);
    }
}
