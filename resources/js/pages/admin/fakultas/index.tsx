import Heading from '@/components/heading';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import DialogCreate, {
    DialogDelete,
    DialogEdit,
} from '@/components/ui/dialog-form';
import { FormFieldConfig } from '@/components/ui/form-fields';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { destroy, store, update } from '@/routes/fakultas';
import { Fakultas } from '@/types/fakultas';
import { Head } from '@inertiajs/react';
import { University } from 'lucide-react';

interface Props {
    fakultas: PaginatedData<Fakultas>;
}

export default function Index({ fakultas }: Props) {
    const data = fakultas.data;
    const form: FormFieldConfig[] = [
        {
            label: 'Nama Fakultas',
            name: 'nm_fakultas',
            required: true,
            placeholder: 'Nama Fakultas',
        },
    ];

    return (
        <>
            <Head title="Fakultas" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <Heading
                        title="Fakultas"
                        description="Semua data fakultas"
                    />
                    <DialogCreate
                        actionUrl={store().url}
                        form={form}
                        title="Fakultas"
                    />
                </div>
                <Card>
                    <CardHeader>
                        <div className="space-y-1">
                            <CardTitle>Tabel Fakultas</CardTitle>
                            <CardDescription>
                                Kelola data fakultas
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Nama Fakultas</TableHead>
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
                                                {item.nm_fakultas}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-2">
                                                    <DialogEdit
                                                        actionUrl={
                                                            update({
                                                                fakultas:
                                                                    item.id,
                                                            }).url
                                                        }
                                                        form={form}
                                                        title="Fakultas"
                                                        initialData={item}
                                                    />

                                                    <DialogDelete
                                                        title="Jalur Pendaftaran"
                                                        itemName={
                                                            item.nm_fakultas
                                                        }
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
                                                    <University className="h-6 w-6 text-muted-foreground" />
                                                </div>
                                                <p className="font-medium">
                                                    Belum ada fakultas
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Silakan tambahkan fakultas
                                                    baru.
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
            title: 'Fakultas',
        },
    ],
};
