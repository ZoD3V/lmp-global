<?php

namespace App\Filament\Resources\LMPPartnerResource\Pages;

use App\Filament\Resources\LMPPartnerResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditLMPPartner extends EditRecord
{
    protected static string $resource = LMPPartnerResource::class;

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
            ->title('Lmp Patner updated.')
            ->body('The Lmp Patner has been updated successfully.');
    }
}
