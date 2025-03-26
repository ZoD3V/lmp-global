<?php

namespace App\Filament\Resources\ProductTechnicalSpecResource\Pages;

use App\Filament\Resources\ProductTechnicalSpecResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditProductTechnicalSpec extends EditRecord
{
    protected static string $resource = ProductTechnicalSpecResource::class;

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
            ->title('Product Technical updated.')
            ->body('The Product Technical has been updated successfully.');
    }
}
