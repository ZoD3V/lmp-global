<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TestimonialCategoryResource\Pages;
use App\Filament\Resources\TestimonialCategoryResource\RelationManagers;
use App\Filament\Resources\TestimonialCategoryResource\RelationManagers\TestimonialRelationManager;
use App\Filament\Resources\TestimonialCategoryResource\RelationManagers\UseCasesRelationManager;
use App\Models\TestimonialCategory;
use Filament\Forms;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\SubNavigationPosition;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TestimonialCategoryResource extends Resource
{
    protected static ?string $model = TestimonialCategory::class;
    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static ?string $cluster = \App\Filament\Clusters\Testimonials::class;

    protected static SubNavigationPosition $subNavigationPosition = SubNavigationPosition::Top;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title'),
                TextColumn::make('description'),
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
            UseCasesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTestimonialCategories::route('/'),
            'create' => Pages\CreateTestimonialCategory::route('/create'),
            'edit' => Pages\EditTestimonialCategory::route('/{record}/edit'),
        ];
    }
}
