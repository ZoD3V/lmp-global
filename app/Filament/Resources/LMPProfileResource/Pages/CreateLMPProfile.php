<?php

namespace App\Filament\Resources\LMPProfileResource\Pages;

use App\Filament\Resources\LMPProfileResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateLMPProfile extends CreateRecord
{
    protected static string $resource = LMPProfileResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Lmp Profile created.')
            ->body('The Lmp Profile has been saved successfully.');
    }
}
