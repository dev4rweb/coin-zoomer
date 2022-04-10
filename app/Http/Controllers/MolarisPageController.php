<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class MolarisPageController extends Controller
{
    public function index()
    {
        /*$user = Auth::user();

        return Inertia::render('MolarisPage', [
            'currentUser' => $user,
        ]);*/


//        return $response->json()['usdPrice'];

/*        $coin = Coin::where('is_coin_gecko', 1)
            ->orderBy('updated_at')
            ->with('coinChains')
            ->first();
//            ->take(30)
//            ->get();
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
            return $coin;
        } */

/*        foreach ($coins as $coin) {
            $contract_address = $coin->coinChains[0]['contract_address'];
            $chain = $coin->coinChains[0]['chain'];
//            return $coin;

            $responseCoin = Http::withHeaders([
                'X-API-Key' => 'UpQ3vKSY4Lwb4c09DfS4pNMsf43YXLplFTudha98Iitks2giWK4e3Swv3S0f3Ic5'
            ])
                ->get('https://deep-index.moralis.io/api/v2/erc20/' . $contract_address . '/price?chain=' . $chain);
            if ($responseCoin->ok()) {
//                $response .= $responseCoin;
                $coin->price = $responseCoin['usdPrice'];
                $coin->market_cap = $responseCoin['usdPrice'] * $coin->circulating_supply;
                $coin->save();
//                return $coin;
//                return $responseCoin['usdPrice'];
            } else {
//                return $coins;
            }
            return $responseCoin;
        }*/
        return $coin;
//        return $response;
    }
}
