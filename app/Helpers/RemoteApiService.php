<?php


namespace App\Helpers;


use App\Models\Coin;
use App\Models\CoinChain;
use Illuminate\Support\Facades\Http;

class RemoteApiService
{
    public static function getRemoteData(Coin $coin)
    {
        try {
            if ($coin->is_coin_gecko == 1) {
                $parts_url = explode("/", $coin->coin_gecko_link);
                $url_id = $parts_url[count($parts_url) - 1];
                $base_url = 'https://api.coingecko.com/api/v3';
                $dop_data = 'tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false';

                $response = Http::get($base_url . '/coins/' . $url_id . '?' . $dop_data);

                if ($response->ok()) {
                    $coin->contractAdditional = 'coingecko ' . $response;
                    if ($coin['is_own_logo'] == false) {
                        $coin['logotype'] = $response['image']['large'];
                    }
                    $coin['symbol'] = $response['symbol'];
                    $coin['price'] = (string)$response['market_data']['current_price']['usd'];

                    if ($coin['is_market_cap_gecko'] == true) {
                        $coin['market_cap'] = (string)$response['market_data']['market_cap']['usd'];
                    } else {
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
                }
                return $response;
            } else {
                $coinChain = CoinChain::where('coin_id', $coin->id)->first();
                if ($coinChain) {
                    $arkenUrl = 'https://api.arken.finance/v2/token/price/';
                    $chain = $coinChain->chain . '/';
                    $address = $coinChain->contract_address;
                    $response = Http::get($arkenUrl . $chain . $address);
                    if ($response->ok()) {
                        if (!$coin['price']) $coin['price'] = 0;
                        $coin['contractAdditional'] = $response;
                        $coin['market_cap'] = (string)(floatval($response['price']) * $coin['circulating_supply']);
                        if ($coin['price'] != $response['price']) {
                            if ($coin['price'] == 0) $coin['one_hour'] = 0;
                            else $coin['one_hour'] = (string)((floatval($response['price']) / $coin['price'] - 1) * 100);
                        }
                        $coin['price'] = (string)$response['price'];
                        $coin->contractAdditional = 'arken OK' . $response;
                        $coin->save();
                        return $response;
                    } else {
                        $cakeUrl = 'https://api.pancakeswap.info/api/v2/tokens/';
                        $response = Http::get($cakeUrl . $coinChain->contract_address);
                        $coin->contractAdditional = 'pancackeswap ' . $response;
                        $coin->save();
                        if ($response->ok()) {
                            $coin->contractAdditional = 'pancackeswap OK' . $response;
                            $coin->save();
                            if (!$coin['price']) $coin['price'] = 0;
                            $coin['contractAdditional'] = $response;
                            $coin['market_cap'] = (string)(floatval($response['data']['price']) * $coin['circulating_supply']);
                            if ($coin['price'] != $response['data']['price']) {
                                if ($coin['price'] == 0) $coin['one_hour'] = 0;
                                else $coin['one_hour'] = (string)((floatval($response['data']['price']) / $coin['price'] - 1) * 100);
                            }
                            $coin['price'] = (string)$response['data']['price'];
                            $coin->save();
                            return $response;
                        } else {
                            $responseCoin = Http::withHeaders([
                                'X-API-Key' => 'jTG1sdNlkrUtapkTO7Tt5UEa1P8lgLlHn21M32F56G5nSZrmfoGQy4F7I8DBNFP6' // from moralis example requests
                            ])
                                ->get('https://deep-index.moralis.io/api/v2/erc20/' . $address . '/price?chain=' . $chain);

                            if ($responseCoin->ok()) {
                                if (!$coin['price']) $coin['price'] = 0;

                                $coin['contractAdditional'] = 'Moralis Ok' . $responseCoin;

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
                                $coin->contractAdditional = 'Moralis Fail' . $responseCoin;
                            }
                            $coin->save();
                            return $responseCoin;
                        }
                    }
                }
            }
            $answer['message'] = 'Ok';
            $answer['coin'] = $coin;
        } catch (\Exception $exception) {
            $answer['message'] = $exception->getMessage();
            $answer['coin'] = $coin;
        }

        return response()->json($answer);
    }
}
