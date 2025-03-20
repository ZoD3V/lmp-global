<?php

namespace App\Filament\Resources\LMPNetworkResource\Pages;

use App\Filament\Resources\LMPNetworkResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateLMPNetwork extends CreateRecord
{
    protected static string $resource = LMPNetworkResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('LMP Network created.')
            ->body('The LMP Network has been saved successfully.');
    }

}
