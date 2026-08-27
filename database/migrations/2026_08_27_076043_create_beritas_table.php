<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('beritas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constraint()->cascadeOnDelete();
            $table->foreignId('kategori_id')->constraint()->cascadeOnDelete();
            $table->string('judul');
            $table->string('ringkasan_berita');
            $table->text('isi_berita');
            $table->integer('views')->default(0);
            $table->string('gambar')->nullable();
            $table->enum('status', ['draft', 'published', 'archived']);
            $table->string('slug');
            $table->timestamp('published_at')->nullable();
            $table->softDeletes('deleted_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beritas');
    }
};
