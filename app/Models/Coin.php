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
        'is_fake',
        'is_kyc',
        'name',
        'description',
        'price',
        'one_hour',
        'coin_gecko_link',
        'symbol',
        'circulating_supply',
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

    protected $appends = [
        'full_name'
    ];

    /**
     * Получить полное имя пользователя.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        return  $this->market_cap_big ? (int) $this->market_cap_big : $this->market_cap;
    }

    /*public function getMarketCapBigAttribute()
    {
        if ($this->market_cap_big !== null) {
            return (int) $this->market_cap_big;
        } else {
            return $this->market_cap;
        }
        return (int) $this->market_cap_big || $this->market_cap;
    }*/

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
