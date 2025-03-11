<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LMPProfile extends Model
{
    protected $table = 'lmp_profiles';

    protected $fillable = [
        'name',
        'image',
        'description',
    ];
}
