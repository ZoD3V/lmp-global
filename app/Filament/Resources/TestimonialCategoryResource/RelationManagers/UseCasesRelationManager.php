<?php

namespace App\Filament\Resources\TestimonialCategoryResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UseCasesRelationManager extends RelationManager
{
    protected static string $relationship = 'useCases';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('company_name')->required(),
                FileUpload::make('logo')
                    ->disk('public')
                    ->required()
                    ->maxSize(1024)
                    ->directory('use-cases'),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('company_name')
            ->columns([
                ImageColumn::make('logo')
                    ->disk('public')
                ,
                TextColumn::make('company_name'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
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
}
