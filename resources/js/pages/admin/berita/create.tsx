import { Head, useForm } from '@inertiajs/react';
import Form from './form';
import { Kategori } from '@/types/kategori';

interface Props {
    kategori: Kategori[];
    berita: null;
}

export default function Create({ kategori, berita }: Props) {
    return (
        <>
            <Head title="Tambah berita" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Form kategoris={kategori} berita={berita} />
            </div>
        </>
    );
}

Create.layouts = {
    breadcrumbs: [
        {
            title: 'Tambah Berita',
        },
    ],
};
