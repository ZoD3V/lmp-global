<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CsrController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PatnersController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ResearchDevelopmentController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\SupportController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/product', [ProductController::class, 'index']);
Route::get('/contact', [ContactController::class, 'index']);
Route::get('/research-development', [ResearchDevelopmentController::class, 'index']);
Route::get('/patner', [PatnersController::class, 'index']);
Route::get('/csr', [CsrController::class, 'index']);
Route::get('/services', [ServicesController::class, 'index']);
Route::get('/support', [SupportController::class, 'index']);
