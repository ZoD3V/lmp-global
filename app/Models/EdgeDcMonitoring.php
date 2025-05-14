<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EdgeDcMonitoring extends Model
{
    use HasFactory;

    protected $table = 'edge_dc_monitoring';

    protected $fillable = [
        'title',
        'image',
        'description',
        'order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
