<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LMPVolt extends Model
{
    use HasFactory;
    protected $table = 'lmp_volts';

    protected $fillable = [
        'desc',
    ];
}
