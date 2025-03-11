<?php

namespace App\Filament\Resources\LMPPartnerResource\Pages;

use App\Filament\Resources\LMPPartnerResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateLMPPartner extends CreateRecord
{
    protected static string $resource = LMPPartnerResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Lmp Patner created.')
            ->body('The Lmp Patner has been saved successfully.');
    }
}
