<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prodi extends Model
{
    protected $fillable = [
        'fakultas_id',
        'nm_prodi',
        'jenjang',
        'deskripsi',
        'akreditasi',
        'url',
    ];

    public function fakultas(){
        return $this->belongsTo(Fakultas::class);
    }
}
