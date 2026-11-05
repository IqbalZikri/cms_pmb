<?php

namespace App\Http\Controllers;

use App\Models\PanduanPendaftaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PanduanPendaftaranController extends Controller
{
    public function public()
    {
        return Inertia::render('public/panduan');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PanduanPendaftaran $panduanPendaftaran)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PanduanPendaftaran $panduanPendaftaran)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PanduanPendaftaran $panduanPendaftaran)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PanduanPendaftaran $panduanPendaftaran)
    {
        //
    }
}
