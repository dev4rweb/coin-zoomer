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
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
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
            $coinsGecko = Coin::where('is_coin_gecko', 1)
                ->orderBy('updated_at')
                ->with('coinChains')
                ->take(15)
                ->get();

            foreach ($coinsGecko as $coin) {
                $parts_url = explode("/", $coin->coin_gecko_link);
                $url_id = $parts_url[count($parts_url) - 1];
                $base_url = 'https://api.coingecko.com/api/v3';
                $dop_data = 'tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';

                $response = Http::get($base_url . '/coins/' . $url_id . '?' . $dop_data);
                if ($response->ok()) {

                    if ($coin['is_own_logo'] == false) {
                        $coin['logotype'] = $response['image']['large'];
                    }
                    $coin['symbol'] = $response['symbol'];
                    $coin['price'] = (string)$response['market_data']['current_price']['usd'];

                    if ($coin['is_market_cap_gecko'] == true) {
                        $coin['market_cap'] = (string)$response['market_data']['market_cap']['usd'];
                    }else {
                        $coin['market_cap'] = (string)($response['market_data']['current_price']['usd'] * $coin['circulating_supply']);
                    }

                    $coin['market_cap_big'] = $coin['market_cap'];
                    $coin['one_hour'] = $response['market_data']['price_change_percentage_1h_in_currency']['usd'];
                    if ($response['genesis_date']) {
                        $coin['launch_date'] = $response['genesis_date'];
                    }
                    $coin->save();
                } else {
                    $coin->contractAdditional = 'coingecko error' . $response;
                    $coin->save();
                    break;
                }
            }
        })->cron('* * * * *');

        $schedule->call(function () {
            $coins = Coin::where('is_coin_gecko', '=', 0)
                ->orderBy('updated_at')
                ->with('coinChains')
                ->take(5)
                ->get();

            foreach ($coins as $coin) {
                $contract_address = $coin['coinChains'][0]['contract_address'];
                $chain = $coin['coinChains'][0]['chain'];
                if (str_contains($chain, 'mainnet') == false) {
                    $responseCoin = Http::withHeaders([
                        'X-API-Key' => 'jTG1sdNlkrUtapkTO7Tt5UEa1P8lgLlHn21M32F56G5nSZrmfoGQy4F7I8DBNFP6' // from moralis example requests
                    ])
                        ->get('https://deep-index.moralis.io/api/v2/erc20/' . $contract_address . '/price?chain=' . $chain);

                    if ($responseCoin->ok()) {
                        if (!$coin['price']) $coin['price'] = 0;

                        $coin['contractAdditional'] = $responseCoin;

                        $coin['market_cap'] = (string)($responseCoin['usdPrice'] * $coin['circulating_supply']);
                        $coin->save();

//                        if ($coin['price'] == $responseCoin['usdPrice']) $coin['one_hour'] = 0; // need to remove 0
                        if ($coin['price'] != $responseCoin['usdPrice']) {
                            if ($coin['price'] == 0) $coin['one_hour'] = 0;
                            else $coin['one_hour'] = (string)(($responseCoin['usdPrice'] / $coin['price'] - 1) * 100);
//                            $coin['contractAdditional'] = (string)(($responseCoin['usdPrice'] / $coin['price'] - 1) * 100);
                        }
                        $coin['price'] = (string)$responseCoin['usdPrice'];
                        $coin->save();

                    } else {
                        $coin['contractAdditional'] = $responseCoin;
                    }
                    $coin->save();
                } else {
                    break;
                }
            }
        })->cron('* * * * *');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
