<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TestimonialCategory extends Model
{
    protected $table = 'testimonials_categories';

    protected $fillable = ['title', 'description'];

    public function useCases()
    {
        return $this->hasMany(UseCase::class);
    }
}
