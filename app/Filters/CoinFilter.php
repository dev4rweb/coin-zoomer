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
        if ($isExpensive) {
            return $this->builder->orderBy('market_cap', 'desc');
        }
    }

    public function byPrice($isExpensive = 1)
    {

    }

    public function search_name($search = '')
    {
        return $this->builder->where('name', 'LIKE', '%' . $search . '%');
    }
}
