<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JalurPendaftaran extends Model
{
    protected $fillable = [
        'nm_jalur_pendaftaran',
        'gambar',
        'status'
    ];
}
