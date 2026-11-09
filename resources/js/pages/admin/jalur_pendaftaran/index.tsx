import Heading from '@/components/heading';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import DialogCreate, { DialogDelete, DialogEdit } from '@/components/ui/dialog-form';
import { FormFieldConfig } from '@/components/ui/form-fields';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { destroy, store, update } from '@/routes/admin/jalur-pendaftaran';
import { JalurPendaftaran } from '@/types/jalur-pendaftaran';
import { Head } from '@inertiajs/react';
import {
    CheckCircle2,
    CircleOff,
    GraduationCap,
    ImageIcon,
    MoreHorizontal,
    Pencil,
    Plus,
    Trash2,
} from 'lucide-react';

interface Props {
    jalurPendaftaran: PaginatedData<JalurPendaftaran>;
}

export default function Index({ jalurPendaftaran }: Props) {
    const data = jalurPendaftaran.data;

    const totalJalur = data.length;
    const totalAktif = data.filter((item) => item.status === 'Aktif').length;
    const totalNonaktif = data.filter(
        (item) => item.status === 'Nonaktif',
    ).length;

    const form: FormFieldConfig[] = [
        {
            label: 'Nama Jalur Pendaftaran',
            name: 'nm_jalur_pendaftaran',
            required: true,
            placeholder: 'Nama Jalur Pendaftaran',
        },
        {
            label: 'Gambar',
            name: 'gambar',
            type: 'file',
        },
        {
            label: 'Status',
            name: 'status',
            type: 'radio',
            options: [
                { label: 'Aktif', value: 'Aktif' },
                { label: 'Nonaktif', value: 'Nonaktif' },
            ],
        },
    ];

    return (
        <>
            <Head title="Jalur Pendaftaran" />

            <div className="space-y-6 p-4 md:p-6">
                {/* Header */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <Heading
                        title="Jalur Pendaftaran"
                        description="Kelola dan atur jalur pendaftaran mahasiswa baru."
                    />

                    <DialogCreate
                        title="Jalur Pendaftaran"
                        actionUrl={store().url}
                        form={form}
                    />
                </div>

                {/* Statistics */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-none shadow-sm">
                        <CardContent className="flex items-center justify-between p-5">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                    Total Jalur Pendaftaran
                                </p>
                                <h3 className="text-2xl font-bold">
                                    {totalJalur}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Seluruh jalur terdaftar
                                </p>
                            </div>
                            <div className="rounded-xl bg-blue-100 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardContent className="flex items-center justify-between p-5">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                    Jalur Aktif
                                </p>
                                <h3 className="text-2xl font-bold">
                                    {totalAktif}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Jalur yang tersedia
                                </p>
                            </div>
                            <div className="rounded-xl bg-green-100 p-3 text-green-700 dark:bg-green-950 dark:text-green-400">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardContent className="flex items-center justify-between p-5">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                    Jalur Nonaktif
                                </p>
                                <h3 className="text-2xl font-bold">
                                    {totalNonaktif}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    Jalur yang tidak tersedia
                                </p>
                            </div>
                            <div className="rounded-xl bg-red-100 p-3 text-red-700 dark:bg-red-950 dark:text-red-400">
                                <CircleOff className="h-6 w-6" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Table */}
                <Card className="overflow-hidden border-none shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between gap-4 border-b">
                        <div className="space-y-1">
                            <CardTitle className="text-lg">
                                Daftar Jalur Pendaftaran
                            </CardTitle>
                            <CardDescription>
                                Informasi seluruh jalur pendaftaran mahasiswa
                                baru.
                            </CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/40 hover:bg-muted/40">
                                    <TableHead className="w-[60px] text-center">
                                        No.
                                    </TableHead>
                                    <TableHead>
                                        Nama Jalur Pendaftaran
                                    </TableHead>
                                    <TableHead>Gambar</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">
                                        Aksi
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {data.length > 0 ? (
                                    data.map((item, index) => (
                                        <TableRow
                                            key={item.id}
                                            className="transition-colors hover:bg-muted/30"
                                        >
                                            <TableCell className="text-center text-muted-foreground">
                                                {index + 1}
                                            </TableCell>

                                            <TableCell className="font-medium">
                                                {item.nm_jalur_pendaftaran}
                                            </TableCell>

                                            <TableCell>
                                                {item.gambar ? (
                                                    <img
                                                        src={`/storage/${item.gambar}`}
                                                        alt={
                                                            item.nm_jalur_pendaftaran
                                                        }
                                                        className="h-12 w-20 rounded-lg border object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-12 w-20 items-center justify-center rounded-lg bg-muted">
                                                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </TableCell>

                                            <TableCell>
                                                <span
                                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                                                        item.status === 'Aktif'
                                                            ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400'
                                                            : 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400'
                                                    }`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${
                                                            item.status ===
                                                            'Aktif'
                                                                ? 'bg-green-600'
                                                                : 'bg-red-600'
                                                        }`}
                                                    />
                                                    {item.status}
                                                </span>
                                            </TableCell>

                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <DialogEdit
                                                        actionUrl={
                                                            update(item.id).url
                                                        }
                                                        form={form}
                                                        title="Jalur Pendaftaran"
                                                        initialData={item}
                                                    />

                                                    <DialogDelete
                                                        title="Jalur Pendaftaran"
                                                        itemName={item.nm_jalur_pendaftaran}
                                                        actionUrl={destroy(item.id).url}
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
                                                    <GraduationCap className="h-6 w-6 text-muted-foreground" />
                                                </div>
                                                <p className="font-medium">
                                                    Belum ada jalur pendaftaran
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Silakan tambahkan jalur
                                                    pendaftaran baru.
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
            title: 'Jalur Pendaftaran',
        },
    ],
};
