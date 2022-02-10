<?php


namespace App\Filters;


class CoinFilter extends QueryFilter
{
    public function is_presale($isPresale = 1)
    {
        return $this->builder->where('is_presale', $isPresale);
    }

    public function new_coin($isNew = 1)
    {
        if ($isNew) {
            return $this->builder->orderBy('id', 'desc');
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
