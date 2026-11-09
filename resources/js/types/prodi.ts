import { Fakultas } from './fakultas';

export type Prodi = {
    id: number;
    fakultas_id: number;
    fakultas?: Fakultas;
    nm_prodi: string;
    jenjang: string;
    deskripsi: string;
    akreditasi: string;
    url: string;
};
