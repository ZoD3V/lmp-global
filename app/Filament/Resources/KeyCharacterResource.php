<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KeyCharacterResource\Pages;
use App\Filament\Resources\KeyCharacterResource\RelationManagers;
use App\Models\KeyCharacter;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class KeyCharacterResource extends Resource
{
    protected static ?string $model = KeyCharacter::class;

    protected static ?string $navigationIcon = 'heroicon-o-key';

    protected static ?string $navigationGroup = 'Manage Content';

    protected static ?int $navigationSort = 2;

    protected static ?string $navigationLabel = 'Product Key Character';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    TextInput::make('name')
                        ->minLength(2)
                        ->maxLength(255)
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),

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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListKeyCharacters::route('/'),
            'create' => Pages\CreateKeyCharacter::route('/create'),
            'edit' => Pages\EditKeyCharacter::route('/{record}/edit'),
        ];
    }
}
