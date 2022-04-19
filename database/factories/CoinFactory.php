<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CoinFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'is_approved' => $this->faker->boolean,
            'is_promoted' => $this->faker->boolean,
            'is_coin_gecko' => true,
//            'is_coin_gecko' => $this->faker->boolean(80),
//            'is_coin_gecko' => true,
            'is_kyc' => $this->faker->boolean,
            'is_presale' => $this->faker->boolean,
            'name' => $this->faker->word,
            'description' => $this->faker->text(200),
            'price' => $this->faker->numberBetween(100, 10000),
            'symbol' => $this->faker->countryCode,
            'market_cap' => $this->faker->numberBetween(10000, 1000000000),
            'circulating_supply' => $this->faker->numberBetween(1000000, 1000000000),
            'launch_date' => $this->faker->dateTimeBetween('-2years', '2years'),
            'coin_gecko_link' => $this->faker->url,
            'contractTelegram' => $this->faker->streetName,
            'contractTwitter' => $this->faker->streetName,
            'contractReddit' => $this->faker->streetName,
            'contractWeb' => $this->faker->url,
            'contractDiscord' => $this->faker->streetName,
            'logotype' => $this->faker->imageUrl,
            'contractAdditional' => $this->faker->text(500),
            'email' => $this->faker->email,
            'telegram' => $this->faker->lastName,
        ];
    }
}
