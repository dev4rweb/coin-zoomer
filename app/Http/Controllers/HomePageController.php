<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\User;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if ($user) {
            $user = User::where('id', $user['id'])
                ->with('votes')
                ->first();
        }
//        $coins = Coin::orderBy('id', 'desc')->take(10)->get();
        $coins = Coin::orderBy('id', 'desc')
            ->with('votes')
            ->paginate(10);

        $votes = Vote::all();

        return Inertia::render('HomePage', [
            'currentUser' => $user,
            'coins' => $coins,
            'votes' => $votes
        ]);
    }
}
