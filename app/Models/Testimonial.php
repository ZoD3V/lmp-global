<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Testimonial extends Model
{
    protected $fillable = ['image', 'use_case_id'];

    public function useCase(): BelongsTo
    {
        return $this->belongsTo(UseCase::class);
    }
}
