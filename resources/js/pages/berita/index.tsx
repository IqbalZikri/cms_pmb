import { Head, Link } from '@inertiajs/react';
import { Newspaper, Plus } from 'lucide-react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { DataTable } from '@/components/berita/data-table';
import { columns } from '@/components/berita/columns';
import { create, index } from '@/routes/berita';
import { Berita } from '@/types/berita';

interface Props {
    // bisa array biasa (->get()) atau paginator (->paginate())
    berita?: Berita[] | { data: Berita[] };
}

export default function Index({ berita }: Props) {
    // normalisasi: selalu menghasilkan array, tidak pernah undefined
    const items: Berita[] = Array.isArray(berita)
        ? berita
        : (berita?.data ?? []);

    return (
        <>
            <Head title="Berita" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                {/* Header + tombol tambah */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Heading
                        title="Berita"
                        description="Kelola semua data berita"
                    />
                    <Button asChild className="w-full sm:w-auto">
                        <Link href={create().url}>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah
                        </Link>
                    </Button>
                </div>

                {/* Ringkasan */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardDescription>Total Berita</CardDescription>
                            <Newspaper className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">
                                {items.length}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Tabel */}
                <Card>
                    <CardHeader className="flex flex-row items-start justify-between gap-4">
                        <div className="space-y-1">
                            <CardTitle>Tabel Berita Terbaru</CardTitle>
                            <CardDescription>
                                Kelola berita terbaru dan terlama.
                            </CardDescription>
                        </div>
                        <Badge variant="secondary">{items.length} data</Badge>
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={items} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Berita',
            href: index(),
        },
    ],
};
