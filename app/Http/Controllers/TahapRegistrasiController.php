<?php

namespace App\Http\Controllers;

use App\Models\TahapRegistrasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class TahapRegistrasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tahapRegistrasi = TahapRegistrasi::first();

        return Inertia::render('admin/tahap_registrasi/index', [
            'tahap' => $tahapRegistrasi
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'tahap_registrasi' => ['required', 'array', 'min:1'],
            'tahap_registrasi.*.judul' => ['required', 'string', 'max:255'],
            'tahap_registrasi.*.deskripsi' => ['required', 'string', 'max:1000'],
        ]);

        $tahap = TahapRegistrasi::first();

        if ($tahap) {
            $tahap->update($validated);
        } else {
            TahapRegistrasi::create($validated);
        }

        return redirect()->back()->with('success', 'Tahap registrasi berhasil disimpan.');
    }
}
