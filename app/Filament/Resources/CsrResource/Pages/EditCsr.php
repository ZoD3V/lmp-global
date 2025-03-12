<?php

namespace App\Filament\Resources\CsrResource\Pages;

use App\Filament\Resources\CsrResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditCsr extends EditRecord
{
    protected static string $resource = CsrResource::class;

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
            ->title('Csr updated.')
            ->body('The Csr has been updated successfully.');
    }
}
