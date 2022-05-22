<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotNotification extends Model
{
    use HasFactory;
    protected $fillable = [
        'is_show',
        'which_page',
        'title',
        'label',
        'text',
    ];

    protected $casts = [
      'is_show' => 'boolean',
      'which_page' => 'integer'
    ];
}
