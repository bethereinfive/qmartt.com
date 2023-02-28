<?php

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\Auth\LoginController;


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
Route::get('detect-device', [FrontController::class, 'detuctDebice'])->name('detect-device');


Route::get('/ip/check', function (Request $request) {

// get the mac address of the eth0 interface
var_dump(MacAddress::getIfconfig());

// generate a random mac address
// var_dump(MacAddress::generateMacAddress());

// validate an MAC address
// var_dump(MacAddress::validateMacAddress('00-B0-D0-86-BB-F7'));

// set a randomly generated MAC address on the eth0 interface
// var_dump(MacAddress::setFakeMacAddress('eth0'));

// set a specific MAC address on the eth0 interface
// var_dump(MacAddress::setFakeMacAddress('eth0', '00:E4:01:2C:79:DA'));

// get the mac address of the eth0 interface using the ifconfig path that we define
var_dump(MacAddress::getCurrentMacAddress('eth0', '/usr/local/sbin/ifconfig'));
echo "\n";

    // $clientIP = request()->ip();
    // dd($clientIP);
});

Route::post('/ip/check', function (Request $request) {
    $clientIP = request()->ip();
    dd($clientIP);
});


// Auth::routes();

Route::post('login',[LoginController::class,'login']);
Route::post('logout',[LoginController::class,'logout']);

// Route::group(['middleware' => ['is_admin']], function() {
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// });

// Route::group(['middleware' => ['CustomerMiddleware']], function() {
// Route::get('/sub', [App\Http\Controllers\HomeController::class, 'sub'])->name('sub');
// });

Route::group(['prefix' => 'dashboard','middleware' => ['auth']], function() {
    Route::get('/{vue_capture?}', function () {
        // return   Auth::user()->roles->permission;

        $roles = Role::all();

        return view('layout',compact('roles'));
    })->where('vue_capture', '[\/\w\.-]*')->name('dashboard');

});


Route::get('/{vue_capture?}', function () {
    return view('frontlayout');
})->where('vue_capture', '[\/\w\.-]*')->name('frontend');
