<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JalurPendaftaranController extends Controller
{
    public function public()
    {
        return Inertia::render('public/jalur-pendaftaran');
    }
}
