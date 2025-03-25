<?php

namespace App\Filament\Resources\ProductTechnicalSpecResource\Pages;

use App\Filament\Resources\ProductTechnicalSpecResource;
use Filament\Actions;
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
}
