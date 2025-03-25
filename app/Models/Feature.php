<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $fillable = [
        'name',
        'category'
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_feature');
    }
}

