<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TopCoinResource extends JsonResource
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
            'one_hour' => $this->one_hour,
            'one_hour_formatted' => $this->one_hour_formatted,
            'price_formatted' => $this->price_formatted,
            'is_promoted' => $this->is_promoted,
            'hour_votes' => $this->hour_votes,
            'today_votes' => $this->today_votes,
            'week_votes' => $this->week_votes,
        ];
    }
}
