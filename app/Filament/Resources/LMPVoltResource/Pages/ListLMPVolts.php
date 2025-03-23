<?php

namespace App\Filament\Resources\LMPVoltResource\Pages;

use App\Filament\Resources\LMPVoltResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLMPVolts extends ListRecords
{
    protected static string $resource = LMPVoltResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
