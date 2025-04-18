<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NextTResource\Pages;
use App\Filament\Resources\NextTResource\RelationManagers;
use App\Models\NextT;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\SubNavigationPosition;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class NextTResource extends Resource
{
    protected static ?string $model = NextT::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?int $navigationSort = 5;

    protected static ?string $navigationLabel = 'Next-T';

    protected static ?string $cluster = \App\Filament\Clusters\LMP::class;

    protected static SubNavigationPosition $subNavigationPosition = SubNavigationPosition::Top;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    TextInput::make('title')
                        ->required()
                        ->maxLength(255),

                    TextInput::make('sub_title')
                        ->maxLength(255)
                        ->nullable(),

                    FileUpload::make('image')
                        ->disk('public')
                        ->directory('next-t-images')
                        ->image()
                        ->nullable()
                        ->columnSpan(2),

                    RichEditor::make('content')
                        ->required()
                        ->columnSpan(2),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->sortable()->searchable(),
                TextColumn::make('sub_title')->sortable()->searchable(),
                ImageColumn::make('image')->disk('public'),
                TextColumn::make('created_at')->dateTime(),
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
            'index' => Pages\ListNextTS::route('/'),
            'create' => Pages\CreateNextT::route('/create'),
            'edit' => Pages\EditNextT::route('/{record}/edit'),
        ];
    }
}
