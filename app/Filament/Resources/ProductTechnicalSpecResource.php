<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductTechnicalSpecResource\Pages;
use App\Filament\Resources\ProductTechnicalSpecResource\RelationManagers;
use App\Models\Product;
use App\Models\ProductTechnicalSpec;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductTechnicalSpecResource extends Resource
{
    protected static ?string $model = ProductTechnicalSpec::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make([
                    Select::make('product_id')
                        ->label('Product')
                        ->options(Product::all()->pluck('name', 'id'))
                        ->required(),
                    Select::make('category')
                        ->label('Category')
                        ->options([
                            'Physical Specifications' => 'Physical Specifications',
                            'Capacity' => 'Capacity'
                        ])
                        ->required()
                        ->preload()
                        ->placeholder('Select a category'),
                    TextInput::make('spec_name')->required(),
                    Textarea::make('spec_value')->required(),
                ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('product.name')->label('Product'),
                TextColumn::make('spec_name')->sortable()->searchable(),
                TextColumn::make('spec_value')->limit(50),
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
            'index' => Pages\ListProductTechnicalSpecs::route('/'),
            'create' => Pages\CreateProductTechnicalSpec::route('/create'),
            'edit' => Pages\EditProductTechnicalSpec::route('/{record}/edit'),
        ];
    }
}
