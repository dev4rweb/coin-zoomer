<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CoinOpenPageController extends Controller
{
    public function index($id): \Inertia\Response
    {
        $user = Auth::user();

        if (strlen($id) < 3) {
            $coin = Coin::where('id', $id)
                ->with('coinChains')
                ->with('votes')
                ->first();
        } else {
            $coin = $id;
        }

        return Inertia::render('CoinOpenPage', [
            'currentUser' => $user,
            'pageId' => $id,
            'innerCoin' => $coin
        ]);
    }
}
