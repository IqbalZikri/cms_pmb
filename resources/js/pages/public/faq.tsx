import { useMemo, useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    ChevronDown,
    CircleHelp,
    GraduationCap,
    Headphones,
    MessageCircle,
    Search,
    Wallet,
    X,
} from 'lucide-react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';

const kategori = [
    { id: 'semua', label: 'Semua Pertanyaan', icon: CircleHelp },
    { id: 'pendaftaran', label: 'Pendaftaran', icon: BookOpen },
    { id: 'akademik', label: 'Akademik', icon: GraduationCap },
    { id: 'biaya', label: 'Biaya Kuliah', icon: Wallet },
    { id: 'beasiswa', label: 'Beasiswa', icon: Headphones },
    { id: 'umum', label: 'Informasi Umum', icon: MessageCircle },
];

const daftarFaq = [
    {
        id: 1,
        kategori: 'pendaftaran',
        pertanyaan: 'Bagaimana cara mendaftar sebagai mahasiswa baru?',
        jawaban:
            'Calon mahasiswa dapat memulai pendaftaran melalui halaman PMB. Ikuti petunjuk yang tersedia, lengkapi informasi diri, pilih program studi, dan ikuti tahapan pendaftaran sesuai ketentuan kampus.',
    },
    {
        id: 2,
        kategori: 'pendaftaran',
        pertanyaan: 'Kapan pendaftaran mahasiswa baru dibuka?',
        jawaban:
            'Jadwal penerimaan mahasiswa baru mengikuti kalender PMB yang ditetapkan kampus. Pantau halaman informasi PMB untuk mengetahui periode pendaftaran dan pengumuman terbaru.',
    },
    {
        id: 3,
        kategori: 'pendaftaran',
        pertanyaan: 'Apa saja persyaratan untuk mendaftar?',
        jawaban:
            'Persyaratan umumnya mencakup identitas diri, Kartu Keluarga, ijazah atau Surat Keterangan Lulus, pas foto, serta dokumen tambahan sesuai jalur pendaftaran yang dipilih.',
    },
    {
        id: 4,
        kategori: 'pendaftaran',
        pertanyaan: 'Apakah pendaftaran dapat dilakukan secara online?',
        jawaban:
            'Informasi mengenai mekanisme pendaftaran dapat dilihat melalui halaman PMB. Silakan ikuti kanal pendaftaran resmi yang disediakan kampus.',
    },
    {
        id: 5,
        kategori: 'pendaftaran',
        pertanyaan: 'Bagaimana jika saya salah mengisi data pendaftaran?',
        jawaban:
            'Jika masih tersedia fitur perubahan data, calon mahasiswa dapat memperbaikinya melalui akun pendaftaran. Apabila data sudah terkunci, silakan hubungi panitia PMB.',
    },
    {
        id: 6,
        kategori: 'akademik',
        pertanyaan: 'Program studi apa saja yang tersedia?',
        jawaban:
            'Informasi mengenai program studi, profil, kurikulum, dan prospek karier dapat ditemukan pada halaman Program Studi.',
    },
    {
        id: 7,
        kategori: 'akademik',
        pertanyaan: 'Berapa lama masa studi yang harus ditempuh?',
        jawaban:
            'Masa studi mengikuti ketentuan kurikulum dan jenjang pendidikan masing-masing program studi. Informasi lebih lengkap dapat diperoleh dari halaman program studi atau bagian akademik.',
    },
    {
        id: 8,
        kategori: 'akademik',
        pertanyaan: 'Apakah tersedia kegiatan organisasi mahasiswa?',
        jawaban:
            'Informasi mengenai organisasi, kegiatan kemahasiswaan, dan aktivitas kampus dapat diperoleh melalui bagian kemahasiswaan.',
    },
    {
        id: 9,
        kategori: 'biaya',
        pertanyaan: 'Berapa biaya kuliah yang harus dibayarkan?',
        jawaban:
            'Informasi biaya pendidikan dapat berbeda berdasarkan program studi dan ketentuan tahun akademik. Silakan kunjungi halaman Biaya Kuliah untuk melihat informasi yang tersedia.',
    },
    {
        id: 10,
        kategori: 'biaya',
        pertanyaan: 'Apakah biaya kuliah dapat dibayarkan secara bertahap?',
        jawaban:
            'Ketentuan pembayaran, termasuk kemungkinan pembayaran secara bertahap, mengikuti kebijakan kampus. Silakan konfirmasi kepada bagian PMB atau administrasi keuangan.',
    },
    {
        id: 11,
        kategori: 'biaya',
        pertanyaan: 'Apakah ada biaya tambahan selain biaya kuliah?',
        jawaban:
            'Komponen biaya pendidikan dapat mencakup beberapa kebutuhan akademik dan administrasi. Periksa rincian pada halaman Biaya Kuliah atau hubungi bagian PMB.',
    },
    {
        id: 12,
        kategori: 'beasiswa',
        pertanyaan: 'Apakah kampus menyediakan program beasiswa?',
        jawaban:
            'Informasi mengenai peluang beasiswa dan dukungan pendidikan dapat dilihat pada halaman Beasiswa. Ketersediaan program mengikuti kebijakan dan ketentuan yang berlaku.',
    },
    {
        id: 13,
        kategori: 'beasiswa',
        pertanyaan: 'Siapa yang dapat mengajukan beasiswa?',
        jawaban:
            'Calon mahasiswa dapat mengajukan beasiswa sesuai persyaratan masing-masing program. Kriteria penerima dapat mencakup prestasi akademik, nonakademik, maupun kondisi ekonomi.',
    },
    {
        id: 14,
        kategori: 'beasiswa',
        pertanyaan: 'Bagaimana cara mengajukan beasiswa?',
        jawaban:
            'Pelajari jenis beasiswa yang tersedia, siapkan dokumen persyaratan, kemudian ikuti mekanisme pengajuan yang ditentukan oleh kampus.',
    },
    {
        id: 15,
        kategori: 'umum',
        pertanyaan: 'Di mana lokasi kampus?',
        jawaban:
            'Informasi alamat, petunjuk lokasi, dan kontak kampus dapat ditemukan melalui halaman Kontak.',
    },
    {
        id: 16,
        kategori: 'umum',
        pertanyaan: 'Bagaimana cara menghubungi pihak kampus?',
        jawaban:
            'Silakan kunjungi halaman Kontak untuk mendapatkan informasi saluran komunikasi resmi kampus dan bagian yang dapat dihubungi.',
    },
    {
        id: 17,
        kategori: 'umum',
        pertanyaan: 'Apakah tersedia informasi kegiatan kampus?',
        jawaban:
            'Informasi kegiatan, berita, pengumuman, dan aktivitas kampus dapat dilihat melalui halaman Berita dan Publikasi.',
    },
];

export default function FAQ() {
    const [kategoriAktif, setKategoriAktif] = useState('semua');
    const [kataKunci, setKataKunci] = useState('');
    const [faqAktif, setFaqAktif] = useState<number | null>(1);

    const faqTersaring = useMemo(() => {
        const keyword = kataKunci.toLowerCase().trim();

        return daftarFaq.filter((item) => {
            const sesuaiKategori =
                kategoriAktif === 'semua' || item.kategori === kategoriAktif;

            const sesuaiPencarian =
                !keyword ||
                item.pertanyaan.toLowerCase().includes(keyword) ||
                item.jawaban.toLowerCase().includes(keyword);

            return sesuaiKategori && sesuaiPencarian;
        });
    }, [kategoriAktif, kataKunci]);

    const hitungKategori = (id: string) => {
        if (id === 'semua') return daftarFaq.length;

        return daftarFaq.filter((item) => item.kategori === id).length;
    };

    const pilihKategori = (id: string) => {
        setKategoriAktif(id);
        setFaqAktif(null);
    };

    return (
        <MotionConfig reducedMotion="user">
            <main className="overflow-hidden bg-background text-foreground">
                {/* HERO */}
                <section className="relative isolate overflow-hidden bg-[var(--forest)] text-white">
                    <motion.img
                        src="/gedung/DSC06345.jpg"
                        alt="Gedung Universitas Cendekia Abditama"
                        className="absolute inset-0 -z-20 size-full object-cover object-center"
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 3,
                            ease: 'easeOut',
                        }}
                    />

                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 -z-10 bg-black/75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    />

                    {/* Decorative light */}
                    <motion.div
                        className="absolute -top-40 -right-40 -z-10 size-[500px] rounded-full bg-[#D8B66A]/15 blur-[100px]"
                        animate={{
                            x: [0, -30, 0],
                            y: [0, 25, 0],
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <div className="absolute inset-0 -z-10 bg-heritage-pattern opacity-20" />

                    <div className="absolute -top-40 -right-32 -z-10 h-[550px] w-[550px] rounded-full border border-white/10" />
                    <div className="absolute -top-24 -right-16 -z-10 h-[420px] w-[420px] rounded-full border border-white/10" />

                    <div className="relative page-shell py-24 text-center sm:py-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-7 flex items-center justify-center gap-3">
                                <span className="h-px w-10 bg-[var(--gold)]" />
                                <span className="eyebrow text-[var(--gold)]">
                                    Frequently Asked Questions
                                </span>
                                <span className="h-px w-10 bg-[var(--gold)]" />
                            </div>

                            <h1 className="mx-auto max-w-4xl text-5xl leading-[1.12] font-[var(--font-display)] tracking-tight sm:text-6xl lg:text-7xl">
                                Ada Pertanyaan?
                                <span className="block text-[var(--gold)] italic">
                                    Temukan Jawabannya.
                                </span>
                            </h1>

                            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/65">
                                Temukan informasi seputar pendaftaran, program
                                studi, biaya pendidikan, beasiswa, dan berbagai
                                informasi kampus lainnya.
                            </p>

                            {/* SEARCH */}
                            <div className="mx-auto mt-10 max-w-2xl">
                                <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white px-5 py-2 text-foreground shadow-2xl shadow-black/10 sm:px-7">
                                    <Search
                                        size={21}
                                        className="shrink-0 text-[var(--forest)]"
                                    />
                                    <input
                                        type="text"
                                        value={kataKunci}
                                        onChange={(event) => {
                                            setKataKunci(event.target.value);
                                            setFaqAktif(null);
                                        }}
                                        placeholder="Cari pertanyaan yang ingin kamu ketahui..."
                                        className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
                                    />
                                    {kataKunci && (
                                        <button
                                            type="button"
                                            onClick={() => setKataKunci('')}
                                            aria-label="Hapus pencarian"
                                            className="text-muted-foreground transition hover:text-foreground"
                                        >
                                            <X size={18} />
                                        </button>
                                    )}
                                </div>
                                <p className="mt-4 text-xs text-white/45">
                                    Contoh: biaya kuliah, beasiswa, pendaftaran,
                                    program studi
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ CONTENT */}
                <section className="section-pad">
                    <div className="page-shell">
                        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
                            {/* SIDEBAR KATEGORI */}
                            <aside>
                                <div className="mb-5">
                                    <span className="eyebrow text-[var(--forest)]">
                                        Jelajahi FAQ
                                    </span>
                                    <h2 className="mt-3 text-2xl font-[var(--font-display)]">
                                        Kategori Pertanyaan
                                    </h2>
                                </div>

                                <div className="space-y-2 lg:sticky lg:top-28">
                                    {kategori.map((item) => {
                                        const Icon = item.icon;
                                        const aktif = kategoriAktif === item.id;

                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() =>
                                                    pilihKategori(item.id)
                                                }
                                                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left transition ${
                                                    aktif
                                                        ? 'bg-[var(--forest)] text-white shadow-lg'
                                                        : 'text-muted-foreground hover:bg-[var(--surface)] hover:text-foreground'
                                                }`}
                                            >
                                                <Icon
                                                    size={19}
                                                    className={
                                                        aktif
                                                            ? 'text-[var(--gold)]'
                                                            : ''
                                                    }
                                                />
                                                <span className="flex-1 text-sm font-semibold">
                                                    {item.label}
                                                </span>
                                                <span
                                                    className={`rounded-full px-2 py-1 text-xs ${
                                                        aktif
                                                            ? 'bg-white/10 text-white'
                                                            : 'bg-[var(--surface)]'
                                                    }`}
                                                >
                                                    {hitungKategori(item.id)}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </aside>

                            {/* DAFTAR PERTANYAAN */}
                            <div>
                                <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
                                    <div>
                                        <span className="eyebrow text-[var(--forest)]">
                                            Pusat Informasi
                                        </span>
                                        <h2 className="mt-3 text-3xl font-[var(--font-display)] sm:text-4xl">
                                            {
                                                kategori.find(
                                                    (item) =>
                                                        item.id ===
                                                        kategoriAktif,
                                                )?.label
                                            }
                                        </h2>
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        {faqTersaring.length} pertanyaan
                                        ditemukan
                                    </p>
                                </div>

                                <div className="divide-y divide-border border-y border-border">
                                    <AnimatePresence mode="popLayout">
                                        {faqTersaring.map((item, index) => (
                                            <motion.div
                                                key={item.id}
                                                layout
                                                initial={{
                                                    opacity: 0,
                                                    y: 12,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -8,
                                                }}
                                                transition={{
                                                    duration: 0.2,
                                                }}
                                                className="py-2"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setFaqAktif(
                                                            faqAktif === item.id
                                                                ? null
                                                                : item.id,
                                                        )
                                                    }
                                                    className="flex w-full items-center gap-4 py-5 text-left"
                                                    aria-expanded={
                                                        faqAktif === item.id
                                                    }
                                                >
                                                    <span className="hidden text-lg font-[var(--font-display)] text-[var(--gold)] italic sm:block">
                                                        {String(
                                                            index + 1,
                                                        ).padStart(2, '0')}
                                                    </span>

                                                    <span className="flex-1 text-sm leading-7 font-semibold sm:text-base">
                                                        {item.pertanyaan}
                                                    </span>

                                                    <span
                                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                                                            faqAktif === item.id
                                                                ? 'bg-[var(--forest)] text-white'
                                                                : 'bg-[var(--surface)] text-[var(--forest)]'
                                                        }`}
                                                    >
                                                        <ChevronDown
                                                            size={18}
                                                            className={`transition-transform duration-300 ${
                                                                faqAktif ===
                                                                item.id
                                                                    ? 'rotate-180'
                                                                    : ''
                                                            }`}
                                                        />
                                                    </span>
                                                </button>

                                                <AnimatePresence
                                                    initial={false}
                                                >
                                                    {faqAktif === item.id && (
                                                        <motion.div
                                                            initial={{
                                                                height: 0,
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                height: 'auto',
                                                                opacity: 1,
                                                            }}
                                                            exit={{
                                                                height: 0,
                                                                opacity: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.25,
                                                            }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="max-w-3xl pb-6 pl-0 text-sm leading-8 text-muted-foreground sm:pl-10">
                                                                {item.jawaban}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {/* EMPTY STATE */}
                                {faqTersaring.length === 0 && (
                                    <div className="py-20 text-center">
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--forest)]">
                                            <Search size={27} />
                                        </div>
                                        <h3 className="mt-6 text-2xl font-[var(--font-display)]">
                                            Pertanyaan tidak ditemukan
                                        </h3>
                                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                                            Coba gunakan kata kunci lain atau
                                            pilih kategori pertanyaan yang
                                            berbeda.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setKataKunci('');
                                                setKategoriAktif('semua');
                                                setFaqAktif(1);
                                            }}
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--forest)]"
                                        >
                                            Tampilkan semua pertanyaan
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="pb-20">
                    <div className="page-shell">
                        <div className="relative overflow-hidden rounded-3xl bg-[var(--forest)] px-7 py-14 text-white sm:px-14 sm:py-16">
                            <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full border border-white/10" />
                            <div className="absolute -top-20 -right-8 h-56 w-56 rounded-full border border-white/10" />

                            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
                                <div className="max-w-2xl">
                                    <span className="eyebrow text-[var(--gold)]">
                                        Need More Information?
                                    </span>
                                    <h2 className="mt-5 text-4xl leading-tight font-[var(--font-display)] sm:text-5xl">
                                        Belum menemukan jawabanmu?
                                    </h2>
                                    <p className="mt-5 leading-8 text-white/65">
                                        Jangan ragu untuk menghubungi kami. Tim
                                        informasi kampus siap membantu menjawab
                                        pertanyaan yang kamu miliki.
                                    </p>
                                </div>

                                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                                    <Link
                                        href="/kontak"
                                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-bold text-[var(--forest)] transition hover:bg-white"
                                    >
                                        Hubungi Kami
                                        <ArrowUpRight size={18} />
                                    </Link>

                                    <Link
                                        href="/pmb/daftar"
                                        className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        Mulai Pendaftaran
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </MotionConfig>
    );
}
