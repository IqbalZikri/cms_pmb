import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { ListChecks, Plus, Trash2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { store } from '@/routes/admin/tahap-registrasi';
import { Tahap, TahapRegistrasi } from '@/types/tahap-registrasi';

const kosong = (): Tahap => ({ judul: '', deskripsi: '' });

// Data lama berupa string biasa diubah menjadi objek agar tetap bisa tampil
const normalisasi = (item: Tahap | string): Tahap =>
    typeof item === 'string' ? { judul: item, deskripsi: '' } : item;

export default function TahapRegistrasiForm({ tahap }: { tahap: TahapRegistrasi }) {
    const saved = (tahap?.tahap_registrasi ?? []).map(normalisasi);

    const { data, setData, post, processing, errors, isDirty } = useForm<{
        tahap_registrasi: Tahap[];
    }>({
        tahap_registrasi: saved.length > 0 ? saved : [kosong()],
    });

    // errors dari Laravel berkunci seperti "tahap_registrasi.0.judul"
    const fieldErrors = errors as Record<string, string | undefined>;

    const tambahTahap = () =>
        setData('tahap_registrasi', [...data.tahap_registrasi, kosong()]);

    const hapusTahap = (index: number) =>
        setData(
            'tahap_registrasi',
            data.tahap_registrasi.filter((_, i) => i !== index),
        );

    const ubahTahap = (index: number, field: keyof Tahap, value: string) => {
        const baru = data.tahap_registrasi.map((item, i) =>
            i === index ? { ...item, [field]: value } : item,
        );
        setData('tahap_registrasi', baru);
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post(store().url, { preserveScroll: true });
    };

    return (
        <div className="grid gap-6 p-4 lg:grid-cols-2">
            {/* ===== Form ===== */}
            <form onSubmit={submit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Kelola Tahap Registrasi</CardTitle>
                        <CardDescription>
                            Isi judul dan deskripsi untuk setiap langkah registrasi.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {data.tahap_registrasi.map((item, index) => {
                            const errJudul = fieldErrors[`tahap_registrasi.${index}.judul`];
                            const errDeskripsi =
                                fieldErrors[`tahap_registrasi.${index}.deskripsi`];

                            return (
                                <div
                                    key={index}
                                    className="flex gap-3 rounded-lg border bg-muted/30 p-4"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                                        {index + 1}
                                    </span>

                                    <div className="flex-1 space-y-3">
                                        <div className="space-y-1">
                                            <Input
                                                value={item.judul}
                                                onChange={(e) =>
                                                    ubahTahap(index, 'judul', e.target.value)
                                                }
                                                placeholder="Langkah tahapan, contoh: Buat akun"
                                                aria-invalid={!!errJudul}
                                            />
                                            {errJudul && (
                                                <p className="text-sm text-destructive">
                                                    {errJudul}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-1">
                                            <Textarea
                                                value={item.deskripsi}
                                                onChange={(e) =>
                                                    ubahTahap(index, 'deskripsi', e.target.value)
                                                }
                                                placeholder="Deskripsi tahapan, contoh: Daftar di portal PMB dengan email dan nomor HP aktif."
                                                rows={3}
                                                aria-invalid={!!errDeskripsi}
                                            />
                                            {errDeskripsi && (
                                                <p className="text-sm text-destructive">
                                                    {errDeskripsi}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="icon"
                                        onClick={() => hapusTahap(index)}
                                        disabled={data.tahap_registrasi.length === 1}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            );
                        })}

                        {errors.tahap_registrasi && (
                            <p className="text-sm text-destructive">
                                {errors.tahap_registrasi}
                            </p>
                        )}
                    </CardContent>

                    <CardFooter className="flex justify-between border-t pt-6">
                        <Button type="button" variant="secondary" onClick={tambahTahap}>
                            <Plus className="mr-2 h-4 w-4" />
                            Tambah Tahap
                        </Button>
                        <Button type="submit" disabled={processing || !isDirty}>
                            {processing ? 'Menyimpan...' : 'Simpan'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>

            {/* ===== Daftar tahap tersimpan ===== */}
            <Card className="self-start">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Tahap Tersimpan</CardTitle>
                        <Badge variant="secondary">{saved.length} tahap</Badge>
                    </div>
                    <CardDescription>
                        Urutan yang saat ini tampil di halaman registrasi.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {saved.length === 0 ? (
                        <div className="flex flex-col items-center gap-2 py-10 text-center text-muted-foreground">
                            <ListChecks className="h-8 w-8" />
                            <p className="text-sm">Belum ada tahap yang disimpan.</p>
                        </div>
                    ) : (
                        <ol className="space-y-6">
                            {saved.map((item, index) => (
                                <li key={index} className="relative flex gap-4">
                                    {index !== saved.length - 1 && (
                                        <span className="absolute -bottom-6 left-4 top-8 w-px -translate-x-1/2 bg-border" />
                                    )}
                                    <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                                        {index + 1}
                                    </span>
                                    <div className="space-y-1 pt-1">
                                        <p className="text-sm font-semibold leading-none">
                                            {item.judul}
                                        </p>
                                        {item.deskripsi && (
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {item.deskripsi}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

TahapRegistrasiForm.layout = {
    breadcrumbs: [
        {
            title: 'Tahap Registrasi',
        },
    ],
};