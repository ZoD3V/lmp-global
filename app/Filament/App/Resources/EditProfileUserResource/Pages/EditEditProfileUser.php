<?php

namespace App\Filament\App\Resources\EditProfileUserResource\Pages;

use App\Filament\App\Resources\EditProfileUserResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditEditProfileUser extends EditRecord
{
    protected static string $resource = EditProfileUserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
