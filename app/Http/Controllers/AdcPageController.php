<?php

namespace App\Http\Controllers;

use App\Models\HotNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdcPageController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return Inertia::render('AdcPage', [
            'currentUser' => $user,
            'hotNotifications' => HotNotification::all(),
        ]);
    }
}
