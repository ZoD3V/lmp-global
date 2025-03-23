<?php

namespace App\Filament\Resources\LMPVoltResource\Pages;

use App\Filament\Resources\LMPVoltResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditLMPVolt extends EditRecord
{
    protected static string $resource = LMPVoltResource::class;

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
            ->title('Lmp Volts updated.')
            ->body('The Lmp Volts has been updated successfully.');
    }
}
