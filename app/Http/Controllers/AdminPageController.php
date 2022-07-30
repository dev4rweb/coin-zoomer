<?php

namespace App\Http\Controllers;

use App\Models\HotNotification;
use App\Models\ReferralLink;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminPageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if (!$user) {
            return Redirect::route('home.index');
        } else if (!$user->is_admin) {
            return Redirect::route('userPanel.index');
        } else {
            $users = User::where('is_admin', 0)->get();
            return Inertia::render('AdminPage', [
                'currentUser' => $user,
                'users' => $users
            ]);
        }
    }

    public function hotNotificationIndex()
    {
        $user = Auth::user();
        if (!$user) {
            return Redirect::route('home.index');
        } else if (!$user->is_admin) {
            return Redirect::route('userPanel.index');
        } else {
            return Inertia::render('AdminHotNotificationPage', [
                'currentUser' => $user,
                'hotNotifications' => HotNotification::all()
            ]);
        }
    }

    public function referralLinksIndex()
    {
        $user = Auth::user();
        if (!$user) {
            return Redirect::route('home.index');
        } else if (!$user->is_admin) {
            return Redirect::route('userPanel.index');
        } else {
            return Inertia::render('AdminReferralLinksPage', [
                'currentUser' => $user,
                'refLinks' => ReferralLink::all()
            ]);
        }
    }
}
