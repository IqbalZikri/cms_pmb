import Heading from '@/components/heading';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="Program Studi" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title="Program Studi"
                    description="Semua data program studi"
                />
            </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Program Studi',
        },
    ],
};
