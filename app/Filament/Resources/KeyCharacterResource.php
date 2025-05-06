<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KeyCharacterResource\Pages;
use App\Filament\Resources\KeyCharacterResource\RelationManagers;
use App\Models\KeyCharacter;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\SubNavigationPosition;
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

    protected static ?int $navigationSort = 2;

    protected static ?string $navigationLabel = 'Product Key Character';

    protected static ?string $cluster = \App\Filament\Clusters\Product::class;

    protected static SubNavigationPosition $subNavigationPosition = SubNavigationPosition::Top;


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    TextInput::make('name')
                        ->minLength(2)
                        ->maxLength(255)
                        ->unique(table: 'key_characters', column: 'name', ignoreRecord: true)
                        ->validationMessages([
                            'unique' => 'This Key Character name is already in use, please choose another name',
                            'min' => 'Minimum name 2 characters',
                            'max' => 'Maximum name 255 characters',
                        ])
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable(),

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

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }
}
