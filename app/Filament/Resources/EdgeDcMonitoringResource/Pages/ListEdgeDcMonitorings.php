<?php

namespace App\Filament\Resources\EdgeDcMonitoringResource\Pages;

use App\Filament\Resources\EdgeDcMonitoringResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListEdgeDcMonitorings extends ListRecords
{
    protected static string $resource = EdgeDcMonitoringResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
