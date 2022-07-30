<?php

use App\Http\Controllers\AdcPageController;
use App\Http\Controllers\AddAirDropPageController;
use App\Http\Controllers\AddCoinPageController;
use App\Http\Controllers\AdminAirDropPageController;
use App\Http\Controllers\AdminBannerPageController;
use App\Http\Controllers\AdminCoinsPageController;
use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\AirDropOpenPageController;
use App\Http\Controllers\AirDropPageController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CoinController;
use App\Http\Controllers\CoinOpenPageController;
use App\Http\Controllers\ContactsPageController;
use App\Http\Controllers\ErrorPageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\MolarisPageController;
use App\Http\Controllers\ReferralLinkController;
use App\Http\Controllers\TokenPageController;
use App\Http\Controllers\UploadFileController;
use App\Http\Controllers\UserPageController;
use App\Http\Controllers\VerifiedPageController;
use App\Mail\SendMail;
use App\Models\Coin;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/', [HomePageController::class, 'index'])->name('home.index');
Route::get('/admin-subscribers', [HomePageController::class, 'subscriberIndex'])->name('subscriber.index');
Route::get('/promotion', [AdcPageController::class, 'index']);
Route::get('/admin-panel', [AdminPageController::class, 'index'])->name('adminPanel.index');
Route::get('/air-drop', [AirDropPageController::class, 'index']);
Route::get('/contacts', [ContactsPageController::class, 'index']);
Route::get('/user-panel', [UserPageController::class, 'index'])->middleware(['auth', 'verified'])->name('userPanel.index');
Route::get('/verified', [VerifiedPageController::class, 'index']);
Route::get('/add-coin', [AddCoinPageController::class, 'index']);
Route::post('/add-coin-create', [AddCoinPageController::class, 'addCoin']);
Route::get('/add-air-drop', [AddAirDropPageController::class, 'index']);
Route::get('/air-drop-open/{id}', [AirDropOpenPageController::class, 'index']);
Route::get('/coin/{id}', [CoinOpenPageController::class, 'index']);
Route::get('/token', [TokenPageController::class, 'index']);
Route::get('/molaris', [MolarisPageController::class, 'index']);
Route::get('/admin-coins', [AdminCoinsPageController::class, 'index']);
Route::get('/admin-air-drop', [AdminAirDropPageController::class, 'index']);
Route::get('/admin-banner', [AdminBannerPageController::class, 'index']);
Route::get('/admin-hot-notifications', [AdminPageController::class, 'hotNotificationIndex']);
Route::get('/admin-referral-links', [AdminPageController::class, 'referralLinksIndex']);

Route::post('/upload-file', [UploadFileController::class, 'uploadFile']);

Route::resources([
    'innerCoins' => CoinController::class,
    'innerBanners' => BannerController::class,
]);

Route::apiResources([
    'userModels' => UserController::class,
    'referral-links' => ReferralLinkController::class
]);

Route::get('/send-email', function () {
    try {
        /*$data['email'] = 'dev4rweb@gmail.com';
        $data['userName'] = 'user name';
        $data['contact'] = 'Telegram';
        $data['coinName'] = 'Coin Name';
        $data['message'] = 'Some message';
        Mail::to('dev4rweb@gmail.com')->send(new SendMail($data));*/

        $data = [
            'subject' => 'Contact Form',
            'content' => "<div>Message</div>"

        ];
        Mail::send('email-template', $data, function ($message) use ($data) {
            $message->to('dev4rweb@gmail.com');
//            $message->to('admin@source-byte.com');
            $message->subject($data['subject']);
        });
        $response['message'] = 'Mail sent';
    } catch (\Exception $exception) {
        $response['message'] = $exception->getMessage();
    }

    return response()->json($response);
});

Route::get('/test-route', [HomePageController::class, 'testRoute']);
Route::post('/get-text-file', [HomePageController::class, 'createSubscribersFile']);

Route::get('/generate-sitemap', function () {
    // https://youtu.be/6M4OsMcIgpI
    // create new sitemap object
    $sitemap = App::make('sitemap');

    // add items to the sitemap (url, date, priority, freq)
    $sitemap->add(URL::to('/'), Carbon::now(), '1.0', 'daily');
    $sitemap->add(URL::to('/adc'), Carbon::now(), '1.0', 'daily');
    $sitemap->add(URL::to('/contacts'), Carbon::now(), '1.0', 'daily');
    $sitemap->add(URL::to('/verified'), Carbon::now(), '1.0', 'daily');

    // get all coins from DB
    $coins = Coin::all();

    // add every coin to sitemap
    foreach ($coins as $coin) {
        $name = str_replace(' ', '_', $coin->name);
        $sitemap->add(URL::to('/coin/' . $name), $coin['updated_at'], '1.0', 'daily');
    }

    // generate your sitemap (format, filename)
    $sitemap->store('xml', 'sitemap');
    // this will generate file sitemap.xml to public folder

    return redirect(\url('sitemap.xml'));
});

// Error Page
Route::fallback([ErrorPageController::class, 'index']);
