<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminCoinsPageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if (!$user) {
            return Redirect::route('home.index');
        } else if (!$user->is_admin) {
            return Redirect::route('userPanel.index');
        } else {
            $coins = Coin::all();
            return Inertia::render('AdminCoinsPage', [
                'currentUser' => $user,
                'coins' => $coins
            ]);
        }
    }
}
