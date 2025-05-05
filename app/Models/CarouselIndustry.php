<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarouselIndustry extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'order',
        'is_active'
    ];
}
