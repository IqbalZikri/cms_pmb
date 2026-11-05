<?php

use App\Http\Controllers\BerandaController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\KategoriController;
use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'welcome')->name('home');
Route::get('/', [BerandaController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::delete('berita/bulk', [BeritaController::class, 'bulkDestroy'])
        ->name('berita.bulk-destroy');
    Route::resource('berita', BeritaController::class);

    Route::delete('kategori/bulk', [KategoriController::class, 'bulkDestroy'])
        ->name('kategori.bulk-destroy');
    Route::resource('kategori', KategoriController::class)->only('index', 'store', 'update', 'destroy');
});

require __DIR__ . '/settings.php';
