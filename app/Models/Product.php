<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'desc',
        'key_char',
        'image',
        'brochure',
        'category_id',
    ];

    public function service_products()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id', 'name');
    }

}
