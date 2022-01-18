<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddCoinPageController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return Inertia::render('AddCoinPage', [
            'currentUser' => $user,
        ]);
    }

    public function addCoin(Request $request)
    {
        try {
            $coin = Coin::create($request->all());
            $response['success'] = true;
            $response['message'] = 'Coin created';
            $response['model'] = $coin;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
