<?php

namespace App\Filament\Resources\EdgeDcResource\Pages;

use App\Filament\Resources\EdgeDcResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditEdgeDc extends EditRecord
{
    protected static string $resource = EdgeDcResource::class;

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
            ->title('Edge Dc updated.')
            ->body('The Edge Dc has been updated successfully.');
    }
}
