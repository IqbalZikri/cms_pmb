import { Kategori } from './kategori';

export type Berita = {
    id: number;
    user_id: number;
    kategori_id: number;
    kategori: Kategori;
    judul: string;
    ringkasan_berita: string;
    isi_berita: string;
    views: number;
    gambar: string;
    status: string;
    slug: string;
    published_at: Date;
    deleted_at: Date;
};
