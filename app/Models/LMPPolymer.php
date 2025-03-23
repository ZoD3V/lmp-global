<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LMPPolymer extends Model
{
    use HasFactory;

    protected $fillable = ['desc'];

    protected $table = 'lmp_polymers';


    public function images(): HasMany
    {
        return $this->hasMany(Image::class, 'lmp_polymer_id');
    }
}
