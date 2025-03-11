<?php

namespace App\Filament\Resources\LMPHistoryResource\Pages;

use App\Filament\Resources\LMPHistoryResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditLMPHistory extends EditRecord
{
    protected static string $resource = LMPHistoryResource::class;

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
            ->title('Lmp History updated.')
            ->body('The Lmp History has been updated successfully.');
    }
}
