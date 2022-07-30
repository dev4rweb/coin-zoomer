<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\CoinChain;
use App\Models\HotNotification;
use App\Models\ReferralLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddCoinPageController extends Controller
{
    public function index(Request $request)
    {
        $refLink = null;
        if (isset($request['ref_link']))
            $refLink = ReferralLink::where('ref_link', 'LIKE', '%' . $request['ref_link'] . '%')->first();
        $user = Auth::user();

        return Inertia::render('AddCoinPage', [
            'currentUser' => $user,
            'hotNotifications' => HotNotification::all(),
            'refLink' => $refLink
        ]);
    }

    public function addCoin(Request $request)
    {
        try {
            $coin = Coin::create($request['coin']);
            $chains = $request['chains'];
            foreach ($chains as $chain) {
                CoinChain::create([
                    'coin_id' => $coin['id'],
                    'chain' => $chain['chainName'],
                    'contract_address' => $chain['chainValue']
                ]);
            }
            $response['success'] = true;
            $response['message'] = 'Coin created';
            $response['model'] = $coin;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
