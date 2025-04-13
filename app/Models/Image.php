<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'lmp_network_id',
        'lmp_polymer_id',
        'image_path',
        'caption',
    ];

    public function lmpNetwork(): BelongsTo
    {
        return $this->belongsTo(LMPNetwork::class, 'lmp_network_id');
    }

    public function lmpPolymer(): BelongsTo
    {
        return $this->belongsTo(LMPPolymer::class, 'lmp_polymer_id');
    }
}

