<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BannerResource\Pages;
use App\Models\Banner;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class BannerResource extends Resource
{
    protected static ?string $model = Banner::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    protected static ?string $navigationGroup = 'Manage Content';

    protected static ?int $navigationSort = 1;

    protected static ?string $navigationLabel = 'Banner';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Card::make()->schema([
                    TextInput::make('name')
                        ->label('Banner Name')
                        ->required()
                        ->maxLength(255),
                    Textarea::make('description')
                        ->label('Description')
                        ->required()
                        ->maxLength(1000)
                        ->rows(4),
                    FileUpload::make('image')
                        ->image()
                        ->required()
                        ->disk('public')
                        ->directory('banners')
                        ->maxSize(4096),
                ])->columns(1)
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable()
                ->limit(50),
                TextColumn::make('description')->sortable()->searchable()
                ->limit(50),
                ImageColumn::make('image')
                    ->disk('public')
                    ->extraAttributes(['class' => 'custom-image-spacing'])
                ,

            ])
            ->filters([
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBanners::route('/'),
            'create' => Pages\CreateBanner::route('/create'),
            'edit' => Pages\EditBanner::route('/{record}/edit'),
        ];
    }
}
