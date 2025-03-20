<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EdgeDcResource\Pages;
use App\Filament\Resources\EdgeDcResource\RelationManagers;
use App\Models\EdgeDc;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class EdgeDcResource extends Resource
{
    protected static ?string $model = EdgeDc::class;

    protected static ?string $navigationIcon = 'heroicon-o-server';

    protected static ?int $navigationSort = 7;
    protected static ?string $navigationGroup = 'Manage Content';

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    TextInput::make('title')
                        ->required()
                        ->maxLength(255),
                    Textarea::make('desc')
                        ->label('Description')
                        ->nullable(),
                    FileUpload::make('image')
                        ->label('Image')
                        ->directory('edge-dc-images')
                        ->image()
                        ->maxSize(2048)
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->sortable()->searchable(),
                TextColumn::make('desc')->limit(50),
                ImageColumn::make('image')
                    ->label('Image')
                    ->width(100)
                    ->height(100),
                TextColumn::make('created_at')->dateTime()->sortable(),
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
            'index' => Pages\ListEdgeDcs::route('/'),
            'create' => Pages\CreateEdgeDc::route('/create'),
            'edit' => Pages\EditEdgeDc::route('/{record}/edit'),
        ];
    }
}
