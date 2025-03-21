<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NextT extends Model
{
    use HasFactory;

    protected $table = 'next_t';

    protected $fillable = [
        'title',
        'sub_title',
        'image',
        'content',
    ];
}
