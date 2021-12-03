<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserPageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if (!$user) {
            return Redirect::route('home.index');
        } else if ($user->is_admin) {
            return Redirect::route('adminPanel.index');
        } else {
            return Inertia::render('UserPage', [
                'currentUser' => $user,
            ]);
        }
    }
}
