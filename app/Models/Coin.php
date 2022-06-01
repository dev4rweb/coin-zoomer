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

    protected $casts = [
        'is_approved' => 'boolean',
        'is_promoted' => 'boolean',
        'is_coin_gecko' => 'boolean',
        'is_presale' => 'boolean',
        'is_fake' => 'boolean',
        'is_kyc' => 'boolean',
        'price' => 'float'
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

    public function getPriceAttribute($value)
    {
        $decimals = 2;
        if (abs($value) >= 1 && abs($value) < 2) $decimals = 3;
        if (abs($value) >= 0.1 && abs($value) < 1) $decimals = 4;
        if (abs($value) >= 0.01 && abs($value) < 0.1) $decimals = 5;
        if (abs($value) >= 0.001 && abs($value) < 0.01) $decimals = 6;
        if (abs($value) >= 0.0001 && abs($value) < 0.001) $decimals = 7;
        if (abs($value) >= 0.00001 && abs($value) < 0.0001) $decimals = 8;
        if (abs($value) >= 0.000001 && abs($value) < 0.00001) $decimals = 9;
        if (abs($value) >= 0.0000001 && abs($value) < 0.000001) $decimals = 10;
        if (abs($value) >= 0.00000001 && abs($value) < 0.0000001) $decimals = 11;
        if (abs($value) >= 0.000000001 && abs($value) < 0.00000001) $decimals = 12;
        if (abs($value) >= 0.0000000001 && abs($value) < 0.000000001) $decimals = 13;
        if (abs($value) >= 0.00000000001 && abs($value) < 0.0000000001) $decimals = 14;
        if (abs($value) >= 0.000000000001 && abs($value) < 0.00000000001) $decimals = 15;
        if (abs($value) >= 0.0000000000001 && abs($value) < 0.000000000001) $decimals = 16;
        if (abs($value) >= 0.00000000000001 && abs($value) < 0.0000000000001) $decimals = 17;
        if (abs($value) >= 0.000000000000001 && abs($value) < 0.00000000000001) $decimals = 18;
        if (abs($value) >= 0.0000000000000001 && abs($value) < 0.000000000000001) $decimals = 19;
        if (abs($value) >= 0.00000000000000001 && abs($value) < 0.0000000000000001) $decimals = 20;
        return number_format((float) $value, $decimals, '.', ' ');
    }

    public function getOneHourAttribute($value)
    {
        $decimals = 2;
        if (abs($value) >= 1 && abs($value) < 2) $decimals = 3;
        if (abs($value) >= 0.1 && abs($value) < 1) $decimals = 3;
        if (abs($value) >= 0.01 && abs($value) < 0.1) $decimals = 4;
        if (abs($value) >= 0.001 && abs($value) < 0.01) $decimals = 5;
        if (abs($value) >= 0.0001 && abs($value) < 0.001) $decimals = 6;
        if (abs($value) >= 0.00001 && abs($value) < 0.0001) $decimals = 7;
        if (abs($value) >= 0.000001 && abs($value) < 0.00001) $decimals = 8;
        if (abs($value) >= 0.0000001 && abs($value) < 0.000001) $decimals = 9;
        if (abs($value) >= 0.00000001 && abs($value) < 0.0000001) $decimals = 10;
        if (abs($value) >= 0.000000001 && abs($value) < 0.00000001) $decimals = 11;
        if (abs($value) >= 0.0000000001 && abs($value) < 0.000000001) $decimals = 12;
        if (abs($value) >= 0.00000000001 && abs($value) < 0.0000000001) $decimals = 13;
        if (abs($value) >= 0.000000000001 && abs($value) < 0.00000000001) $decimals = 14;
        if (abs($value) >= 0.0000000000001 && abs($value) < 0.000000000001) $decimals = 15;
        if (abs($value) >= 0.00000000000001 && abs($value) < 0.0000000000001) $decimals = 16;
        if (abs($value) >= 0.000000000000001 && abs($value) < 0.00000000000001) $decimals = 17;
        if (abs($value) >= 0.0000000000000001 && abs($value) < 0.000000000000001) $decimals = 18;
        if (abs($value) >= 0.00000000000000001 && abs($value) < 0.0000000000000001) $decimals = 19;
        return number_format((float) $value, $decimals, '.', ' ');
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
