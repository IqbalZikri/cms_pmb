<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KategoriController extends Controller
{
    public function index(){
        $data = Kategori::paginate(10);

        return Inertia::render('kategori/index', [
            'data' => $data
        ]);
    }
}
