<?php

namespace App\Console;

use App\Models\Coin;
use App\Models\User;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Http;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();
//        $schedule->call(function () {
//            $user = User::where('id', '>', 5)->first();
//            $user->delete();
//        })->everyMinute();
        // public_html/lsapp/artisan schedule:run

        $schedule->call(function () {
            $coinsGecko = $coins = Coin::where('is_coin_gecko', 1)
                ->orderBy('updated_at')
                ->with('coinChains')
                ->take(30)
                ->get();
            foreach ($coinsGecko as $coin) {
                $parts_url = explode("/", $coin->coin_gecko_link);
                $url_id = $parts_url[count($parts_url) - 1];
                $base_url = 'https://api.coingecko.com/api/v3';
                $dop_data = 'tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';

                $response = Http::get($base_url . '/coins/' . $url_id . '?' . $dop_data);
                if ($response->ok()) {
                    $coin['logotype'] = $response['image']['large'];
                    $coin['symbol'] = $response['symbol'];
                    $coin['price'] = $response['market_data']['current_price']['usd'];
                    $coin['market_cap'] = $response['market_data']['market_cap']['usd'];
                    if ($response['genesis_date']) {
                        $coin['launch_date'] = $response['genesis_date'];
                    }
                    $coin->save();
                }
            }
            $coins = Coin::where('is_coin_gecko', 0)
                ->orderBy('updated_at')
                ->with('coinChains')
                ->take(5)
                ->get();
//                ->first();
            foreach ($coins as $coin) {
                $contract_address = $coin->coinChains[0]['contract_address'];
                $chain = $coin->coinChains[0]['chain'];
                if (str_contains($chain, 'miannet') == false) {
                    $responseCoin = Http::withHeaders([
                        'X-API-Key' => 'UpQ3vKSY4Lwb4c09DfS4pNMsf43YXLplFTudha98Iitks2giWK4e3Swv3S0f3Ic5'
                    ])
                        ->get('https://deep-index.moralis.io/api/v2/erc20/' . $contract_address . '/price?chain=' . $chain);
                    if ($responseCoin->ok()) {
                        $coin->price = $responseCoin['usdPrice'];
                        $coin->market_cap = $responseCoin['usdPrice'] * $coin->circulating_supply;
                        $coin->save();
                    }
                }
            }
        })->everyMinute();

    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
