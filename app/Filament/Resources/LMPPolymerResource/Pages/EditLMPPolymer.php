<?php

namespace App\Filament\Resources\LMPPolymerResource\Pages;

use App\Filament\Resources\LMPPolymerResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditLMPPolymer extends EditRecord
{
    protected static string $resource = LMPPolymerResource::class;

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
            ->title('Lmp Polymer updated.')
            ->body('The Lmp Polymer has been updated successfully.');
    }
}
