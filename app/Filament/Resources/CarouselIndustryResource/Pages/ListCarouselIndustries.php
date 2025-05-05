<?php

namespace App\Filament\Resources\CarouselIndustryResource\Pages;

use App\Filament\Resources\CarouselIndustryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCarouselIndustries extends ListRecords
{
    protected static string $resource = CarouselIndustryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
