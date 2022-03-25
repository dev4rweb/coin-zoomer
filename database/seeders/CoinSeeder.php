<?php

namespace Database\Seeders;

use App\Models\Coin;
use App\Models\CoinChain;
use Illuminate\Database\Seeder;

class CoinSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $coins = json_decode(file_get_contents(public_path('images/coins.json'), true));
        foreach ($coins as $coin) {
            $coinGecko = Coin::factory()->create([
                'is_coin_gecko' => false,
                'is_fake' => false,
                'name' => $coin->name,
                'description' => $coin->description->en,
                'price' => $coin->market_data->current_price->usd,
                'one_hour' => $coin->market_data->price_change_percentage_1h_in_currency->usd,
                'symbol' => $coin->symbol,
                'market_cap' => $coin->market_data->market_cap->usd,
                'logotype' => $coin->image->thumb,
            ]);
            CoinChain::create([
                'coin_id' => $coinGecko->id,
                'chain' => 'eth',
                'contract_address' => $coin->contract_address
            ]);
        }
    }
}
