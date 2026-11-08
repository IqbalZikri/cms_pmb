<?php

use App\Http\Controllers\BeasiswaController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\BiayaKuliahController;
use App\Http\Controllers\FakultasController;
use App\Http\Controllers\JalurPendaftaranController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\PanduanPendaftaranController;
use App\Http\Controllers\ProdiController;
use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'welcome')->name('home');
Route::get('/', [BerandaController::class, 'index'])->name('home');
Route::get('/program-studi', [ProdiController::class, 'public'])->name('prodi.public');
Route::get('/jalur-pendaftaran', [JalurPendaftaranController::class, 'public'])->name('jalurPendaftaran.public');
Route::get('/biaya-kuliah', [BiayaKuliahController::class, 'public'])->name('biayaKuliah.public');
Route::get('/beasiswa', [BeasiswaController::class, 'public'])->name('beasiswa.public');
Route::get('/panduan', [PanduanPendaftaranController::class, 'public'])->name('panduan.public');
Route::inertia('/faq', 'public/faq')->name('faq.public');
Route::inertia('/brosur', 'public/brosur')->name('brosur.public');
Route::inertia('/kontak', 'public/kontak')->name('kontak.public');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'admin/dashboard')->name('dashboard');

    Route::resource('fakultas', FakultasController::class)->only('index', 'store', 'update', 'destroy');

    Route::resource('jalur-pendaftaran', JalurPendaftaranController::class)->only('index', 'store', 'update', 'destroy');

    Route::delete('berita/bulk', [BeritaController::class, 'bulkDestroy'])
        ->name('berita.bulk-destroy');
    Route::resource('berita', BeritaController::class);

    Route::delete('kategori/bulk', [KategoriController::class, 'bulkDestroy'])
        ->name('kategori.bulk-destroy');
    Route::resource('kategori', KategoriController::class)->only('index', 'store', 'update', 'destroy');

});

require __DIR__ . '/settings.php';
