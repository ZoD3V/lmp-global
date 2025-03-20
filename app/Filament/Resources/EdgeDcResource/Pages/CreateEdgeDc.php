<?php

namespace App\Filament\Resources\EdgeDcResource\Pages;

use App\Filament\Resources\EdgeDcResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateEdgeDc extends CreateRecord
{
    protected static string $resource = EdgeDcResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Edge Dc created.')
            ->body('The Edge Dc has been saved successfully.');
    }
}
