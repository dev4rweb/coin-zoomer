<?php

namespace Database\Factories;

use App\Models\Coin;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class VoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'coin_id' => Coin::all()->random()->id,
            'user_id' => User::all()->random()->id,
//            'created_at' => $this->faker->dateTimeBetween('-5 days', now())
        ];
    }
}
