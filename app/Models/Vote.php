<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', 'coin_id', 'is_airdrop'
    ];

    protected $casts = [
      'user_id' => 'integer',
      'coin_id' => 'integer',
      'is_airdrop' => 'boolean',
    ];
}
