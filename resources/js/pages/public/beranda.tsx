import { Berita } from '@/types/berita';
import { JalurPendaftaran } from '@/types/jalur-pendaftaran';
import { Prodi } from '@/types/prodi';
import { Tahap, TahapRegistrasi } from '@/types/tahap-registrasi';
import { Head } from '@inertiajs/react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { BookOpen, ClipboardList } from 'lucide-react';
import { useCallback, useEffect, useState, type ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  DATA — ganti semua isi di bagian ini dengan data resmi kampus      */
/*  (jangan tampilkan biaya/akreditasi/tanggal sebelum dikonfirmasi)   */
/* ------------------------------------------------------------------ */

const WA_NUMBER = '6285810279040'; // TODO: nomor WhatsApp panitia, format 62...
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang PMB.')}`;
const DAFTAR_URL = '/app'; // TODO: URL portal pendaftaran

interface Props {
    prodi: Prodi[];
    berita: Berita[];
    jalurPendaftaran: JalurPendaftaran[];
    tahapRegistrasi: TahapRegistrasi;
}

const slides = [
    {
        src: '/pmb/gambar5.jpeg',
        judul: 'Selamat Datang',
        deskripsi: 'Mulai perjalanan akademikmu bersama kami.',
    },
    {
        src: '/pmb/gambar2.jpeg',
        judul: 'Fasilitas Modern',
        deskripsi: 'Lingkungan belajar yang nyaman dan lengkap.',
    },
    {
        src: '/pmb/gambar3.jpeg',
        judul: 'Kehidupan Kampus',
        deskripsi: 'Tumbuh bersama komunitas yang suportif.',
    },
    {
        src: '/pmb/gambar4.jpeg',
        judul: 'Daftar Sekarang',
        deskripsi: 'Penerimaan mahasiswa baru telah dibuka.',
    },
];

const alur = [
    {
        judul: 'Buat akun',
        isi: 'Daftar di portal PMB dengan email dan nomor HP aktif.',
    },
    {
        judul: 'Isi formulir',
        isi: 'Lengkapi data diri, pilihan program studi, dan unggah berkas.',
    },
    {
        judul: 'Bayar pendaftaran',
        isi: 'Lakukan pembayaran sesuai petunjuk di portal.',
    },
    {
        judul: 'Ikuti seleksi',
        isi: 'Ikuti tes atau verifikasi berkas sesuai jalur yang dipilih.',
    },
    { judul: 'Lihat pengumuman', isi: 'Cek hasil seleksi di akun PMB kamu.' },
    {
        judul: 'Daftar ulang',
        isi: 'Selesaikan daftar ulang agar resmi menjadi mahasiswa.',
    },
];

// const gelombang = [
//     { nama: 'Gelombang 1', tanggal: 'Isi tanggal', status: 'Segera hadir' },
//     { nama: 'Gelombang 2', tanggal: 'Isi tanggal', status: 'Segera hadir' },
//     { nama: 'Gelombang 3', tanggal: 'Isi tanggal', status: 'Segera hadir' },
// ]; // TODO: jadwal resmi

const beasiswa = [
    'Beasiswa prestasi akademik',
    'Beasiswa prestasi non-akademik',
    'Keringanan biaya untuk keluarga kurang mampu',
]; // TODO: samakan dengan skema beasiswa resmi

const faq = [
    {
        q: 'Siapa saja yang bisa mendaftar?',
        a: 'Lulusan SMA/SMK/sederajat, lulusan baru maupun tahun sebelumnya, serta mahasiswa pindahan dari perguruan tinggi lain.',
    },
    {
        q: 'Berkas apa saja yang harus disiapkan?',
        a: 'Umumnya fotokopi ijazah atau SKL, rapor, KTP/KK, dan pas foto. Syarat lengkap bisa berbeda tiap jalur, lihat di portal pendaftaran.',
    },
    {
        q: 'Berapa biaya kuliah?',
        a: 'Rincian biaya tiap program studi tersedia di portal dan bisa ditanyakan langsung ke panitia lewat WhatsApp.',
    },
    {
        q: 'Apakah ada kelas karyawan?',
        a: 'Hubungi panitia PMB untuk informasi kelas dan jadwal perkuliahan yang tersedia.',
    },
    {
        q: 'Bagaimana kalau saya kesulitan mengisi formulir?',
        a: 'Hubungi panitia lewat WhatsApp. Tim kami akan membantu langkah demi langkah.',
    },
];

/* ------------------------------------------------------------------ */
/*  Komponen kecil                                                     */
/* ------------------------------------------------------------------ */

const DURASI = 5000;

const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%' }),
    center: { x: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%' }),
};

const ICONS: Record<string, string> = {
    book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14zM20 17v4H6.5A2.5 2.5 0 0 1 4 18.5',
    users: 'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    briefcase: 'M3 7h18v13H3zM8 7V4h8v3M3 13h18',
    building:
        'M4 21V3h10v18M14 9h6v12M8 7h2M8 11h2M8 15h2M17 13h0M17 17h0M2 21h20',
    check: 'M5 12l5 5L20 7',
    plus: 'M12 5v14M5 12h14',
    left: 'M15 18l-6-6 6-6',
    right: 'M9 18l6-6-6-6',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z',
    cap: 'M2 9l10-5 10 5-10 5zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5',
};

function Icon({
    name,
    className = 'h-6 w-6',
}: {
    name: string;
    className?: string;
}) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d={ICONS[name]} />
        </svg>
    );
}

function Section({
    id,
    judul,
    sub,
    children,
    className = '',
}: {
    id?: string;
    judul: string;
    sub?: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <section
            id={id}
            className={`px-6 py-20 md:px-16 md:py-28 ${className}`}
        >
            <div className="mx-auto max-w-6xl">
                <h2 className="max-w-2xl text-3xl leading-tight font-bold tracking-tight md:text-5xl">
                    {judul}
                </h2>
                {sub && (
                    <p className="mt-4 max-w-2xl text-base text-current/70 md:text-lg">
                        {sub}
                    </p>
                )}
                <div className="mt-12">{children}</div>
            </div>
        </section>
    );
}

function Faq({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-[#e8decd]">
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold focus-visible:outline-2 focus-visible:outline-[#0f7134]"
            >
                {q}
                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f3f6f5] text-[#0f7134]"
                >
                    <Icon name="plus" className="h-5 w-5" />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="max-w-2xl pb-6 text-neutral-600">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Halaman                                                            */
/* ------------------------------------------------------------------ */

export default function Beranda({
    prodi,
    berita,
    jalurPendaftaran,
    tahapRegistrasi,
}: Props) {
    const [index, setIndex] = useState(0);
    const [filter, setFilter] = useState('Semua');
    const [direction, setDirection] = useState(1);

    const next = useCallback(
        () => setIndex((i) => (i + 1) % slides.length),
        [],
    );
    const prev = useCallback(
        () => setIndex((i) => (i - 1 + slides.length) % slides.length),
        [],
    );
    const goTo = (i: number) => {
        if (i === index) return;
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    };

    useEffect(() => {
        const t = setTimeout(next, DURASI);
        return () => clearTimeout(t);
    }, [index, next]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [next, prev]);

    const onDragEnd = (_: unknown, info: PanInfo) => {
        if (info.offset.x < -80) next();
        else if (info.offset.x > 80) prev();
    };

    const slide = slides[index];
    const jenjang = [
        'Semua',
        ...Array.from(new Set(prodi.map((p) => p.jenjang))),
    ];
    const prodiTampil =
        filter === 'Semua' ? prodi : prodi.filter((p) => p.jenjang === filter);

    const normalisasi = (item: Tahap | string): Tahap =>
        typeof item === 'string' ? { judul: item, deskripsi: '' } : item;

    const saved = (tahapRegistrasi?.tahap_registrasi ?? []).map(normalisasi);

    return (
        <>
            <Head title="Penerimaan Mahasiswa Baru" />

            <div className="bg-[#fafafa] font-sans text-neutral-900">
                {/* ============ HERO / SLIDER ============ */}
                <section className="relative isolate h-[calc(100dvh-4rem)] min-h-[560px] w-full overflow-hidden bg-[#0f7134] text-white">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.7,
                                ease: [0.77, 0, 0.175, 1],
                            }}
                            className="absolute inset-0 cursor-grab active:cursor-grabbing"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={onDragEnd}
                        >
                            <img
                                src={slide.src}
                                alt={slide.judul}
                                draggable={false}
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div className="pointer-events-none absolute inset-0 bg-black/50" />

                    {/* Caption + CTA */}
                    <div className="absolute inset-0 flex items-center justify-center px-6 pb-12 md:px-16">
                        <div className="mx-auto w-full max-w-6xl text-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.6, delay: 0.15 }}
                                    className="pointer-events-none mx-auto max-w-3xl"
                                >
                                    <span className="mb-4 inline-block rounded-full bg-[#ffb652] px-3 py-1 text-xs font-semibold text-[#3b1d00]">
                                        Penerimaan Mahasiswa Baru
                                    </span>
                                    <h1 className="text-4xl leading-[1.05] font-bold tracking-tight text-shadow-lg/30 md:text-7xl">
                                        {slide.judul}
                                    </h1>
                                    <p className="mt-4 text-base text-white/90 text-shadow-lg/30 md:text-xl">
                                        {slide.deskripsi}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <a
                                    href={DAFTAR_URL}
                                    className="inline-flex items-center gap-2 rounded-full bg-[#ffb652] px-7 py-3.5 font-semibold text-[#3b1d00] transition hover:bg-[#ffc574] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Daftar sekarang
                                    <Icon name="arrow" className="h-5 w-5" />
                                </a>
                                <a
                                    href="#prodi"
                                    className="inline-flex items-center rounded-full border border-white/50 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Lihat program studi
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Panah */}
                    {(['kiri', 'kanan'] as const).map((arah) => (
                        <button
                            key={arah}
                            onClick={arah === 'kiri' ? prev : next}
                            aria-label={
                                arah === 'kiri'
                                    ? 'Slide sebelumnya'
                                    : 'Slide berikutnya'
                            }
                            className={`absolute top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur transition hover:scale-110 hover:bg-white/25 md:block ${
                                arah === 'kiri' ? 'left-6' : 'right-6'
                            }`}
                        >
                            <Icon name={arah === 'kiri' ? 'left' : 'right'} />
                        </button>
                    ))}

                    {/* Progress bar */}
                    <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-3 px-6 pb-[env(safe-area-inset-bottom)]">
                        {slides.map((s, i) => (
                            <button
                                key={s.src}
                                onClick={() => goTo(i)}
                                aria-label={`Ke slide ${i + 1}`}
                                className="relative h-1.5 w-12 overflow-hidden rounded-full bg-white/30 md:w-20"
                            >
                                {i === index && (
                                    <motion.span
                                        key={index}
                                        className="absolute inset-y-0 left-0 rounded-full bg-[#ffb652]"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{
                                            duration: DURASI / 1000,
                                            ease: 'linear',
                                        }}
                                    />
                                )}
                                {i < index && (
                                    <span className="absolute inset-0 rounded-full bg-white/80" />
                                )}
                            </button>
                        ))}
                    </div>
                </section>

                {/* ============ INFO CEPAT ============ */}
                <div className="relative z-10 mx-auto -mt-1 max-w-6xl px-6 md:px-16">
                    <div className="overflow-hidden rounded-b-3xl bg-white px-8 py-6 shadow-xl shadow-[#0f7134]/10">
                        <p className="text-md text-center font-bold text-neutral-500">
                            Jenis Pendaftaran
                        </p>

                        <div className="mt-3 grid gap-3 md:grid-cols-2">
                            {['Jalur Reguler', 'Jalur Beasiswa'].map(
                                (jalur) => (
                                    <p
                                        key={jalur}
                                        className="rounded-xl bg-[#f3f6f5] px-5 py-3 text-center text-lg font-bold text-[#0f7134]"
                                    >
                                        {jalur}
                                    </p>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                {jalurPendaftaran.length > 0 && (
                    <section className="md:px-16 md:py-28">
                        <div className="mx-auto">
                            <div
                                className="grid justify-items-center gap-6"
                                style={{
                                    gridTemplateColumns: `repeat(${Math.min(jalurPendaftaran.length, 4)}, minmax(0, 1fr))`,
                                }}
                            >
                                {jalurPendaftaran.map((item) => (
                                    <img
                                        key={item.id}
                                        src={`/storage/${item.gambar}`}
                                        alt="jalur pendaftaran"
                                        className="w-full max-w-[500px] rounded-xl"
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ============ PROGRAM STUDI ============ */}
                <Section
                    id="prodi"
                    judul="Pilih program studi yang sesuai minatmu"
                    sub="Filter berdasarkan jenjang untuk melihat pilihan yang tersedia."
                    className="bg-[#f3f6f5]"
                >
                    {prodi.length > 0 ? (
                        <>
                            <div
                                className="flex flex-wrap gap-2"
                                role="tablist"
                                aria-label="Filter jenjang"
                            >
                                {jenjang.map((j) => (
                                    <button
                                        key={j}
                                        role="tab"
                                        aria-selected={filter === j}
                                        onClick={() => setFilter(j)}
                                        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                                            filter === j
                                                ? 'bg-[#0f7134] text-white'
                                                : 'bg-white text-neutral-700 hover:bg-[#e8decd]'
                                        }`}
                                    >
                                        {j}
                                    </button>
                                ))}
                            </div>

                            <motion.div
                                layout
                                className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                            >
                                <AnimatePresence mode="popLayout">
                                    {prodiTampil.map((p) => (
                                        <motion.a
                                            layout
                                            key={p.nm_prodi}
                                            href={DAFTAR_URL}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="group flex items-start gap-4 rounded-2xl bg-white p-6 transition hover:shadow-lg hover:shadow-[#0f7134]/10"
                                        >
                                            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#ffb652]/25 text-[#c96517]">
                                                <Icon name="cap" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-neutral-500">
                                                    {p.fakultas?.nm_fakultas}
                                                </p>
                                                <h3 className="mt-0.5 text-lg font-bold">
                                                    {p.nm_prodi}
                                                </h3>
                                                <span className="mt-3 inline-block rounded-full bg-[#0f7134]/10 px-3 py-1 text-xs font-semibold text-[#0f7134]">
                                                    {p.jenjang}
                                                </span>
                                            </div>
                                            <Icon
                                                name="arrow"
                                                className="h-5 w-5 text-neutral-300 transition group-hover:translate-x-1 group-hover:text-[#c96517]"
                                            />
                                        </motion.a>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#e8decd] bg-white px-6 py-16 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f7134]/10 text-[#0f7134]">
                                    <BookOpen
                                        className="h-8 w-8"
                                        strokeWidth={1.8}
                                    />
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-neutral-800">
                                    Belum ada Program Studi
                                </h3>
                                <p className="mt-2 max-w-md text-neutral-600">
                                    Program studi baru akan tampil di sini.
                                    Silakan kembali lagi nanti.
                                </p>
                            </div>
                        </>
                    )}
                </Section>

                {/* ============ BERITA ============ */}
                <Section
                    id="berita"
                    judul="Berita dan informasi terbaru"
                    sub="Pengumuman, jadwal, dan kegiatan terbaru seputar penerimaan mahasiswa baru."
                >
                    {berita.length === 0 ? (
                        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#e8decd] bg-white px-6 py-16 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f7134]/10 text-[#0f7134]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-8 w-8"
                                >
                                    <path d="M4 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2V5Z" />
                                    <path d="M19 8h2v11a2 2 0 0 1-2 2" />
                                    <path d="M8 8h7M8 12h7M8 16h4" />
                                </svg>
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-neutral-800">
                                Belum ada berita
                            </h3>
                            <p className="mt-2 max-w-md text-neutral-600">
                                Pengumuman dan informasi terbaru seputar
                                penerimaan mahasiswa baru akan tampil di sini.
                                Silakan kembali lagi nanti.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-6 lg:grid-cols-5">
                                {/* Berita utama */}
                                <a
                                    href={`/berita/${berita[0].slug}`}
                                    className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-[#0f7134] text-white lg:col-span-3 lg:row-span-2"
                                >
                                    <img
                                        src={berita[0].gambar}
                                        alt={berita[0].judul}
                                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07381a]/95 via-black/30 to-transparent" />
                                    <div className="relative p-8 md:p-10">
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="rounded-full bg-[#ffb652] px-3 py-1 font-semibold text-[#3b1d00]">
                                                {
                                                    berita[0].kategori
                                                        ?.nm_kategori
                                                }
                                            </span>
                                            <span className="text-white/80">
                                                {berita[0].published_at}
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-2xl leading-tight font-bold md:text-4xl">
                                            {berita[0].judul}
                                        </h3>
                                        <p className="mt-3 line-clamp-2 max-w-xl text-white/85">
                                            {berita[0].ringkasan_berita}
                                        </p>
                                        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#ffb652]">
                                            Baca selengkapnya
                                            <Icon
                                                name="arrow"
                                                className="h-5 w-5 transition group-hover:translate-x-1"
                                            />
                                        </span>
                                    </div>
                                </a>

                                {/* Berita lainnya */}
                                {berita.slice(1).map((b) => (
                                    <a
                                        key={b.slug}
                                        href={`/berita/${b.slug}`}
                                        className="group flex overflow-hidden rounded-3xl border border-[#e8decd] bg-white transition hover:shadow-lg hover:shadow-[#0f7134]/10 lg:col-span-2"
                                    >
                                        <div className="w-2/5 shrink-0 overflow-hidden">
                                            <img
                                                src={b.gambar}
                                                alt={b.judul}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="flex flex-wrap items-center gap-2 text-xs">
                                                <span className="rounded-full bg-[#0f7134]/10 px-3 py-1 font-semibold text-[#0f7134]">
                                                    {b.kategori?.nm_kategori}
                                                </span>
                                                <span className="text-neutral-500">
                                                    {b.published_at}
                                                </span>
                                            </div>
                                            <h3 className="mt-3 line-clamp-2 text-lg leading-snug font-bold">
                                                {b.judul}
                                            </h3>
                                            <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
                                                {b.ringkasan_berita}
                                            </p>
                                            <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[#c96517]">
                                                Baca selengkapnya
                                                <Icon
                                                    name="arrow"
                                                    className="h-4 w-4 transition group-hover:translate-x-1"
                                                />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="mt-10 text-center">
                                <a
                                    href="/berita"
                                    className="inline-flex items-center gap-2 rounded-full border border-[#0f7134] px-7 py-3 font-semibold text-[#0f7134] transition hover:bg-[#0f7134] hover:text-white"
                                >
                                    Lihat semua berita
                                    <Icon name="arrow" className="h-5 w-5" />
                                </a>
                            </div>
                        </>
                    )}
                </Section>

                {/* ============ ALUR ============ */}
                <Section
                    id="alur"
                    judul="Langkah menjadi mahasiswa baru"
                    sub="Seluruh proses dilakukan online lewat portal pendaftaran."
                    className="bg-[#e8decd]/45"
                >
                    {tahapRegistrasi ? (
                        <>
                            {saved.map((a, i) => (
                                <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                                    <li key={i} className="flex gap-5">
                                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#c96517] text-lg font-bold text-white">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-bold">
                                                {a?.judul}
                                            </h3>
                                            <p className="mt-1 text-neutral-700">
                                                {a.deskripsi}
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                            ))}
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#e8decd] bg-white px-6 py-16 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f7134]/10 text-[#0f7134]">
                                    <ClipboardList
                                        className="h-8 w-8"
                                        strokeWidth={1.8}
                                    />
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-neutral-800">
                                    Belum ada langkah registrasi
                                </h3>
                                <p className="mt-2 max-w-md text-neutral-600">
                                    Langkah registrasi akan tampil di sini.
                                    Silakan kembali lagi nanti.
                                </p>
                            </div>
                        </>
                    )}
                </Section>

                {/* ============ JADWAL ============ */}
                {/* <Section
                    id="jadwal"
                    judul="Jadwal gelombang pendaftaran"
                    sub="Daftar lebih awal supaya persiapanmu lebih tenang."
                >
                    <div className="divide-y divide-[#e8decd] overflow-hidden rounded-3xl border border-[#e8decd] bg-white">
                        {gelombang.map((g, i) => (
                            <div
                                key={g.nama}
                                className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10"
                            >
                                <div className="flex items-center gap-4">
                                    <span
                                        className={`h-3 w-3 rounded-full ${i === 0 ? 'bg-[#0f7134]' : 'bg-[#e8decd]'}`}
                                    />
                                    <h3 className="text-lg font-bold">
                                        {g.nama}
                                    </h3>
                                </div>
                                <p className="text-neutral-600">{g.tanggal}</p>
                                <span className="rounded-full bg-[#f3f6f5] px-4 py-1.5 text-sm font-semibold text-[#0f7134]">
                                    {g.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Section> */}

                {/* ============ BIAYA & BEASISWA ============ */}
                <Section
                    id="beasiswa"
                    judul="Biaya kuliah dan beasiswa"
                    className="bg-[#f3f6f5]"
                >
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-white p-8 md:p-10">
                            <h3 className="text-2xl font-bold">
                                Rincian biaya
                            </h3>
                            <p className="mt-3 text-neutral-600">
                                Biaya berbeda untuk tiap program studi dan jalur
                                masuk. Minta rincian lengkapnya ke panitia agar
                                tidak ada biaya yang tidak terduga.
                            </p>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f7134] px-6 py-3 font-semibold text-white transition hover:bg-[#0c5c2a]"
                            >
                                <Icon name="chat" className="h-5 w-5" />
                                Tanya biaya via WhatsApp
                            </a>
                        </div>
                        <div className="rounded-3xl bg-[#0f7134] p-8 text-white md:p-10">
                            <h3 className="text-2xl font-bold">Beasiswa</h3>
                            <ul className="mt-6 space-y-4">
                                {beasiswa.map((b) => (
                                    <li
                                        key={b}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ffb652] text-[#3b1d00]">
                                            <Icon
                                                name="check"
                                                className="h-3.5 w-3.5"
                                            />
                                        </span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* ============ FAQ ============ */}
                <Section id="faq" judul="Pertanyaan yang sering diajukan">
                    <div className="max-w-3xl border-t border-[#e8decd]">
                        {faq.map((f) => (
                            <Faq key={f.q} {...f} />
                        ))}
                    </div>
                </Section>

                {/* ============ CTA AKHIR ============ */}
                <section className="px-6 pb-20 md:px-16 md:pb-28">
                    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0f7134] px-8 py-16 text-white md:px-16 md:py-20">
                        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#ffb652]/25" />
                        <div className="pointer-events-none absolute right-40 -bottom-32 h-64 w-64 rounded-full bg-[#c96517]/30" />
                        <div className="relative max-w-2xl">
                            <h2 className="text-3xl leading-tight font-bold md:text-5xl">
                                Siap menjadi bagian dari kampus kami?
                            </h2>
                            <p className="mt-4 text-lg text-white/85">
                                Buat akun, isi formulir, dan selesaikan
                                pendaftaranmu hari ini.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href={DAFTAR_URL}
                                    className="rounded-full bg-[#ffb652] px-7 py-3.5 font-semibold text-[#3b1d00] transition hover:bg-[#ffc574]"
                                >
                                    Daftar sekarang
                                </a>
                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/50 px-7 py-3.5 font-semibold transition hover:bg-white/15"
                                >
                                    Hubungi panitia
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tombol WhatsApp melayang */}
                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Chat panitia PMB lewat WhatsApp"
                    className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#c96517] text-white shadow-lg shadow-black/25 transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c96517]"
                >
                    <Icon name="chat" className="h-7 w-7" />
                </a>
            </div>
        </>
    );
}
