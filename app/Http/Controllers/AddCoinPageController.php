<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\CoinChain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddCoinPageController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return Inertia::render('AddCoinPage', [
            'currentUser' => $user,
        ]);
    }

    public function addCoin(Request $request)
    {
        try {
            $coin = Coin::create($request['coin']);
            $chains = $request['chains'];
            foreach ($chains as $chain) {
                CoinChain::create([
                    'coin_id'=> $coin['id'],
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
