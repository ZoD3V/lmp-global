<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LmpNetwork extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'desc', 'module_info', 'patch_cord_info', 'title_image'];

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
