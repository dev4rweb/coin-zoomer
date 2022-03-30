<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BannerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word,
            'img_path' => $this->faker->imageUrl,
            'link' => $this->faker->url,
            'is_show' => $this->faker->boolean
        ];
    }
}
