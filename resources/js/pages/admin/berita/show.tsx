import { Head } from '@inertiajs/react';

export default function Show() {
    return (
        <>
            <Head title="Detail Berita" />
        </>
    );
}

Show.layout = {
    breadcrumbs: [
        {
            title: 'Berita',
        },
        {
            title: 'Detail Berita',
        },
    ],
};
