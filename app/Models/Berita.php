<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Berita extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'user_id',
        'kategori_id',
        'judul',
        'ringkasan_berita',
        'isi_berita',
        'views',
        'gambar',
        'status',
        'slug',
        'published_at',
        'deleted_at'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function kategori(){
        return $this->belongsTo(Kategori::class);
    }
}
