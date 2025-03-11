<?php

namespace App\Filament\Resources\LMPHistoryResource\Pages;

use App\Filament\Resources\LMPHistoryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLMPHistories extends ListRecords
{
    protected static string $resource = LMPHistoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
