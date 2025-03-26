<?php

namespace App\Filament\Resources\ProductTechnicalSpecResource\Pages;

use App\Filament\Resources\ProductTechnicalSpecResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateProductTechnicalSpec extends CreateRecord
{
    protected static string $resource = ProductTechnicalSpecResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Product Technical created.')
            ->body('The Product Technical has been saved successfully.');
    }
}
