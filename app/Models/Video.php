<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'youtube_code',
        'description',
    ];

    public function images()
    {
        return $this->hasMany(VideoImage::class)->orderBy('order');
    }
}
