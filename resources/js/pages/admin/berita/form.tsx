import BeritaController from '@/actions/App/Http/Controllers/BeritaController';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Berita } from '@/types/berita';
import { Kategori } from '@/types/kategori';
import { Link, useForm } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';

interface Props {
    berita?: Berita | null;
    kategoris: Kategori[];
}

type BeritaFormData = {
    _method: 'post' | 'put';
    kategori_id: number | '';
    judul: string;
    ringkasan_berita: string;
    isi_berita: string;
    gambar: File | null;
    status: string;
};

const STATUS_OPTIONS = [
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Terbit' },
];

export default function Form({ berita, kategoris }: Props) {
    const isEdit = berita !== null;
    console.log(isEdit);
    

    const { data, setData, post, processing, errors, progress } =
        useForm<BeritaFormData>({
            // Laravel tidak bisa membaca multipart pada method PUT,
            // jadi edit dikirim lewat POST dengan _method spoofing.
            _method: isEdit ? 'put' : 'post',
            kategori_id: berita?.kategori_id ?? '',
            judul: berita?.judul ?? '',
            ringkasan_berita: berita?.ringkasan_berita ?? '',
            isi_berita: berita?.isi_berita ?? '',
            gambar: null,
            status: berita?.status ?? 'draft',
        });

    // Preview gambar: file baru jika dipilih, selain itu gambar lama (mode edit)
    const [preview, setPreview] = useState<string | null>(
        berita?.gambar ? `/storage/${berita.gambar}` : null,
    );

    useEffect(() => {
        return () => {
            if (preview?.startsWith('blob:')) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleGambar = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setData('gambar', file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(berita?.gambar ? `/storage/${berita.gambar}` : null);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const options = { forceFormData: true, preserveScroll: true };

        if (isEdit) {
            post(BeritaController.update.url(berita!.id), options);
        } else {
            post(BeritaController.store.url(), options);
        }
    };

    const inputClass =
        'w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-60';
    const labelClass = 'mb-1 block text-sm font-medium text-gray-700';
    const errorClass = 'mt-1 text-xs text-red-600';

    return (
        <form
            onSubmit={submit}
            className="space-y-5"
            encType="multipart/form-data"
        >
            {/* Kategori */}
            <div>
                <label htmlFor="kategori_id" className={labelClass}>
                    Kategori
                </label>
                <Select
                    value={String(data.kategori_id)}
                    onValueChange={(value) =>
                        setData('kategori_id', Number(value))
                    }
                >
                    <SelectTrigger id="kategori_id">
                        <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {kategoris.map((item) => (
                                <SelectItem
                                    key={item.id}
                                    value={String(item.id)}
                                >
                                    {item.nm_kategori}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.kategori_id && (
                    <p className={errorClass}>{errors.kategori_id}</p>
                )}
            </div>

            {/* Judul */}
            <div>
                <label htmlFor="judul" className={labelClass}>
                    Judul
                </label>
                <Input
                    id="judul"
                    type="text"
                    value={data.judul}
                    onChange={(e) => setData('judul', e.target.value)}
                    
                    placeholder="Judul berita"
                />
                {errors.judul && <p className={errorClass}>{errors.judul}</p>}
            </div>

            {/* Ringkasan */}
            <div>
                <label htmlFor="ringkasan_berita" className={labelClass}>
                    Ringkasan
                </label>
                <textarea
                    id="ringkasan_berita"
                    rows={3}
                    value={data.ringkasan_berita}
                    onChange={(e) =>
                        setData('ringkasan_berita', e.target.value)
                    }
                    className={inputClass}
                    placeholder="Ringkasan singkat yang tampil di daftar berita"
                />
                {errors.ringkasan_berita && (
                    <p className={errorClass}>{errors.ringkasan_berita}</p>
                )}
            </div>

            {/* Isi berita */}
            <div>
                <label htmlFor="isi_berita" className={labelClass}>
                    Isi berita
                </label>
                <textarea
                    id="isi_berita"
                    rows={12}
                    value={data.isi_berita}
                    onChange={(e) => setData('isi_berita', e.target.value)}
                    className={inputClass}
                    placeholder="Tulis isi berita lengkap"
                />
                {errors.isi_berita && (
                    <p className={errorClass}>{errors.isi_berita}</p>
                )}
            </div>

            {/* Gambar */}
            <div>
                <label htmlFor="gambar" className={labelClass}>
                    Gambar
                </label>

                {preview && (
                    <img
                        src={preview}
                        alt="Pratinjau gambar berita"
                        className="mb-3 h-44 w-full rounded-md border border-gray-200 object-cover sm:w-80"
                    />
                )}

                <input
                    id="gambar"
                    type="file"
                    accept="image/*"
                    onChange={handleGambar}
                    className="block w-full text-sm text-gray-600 file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-sm file:font-medium hover:file:bg-gray-200"
                />
                {isEdit && (
                    <p className="mt-1 text-xs text-gray-500">
                        Kosongkan jika tidak ingin mengganti gambar.
                    </p>
                )}
                {errors.gambar && <p className={errorClass}>{errors.gambar}</p>}

                {progress && (
                    <div className="mt-2 h-2 w-full overflow-hidden rounded bg-gray-200">
                        <div
                            className="h-full bg-blue-600 transition-all"
                            style={{ width: `${progress.percentage}%` }}
                        />
                    </div>
                )}
            </div>

            {/* Status */}
            <div>
                <label htmlFor="status" className={labelClass}>
                    Status
                </label>
                <Select
                    value={data.status}
                    onValueChange={(value) => setData('status', value)}
                >
                    <SelectTrigger id="status">
                        <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {STATUS_OPTIONS.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.status && <p className={errorClass}>{errors.status}</p>}
            </div>

            {/* Aksi */}
            <div className="flex items-center gap-3 pt-2">
                <Button type="submit" disabled={processing}>
                    {processing
                        ? 'Menyimpan...'
                        : isEdit
                          ? 'Simpan perubahan'
                          : 'Simpan berita'}
                </Button>
                <Link
                    href={BeritaController.index.url()}
                    className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                    Batal
                </Link>
            </div>
        </form>
    );
}
