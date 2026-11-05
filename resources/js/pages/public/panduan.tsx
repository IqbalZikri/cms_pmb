import { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    BookOpen,
    Check,
    CheckCircle2,
    ChevronDown,
    CircleHelp,
    ClipboardList,
    CreditCard,
    FileCheck,
    FileText,
    GraduationCap,
    Headphones,
    IdCard,
    Laptop,
    Mail,
    MessageCircle,
    ShieldCheck,
    Upload,
    UserRoundPlus,
} from 'lucide-react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';

const tahapan = [
    {
        nomor: '01',
        judul: 'Buat Akun Pendaftaran',
        deskripsi:
            'Daftarkan akun menggunakan email aktif dan informasi dasar calon mahasiswa.',
        detail: [
            'Buka halaman pendaftaran mahasiswa baru.',
            'Pilih menu daftar akun.',
            'Masukkan nama, email, dan informasi yang diminta.',
            'Lakukan verifikasi akun melalui email jika tersedia.',
        ],
        icon: UserRoundPlus,
    },
    {
        nomor: '02',
        judul: 'Lengkapi Data Diri',
        deskripsi:
            'Isi informasi pribadi, data keluarga, dan riwayat pendidikan dengan benar.',
        detail: [
            'Lengkapi biodata calon mahasiswa.',
            'Masukkan informasi orang tua atau wali.',
            'Isi data sekolah asal dan riwayat pendidikan.',
            'Periksa kembali seluruh informasi.',
        ],
        icon: ClipboardList,
    },
    {
        nomor: '03',
        judul: 'Pilih Program Studi',
        deskripsi:
            'Tentukan program studi yang sesuai dengan minat dan rencana pendidikanmu.',
        detail: [
            'Pelajari informasi program studi.',
            'Pilih program studi yang tersedia.',
            'Pastikan pilihan sudah sesuai.',
            'Simpan pilihan pendaftaran.',
        ],
        icon: GraduationCap,
    },
    {
        nomor: '04',
        judul: 'Lakukan Pembayaran',
        deskripsi:
            'Selesaikan pembayaran biaya pendaftaran apabila diwajibkan pada jalur yang dipilih.',
        detail: [
            'Periksa informasi biaya pendaftaran.',
            'Gunakan metode pembayaran yang disediakan.',
            'Simpan bukti transaksi.',
            'Pastikan status pembayaran telah terkonfirmasi.',
        ],
        icon: CreditCard,
    },
    {
        nomor: '05',
        judul: 'Unggah Dokumen',
        deskripsi:
            'Unggah dokumen persyaratan dengan format dan kualitas yang sesuai ketentuan.',
        detail: [
            'Siapkan seluruh dokumen persyaratan.',
            'Pastikan dokumen terbaca dengan jelas.',
            'Unggah berkas pada kolom yang tersedia.',
            'Periksa kembali berkas sebelum dikirim.',
        ],
        icon: Upload,
    },
    {
        nomor: '06',
        judul: 'Verifikasi dan Seleksi',
        deskripsi:
            'Panitia melakukan pemeriksaan terhadap data dan dokumen pendaftaran.',
        detail: [
            'Pantau status verifikasi melalui akun pendaftaran.',
            'Perbaiki dokumen apabila terdapat permintaan revisi.',
            'Ikuti tahapan seleksi jika dipersyaratkan.',
            'Periksa informasi hasil seleksi.',
        ],
        icon: ShieldCheck,
    },
    {
        nomor: '07',
        judul: 'Daftar Ulang',
        deskripsi:
            'Calon mahasiswa yang dinyatakan diterima melanjutkan proses registrasi sesuai ketentuan.',
        detail: [
            'Periksa pengumuman kelulusan.',
            'Pelajari ketentuan daftar ulang.',
            'Lengkapi persyaratan administrasi.',
            'Ikuti informasi jadwal registrasi mahasiswa baru.',
        ],
        icon: BadgeCheck,
    },
];

const dokumen = [
    {
        nama: 'Kartu Identitas',
        deskripsi: 'KTP atau identitas diri yang masih berlaku.',
        icon: IdCard,
    },
    {
        nama: 'Kartu Keluarga',
        deskripsi: 'Dokumen KK untuk melengkapi informasi keluarga.',
        icon: FileText,
    },
    {
        nama: 'Ijazah atau SKL',
        deskripsi: 'Ijazah terakhir atau Surat Keterangan Lulus.',
        icon: GraduationCap,
    },
    {
        nama: 'Pas Foto',
        deskripsi: 'Foto terbaru sesuai ketentuan pendaftaran.',
        icon: UserRoundPlus,
    },
    {
        nama: 'Rapor atau Nilai',
        deskripsi: 'Dokumen akademik sesuai persyaratan jalur masuk.',
        icon: BookOpen,
    },
    {
        nama: 'Dokumen Pendukung',
        deskripsi: 'Sertifikat prestasi atau berkas tambahan jika diperlukan.',
        icon: FileCheck,
    },
];

const faq = [
    {
        pertanyaan: 'Bagaimana cara memulai pendaftaran?',
        jawaban:
            'Calon mahasiswa dapat memulai dengan membuka halaman PMB, membuat akun pendaftaran, kemudian mengikuti tahapan pengisian data yang tersedia.',
    },
    {
        pertanyaan: 'Apakah pendaftaran bisa dilakukan secara online?',
        jawaban:
            'Panduan ini menggambarkan alur pendaftaran online. Pastikan mekanisme dan kanal pendaftaran yang digunakan sesuai dengan sistem resmi kampus.',
    },
    {
        pertanyaan: 'Apa saja dokumen yang perlu disiapkan?',
        jawaban:
            'Dokumen yang umumnya diperlukan meliputi identitas diri, Kartu Keluarga, ijazah atau SKL, pas foto, dan dokumen pendukung sesuai jalur pendaftaran.',
    },
    {
        pertanyaan: 'Bagaimana jika salah mengisi data pendaftaran?',
        jawaban:
            'Periksa apakah sistem masih menyediakan fitur perubahan data. Jika data sudah terkunci atau tidak dapat diubah, hubungi panitia PMB untuk mendapatkan arahan.',
    },
    {
        pertanyaan: 'Bagaimana mengetahui status pendaftaran?',
        jawaban:
            'Pantau status melalui akun pendaftaran atau kanal informasi resmi PMB. Perhatikan juga email dan informasi dari panitia.',
    },
    {
        pertanyaan: 'Apa yang harus dilakukan setelah dinyatakan diterima?',
        jawaban:
            'Ikuti instruksi daftar ulang, lengkapi dokumen administrasi, dan perhatikan batas waktu yang diumumkan oleh kampus.',
    },
];

export default function PanduanPendaftaran() {
    const [tahapAktif, setTahapAktif] = useState(0);
    const [faqAktif, setFaqAktif] = useState<number | null>(0);

    const tahap = tahapan[tahapAktif];
    const TahapIcon = tahap.icon;

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

                    <div className="page-shell grid min-h-[550px] items-center gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr]">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[var(--gold)]" />
                                <span className="eyebrow text-[var(--gold)]">
                                    Panduan Penerimaan Mahasiswa Baru
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-5xl leading-[1.12] font-[var(--font-display)] tracking-tight sm:text-6xl lg:text-7xl">
                                Satu Langkah
                                <span className="block text-[var(--gold)] italic">
                                    Menuju Masa Depan.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                                Bingung harus mulai dari mana? Ikuti panduan
                                pendaftaran berikut untuk memahami setiap
                                tahapan menjadi bagian dari keluarga besar
                                kampus kami.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    href="/pmb/daftar"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-bold text-[var(--forest)] transition hover:bg-white"
                                >
                                    Mulai Pendaftaran
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>

                                <a
                                    href="#alur-pendaftaran"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    Pelajari Alur
                                    <ArrowDown size={17} />
                                </a>
                            </div>
                        </motion.div>

                        {/* HERO VISUAL */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="relative mx-auto w-full max-w-md"
                        >
                            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs tracking-[0.2em] text-white/50 uppercase">
                                            Admission Guide
                                        </p>
                                        <h2 className="mt-2 text-3xl font-[var(--font-display)]">
                                            Your Journey
                                        </h2>
                                    </div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)] text-[var(--forest)]">
                                        <GraduationCap size={27} />
                                    </div>
                                </div>

                                <div className="my-9 space-y-5">
                                    {tahapan.slice(0, 4).map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.nomor}
                                                className="flex items-center gap-4"
                                            >
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[var(--gold)]">
                                                    <Icon size={20} />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm font-semibold">
                                                        {item.judul}
                                                    </p>
                                                    <p className="mt-1 text-xs text-white/45">
                                                        Tahap {item.nomor}
                                                    </p>
                                                </div>
                                                {index === 0 && (
                                                    <CheckCircle2
                                                        size={19}
                                                        className="text-[var(--gold)]"
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="rounded-2xl bg-white/10 p-5">
                                    <div className="flex items-center justify-between text-xs text-white/60">
                                        <span>Proses Pendaftaran</span>
                                        <span>7 Tahapan</span>
                                    </div>
                                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
                                        <div className="h-full w-full rounded-full bg-[var(--gold)]" />
                                    </div>
                                    <p className="mt-3 text-xs text-white/50">
                                        Ikuti setiap langkah sesuai petunjuk
                                        yang tersedia.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl bg-card p-4 text-foreground shadow-xl sm:flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gold)]/20 text-[var(--forest)]">
                                    <Check size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">
                                        Lebih Mudah
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Panduan langkah demi langkah
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="section-pad">
                    <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div>
                            <span className="eyebrow text-[var(--forest)]">
                                Selamat Datang Calon Mahasiswa
                            </span>
                            <h2 className="mt-5 text-4xl leading-tight font-[var(--font-display)] sm:text-5xl">
                                Perjalanan pendidikanmu dimulai dari sini.
                            </h2>
                        </div>

                        <div className="lg:pb-2 lg:pl-12">
                            <p className="leading-8 text-muted-foreground">
                                Proses pendaftaran dirancang agar calon
                                mahasiswa dapat memahami setiap tahapan dengan
                                mudah. Mulai dari membuat akun, melengkapi data,
                                hingga menyelesaikan registrasi sebagai
                                mahasiswa baru.
                            </p>
                            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[var(--forest)]">
                                <span className="h-px w-10 bg-[var(--gold)]" />
                                Persiapkan dirimu untuk langkah berikutnya
                            </div>
                        </div>
                    </div>
                </section>

                {/* ALUR RINGKAS */}
                <section
                    id="alur-pendaftaran"
                    className="scroll-mt-24 bg-[var(--surface)] section-pad"
                >
                    <div className="page-shell">
                        <div className="mb-12 max-w-2xl">
                            <span className="eyebrow text-[var(--forest)]">
                                Registration Process
                            </span>
                            <h2 className="mt-4 text-4xl font-[var(--font-display)] sm:text-5xl">
                                Kenali seluruh tahapan pendaftaran.
                            </h2>
                            <p className="mt-5 leading-7 text-muted-foreground">
                                Berikut gambaran perjalanan pendaftaran
                                mahasiswa baru dari awal hingga daftar ulang.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {tahapan.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <button
                                        key={item.nomor}
                                        type="button"
                                        onClick={() => {
                                            setTahapAktif(index);
                                            document
                                                .getElementById(
                                                    'detail-tahapan',
                                                )
                                                ?.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'center',
                                                });
                                        }}
                                        className={`group border p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                            tahapAktif === index
                                                ? 'border-[var(--forest)] bg-[var(--forest)] text-white'
                                                : 'border-border bg-card'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`text-2xl font-[var(--font-display)] italic ${
                                                    tahapAktif === index
                                                        ? 'text-[var(--gold)]'
                                                        : 'text-[var(--gold)]'
                                                }`}
                                            >
                                                {item.nomor}
                                            </span>
                                            <Icon
                                                size={23}
                                                className={
                                                    tahapAktif === index
                                                        ? 'text-[var(--gold)]'
                                                        : 'text-[var(--forest)]'
                                                }
                                            />
                                        </div>

                                        <h3 className="mt-8 text-base font-bold">
                                            {item.judul}
                                        </h3>
                                        <p
                                            className={`mt-3 text-sm leading-6 ${
                                                tahapAktif === index
                                                    ? 'text-white/65'
                                                    : 'text-muted-foreground'
                                            }`}
                                        >
                                            {item.deskripsi}
                                        </p>
                                        <div
                                            className={`mt-6 flex items-center gap-2 text-xs font-bold ${
                                                tahapAktif === index
                                                    ? 'text-[var(--gold)]'
                                                    : 'text-[var(--forest)]'
                                            }`}
                                        >
                                            Lihat detail
                                            <ArrowRight size={15} />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* DETAIL INTERAKTIF */}
                <section
                    id="detail-tahapan"
                    className="scroll-mt-24 section-pad"
                >
                    <div className="page-shell">
                        <div className="mb-12">
                            <span className="eyebrow text-[var(--forest)]">
                                Step by Step Guide
                            </span>
                            <h2 className="mt-4 text-4xl font-[var(--font-display)] sm:text-5xl">
                                Panduan setiap tahapan.
                            </h2>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                            {/* PILIHAN TAHAP */}
                            <div className="space-y-2">
                                {tahapan.map((item, index) => (
                                    <button
                                        type="button"
                                        key={item.nomor}
                                        onClick={() => setTahapAktif(index)}
                                        className={`flex w-full items-center gap-4 rounded-xl p-4 text-left transition ${
                                            tahapAktif === index
                                                ? 'bg-[var(--forest)] text-white shadow-lg'
                                                : 'hover:bg-[var(--surface)]'
                                        }`}
                                    >
                                        <span
                                            className={`text-xl font-[var(--font-display)] italic ${
                                                tahapAktif === index
                                                    ? 'text-[var(--gold)]'
                                                    : 'text-muted-foreground'
                                            }`}
                                        >
                                            {item.nomor}
                                        </span>
                                        <span className="flex-1 text-sm font-semibold">
                                            {item.judul}
                                        </span>
                                        <ArrowRight
                                            size={17}
                                            className={
                                                tahapAktif === index
                                                    ? 'text-[var(--gold)]'
                                                    : 'text-muted-foreground'
                                            }
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* KONTEN TAHAP */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={tahap.nomor}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                    className="rounded-3xl border border-border bg-[var(--surface)] p-7 sm:p-10"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="eyebrow text-[var(--forest)]">
                                            Tahap {tahap.nomor} / 07
                                        </span>
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--forest)] text-[var(--gold)]">
                                            <TahapIcon size={27} />
                                        </div>
                                    </div>

                                    <h3 className="mt-8 text-3xl font-[var(--font-display)] sm:text-4xl">
                                        {tahap.judul}
                                    </h3>
                                    <p className="mt-4 max-w-xl leading-8 text-muted-foreground">
                                        {tahap.deskripsi}
                                    </p>

                                    <div className="my-8 h-px bg-border" />

                                    <h4 className="text-sm font-bold">
                                        Langkah yang perlu dilakukan:
                                    </h4>

                                    <ul className="mt-6 space-y-5">
                                        {tahap.detail.map((detail, index) => (
                                            <li
                                                key={detail}
                                                className="flex items-start gap-4"
                                            >
                                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/25 text-xs font-bold text-[var(--forest)]">
                                                    {index + 1}
                                                </span>
                                                <p className="pt-0.5 text-sm leading-6 text-muted-foreground">
                                                    {detail}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7">
                                        <button
                                            type="button"
                                            disabled={tahapAktif === 0}
                                            onClick={() =>
                                                setTahapAktif((prev) =>
                                                    Math.max(0, prev - 1),
                                                )
                                            }
                                            className="text-sm font-semibold text-muted-foreground transition hover:text-[var(--forest)] disabled:opacity-30"
                                        >
                                            Tahap Sebelumnya
                                        </button>

                                        {tahapAktif < tahapan.length - 1 ? (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setTahapAktif((prev) =>
                                                        Math.min(
                                                            tahapan.length - 1,
                                                            prev + 1,
                                                        ),
                                                    )
                                                }
                                                className="inline-flex items-center gap-2 rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--ink)]"
                                            >
                                                Tahap Selanjutnya
                                                <ArrowRight size={16} />
                                            </button>
                                        ) : (
                                            <Link
                                                href="/pmb/daftar"
                                                className="inline-flex items-center gap-2 rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--ink)]"
                                            >
                                                Mulai Pendaftaran
                                                <ArrowUpRight size={16} />
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* DOKUMEN */}
                <section className="bg-[var(--surface)] section-pad">
                    <div className="page-shell">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                            <div>
                                <span className="eyebrow text-[var(--forest)]">
                                    Checklist Dokumen
                                </span>
                                <h2 className="mt-4 text-4xl font-[var(--font-display)] sm:text-5xl">
                                    Siapkan berkas sebelum mendaftar.
                                </h2>
                                <p className="mt-5 leading-8 text-muted-foreground">
                                    Agar proses pengisian formulir lebih lancar,
                                    persiapkan dokumen berikut terlebih dahulu.
                                </p>

                                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[var(--gold)]/40 bg-card p-5">
                                    <ShieldCheck
                                        size={24}
                                        className="shrink-0 text-[var(--forest)]"
                                    />
                                    <p className="text-sm leading-6 text-muted-foreground">
                                        Pastikan seluruh berkas asli, terbaca
                                        jelas, dan sesuai ketentuan pada jalur
                                        pendaftaran.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {dokumen.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.nama}
                                            className="flex gap-4 border border-border bg-card p-5 transition hover:shadow-md"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--forest)]/10 text-[var(--forest)]">
                                                <Icon size={23} />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-bold text-[var(--gold)]">
                                                        0{index + 1}
                                                    </span>
                                                    <h3 className="text-sm font-bold">
                                                        {item.nama}
                                                    </h3>
                                                </div>
                                                <p className="mt-2 text-xs leading-6 text-muted-foreground">
                                                    {item.deskripsi}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* TIPS */}
                <section className="section-pad">
                    <div className="page-shell">
                        <div className="rounded-3xl border border-border bg-card p-7 sm:p-10">
                            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                                <div>
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gold)]/20 text-[var(--forest)]">
                                        <Laptop size={27} />
                                    </div>
                                    <h2 className="mt-6 text-3xl font-[var(--font-display)]">
                                        Tips sebelum mengirim pendaftaran.
                                    </h2>
                                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                        Perhatikan beberapa hal berikut agar
                                        proses pendaftaran berjalan lebih
                                        lancar.
                                    </p>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    {[
                                        'Gunakan email dan nomor telepon yang aktif.',
                                        'Isi data sesuai dokumen identitas resmi.',
                                        'Periksa kembali pilihan program studi.',
                                        'Pastikan dokumen dapat dibaca dengan jelas.',
                                        'Simpan informasi akun pendaftaran dengan aman.',
                                        'Perhatikan jadwal dan pengumuman resmi PMB.',
                                    ].map((tip, index) => (
                                        <div
                                            key={tip}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--forest)] text-white">
                                                <Check size={15} />
                                            </div>
                                            <p className="text-sm leading-6 text-muted-foreground">
                                                {tip}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-[var(--surface)] section-pad">
                    <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <span className="eyebrow text-[var(--forest)]">
                                Frequently Asked Questions
                            </span>
                            <h2 className="mt-4 text-4xl font-[var(--font-display)] sm:text-5xl">
                                Pertanyaan yang sering diajukan.
                            </h2>
                            <p className="mt-5 leading-7 text-muted-foreground">
                                Temukan jawaban dari beberapa pertanyaan seputar
                                proses penerimaan mahasiswa baru.
                            </p>

                            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                                <CircleHelp
                                    size={20}
                                    className="text-[var(--forest)]"
                                />
                                Masih membutuhkan bantuan?
                            </div>

                            <Link
                                href="/kontak"
                                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--forest)] transition hover:gap-4"
                            >
                                Hubungi PMB
                                <ArrowRight size={17} />
                            </Link>
                        </div>

                        <div className="divide-y divide-border border-y border-border">
                            {faq.map((item, index) => (
                                <div key={item.pertanyaan}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFaqAktif(
                                                faqAktif === index
                                                    ? null
                                                    : index,
                                            )
                                        }
                                        className="flex w-full items-center justify-between gap-5 py-6 text-left"
                                        aria-expanded={faqAktif === index}
                                    >
                                        <span className="text-sm leading-7 font-semibold">
                                            {item.pertanyaan}
                                        </span>
                                        <ChevronDown
                                            size={20}
                                            className={`shrink-0 text-[var(--forest)] transition-transform ${
                                                faqAktif === index
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {faqAktif === index && (
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
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="max-w-2xl pr-8 pb-6 text-sm leading-7 text-muted-foreground">
                                                    {item.jawaban}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="page-shell">
                        <div className="relative overflow-hidden rounded-3xl bg-[var(--forest)] px-7 py-14 text-white sm:px-14 sm:py-16">
                            <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full border border-white/10" />
                            <div className="absolute -top-20 -right-8 h-56 w-56 rounded-full border border-white/10" />

                            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
                                <div className="max-w-2xl">
                                    <span className="eyebrow text-[var(--gold)]">
                                        Your Future Starts Here
                                    </span>
                                    <h2 className="mt-5 text-4xl leading-tight font-[var(--font-display)] sm:text-5xl">
                                        Sudah siap menjadi mahasiswa baru?
                                    </h2>
                                    <p className="mt-5 leading-8 text-white/65">
                                        Jangan tunda kesempatanmu. Mulai proses
                                        pendaftaran dan wujudkan rencana
                                        pendidikanmu sekarang.
                                    </p>
                                </div>

                                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                                    <Link
                                        href="/pmb/daftar"
                                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-bold text-[var(--forest)] transition hover:bg-white"
                                    >
                                        Daftar Sekarang
                                        <ArrowUpRight size={18} />
                                    </Link>
                                    <Link
                                        href="/kontak"
                                        className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        <Headphones size={17} />
                                        Hubungi Kami
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
