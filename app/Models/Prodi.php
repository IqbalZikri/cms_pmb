<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prodi extends Model
{
    protected $fillable = [
        'fakultas_id',
        'nm_prodi'
    ];

    public function fakultas(){
        return $this->belongsTo(Fakultas::class);
    }
}
