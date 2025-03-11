<?php

namespace App\Filament\Resources\LMPHistoryResource\Pages;

use App\Filament\Resources\LMPHistoryResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateLMPHistory extends CreateRecord
{
    protected static string $resource = LMPHistoryResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Lmp History created.')
            ->body('The Lmp History has been saved successfully.');
    }
}
