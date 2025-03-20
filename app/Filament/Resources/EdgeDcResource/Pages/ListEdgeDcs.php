<?php

namespace App\Filament\Resources\EdgeDcResource\Pages;

use App\Filament\Resources\EdgeDcResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListEdgeDcs extends ListRecords
{
    protected static string $resource = EdgeDcResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
