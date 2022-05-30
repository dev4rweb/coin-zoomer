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
                ->take(30)
                ->get();

            foreach ($coinsGecko as $coin) {
                $parts_url = explode("/", $coin->coin_gecko_link);
                $url_id = $parts_url[count($parts_url) - 1];
                $base_url = 'https://api.coingecko.com/api/v3';
                $dop_data = 'tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';

                $response = Http::get($base_url . '/coins/' . $url_id . '?' . $dop_data);
                if ($response->ok()) {
                    $marketCap = (string)$response['market_data']['market_cap']['usd'];
                    $coin['logotype'] = $response['image']['large'];
                    $coin['symbol'] = $response['symbol'];
                    $coin['price'] = (string)$response['market_data']['current_price']['usd'];
                    $coin['market_cap'] = (string)$response['market_data']['market_cap']['usd'];
                    $coin['market_cap_big'] = $marketCap;
                    $coin['one_hour'] = $response['market_data']['price_change_percentage_1h_in_currency']['usd'];
                    if ($response['genesis_date']) {
                        $coin['launch_date'] = $response['genesis_date'];
                    }
                    $coin->save();
                } else {
                    $coin->description = 'coingecko error' . $response;
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
                if (str_contains($chain, 'miannet') == false) {
                    $responseCoin = Http::withHeaders([
                        'X-API-Key' => 'jTG1sdNlkrUtapkTO7Tt5UEa1P8lgLlHn21M32F56G5nSZrmfoGQy4F7I8DBNFP6' // from moralis example requests
                    ])
                        ->get('https://deep-index.moralis.io/api/v2/erc20/' . $contract_address . '/price?chain=' . $chain);

                    if ($responseCoin->ok()) {
                        if (!$coin['price'] ) $coin['price'] = 0;

//                        $coin['contractAdditional'] = round(floatval($responseCoin['usdPrice']), 7);
                        $coin['contractAdditional'] = $responseCoin;
                        $coin->save();

                        if (floatval($coin['price']) >= floatval($responseCoin['usdPrice'])) {
                            if ($coin['price']) $coin['one_hour'] = 0;
                            else $coin['one_hour'] = -round((floatval($coin['price']) / round(floatval($responseCoin['usdPrice']), 7) - 1) * 100, 7);
                        }
                        if (floatval($coin['price']) < floatval($responseCoin['usdPrice'])) {
                            if ($coin['price']) $coin['one_hour'] = 0;
                            else $coin['one_hour'] = round((round($responseCoin['usdPrice'], 7) / floatval($coin['price']) - 1) * 100, 7);

                        }
                        $coin['price'] = round(floatval($responseCoin['usdPrice']), 7);
                        $coin['market_cap'] = round(floatval($responseCoin['usdPrice']), 7) * $coin['circulating_supply'];
                        $coin->save();

                    } else {
                        $coin['description'] = $responseCoin;
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
