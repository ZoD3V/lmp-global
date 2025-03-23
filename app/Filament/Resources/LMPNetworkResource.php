<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LMPNetworkResource\Pages;
use App\Filament\Resources\LMPNetworkResource\RelationManagers;
use App\Filament\Resources\LMPNetworkResource\RelationManagers\ImagesRelationManager;
use App\Models\LMPNetwork;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class LMPNetworkResource extends Resource
{
    protected static ?string $model = LMPNetwork::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-bar-square';

    protected static ?string $navigationGroup = 'Manage LMP Content';

    protected static ?string $navigationLabel = 'LMP Network';

    protected static ?int $navigationSort = 3;

    protected static ?string $slug = 'lmp-networks';

    public static function getGloballySearchableAttributes(): array
    {
        return ['title', 'desc', 'module_info'];
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    Forms\Components\TextInput::make('title')
                        ->required()
                        ->maxLength(255),
                    Forms\Components\Textarea::make('desc')
                        ->label('Description')
                        ->required(),
                    Forms\Components\TextInput::make('module_info')
                        ->label('Module Info')
                        ->required()
                        ->maxLength(255),
                    Forms\Components\Textarea::make('patch_cord_info')
                        ->label('Patch Cord Info')
                        ->required(),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->searchable()->sortable(),
                TextColumn::make('module_info')->label('Module Info')
                    ->limit(50),
                TextColumn::make('patch_cord_info')->label('Patch Cord Info')
                    ->limit(50),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            ImagesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLMPNetworks::route('/'),
            'create' => Pages\CreateLMPNetwork::route('/create'),
            'edit' => Pages\EditLMPNetwork::route('/{record}/edit'),
        ];
    }
}
