<?php

namespace App\Http\Controllers;

use App\Helpers\GenerateReferralLink;
use App\Models\ReferralLink;
use App\Models\User;
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
            $refLinks = ReferralLink::where('user_id', $user['id'])
                ->orderBy('id', 'desc')->get();
            if (count($refLinks) == 0) $refLinks->push(GenerateReferralLink::generate($user['id']));
            return Inertia::render('UserPage', [
                'currentUser' => $user,
                'refLinks' => $refLinks
            ]);
        }
    }

}
