<?php

namespace App\Http\Controllers;

use App\Models\JalurPendaftaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Log;

class JalurPendaftaranController extends Controller
{
    public function public()
    {
        return Inertia::render('public/jalur-pendaftaran');
    }

    public function index()
    {
        $jalurPendaftaran = JalurPendaftaran::latest()->paginate(10);
        return Inertia::render('admin/jalur_pendaftaran/index', [
            'jalurPendaftaran' => $jalurPendaftaran
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'nm_jalur_pendaftaran' => 'required',
            'gambar' => 'nullable|image|mimes:png,jpg,jpeg|max:2048',
            'status' => 'required',
        ], [
            'nm_jalur_pendaftaran.required' => 'Nama jalur pendaftaran wajib diisi',
            'gambar.image' => 'File harus berupa gambar',
            'gambar.mimes' => 'Format gambar harus berupa png / jpeg / jpg',
            'gambar.max' => 'Ukuran gambar maksimal 2 MB',
            'status.required' => 'Pilih salah satu status jalur pendaftaran',
        ]);

        $gambar = null;

        try {
            if ($request->hasFile('gambar')) {
                $gambar = $request->file('gambar')
                    ->store('jalur_pendaftaran', 'public');
            }
            $validated['gambar'] = $gambar;

            JalurPendaftaran::create($validated);

            return back()->with(
                'success',
                'Berhasil menambahkan jalur pendaftaran'
            );

        } catch (\Throwable $th) {
            if ($gambar) {
                Storage::disk('public')->delete($gambar);
            }

            Log::error($th->getMessage());

            return back()->with('error', 'Terjadi Kesalahan');
        }
    }

    public function update(Request $request, JalurPendaftaran $jalurPendaftaran)
    {
        $validated = $request->validate([
            'nm_jalur_pendaftaran' => 'required',
            'gambar' => 'nullable|image|mimes:png,jpg,jpeg|max:2048',
            'status' => 'required',
        ], [
            'nm_jalur_pendaftaran.required' => 'Nama jalur pendaftaran wajib diisi',
            'gambar.image' => 'File harus berupa gambar',
            'gambar.mimes' => 'Format gambar harus berupa png / jpeg / jpg',
            'gambar.max' => 'Ukuran gambar maksimal 2 MB',
            'status.required' => 'Pilih salah satu status jalur pendaftaran',
        ]);

        $gambarBaru = null;
        $gambarLama = $jalurPendaftaran->gambar;

        try {
            if ($request->hasFile('gambar')) {
                $gambarBaru = $request->file('gambar')
                    ->store('jalur_pendaftaran', 'public');
                $validated['gambar'] = $gambarBaru;
            }
            $jalurPendaftaran->update($validated);
            if ($gambarBaru && $gambarLama) {
                Storage::disk('public')->delete($gambarLama);
            }

            return back()->with(
                'success',
                'Berhasil mengedit jalur pendaftaran'
            );

        } catch (\Throwable $th) {
            if ($gambarBaru) {
                Storage::disk('public')->delete($gambarBaru);
            }

            Log::error($th->getMessage());

            return back()->with('error', 'Terjadi Kesalahan');
        }
    }


    public function destroy(JalurPendaftaran $jalurPendaftaran)
    {
        try {
            $jalurPendaftaran->delete();

            return back()->with('success', 'Berhasil menghapus jalur pendaftaran');
        } catch (\Throwable $th) {
            Log::info($th->getMessage());
            return back()->with('error', 'Terjadi Kesalahan');
        }
    }
}
