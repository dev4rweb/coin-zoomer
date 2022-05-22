<?php

namespace App\Http\Controllers;

use App\Models\HotNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VerifiedPageController extends Controller
{
    public function index(): \Inertia\Response
    {
        $user = Auth::user();
        return Inertia::render('VerifiedPage', [
            'currentUser' => $user,
            'hotNotifications' => HotNotification::all(),
        ]);
    }
}
