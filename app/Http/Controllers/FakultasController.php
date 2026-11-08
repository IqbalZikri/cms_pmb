<?php

namespace App\Http\Controllers;

use App\Models\Fakultas;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FakultasController extends Controller
{
    public function index()
    {
        $data = Fakultas::latest()->paginate(10);
        return Inertia::render('admin/fakultas/index', [
            'data' => $data
        ]);
    }
}
