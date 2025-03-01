<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    protected $casts = [
        'options' => 'array',
    ];

    public function service_categories()
    {
        return $this->hasMany(Product::class);
    }
}
