import { Head } from '@inertiajs/react';

export default function Create() {
    return (
        <>
            <Head title="Tambah berita" />
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
