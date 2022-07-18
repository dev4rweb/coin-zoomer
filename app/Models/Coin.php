<?php

namespace App\Models;

use App\Filters\QueryFilter;
use Carbon\Carbon;
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
        'is_market_cap_gecko',
        'is_own_logo',
    ];

    protected $appends = [
        'full_name',
        'price_formatted',
        'one_hour_formatted',
        'hour_votes',
        'today_votes',
        'week_votes',
    ];

    protected $casts = [
        'is_approved' => 'boolean',
        'is_promoted' => 'boolean',
        'is_coin_gecko' => 'boolean',
        'is_presale' => 'boolean',
        'is_fake' => 'boolean',
        'is_kyc' => 'boolean',
        'is_market_cap_gecko' => 'boolean',
        'is_own_logo' => 'boolean',
        'price' => 'float',
        'hour_votes' => 'integer',
        'today_votes' => 'integer',
        'week_votes' => 'integer',
    ];

    public function getSymbolAttribute($value)
    {
        return strtoupper($value);
    }

    /**
     * Получить полное имя пользователя.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        return  $this->market_cap_big ? (int) $this->market_cap_big : $this->market_cap;
    }

    public function getHourVotesAttribute()
    {
        $hour = Carbon::createFromTimestamp(Carbon::now()->getTimestamp() - 60 * 60);
        $votes = Vote::where('coin_id', $this->id)
            ->where('created_at', '>', $hour)
            ->get();
        return count($votes);
    }

    public function getTodayVotesAttribute()
    {
        $today = Carbon::createFromTimestamp(Carbon::now()->getTimestamp() - 60 * 60 * 24);
        $votes = Vote::where('coin_id', $this->id)
            ->where('created_at', '>', $today)
            ->get();
        return count($votes);
    }

    public function getWeekVotesAttribute()
    {
        $week = Carbon::createFromTimestamp(Carbon::now()->getTimestamp() - 60 * 60 * 24 *7);
        $votes = Vote::where('coin_id', $this->id)
            ->where('created_at', '>', $week)
            ->get();
        return count($votes);
    }

    public function getPriceFormattedAttribute()
    {
        $decimals = 2;
        if (abs($this->price) >= 1 && abs($this->price) < 2) $decimals = 3;
        if (abs($this->price) >= 0.1 && abs($this->price) < 1) $decimals = 4;
        if (abs($this->price) >= 0.01 && abs($this->price) < 0.1) $decimals = 5;
        if (abs($this->price) >= 0.001 && abs($this->price) < 0.01) $decimals = 6;
        if (abs($this->price) >= 0.0001 && abs($this->price) < 0.001) $decimals = 7;
        if (abs($this->price) >= 0.00001 && abs($this->price) < 0.0001) $decimals = 8;
        if (abs($this->price) >= 0.000001 && abs($this->price) < 0.00001) $decimals = 9;
        if (abs($this->price) >= 0.0000001 && abs($this->price) < 0.000001) $decimals = 10;
        if (abs($this->price) >= 0.00000001 && abs($this->price) < 0.0000001) $decimals = 11;
        if (abs($this->price) >= 0.000000001 && abs($this->price) < 0.00000001) $decimals = 12;
        if (abs($this->price) >= 0.0000000001 && abs($this->price) < 0.000000001) $decimals = 13;
        if (abs($this->price) >= 0.00000000001 && abs($this->price) < 0.0000000001) $decimals = 14;
        if (abs($this->price) >= 0.000000000001 && abs($this->price) < 0.00000000001) $decimals = 15;
        if (abs($this->price) >= 0.0000000000001 && abs($this->price) < 0.000000000001) $decimals = 16;
        if (abs($this->price) >= 0.00000000000001 && abs($this->price) < 0.0000000000001) $decimals = 17;
        if (abs($this->price) >= 0.000000000000001 && abs($this->price) < 0.00000000000001) $decimals = 18;
        if (abs($this->price) >= 0.0000000000000001 && abs($this->price) < 0.000000000000001) $decimals = 19;
        if (abs($this->price) >= 0.00000000000000001 && abs($this->price) < 0.0000000000000001) $decimals = 20;
        return number_format((float) $this->price, $decimals, '.', ' ');
    }

    public function getOneHourFormattedAttribute()
    {
        $decimals = 2;
        if (abs($this->one_hour) >= 1 && abs($this->one_hour) < 2) $decimals = 3;
        if (abs($this->one_hour) >= 0.1 && abs($this->one_hour) < 1) $decimals = 3;
        if (abs($this->one_hour) >= 0.01 && abs($this->one_hour) < 0.1) $decimals = 4;
        if (abs($this->one_hour) >= 0.001 && abs($this->one_hour) < 0.01) $decimals = 5;
        if (abs($this->one_hour) >= 0.0001 && abs($this->one_hour) < 0.001) $decimals = 6;
        if (abs($this->one_hour) >= 0.00001 && abs($this->one_hour) < 0.0001) $decimals = 7;
        if (abs($this->one_hour) >= 0.000001 && abs($this->one_hour) < 0.00001) $decimals = 8;
        if (abs($this->one_hour) >= 0.0000001 && abs($this->one_hour) < 0.000001) $decimals = 9;
        if (abs($this->one_hour) >= 0.00000001 && abs($this->one_hour) < 0.0000001) $decimals = 10;
        if (abs($this->one_hour) >= 0.000000001 && abs($this->one_hour) < 0.00000001) $decimals = 11;
        if (abs($this->one_hour) >= 0.0000000001 && abs($this->one_hour) < 0.000000001) $decimals = 12;
        if (abs($this->one_hour) >= 0.00000000001 && abs($this->one_hour) < 0.0000000001) $decimals = 13;
        if (abs($this->one_hour) >= 0.000000000001 && abs($this->one_hour) < 0.00000000001) $decimals = 14;
        if (abs($this->one_hour) >= 0.0000000000001 && abs($this->one_hour) < 0.000000000001) $decimals = 15;
        if (abs($this->one_hour) >= 0.00000000000001 && abs($this->one_hour) < 0.0000000000001) $decimals = 16;
        if (abs($this->one_hour) >= 0.000000000000001 && abs($this->one_hour) < 0.00000000000001) $decimals = 17;
        if (abs($this->one_hour) >= 0.0000000000000001 && abs($this->one_hour) < 0.000000000000001) $decimals = 18;
        if (abs($this->one_hour) >= 0.00000000000000001 && abs($this->one_hour) < 0.0000000000000001) $decimals = 19;
        return number_format((float) $this->one_hour, $decimals, '.', ' ');
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
