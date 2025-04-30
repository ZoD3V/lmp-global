<?php

namespace App\Filament\Resources\LMPNetworkResource\RelationManagers;

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

class ImagesRelationManager extends RelationManager
{
    protected static string $relationship = 'images';

    protected static ?string $recordTitleAttribute = 'image_path';


    public function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('image_path')
                    ->label('Image URL or Path')
                    ->disk('public')
                    ->directory('lmp_network_images')
                    ->image()
                    ->required(),

                TextInput::make('caption')
                    ->label('Caption')
                    ->maxLength(255),

                TextInput::make('link_product')
                    ->label('Link Product')
                    ->maxLength(255),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('images')
            ->columns([
                ImageColumn::make('image_path')
                    ->label('Image')
                    ->width(100)
                    ->height(100),

                TextColumn::make('caption')
                    ->label('Caption')
                    ->searchable(),

                TextColumn::make('created_at')
                    ->label('Created At')
                    ->dateTime()
                    ->sortable(),
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
