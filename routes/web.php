<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CsrController;
use App\Http\Controllers\DesignCollaborationCenterController;
use App\Http\Controllers\EdgeDCController;
use App\Http\Controllers\EnergyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KyrosMiraeController;
use App\Http\Controllers\NetworksController;
use App\Http\Controllers\NextTController;
use App\Http\Controllers\PACController;
use App\Http\Controllers\PatnersController;
use App\Http\Controllers\PolymerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ResearchDevelopmentController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\VoltsController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/product', [ProductController::class, 'index']);
Route::get('/product/{id}', [ProductController::class, 'detail']);
Route::get('/contact', [ContactController::class, 'index']);
Route::get('/research-development', [ResearchDevelopmentController::class, 'index']);
Route::get('/patner', [PatnersController::class, 'index']);
Route::get('/networks', [NetworksController::class, 'index']);
Route::get('/edge-dc', [EdgeDCController::class, 'index']);
Route::get('/csr', [CsrController::class, 'index']);
Route::get('/volts', [VoltsController::class, 'index']);
Route::get('/polymer', [PolymerController::class, 'index']);
Route::get('/next-t', [NextTController::class, 'index']);
Route::get('/services', [ServicesController::class, 'index']);
Route::get('/energy', [EnergyController::class, 'index']);
Route::get('/pac', [PACController::class, 'index']);
Route::get('/support', [SupportController::class, 'index']);
Route::get('/kyros-mirae', [KyrosMiraeController::class, 'index']);
Route::get('/design-collaboration-center', [DesignCollaborationCenterController::class, 'index']);
Route::post('/logout', function () {
    auth()->logout();
    session()->invalidate();
    session()->regenerateToken();
    return redirect('/');
})->name('logout');
