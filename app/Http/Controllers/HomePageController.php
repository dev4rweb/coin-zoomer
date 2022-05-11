<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\Subscriber;
use App\Models\User;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if ($user) {
            $user = User::where('id', $user['id'])
                ->with('votes')
                ->first();
        }
//        $coins = Coin::orderBy('id', 'desc')->take(10)->get();
        $coins = Coin::withCount('votes')
            ->orderBy('votes_count', 'desc')
            ->with('votes')
            ->with('coinChains')
            ->paginate(10);

        $votes = Vote::all();

        return Inertia::render('HomePage', [
            'currentUser' => $user,
            'coins' => $coins,
            'votes' => $votes
        ]);
    }

    public function testRoute(Request $request)
    {
//    Artisan::call('cache:clear');
//    Artisan::call('route:cache');
//    Artisan::call('migrate:refresh --seed');
//        Artisan::call('migrate');

//    dd("Cache is cleared");
        return 'Migrate done';
    }

    public function createSubscribersFile(Request $request)
    {
        try {
            $subscribers = Subscriber::all();
            $content = '';
            foreach ($subscribers as $subscriber) {
                $content .= $subscriber->email . PHP_EOL;
            }
            File::put(public_path('file.txt'), $content);
            $response['success'] = true;
            $response['message'] = 'File created';
        } catch (\Exception $exception) {
            $response['success'] = true;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    public function subscriberIndex()
    {
        $user = Auth::user();
        if (!$user) {
            return Redirect::route('home.index');
        } else if (!$user->is_admin) {
            return Redirect::route('userPanel.index');
        } else {
            $subscribers = Subscriber::orderBy('id', 'desc')->get();
            return Inertia::render('resources/SubscriberIndex', [
                'subscribers' => $subscribers
            ]);
        }

    }
}
