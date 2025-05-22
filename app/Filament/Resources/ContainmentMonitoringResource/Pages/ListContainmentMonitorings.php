<?php

namespace App\Filament\Resources\ContainmentMonitoringResource\Pages;

use App\Filament\Resources\ContainmentMonitoringResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListContainmentMonitorings extends ListRecords
{
    protected static string $resource = ContainmentMonitoringResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
