<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\JalurPendaftaran;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index()
    {
        $jalurPendaftaran = JalurPendaftaran::get();
        $prodi = Prodi::with('fakultas')->get();
        $berita = Berita::latest()->with('kategori')->get();
        
        return Inertia::render('public/beranda', [
            'jalurPendaftaran' => $jalurPendaftaran,
            'prodi' => $prodi,
            'berita' => $berita
        ]);
    }
}
