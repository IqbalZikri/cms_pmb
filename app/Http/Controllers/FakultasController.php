<?php

namespace App\Http\Controllers;

use App\Models\Fakultas;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class FakultasController extends Controller
{
    public function index()
    {
        $fakultas = Fakultas::latest()->paginate(10);
        return Inertia::render('admin/fakultas/index', [
            'fakultas' => $fakultas
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nm_fakultas' => 'required'
        ], [
            'nm_fakultas.required' => 'Nama fakultas wajib diisi'
        ]);

        try {
            Fakultas::create($validated);

            return back()->with('success', 'Berhasil menambahkan fakultas baru');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    public function update(Request $request, Fakultas $fakultas)
    {
        $validated = $request->validate([
            'nm_fakultas' => 'required'
        ], [
            'nm_fakultas.required' => 'Nama fakultas wajib diisi'
        ]);

        try {
            $fakultas->update($validated);

            return back()->with('success', 'Berhasil mengedit fakultas');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    public function destroy(Fakultas $fakultas)
    {
        try {
            $fakultas->delete();
            return back()->with('success', 'Berhasil menghapus fakultas');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }
}
