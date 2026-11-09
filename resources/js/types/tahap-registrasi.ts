export type Tahap = {
    judul: string;
    deskripsi: string;
};

export type TahapRegistrasi = {
    id: number;
    tahap_registrasi: (Tahap | string)[];
} | null;