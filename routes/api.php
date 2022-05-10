<?php

use App\Http\Controllers\Api\BannerController;
use App\Http\Controllers\Api\CoinController;
use App\Http\Controllers\Api\MailController;
use App\Http\Controllers\Api\SubscriberController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\VoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources([
    'coins' => CoinController::class,
    'votes' => VoteController::class,
    'users' => UserController::class,
    'banners' => BannerController::class,
    'subscribers' => SubscriberController::class,
]);

Route::post('/fill-vote-limit', [UserController::class, 'fillVoteLimit']);
Route::post('/send-email', [MailController::class, 'sendEmail']);
