<?php

namespace Database\Factories;

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
            'chain' => $chain[$this->faker->numberBetween(0, 6)],
            'contract_address' => $this->faker->sha1
        ];
    }
}
