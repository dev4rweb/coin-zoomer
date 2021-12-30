<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TokenPageController extends Controller
{
    public function index(): \Inertia\Response
    {
        $user = Auth::user();

        return Inertia::render('TokenPage', [
            'currentUser' => $user,
        ]);
    }
}
