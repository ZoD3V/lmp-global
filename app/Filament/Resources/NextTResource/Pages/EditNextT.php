<?php

namespace App\Filament\Resources\NextTResource\Pages;

use App\Filament\Resources\NextTResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditNextT extends EditRecord
{
    protected static string $resource = NextTResource::class;

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
            ->title('Nex-T updated.')
            ->body('The Nex-T has been updated successfully.');
    }
}
