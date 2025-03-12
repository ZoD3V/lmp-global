<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CsrResource\Pages;
use App\Filament\Resources\CsrResource\RelationManagers;
use App\Models\Csr;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CsrResource extends Resource
{
    protected static ?string $model = Csr::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?int $navigationSort = 5;
    protected static ?string $navigationGroup = 'Manage Content';

    protected static ?string $navigationLabel = 'CSR';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    TextInput::make('headline')
                        ->label('Headline')
                        ->required()
                        ->maxLength(length: 255),
                    TextInput::make('title')
                        ->label('Title')
                        ->required()
                        ->maxLength(255),

                    RichEditor::make('content')
                        ->label('Content')
                        ->required(),
                ])->columns(1)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->limit(50),
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
            'index' => Pages\ListCsrs::route('/'),
            'create' => Pages\CreateCsr::route('/create'),
            'edit' => Pages\EditCsr::route('/{record}/edit'),
        ];
    }
}
