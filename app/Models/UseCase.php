<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UseCase extends Model
{
    protected $fillable = ['company_name', 'logo', 'testimonial_category_id'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(TestimonialCategory::class, 'testimonial_category_id');
    }

    public function testimonials(): HasMany
    {
        return $this->hasMany(Testimonial::class);
    }
}
