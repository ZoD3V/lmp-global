<?php

namespace App\Filament\Resources\KeyCharacterResource\Pages;

use App\Filament\Resources\KeyCharacterResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateKeyCharacter extends CreateRecord
{
    protected static string $resource = KeyCharacterResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Key character created.')
            ->body('The key character has been saved successfully.');
    }
}
