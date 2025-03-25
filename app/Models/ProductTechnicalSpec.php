<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductTechnicalSpec extends Model
{
    protected $fillable = ['product_id', 'spec_name', 'spec_value', 'category'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
