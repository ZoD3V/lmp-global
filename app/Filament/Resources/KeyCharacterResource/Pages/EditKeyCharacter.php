<?php

namespace App\Filament\Resources\KeyCharacterResource\Pages;

use App\Filament\Resources\KeyCharacterResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditKeyCharacter extends EditRecord
{
    protected static string $resource = KeyCharacterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getSavedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Key Character updated.')
            ->body('The key character has been updated successfully.');
    }
}
