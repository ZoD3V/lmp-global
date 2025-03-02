<?php

namespace App\Filament\Resources\KeyCharacterResource\Pages;

use App\Filament\Resources\KeyCharacterResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListKeyCharacters extends ListRecords
{
    protected static string $resource = KeyCharacterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
