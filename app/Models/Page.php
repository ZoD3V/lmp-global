<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'name',
    ];
    public function banners()
    {
        return $this->hasMany(Banner::class);
    }
}
