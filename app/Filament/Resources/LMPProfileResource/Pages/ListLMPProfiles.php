<?php

namespace App\Filament\Resources\LMPProfileResource\Pages;

use App\Filament\Resources\LMPProfileResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLMPProfiles extends ListRecords
{
    protected static string $resource = LMPProfileResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
