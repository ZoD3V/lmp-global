<?php

namespace App\Filament\Resources\LMPPolymerResource\Pages;

use App\Filament\Resources\LMPPolymerResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateLMPPolymer extends CreateRecord
{
    protected static string $resource = LMPPolymerResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('LMP Polymer created.')
            ->body('The LMP Polymer has been saved successfully.');
    }
}
