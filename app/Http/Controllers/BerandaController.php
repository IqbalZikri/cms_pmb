<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\JalurPendaftaran;
use App\Models\Prodi;
use App\Models\TahapRegistrasi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index()
    {
        $jalurPendaftaran = JalurPendaftaran::where('status', 'Aktif')->get();
        $prodi = Prodi::with('fakultas')->get();
        $berita = Berita::latest()->with('kategori')->get();
        $tahapRegistrasi = TahapRegistrasi::first();
        
        return Inertia::render('public/beranda', [
            'jalurPendaftaran' => $jalurPendaftaran,
            'prodi' => $prodi,
            'berita' => $berita,
            'tahapRegistrasi' => $tahapRegistrasi
        ]);
    }
}
