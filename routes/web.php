<?php

use App\Http\Controllers\AdcPageController;
use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\AirDropPageController;
use App\Http\Controllers\ContactsPageController;
use App\Http\Controllers\ErrorPageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\UserPageController;
use App\Http\Controllers\VerifiedPageController;
use Illuminate\Support\Facades\Route;

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

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/', [HomePageController::class, 'index'])->name('home.index');
Route::get('/adc', [AdcPageController::class, 'index']);
Route::get('/admin-panel', [AdminPageController::class, 'index'])->name('adminPanel.index');
Route::get('/air-drop', [AirDropPageController::class, 'index']);
Route::get('/contacts', [ContactsPageController::class, 'index']);
Route::get('/user-panel', [UserPageController::class, 'index'])->name('userPanel.index');
Route::get('/verified', [VerifiedPageController::class, 'index']);

// Error Page
Route::fallback([ErrorPageController::class, 'index']);
