<?php

namespace Database\Seeders;

use App\Models\Coin;
use App\Models\CoinChain;
use Illuminate\Database\Seeder;

class CoinChainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $coins = Coin::all();
        CoinChain::factory()->count(200)->create([
            'coin_id' => $coins->random()->id
        ]);
    }
}
