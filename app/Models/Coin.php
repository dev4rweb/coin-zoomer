<?php

namespace App\Models;

use App\Filters\QueryFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coin extends Model
{
    use HasFactory;

    protected $fillable = [
        'is_approved',
        'is_promoted',
        'is_coin_gecko',
        'is_presale',
        'name',
        'description',
        'price',
        'coin_gecko_link',
        'symbol',
        'market_cap',
        'launch_date',
        'contractTelegram',
        'contractTwitter',
        'contractReddit',
        'contractWeb',
        'contractDiscord',
        'logotype',
        'contractAdditional',
        'email',
        'telegram',
    ];

    public function coinChains()
    {
        return $this->hasMany(CoinChain::class);
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }

    public function scopeFilter(Builder $builder, QueryFilter $filter)
    {
        return $filter->apply($builder);
    }

}
