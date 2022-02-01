<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $coins = Coin::orderBy('id', 'desc')->take(5)->get();

        return Inertia::render('HomePage', [
            'currentUser' => $user,
            'coins' => $coins
        ]);
    }
}
