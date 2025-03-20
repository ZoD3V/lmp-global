<?php

namespace App\Filament\Resources\LMPNetworkResource\Pages;

use App\Filament\Resources\LMPNetworkResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLMPNetworks extends ListRecords
{
    protected static string $resource = LMPNetworkResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
