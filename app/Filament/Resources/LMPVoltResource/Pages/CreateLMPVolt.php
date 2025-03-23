<?php

namespace App\Filament\Resources\LMPVoltResource\Pages;

use App\Filament\Resources\LMPVoltResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateLMPVolt extends CreateRecord
{
    protected static string $resource = LMPVoltResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Lmp Volts created.')
            ->body('The Lmp Volts has been saved successfully.');
    }
}
