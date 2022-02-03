<?php

namespace Database\Factories;

use App\Models\Coin;
use Illuminate\Database\Eloquent\Factories\Factory;

class CoinChainFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $chain = ['eth', 'bsc', 'fantom', 'mumbai', 'polygon', 'avalanche', 'meannet'];
        return [
            'coin_id' => Coin::all()->random()->id,
            'chain' => $chain[$this->faker->numberBetween(0, 6)],
            'contract_address' => $this->faker->sha1
        ];
    }
}
