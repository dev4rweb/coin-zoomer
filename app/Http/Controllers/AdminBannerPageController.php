<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AdminBannerPageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if (!$user) {
            return Redirect::route('home.index');
        } else if (!$user->is_admin) {
            return Redirect::route('userPanel.index');
        } else {
            $banners = Banner::orderBy('is_show')->get();
            return Inertia::render('AdminBannerPage', [
                'currentUser' => $user,
                'banners' => $banners
            ]);
        }
    }
}
