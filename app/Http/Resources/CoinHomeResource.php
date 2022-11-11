<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CoinHomeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'logotype' => $this->logotype,
            'name' => $this->name,
            'symbol' => $this->symbol,
            'one_hour' => $this->one_hour,
            'one_hour_formatted' => $this->one_hour_formatted,
            'is_kyc' => $this->is_kyc,
            'is_presale' => $this->is_presale,
            'coin_chains' => $this->coinChains,
            'price_formatted' => $this->price_formatted,
            'market_cap' => $this->market_cap,
            'launch_date' => $this->launch_date,
            'votes' => count($this->votes),
            /*'hour_votes' => $this->hour_votes,
            'today_votes' => $this->today_votes,
            'week_votes' => $this->week_votes,*/
        ];
    }
}
