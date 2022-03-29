<?php


namespace App\Filters;


use App\Models\Vote;
use Carbon\Carbon;

class CoinFilter extends QueryFilter
{

    public function all_time_best($isDesk = 1)
    {
        if ($isDesk) {
            return $this->builder->withCount('votes')
                ->orderBy('votes_count', 'desc');
        }
    }

    public function today_hot($isDesk = 1)
    {

        if ($isDesk) {
            return $this->builder->withCount('votes')
                ->whereHas('votes', function ($q) {
                    $today = Carbon::createFromTimestamp(Carbon::now()->getTimestamp() - 60 * 60 * 24);
                    $q->where('created_at', '>', $today);
                })
                ->orderBy('votes_count', 'desc');
        }
    }

    public function week_hot($isDesk = 1)
    {
        if ($isDesk) {
            return $this->builder->withCount('votes')
                ->whereHas('votes', function ($q) {
                    $week = Carbon::createFromTimestamp(Carbon::now()->getTimestamp() - 60 * 60 * 24 *7);
                    $q->where('created_at', '>', $week);
                });
        }
    }

    public function hour_hot($isDesk = 1)
    {
        if ($isDesk) {
            return $this->builder->withCount('votes')
                ->whereHas('votes', function ($q) {
                    $hour = Carbon::createFromTimestamp(Carbon::now()->getTimestamp() - 60 * 60);
                    $q->where('created_at', '>', $hour);
                });
        }
    }

    public function is_presale($isPresale = 1)
    {
        return $this->builder->where('is_presale', $isPresale);
    }

    public function new_coin($isNew = 1)
    {
        if ($isNew == 1) {
            return $this->builder->orderBy('id', 'desc');
        } else {
            return $this->builder->orderBy('id');
        }
    }

    public function byHour($desc = 1)
    {
        if ($desc == 1) {
            return $this->builder->orderBy('one_hour');
        } else {
            return $this->builder->orderBy('one_hour', 'desc');
        }
    }

    public function byMarketCap($isExpensive = 1)
    {
        if ($isExpensive  == 1) {
            return $this->builder->orderBy('market_cap');
        } else {
            return $this->builder->orderBy('market_cap', 'desc');
        }
    }

    public function byPrice($isExpensive = 1)
    {
        if ($isExpensive == 1){
            return $this->builder->orderBy('price');
        } else {
            return $this->builder->orderBy('price', 'desc');
        }
    }

    public function byName($isDesc = 1)
    {
        if ($isDesc == 1){
            return $this->builder->orderBy('name');
        } else {
            return $this->builder->orderBy('name', 'desc');
        }
    }
    public function bySymbol($isDesc = 1)
    {
        if ($isDesc == 1){
            return $this->builder->orderBy('symbol');
        } else {
            return $this->builder->orderBy('symbol', 'desc');
        }
    }

    public function byLaunchDate($isDesc = 1)
    {
        if ($isDesc == 1){
            return $this->builder->orderBy('launch_date');
        } else {
            return $this->builder->orderBy('launch_date', 'desc');
        }
    }

    public function search_name($search = '')
    {
        return $this->builder->where('name', 'LIKE', '%' . $search . '%');
    }
}
