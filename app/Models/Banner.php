<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'is_show',
        'link',
        'img_path'
    ];

    protected $casts = [
        'is_show' => 'boolean'
    ];
}
