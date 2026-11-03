<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $berita = Berita::latest()->paginate(10);

        return Inertia::render('berita/index', [
            'berita' => $berita
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $kategori = Kategori::get();

        return Inertia::render('berita/create', [
            'kategori' => $kategori,
            'berita' => null
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'kategori_id' => 'required|exists:kategoris,id',
            'judul' => 'required|string|255',
            'ringkasan_berita' => 'required|string|255',
            'isi_berita' => 'required|string',
            'views' => 'nullable',
            'gambar' => 'nullable|mimes:png,jpg,jpeg',
            'status' => 'required,in:draft,published',
            'slug' => 'required',
            'published_at' => 'nullable',
        ], [
            'kategori_id.required' => "Pilih salah satu kategori",
            'judul' => "Judul wajib diisi",
            'ringkasan_berita.required' => "Ringkasan berita wajib diisi",
            'isi_berita.required' => "Isi berita wajib diisi",
            'gambar.mimes' => "Format gambar yang didukung: png, jpg, jpeg",
            'status.required' => "Pilih salah satu status",
            'slug.required' => "Slug wajib diisi",
        ]);

        try {
            Berita::create($validated);

            return to_route('berita.index')->with('success', 'Berhasil menambahkan berita');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $berita = Berita::findOrFail($id);
        return Inertia::render('berita/show', [
            'berita' => $berita
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $berita = Berita::findOrFail($id);
        return Inertia::render('berita/edit', [
            'berita' => $berita
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'kategori_id' => 'required|exists:kategoris,id',
            'judul' => 'required|string|255',
            'ringkasan_berita' => 'required|string|255',
            'isi_berita' => 'required|string',
            'views' => 'nullable',
            'gambar' => 'nullable|mimes:png,jpg,jpeg',
            'status' => 'required,in:draft,published',
            'slug' => 'required',
            'published_at' => 'nullable',
        ], [
            'kategori_id.required' => "Pilih salah satu kategori",
            'judul' => "Judul wajib diisi",
            'ringkasan_berita.required' => "Ringkasan berita wajib diisi",
            'isi_berita.required' => "Isi berita wajib diisi",
            'gambar.mimes' => "Format gambar yang didukung: png, jpg, jpeg",
            'status.required' => "Pilih salah satu status",
            'slug.required' => "Slug wajib diisi",
        ]);

        try {
            $berita = Berita::findOrFail($id);

            $berita->update($validated);

            return to_route('berita.index')->with('success', 'Berhasil mengupdate berita');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $berita = Berita::findOrFail($id);
        try {
            $berita->forceDelete();
            return back()->with('success', 'Berhasil menghapus berita');
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
            $count = Berita::whereIn('id', $validated['ids'])->delete();

            return back()->with('success', "{$count} berita berhasil dihapus");
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }
}
