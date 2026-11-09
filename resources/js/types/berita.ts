import { Kategori } from './kategori';

export type Berita = {
    id: string;
    user_id: number;
    kategori_id: number;
    kategori?: Kategori;
    judul: string;
    ringkasan_berita: string;
    isi_berita: string;
    views: number;
    gambar: string;
    status: string;
    slug: string;
    published_at: string;
    deleted_at: Date;
};
