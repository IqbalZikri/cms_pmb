import { Head } from '@inertiajs/react';

export default function Edit() {
    return (
        <>
            <Head title="Edit berita" />
        </>
    );
}

Edit.layouts = {
    breadcrumbs: [
        {
            title: 'Berita',
        },
        {
            title: 'Edit Berita',
        },
    ],
};
