<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LMPHistory extends Model
{
    use HasFactory;
    protected $table = 'lmp_histories';

    protected $fillable = [
        'title',
        'date',
        'description',
    ];
}
