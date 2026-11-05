<?php

namespace App\Http\Controllers;

use App\Models\BiayaKuliah;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BiayaKuliahController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function public()
    {
        return Inertia::render('public/biaya-kuliah');
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
    public function show(BiayaKuliah $biayaKuliah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BiayaKuliah $biayaKuliah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BiayaKuliah $biayaKuliah)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BiayaKuliah $biayaKuliah)
    {
        //
    }
}
