<?php

namespace App\Models;

use App\Filters\QueryFilter;
use Illuminate\Database\Eloquent\Builder;
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
