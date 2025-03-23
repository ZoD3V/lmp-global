<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LMPPolymerResource\Pages;
use App\Filament\Resources\LMPPolymerResource\RelationManagers;
use App\Filament\Resources\LMPPolymerResource\RelationManagers\ImagesRelationManager;
use App\Models\LMPPolymer;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class LMPPolymerResource extends Resource
{
    protected static ?string $model = LMPPolymer::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Manage LMP Content';

    protected static ?string $navigationLabel = 'LMP Polymer';

    protected static ?int $navigationSort = 5;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    Textarea::make('desc')
                        ->label('Description')
                        ->required(),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('desc')->label('Description')->limit(50),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListLMPPolymers::route('/'),
            'create' => Pages\CreateLMPPolymer::route('/create'),
            'edit' => Pages\EditLMPPolymer::route('/{record}/edit'),
        ];
    }
}
