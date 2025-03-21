<?php

namespace App\Filament\Resources\NextTResource\Pages;

use App\Filament\Resources\NextTResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListNextTS extends ListRecords
{
    protected static string $resource = NextTResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
