<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'desc',
        'parent_id',
    ];

    protected $casts = [
        'options' => 'array',
    ];

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
}
