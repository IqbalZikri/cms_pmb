import Heading from '@/components/heading';
import { columns } from '@/components/kategori/columns';
import { DataTable } from '@/components/kategori/data-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { slugify } from '@/lib/utils';
import { store } from '@/routes/kategori';
import { Kategori as KategoriTypes } from '@/types/kategori';
import { Form, Head, Link } from '@inertiajs/react';
import { Plus, Tag } from 'lucide-react';
import { useState } from 'react';

interface Props {
    kategori?: KategoriTypes[] | { data: KategoriTypes[] };
}

export default function Kategori({ kategori }: Props) {
    const items: KategoriTypes[] = Array.isArray(kategori)
        ? kategori
        : (kategori?.data ?? []);

    const [isOpen, setOpen] = useState(false);
    const [nama, setNama] = useState('');
    const [slug, setSlug] = useState('');
    const [slugManual, setSlugManual] = useState(false);

    const handleNamaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNama(value);

        // slug ikut berubah selama belum diedit manual
        if (!slugManual) {
            setSlug(slugify(value));
        }
    };

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlugManual(true);
        setSlug(slugify(e.target.value));
    };
    return (
        <>
            <Head title="Kategori" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                {/* Header + tombol tambah */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Heading
                        title="Kategori"
                        description="Kelola semua data kategori berita"
                    />
                    <Dialog open={isOpen} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus />
                                Tambah
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Tambah Kategori</DialogTitle>
                                <DialogDescription>
                                    Tambah data kategori berita
                                </DialogDescription>
                            </DialogHeader>
                            <Form
                                action={store()}
                                method="POST"
                                onSuccess={() => {
                                    setNama('');
                                    setSlug('');
                                    setSlugManual(false);
                                    setOpen(false);
                                }}
                            >
                                {({ errors, processing }) => (
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="nm_kategori">
                                                Nama Kategori
                                            </FieldLabel>
                                            <Input
                                                name="nm_kategori"
                                                id="nm_kategori"
                                                placeholder="Nama Kategori"
                                                value={nama}
                                                onChange={handleNamaChange}
                                            />
                                            {errors.nm_kategori && (
                                                <div className="text-sm text-destructive">
                                                    {errors.nm_kategori}
                                                </div>
                                            )}
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="slug">
                                                Slug
                                            </FieldLabel>
                                            <Input
                                                name="slug"
                                                id="slug"
                                                placeholder="Slug"
                                                value={slug}
                                                onChange={handleSlugChange}
                                            />
                                            {errors.slug && (
                                                <div className="text-sm text-destructive">
                                                    {errors.slug}
                                                </div>
                                            )}
                                        </Field>

                                        <Button
                                            type="submit"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? 'Menyimpan...'
                                                : 'Simpan'}
                                        </Button>
                                    </FieldGroup>
                                )}
                            </Form>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Tabel */}
                <Card>
                    <CardHeader className="flex flex-row items-start justify-between gap-4">
                        <div className="space-y-1">
                            <CardTitle>Tabel Kategori Terbaru</CardTitle>
                            <CardDescription>
                                Kelola kategori berita.
                            </CardDescription>
                        </div>
                        {/* <Badge variant="secondary">
                            {kategori} data
                        </Badge> */}
                    </CardHeader>
                    <CardContent>
                        <DataTable columns={columns} data={items} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Kategori.layout = {
    breadcrumbs: [
        {
            title: 'Kategori',
        },
    ],
};
