<?php

namespace App\Filament\Resources\CsrResource\Pages;

use App\Filament\Resources\CsrResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateCsr extends CreateRecord
{
    protected static string $resource = CsrResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Csr created.')
            ->body('The Csr has been saved successfully.');
    }
}
