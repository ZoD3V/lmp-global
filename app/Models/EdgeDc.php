<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EdgeDc extends Model
{
    use HasFactory;
    protected $table = 'edge_dc';

    protected $fillable = [
        'title',
        'desc',
        'image',
    ];

    protected $casts = [
        'desc' => 'string',
        'image' => 'string',
    ];
}
