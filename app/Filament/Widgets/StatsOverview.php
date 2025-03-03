<?php

namespace App\Filament\Widgets;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Users', User::query()->count())
            ->description('All users available in database')
            ->descriptionIcon('heroicon-m-arrow-trending-up')
            ->chart([7, 2, 10, 3, 15, 4, 17])
            ->color('success'),
            Stat::make('Products', Product::query()->count())
                ->description('All product available in database')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
                Stat::make('Products Categories', Category::query()->count())
                ->description('All product categories available')
                ->descriptionIcon('heroicon-m-arrow-trending-up'),
        ];
    }
}
