import Heading from '@/components/heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="Fakultas" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading
                    title="Fakultas"
                    description="Semua data fakultas"
                />
                <Card>
                    <CardHeader>
                        <div className="space-y-1">
                            <CardTitle>Tabel Fakultas</CardTitle>
                            <CardDescription>Kelola data fakultas</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <DataTable/>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Fakultas',
        },
    ],
};
