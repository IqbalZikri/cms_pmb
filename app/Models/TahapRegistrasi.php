<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TahapRegistrasi extends Model
{
    protected $fillable = [
        'tahap_registrasi'
    ];

    protected $casts = [
        'tahap_registrasi' => 'array'
    ];
}
