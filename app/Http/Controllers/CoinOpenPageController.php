<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\HotNotification;
use App\Models\User;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CoinOpenPageController extends Controller
{
    public function index($id): \Inertia\Response
    {
        $user = Auth::user();
        if ($user) {
            $user = User::find($user['id'])
                ->with('votes')
                ->first();
        }

        $name = str_replace('_', ' ', $id);
        $coin = Coin::where('name', $name)
            ->with('coinChains')
            ->with('votes')
            ->first();

        $coins = Coin::where('is_approved', 1)
            ->orderBy('id', 'desc')
            ->with('votes')
            ->with('coinChains')
            ->paginate(10);

        /*if (strlen($id) < 3) {
            $coin = Coin::where('id', $id)
                ->with('coinChains')
                ->with('votes')
                ->first();
        } else {
            $coin = $id;
        }*/
        $curVotes = null;
        if ($coin) {
            $curVotes = Vote::where('coin_id', $coin->id)->get();
        }


        $votes = Vote::all();

        return Inertia::render('CoinOpenPage', [
            'currentUser' => $user,
            'pageId' => $id,
            'innerCoin' => $coin,
            'votes' => $votes,
            'curVotes' => $curVotes,
            'coins' => $coins,
            'hotNotifications' => HotNotification::all(),
        ]);
    }
}
