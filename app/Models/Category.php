<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'desc',
        'link',
        'parent_id',
        'order',
    ];

    protected $casts = [
        'options' => 'array',
    ];

    protected static function booted()
    {
        static::addGlobalScope('ordered', function (Builder $builder) {
            $builder->orderBy('order')->orderBy('name');
        });
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public static function getParentCategories()
    {
        return self::whereNull('parent_id')->get();
    }

    public function service_categories()
    {
        return $this->hasMany(Product::class);
    }

    public function products()
{
    return $this->hasMany(Product::class);
}
}
