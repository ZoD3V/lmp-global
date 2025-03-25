<?php

namespace App\Filament\Resources\ProductTechnicalSpecResource\Pages;

use App\Filament\Resources\ProductTechnicalSpecResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProductTechnicalSpecs extends ListRecords
{
    protected static string $resource = ProductTechnicalSpecResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
