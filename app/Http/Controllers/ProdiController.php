<?php

namespace App\Http\Controllers;

use App\Models\Fakultas;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class ProdiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prodi = Prodi::latest()->with('fakultas')->paginate(10);
        $fakultas = Fakultas::select('id', 'nm_fakultas')->get();
        return Inertia::render('admin/prodi/index', [
            'prodi' => $prodi,
            'fakultas' => $fakultas
        ]);
    }

    public function public()
    {
        return Inertia::render('public/prodi');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fakultas_id' => 'required',
            'nm_prodi' => 'required',
            'jenjang' => 'required',
        ], [
            'fakultas_id.required' => 'Pilih salah satu fakultas',
            'nm_prodi.required' => 'Nama prodi wajib diisi',
            'jenjang.required' => 'Pilih salah satu jenjang'
        ]);

        try {
            Prodi::create($validated);

            return back()->with('success', 'Berhasil menambahkan prodi baru');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prodi $prodi)
    {
        $validated = $request->validate([
            'fakultas_id' => 'required',
            'nm_prodi' => 'required',
            'jenjang' => 'required',
        ], [
            'fakultas_id.required' => 'Pilih salah satu fakultas',
            'nm_prodi.required' => 'Nama prodi wajib diisi',
            'jenjang.required' => 'Pilih salah satu jenjang'
        ]);

        try {
            $prodi->update($validated);

            return back()->with('success', 'Berhasil mengedit prodi');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prodi $prodi)
    {
        try {
            $prodi->delete();
            return back()->with('success', 'Berhasil menghapus prodi');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }
}
