<?php

namespace App\Filament\Resources\NextTResource\Pages;

use App\Filament\Resources\NextTResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateNextT extends CreateRecord
{
    protected static string $resource = NextTResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Nex-T created.')
            ->body('The Nex-T has been saved successfully.');
    }
}
