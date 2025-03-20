<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LMPHistoryResource\Pages;
use App\Filament\Resources\LMPHistoryResource\RelationManagers;
use App\Models\LMPHistory;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class LMPHistoryResource extends Resource
{
    protected static ?string $model = LMPHistory::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar';

    protected static ?string $navigationGroup = 'Manage LMP Content';

    protected static ?string $navigationLabel = 'LMP History';

    protected static ?int $navigationSort = 2;

    protected static ?string $slug = 'lmp-histories';

    public static function getGloballySearchableAttributes(): array
    {
        return ['title'];
    }


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    Forms\Components\TextInput::make('title')
                        ->label('Title')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\DatePicker::make('date')
                        ->label('Date')
                        ->required(),

                    // Form input untuk Description
                    Forms\Components\Textarea::make('description')
                        ->label('Description')
                        ->required()
                        ->maxLength(1000),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Title')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('date')
                    ->label('Date')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('description')
                    ->label('Description')
                    ->limit(50),
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
            'index' => Pages\ListLMPHistories::route('/'),
            'create' => Pages\CreateLMPHistory::route('/create'),
            'edit' => Pages\EditLMPHistory::route('/{record}/edit'),
        ];
    }
}
