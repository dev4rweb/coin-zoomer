<?php

namespace App\Http\Controllers;

use App\Models\HotNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ContactsPageController extends Controller
{
    public function index(): \Inertia\Response
    {
        $user = Auth::user();

        return Inertia::render('ContactsPage', [
            'currentUser' => $user,
            'hotNotifications' => HotNotification::all(),
        ]);
    }
}
