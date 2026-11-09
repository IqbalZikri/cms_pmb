import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import DialogCreate, {
    DialogDelete,
    DialogEdit,
} from '@/components/ui/dialog-form';
import { FormFieldConfig } from '@/components/ui/form-fields';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { destroy, store, update } from '@/routes/admin/prodi';
import { Fakultas } from '@/types/fakultas';
import { Prodi } from '@/types/prodi';
import { Head } from '@inertiajs/react';
import { BookOpen, Eye } from 'lucide-react';
import { useState } from 'react';

interface Props {
    prodi: PaginatedData<Prodi>;
    fakultas: Fakultas[];
}

export default function Index({ prodi, fakultas }: Props) {
    const data = prodi.data;
    const [isOpen, setOpen] = useState(false);

    const form: FormFieldConfig[] = [
        {
            label: 'Pilih fakultas',
            name: 'fakultas_id',
            required: true,
            type: 'select',
            options: fakultas.map((f) => ({
                label: f.nm_fakultas,
                value: String(f.id),
            })),
        },
        {
            label: 'Nama Program Studi',
            name: 'nm_prodi',
            required: true,
            placeholder: 'Nama Program Studi',
        },
        {
            label: 'Jenjang',
            name: 'jenjang',
            required: true,
            type: 'select',
            options: [
                { label: 'D3', value: 'D3' },
                { label: 'S1', value: 'S1' },
                { label: 'S2', value: 'S2' },
                { label: 'S3', value: 'S3' },
            ],
        },
        {
            label: 'Deskripsi',
            name: 'deskripsi',
            required: true,
            placeholder: 'Deskripsi Program Studi',
        },
        {
            label: 'Akreditasi',
            name: 'akreditasi',
            required: true,
            type: 'radio',
            options: [
                { label: 'Baik', value: 'Baik' },
                { label: 'Baik Sekali', value: 'Baik Sekali' },
                { label: 'Unggul', value: 'Unggul' },
            ],
        },
        {
            label: 'Url',
            name: 'url',
            placeholder: 'Web Program Studi',
        },
    ];

    return (
        <>
            <Head title="Program Studi" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Program Studi"
                        description="Semua data program studi"
                    />
                    <DialogCreate
                        actionUrl={store().url}
                        form={form}
                        title="Program Studi"
                    />
                </div>
                <Card>
                    <CardHeader>
                        <div className="space-y-1">
                            <CardTitle>Tabel Program Studi</CardTitle>
                            <CardDescription>
                                Kelola data program studi
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Nama Fakultas</TableHead>
                                    <TableHead>Nama Program Studi</TableHead>
                                    <TableHead>Jenjang</TableHead>
                                    <TableHead>akreditasi</TableHead>
                                    <TableHead>Web Prodi</TableHead>
                                    <TableHead>Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.length > 0 ? (
                                    data.map((item, index) => (
                                        <TableRow
                                            key={item.id}
                                            className="transition-colors hover:bg-muted/30"
                                        >
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>
                                                {item.fakultas?.nm_fakultas}
                                            </TableCell>
                                            <TableCell>
                                                {item.nm_prodi}
                                            </TableCell>
                                            <TableCell>
                                                {item.jenjang}
                                            </TableCell>
                                            <TableCell>
                                                {item.akreditasi}
                                            </TableCell>
                                            <TableCell>
                                                {item.url ?? '-'}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-2">
                                                    <DialogEdit
                                                        actionUrl={
                                                            update({
                                                                prodi: item.id,
                                                            }).url
                                                        }
                                                        form={form}
                                                        title="Program Studi"
                                                        initialData={item}
                                                    />

                                                    <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button variant="outline">
                                                                    <Eye  />
                                                                </Button>
                                                            </DialogTrigger>

                                                            <DialogContent className="sm:max-w-lg">
                                                                <DialogHeader>
                                                                    <DialogTitle>Detail Program Studi</DialogTitle>
                                                                    <DialogDescription>
                                                                        Informasi lengkap program studi Universitas Cendekia Abditama.
                                                                    </DialogDescription>
                                                                </DialogHeader>

                                                                <div className="space-y-4">
                                                                    <div className="space-y-1">
                                                                        <Label>Fakultas</Label>
                                                                        <Input
                                                                            value={item.fakultas?.nm_fakultas ?? '-'}
                                                                            readOnly
                                                                        />
                                                                    </div>

                                                                    <div className="space-y-1">
                                                                        <Label>Nama Program Studi</Label>
                                                                        <Input value={item.nm_prodi ?? '-'} readOnly />
                                                                    </div>

                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div className="space-y-1">
                                                                            <Label>Jenjang</Label>
                                                                            <Input value={item.jenjang ?? '-'} readOnly />
                                                                        </div>

                                                                        <div className="space-y-1">
                                                                            <Label>Akreditasi</Label>
                                                                            <Input value={item.akreditasi ?? '-'} readOnly />
                                                                        </div>
                                                                    </div>

                                                                    <div className="space-y-1">
                                                                        <Label>URL Program Studi</Label>
                                                                        <Input value={item.url ?? '-'} readOnly />
                                                                    </div>

                                                                    <div className="space-y-1">
                                                                        <Label>Deskripsi</Label>
                                                                        <Textarea
                                                                            value={item.deskripsi ?? '-'}
                                                                            readOnly
                                                                            className="min-h-24 resize-none"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <DialogFooter>
                                                                    <DialogClose asChild>
                                                                        <Button variant="outline">Tutup</Button>
                                                                    </DialogClose>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>
                                                    <DialogDelete
                                                        title="Jalur Pendaftaran"
                                                        itemName={item.nm_prodi}
                                                        actionUrl={
                                                            destroy(item.id).url
                                                        }
                                                    />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={5}
                                            className="h-48 text-center"
                                        >
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <div className="rounded-full bg-muted p-3">
                                                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                                                </div>
                                                <p className="font-medium">
                                                    Belum ada program studi
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Silakan tambahkan program
                                                    studi baru.
                                                </p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
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
