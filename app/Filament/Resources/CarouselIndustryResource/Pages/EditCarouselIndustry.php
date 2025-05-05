<?php

namespace App\Filament\Resources\CarouselIndustryResource\Pages;

use App\Filament\Resources\CarouselIndustryResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCarouselIndustry extends EditRecord
{
    protected static string $resource = CarouselIndustryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
