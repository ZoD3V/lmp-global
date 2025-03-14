<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'parent_id',
    ];

    protected $casts = [
        'options' => 'array',
    ];

    // Relasi untuk kategori anak (subkategori)
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    // Relasi untuk kategori induk (parent category)
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    // Fungsi untuk mendapatkan kategori paling atas (parent category)
    public static function getParentCategories()
    {
        return self::whereNull('parent_id')->get(); // Mendapatkan kategori tanpa parent_id
    }

    public function service_categories()
    {
        return $this->hasMany(Product::class);
    }
}
