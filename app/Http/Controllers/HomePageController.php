<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $user = User::find($user['id'])
            ->with('votes')
            ->first();
//        $coins = Coin::orderBy('id', 'desc')->take(10)->get();
        $coins = Coin::orderBy('id', 'desc')
            ->with('votes')
            ->paginate(10);

        return Inertia::render('HomePage', [
            'currentUser' => $user,
            'coins' => $coins
        ]);
    }
}
