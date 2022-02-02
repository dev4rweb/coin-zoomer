<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoinChain extends Model
{
    use HasFactory;
    protected $fillable = [
        'coin_id',
        'chain',
        'contract_address'
    ];
}
