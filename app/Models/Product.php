<?php

namespace App\Models;

use App\Models\Feature;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'desc',
        'image',
        'brochure',
        'category_id',
        'product_overview',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function keyCharacters()
    {
        return $this->belongsToMany(KeyCharacter::class,'product_key_character');
    }

    public function features()
    {
        return $this->belongsToMany(Feature::class, 'product_feature');
    }

    public function technicalSpecs()
    {
        return $this->hasMany(ProductTechnicalSpec::class);
    }

}
