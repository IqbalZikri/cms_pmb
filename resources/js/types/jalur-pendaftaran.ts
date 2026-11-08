export type JalurPendaftaran = {
    id: number;
    nm_jalur_pendaftaran: string;
    gambar: string | null;
    status: 'Aktif' | 'Nonaktif';
};
