<?php

namespace App\Filament\Resources\LMPPolymerResource\Pages;

use App\Filament\Resources\LMPPolymerResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLMPPolymers extends ListRecords
{
    protected static string $resource = LMPPolymerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
