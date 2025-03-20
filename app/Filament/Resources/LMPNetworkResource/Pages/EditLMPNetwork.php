<?php

namespace App\Filament\Resources\LMPNetworkResource\Pages;

use App\Filament\Resources\LMPNetworkResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditLMPNetwork extends EditRecord
{
    protected static string $resource = LMPNetworkResource::class;

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
            ->title('Lmp Network updated.')
            ->body('The Lmp Network has been updated successfully.');
    }
}
