<?php

namespace App\Filament\Resources\LMPPartnerResource\Pages;

use App\Filament\Resources\LMPPartnerResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLMPPartners extends ListRecords
{
    protected static string $resource = LMPPartnerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
