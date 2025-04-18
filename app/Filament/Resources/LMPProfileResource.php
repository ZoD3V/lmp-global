<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LMPProfileResource\Pages;
use App\Filament\Resources\LMPProfileResource\RelationManagers;
use App\Models\LMPProfile;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
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

class LMPProfileResource extends Resource
{
    protected static ?string $model = LMPProfile::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-circle';

    protected static ?string $navigationLabel = 'LMP Profile';

    protected static ?int $navigationSort = 1;

    protected static ?string $slug = 'lmp-profiles';

    protected static ?string $cluster = \App\Filament\Clusters\LMP::class;

    protected static SubNavigationPosition $subNavigationPosition = SubNavigationPosition::Top;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()->schema([

                    TextInput::make('name')
                        ->label('Name')
                        ->required()
                        ->maxLength(255),

                    Textarea::make('description')
                        ->label('Description')
                        ->required()
                        ->maxLength(1000)
                        ->rows(4),

                    FileUpload::make('image')
                        ->label('Image')
                        ->image()
                        ->required()
                        ->maxSize(1024)
                        ->directory('lmp_profiles')
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                ImageColumn::make('image')->sortable()->searchable(),
                TextColumn::make('description')->sortable()->searchable(),
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
            'index' => Pages\ListLMPProfiles::route('/'),
            'create' => Pages\CreateLMPProfile::route('/create'),
            'edit' => Pages\EditLMPProfile::route('/{record}/edit'),
        ];
    }
}
