<?php

namespace App\Filament\Resources\LMPProfileResource\Pages;

use App\Filament\Resources\LMPProfileResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditLMPProfile extends EditRecord
{
    protected static string $resource = LMPProfileResource::class;

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
            ->title('Lmp Profile updated.')
            ->body('The Lmp Profile has been updated successfully.');
    }
}
