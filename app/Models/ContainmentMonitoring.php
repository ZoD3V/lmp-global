<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContainmentMonitoring extends Model
{
    use HasFactory;

    protected $table = 'containment_monitoring';

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
