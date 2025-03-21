<?php

namespace App\Filament\Resources\NextTResource\Pages;

use App\Filament\Resources\NextTResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditNextT extends EditRecord
{
    protected static string $resource = NextTResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
