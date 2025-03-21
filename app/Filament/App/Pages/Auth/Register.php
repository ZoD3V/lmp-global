<?php

namespace App\Filament\App\Pages\Auth;

use Filament\Pages\Auth\Register as BaseRegister;
use App\Models\User;
use Filament\Facades\Filament;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class Register extends BaseRegister
{
    protected function createUser(array $data): User
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $user->assignRole('User');

        return $user;
    }
}
