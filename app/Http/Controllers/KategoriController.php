<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class KategoriController extends Controller
{
    public function index()
    {
        $kategori = Kategori::paginate(10);

        return Inertia::render('kategori/index', [
            'kategori' => $kategori
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nm_kategori' => 'required',
            'slug' => 'required'
        ], [
            'nm_kategori.required' => "Nama kategori wajib diisi",
            'slug.required' => "Slug wajib diisi"
        ]);

        try {

            Kategori::create($validated);

            return back()->with('success', 'Kategori berhasil ditambahkan');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    public function update(Request $request, Kategori $kategori)
    {
        $validated = $request->validate([
            'nm_kategori' => 'required',
            'slug' => 'required'
        ], [
            'nm_kategori.required' => "Nama kategori wajib diisi",
            'slug.required' => "Slug wajib diisi"
        ]);

        try {

            $kategori->update($validated);

            return back()->with('success', 'Kategori berhasil diupdate');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    public function destroy(Kategori $kategori)
    {
        try {
            $kategori->delete();
            return back()->with('success', 'Berhasil menghapus kategori');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    public function bulkDestroy(Request $request)
    {
        
        $validated = $request->validate([
            'ids' => 'required|array|min:1',
            'ids.*' => 'integer|exists:kategoris,id',
        ], [
            'ids.required' => 'Pilih minimal satu kategori',
        ]);

        try {
            $count = Kategori::whereIn('id', $validated['ids'])->delete();

            return back()->with('success', "{$count} kategori berhasil dihapus");
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }
}
