<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\HotNotification;
use App\Models\Subscriber;
use App\Models\User;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
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
        $hotNotifications = HotNotification::all();

        return Inertia::render('HomePage', [
            'currentUser' => $user,
            'coins' => $coins,
            'votes' => $votes,
            'hotNotifications' => $hotNotifications,
        ]);
    }

    public function testRoute(Request $request)
    {
//    Artisan::call('cache:clear');
//    Artisan::call('route:cache');
//    Artisan::call('migrate:refresh --seed');
//        Artisan::call('migrate');

//    dd("Cache is cleared");
        $coins = Coin::where('is_coin_gecko', 0)
            ->orderBy('updated_at')
            ->with('coinChains')
            ->take(5)
            ->get();
        $chain = $coins[0]->coinChains[0]['chain'];
        $contract_address = $coins[0]->coinChains[0]['contract_address'];
        if (str_contains($chain, 'miannet') == false) {
            $responseCoin = Http::withHeaders([
//                        'X-API-Key' => 'UpQ3vKSY4Lwb4c09DfS4pNMsf43YXLplFTudha98Iitks2giWK4e3Swv3S0f3Ic5'
                'accept: application/json',
                'X-API-Key' => 'jTG1sdNlkrUtapkTO7Tt5UEa1P8lgLlHn21M32F56G5nSZrmfoGQy4F7I8DBNFP6' // from moralis example requests
            ])
                ->get('https://deep-index.moralis.io/api/v2/erc20/' . $contract_address . '/price?chain=' . $chain);

//            return 'https://deep-index.moralis.io/api/v2/erc20/' . $contract_address . '/price?chain=' . $chain;
            if ($responseCoin->ok())
//                return floatval($responseCoin['usdPrice']) . ' - ' . $coins[0];
//                return $responseCoin;
                return round((floatval($responseCoin['usdPrice']) / floatval($coins[0]['price']) - 1) * 100, 7);
            else return $responseCoin->ok();
        } else return 'Something wrong';
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
