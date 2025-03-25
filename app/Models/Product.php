<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'desc',
        'image',
        'brochure',
        'category_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function keyCharacters()
    {
        return $this->belongsToMany(KeyCharacter::class,'product_key_character');
    }


}
