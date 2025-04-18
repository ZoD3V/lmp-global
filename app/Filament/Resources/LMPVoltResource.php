<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LMPVoltResource\Pages;
use App\Filament\Resources\LMPVoltResource\RelationManagers;
use App\Models\LMPVolt;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Form;
use Filament\Pages\SubNavigationPosition;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class LMPVoltResource extends Resource
{
    protected static ?string $model = LMPVolt::class;

    protected static ?string $navigationIcon = 'heroicon-o-bolt';
    protected static ?string $navigationLabel = 'Lmp Volts';

    protected static ?string $slug = 'lmp-volts';

    protected static ?int $navigationSort = 6;

    protected static ?string $cluster = \App\Filament\Clusters\LMP::class;

    protected static SubNavigationPosition $subNavigationPosition = SubNavigationPosition::Top;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    RichEditor::make('desc')
                        ->required()
                        ->label('Description')
                        ->columnSpan(2),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('desc')
                    ->label('Description')
                    ->limit(50)
                    ->html()
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
            'index' => Pages\ListLMPVolts::route('/'),
            'create' => Pages\CreateLMPVolt::route('/create'),
            'edit' => Pages\EditLMPVolt::route('/{record}/edit'),
        ];
    }
}
