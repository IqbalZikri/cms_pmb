import { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Award,
    BookOpen,
    CheckCircle2,
    ChevronDown,
    GraduationCap,
    HeartHandshake,
    Lightbulb,
    MessageCircle,
    ShieldCheck,
    Sparkles,
    Wallet,
} from 'lucide-react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';

const jenisBeasiswa = [
    {
        nomor: '01',
        kategori: 'Prestasi Akademik',
        judul: 'Beasiswa Prestasi',
        deskripsi:
            'Dukungan pendidikan bagi calon mahasiswa yang memiliki pencapaian akademik dan semangat untuk terus berkembang.',
        icon: Award,
        warna: 'bg-[var(--forest)]',
        label: 'Akademik',
        manfaat: [
            'Ditujukan bagi calon mahasiswa berprestasi',
            'Mempertimbangkan pencapaian akademik',
            'Seleksi berdasarkan ketentuan kampus',
        ],
    },
    {
        nomor: '02',
        kategori: 'Dukungan Pendidikan',
        judul: 'Beasiswa Bantuan Pendidikan',
        deskripsi:
            'Kesempatan memperoleh dukungan biaya pendidikan bagi calon mahasiswa yang membutuhkan bantuan finansial.',
        icon: HeartHandshake,
        warna: 'bg-[#76603B]',
        label: 'Ekonomi',
        manfaat: [
            'Mempertimbangkan kondisi ekonomi keluarga',
            'Membutuhkan dokumen pendukung',
            'Mengikuti proses verifikasi',
        ],
    },
    {
        nomor: '03',
        kategori: 'Potensi dan Talenta',
        judul: 'Beasiswa Nonakademik',
        deskripsi:
            'Apresiasi bagi calon mahasiswa yang memiliki prestasi, bakat, dan pengalaman di bidang nonakademik.',
        icon: Lightbulb,
        warna: 'bg-[#8A593A]',
        label: 'Nonakademik',
        manfaat: [
            'Prestasi olahraga atau seni',
            'Pengalaman kompetisi dan organisasi',
            'Melampirkan bukti pencapaian',
        ],
    },
];

const persyaratan = [
    {
        nomor: '01',
        judul: 'Identitas Diri',
        deskripsi:
            'Kartu identitas diri dan dokumen pendukung sesuai ketentuan.',
    },
    {
        nomor: '02',
        judul: 'Dokumen Akademik',
        deskripsi:
            'Ijazah atau surat keterangan lulus dan rapor/transkrip nilai.',
    },
    {
        nomor: '03',
        judul: 'Bukti Prestasi',
        deskripsi:
            'Sertifikat atau dokumen penghargaan jika mendaftar jalur prestasi.',
    },
    {
        nomor: '04',
        judul: 'Dokumen Pendukung',
        deskripsi:
            'Dokumen ekonomi atau surat keterangan lain sesuai jenis beasiswa.',
    },
];

const tahapan = [
    {
        nomor: '01',
        judul: 'Pilih Beasiswa',
        deskripsi:
            'Kenali jenis beasiswa yang tersedia dan pilih program yang sesuai dengan kondisi serta potensi kamu.',
    },
    {
        nomor: '02',
        judul: 'Siapkan Dokumen',
        deskripsi:
            'Lengkapi seluruh persyaratan administrasi dan dokumen pendukung yang dibutuhkan.',
    },
    {
        nomor: '03',
        judul: 'Ajukan Pendaftaran',
        deskripsi:
            'Hubungi bagian PMB atau ikuti prosedur pengajuan melalui kanal resmi kampus.',
    },
    {
        nomor: '04',
        judul: 'Proses Seleksi',
        deskripsi:
            'Pihak kampus melakukan pemeriksaan dokumen dan seleksi berdasarkan ketentuan program.',
    },
    {
        nomor: '05',
        judul: 'Pengumuman',
        deskripsi:
            'Calon penerima memperoleh informasi hasil seleksi melalui kanal komunikasi resmi kampus.',
    },
];

const faq = [
    {
        pertanyaan: 'Siapa saja yang bisa mendaftar beasiswa?',
        jawaban:
            'Calon mahasiswa baru dapat mengajukan beasiswa sesuai dengan jenis program dan ketentuan yang ditetapkan oleh pihak kampus.',
    },
    {
        pertanyaan: 'Apakah saya bisa mendaftar lebih dari satu beasiswa?',
        jawaban:
            'Ketentuan mengenai pendaftaran lebih dari satu program beasiswa mengikuti kebijakan masing-masing penyelenggara. Silakan konfirmasi kepada bagian PMB.',
    },
    {
        pertanyaan: 'Apakah beasiswa mencakup seluruh biaya kuliah?',
        jawaban:
            'Cakupan bantuan berbeda-beda untuk setiap program. Besaran dan komponen biaya yang ditanggung perlu dikonfirmasi melalui informasi resmi kampus.',
    },
    {
        pertanyaan: 'Bagaimana cara mengetahui hasil seleksi?',
        jawaban:
            'Informasi hasil seleksi akan disampaikan melalui kanal komunikasi resmi kampus sesuai jadwal yang ditetapkan.',
    },
    {
        pertanyaan: 'Apakah dokumen persyaratan bisa dikirim secara online?',
        jawaban:
            'Mekanisme pengumpulan dokumen mengikuti prosedur pendaftaran yang berlaku. Hubungi bagian PMB untuk mengetahui metode pengajuan yang tersedia.',
    },
];

export default function Beasiswa() {
    const [faqAktif, setFaqAktif] = useState<number | null>(0);

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
                    <div className="absolute -bottom-48 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[var(--gold)]/10 blur-3xl" />

                    <div className="relative page-shell grid min-h-[610px] items-center gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[var(--gold)]" />
                                <span className="eyebrow text-[var(--gold)]">
                                    Beasiswa & Dukungan Pendidikan
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-5xl leading-[1.12] font-[var(--font-display)] tracking-tight sm:text-6xl lg:text-7xl">
                                Kesempatan Besar,
                                <span className="block text-[var(--gold)] italic">
                                    Masa Depan Cerah.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                                Setiap orang berhak mendapatkan kesempatan untuk
                                berkembang. Temukan peluang beasiswa yang
                                mendukung perjalanan pendidikan dan masa
                                depanmu.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <a
                                    href="#pilihan-beasiswa"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-[var(--forest)] transition hover:bg-white"
                                >
                                    Jelajahi Beasiswa
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </a>

                                <a
                                    href="#alur-pendaftaran"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                                >
                                    Cara Pendaftaran
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
                            <div className="relative aspect-[4/4.5] overflow-hidden rounded-t-[180px] rounded-b-3xl border border-white/15 bg-white/5 p-5">
                                <div className="flex h-full flex-col justify-between rounded-t-[160px] rounded-b-2xl border border-white/10 p-7">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium tracking-[0.25em] text-white/60 uppercase">
                                            Invest in your future
                                        </span>
                                        <Sparkles
                                            className="text-[var(--gold)]"
                                            size={23}
                                        />
                                    </div>

                                    <div className="relative mx-auto flex h-52 w-52 items-center justify-center">
                                        <div className="absolute inset-0 rounded-full border border-[var(--gold)]/30" />
                                        <div className="absolute inset-5 rounded-full border border-[var(--gold)]/30" />
                                        <div className="absolute inset-10 rounded-full border border-[var(--gold)]/30" />

                                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--forest)] shadow-2xl shadow-black/20">
                                            <GraduationCap
                                                size={58}
                                                strokeWidth={1.3}
                                            />
                                        </div>

                                        <div className="absolute top-5 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--forest)]">
                                            <Award size={21} />
                                        </div>
                                        <div className="absolute bottom-7 left-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--forest)]">
                                            <Sparkles size={18} />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-3xl font-[var(--font-display)] text-white italic">
                                            Your potential
                                        </p>
                                        <p className="mt-1 text-sm text-white/55">
                                            deserves an opportunity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -left-8 hidden items-center gap-3 rounded-2xl border border-border bg-card p-4 text-foreground shadow-xl sm:flex">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/20 text-[var(--forest)]">
                                    <ShieldCheck size={23} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">
                                        Raih Kesempatanmu
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Mulai dari sekarang
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="page-shell pb-8">
                        <div className="flex items-center justify-between border-t border-white/15 pt-6 text-xs text-white/50">
                            <span>Informasi Beasiswa</span>
                            <span>
                                Temukan peluangmu · Wujudkan cita-citamu
                            </span>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="section-pad">
                    <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div>
                            <span className="eyebrow text-[var(--forest)]">
                                Pendidikan untuk Semua
                            </span>
                            <h2 className="mt-5 text-4xl leading-tight font-[var(--font-display)] sm:text-5xl">
                                Bakat dan potensi tidak seharusnya terhalang
                                oleh{' '}
                                <span className="text-[var(--forest)] italic">
                                    kesempatan.
                                </span>
                            </h2>
                        </div>

                        <div className="lg:pb-2 lg:pl-12">
                            <p className="text-base leading-8 text-muted-foreground">
                                Program beasiswa hadir sebagai salah satu bentuk
                                dukungan agar calon mahasiswa dapat melanjutkan
                                pendidikan tinggi. Melalui berbagai peluang
                                bantuan pendidikan, kamu dapat mempersiapkan
                                masa depan dengan lebih percaya diri.
                            </p>
                            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[var(--forest)]">
                                <span className="h-px w-10 bg-[var(--gold)]" />
                                Kesempatan untuk terus bertumbuh
                            </div>
                        </div>
                    </div>
                </section>

                {/* PILIHAN BEASISWA */}
                <section
                    id="pilihan-beasiswa"
                    className="scroll-mt-24 bg-[var(--surface)] section-pad"
                >
                    <div className="page-shell">
                        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div className="max-w-2xl">
                                <span className="eyebrow text-[var(--forest)]">
                                    Peluang Pendidikan
                                </span>
                                <h2 className="mt-4 text-4xl font-[var(--font-display)] sm:text-5xl">
                                    Temukan beasiswa yang tepat untukmu.
                                </h2>
                                <p className="mt-5 leading-7 text-muted-foreground">
                                    Kenali beberapa kategori program beasiswa
                                    yang dapat menjadi referensi dalam
                                    merencanakan pendidikanmu.
                                </p>
                            </div>

                            <span className="hidden text-sm text-muted-foreground md:block">
                                01 — 03 / Program Beasiswa
                            </span>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {jenisBeasiswa.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.article
                                        key={item.nomor}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.12,
                                        }}
                                        className="group flex flex-col border border-border bg-card p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-muted-foreground">
                                                {item.nomor} / 03
                                            </span>
                                            <span className="rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--forest)]">
                                                {item.label}
                                            </span>
                                        </div>

                                        <div
                                            className={`mt-10 flex h-14 w-14 items-center justify-center rounded-2xl ${item.warna} text-white`}
                                        >
                                            <Icon size={27} strokeWidth={1.6} />
                                        </div>

                                        <p className="mt-8 text-xs font-semibold tracking-wider text-[var(--forest)] uppercase">
                                            {item.kategori}
                                        </p>

                                        <h3 className="mt-3 text-3xl font-[var(--font-display)]">
                                            {item.judul}
                                        </h3>

                                        <p className="mt-4 min-h-20 text-sm leading-7 text-muted-foreground">
                                            {item.deskripsi}
                                        </p>

                                        <div className="my-7 h-px bg-border" />

                                        <p className="mb-5 text-xs font-bold tracking-wider uppercase">
                                            Gambaran Kriteria
                                        </p>

                                        <ul className="space-y-4">
                                            {item.manfaat.map((manfaat) => (
                                                <li
                                                    key={manfaat}
                                                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                                                >
                                                    <CheckCircle2
                                                        size={17}
                                                        className="mt-0.5 shrink-0 text-[var(--forest)]"
                                                    />
                                                    {manfaat}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto pt-9">
                                            <a
                                                href="#persyaratan"
                                                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--forest)] transition group-hover:gap-4"
                                            >
                                                Lihat persyaratan
                                                <ArrowUpRight size={17} />
                                            </a>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>

                        <p className="mt-7 text-xs leading-6 text-muted-foreground">
                            * Jenis beasiswa di atas merupakan kategori contoh.
                            Ketersediaan program, cakupan bantuan, dan kriteria
                            penerima mengikuti ketentuan resmi kampus.
                        </p>
                    </div>
                </section>

                {/* PERSYARATAN */}
                <section id="persyaratan" className="scroll-mt-24 section-pad">
                    <div className="page-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
                        <div>
                            <span className="eyebrow text-[var(--forest)]">
                                Persiapan Pendaftaran
                            </span>

                            <h2 className="mt-5 text-4xl leading-tight font-[var(--font-display)] sm:text-5xl">
                                Persiapkan langkahmu dari sekarang.
                            </h2>

                            <p className="mt-6 leading-8 text-muted-foreground">
                                Dokumen yang lengkap akan membantu proses
                                pengajuan beasiswa berjalan lebih tertib.
                                Berikut gambaran dokumen yang umumnya
                                diperlukan.
                            </p>

                            <div className="mt-9 rounded-2xl bg-[var(--forest)] p-7 text-white">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[var(--gold)]">
                                    <BookOpen size={25} />
                                </div>
                                <h3 className="mt-6 text-2xl font-[var(--font-display)]">
                                    Persiapkan dengan teliti
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-white/65">
                                    Pastikan dokumen yang kamu siapkan sesuai
                                    dengan persyaratan program beasiswa yang
                                    dipilih.
                                </p>
                            </div>
                        </div>

                        <div className="divide-y divide-border border-y border-border">
                            {persyaratan.map((item) => (
                                <div
                                    key={item.nomor}
                                    className="flex gap-5 py-7 sm:gap-8"
                                >
                                    <span className="text-2xl font-[var(--font-display)] text-[var(--gold)] italic">
                                        {item.nomor}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold">
                                            {item.judul}
                                        </h3>
                                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                            {item.deskripsi}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ALUR PENDAFTARAN */}
                <section
                    id="alur-pendaftaran"
                    className="scroll-mt-24 bg-[var(--surface)] section-pad"
                >
                    <div className="page-shell">
                        <div className="mx-auto mb-16 max-w-2xl text-center">
                            <span className="eyebrow text-[var(--forest)]">
                                Proses Pengajuan
                            </span>
                            <h2 className="mt-4 text-4xl font-[var(--font-display)] sm:text-5xl">
                                Lima langkah menuju kesempatan baru.
                            </h2>
                            <p className="mt-5 leading-7 text-muted-foreground">
                                Pahami tahapan pengajuan agar kamu dapat
                                mempersiapkan setiap proses dengan baik.
                            </p>
                        </div>

                        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
                            <div className="absolute top-7 right-0 left-0 hidden h-px bg-border lg:block" />

                            {tahapan.map((item, index) => (
                                <motion.div
                                    key={item.nomor}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="relative"
                                >
                                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--forest)] text-xl font-[var(--font-display)] text-white italic shadow-[var(--forest)]/10 shadow-lg">
                                        {item.nomor}
                                    </div>
                                    <h3 className="mt-7 text-lg font-bold">
                                        {item.judul}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                        {item.deskripsi}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="section-pad">
                    <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <span className="eyebrow text-[var(--forest)]">
                                Pertanyaan Umum
                            </span>
                            <h2 className="mt-4 text-4xl font-[var(--font-display)] sm:text-5xl">
                                Ada yang ingin kamu tanyakan?
                            </h2>
                            <p className="mt-5 leading-7 text-muted-foreground">
                                Temukan jawaban dari beberapa pertanyaan yang
                                sering diajukan seputar program beasiswa.
                            </p>

                            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                                <MessageCircle
                                    size={19}
                                    className="text-[var(--forest)]"
                                />
                                Masih memiliki pertanyaan?
                            </div>

                            <Link
                                href="/kontak"
                                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--forest)] hover:gap-4"
                            >
                                Hubungi kami
                                <ArrowRight size={17} />
                            </Link>
                        </div>

                        <div className="divide-y divide-border border-y border-border">
                            {faq.map((item, index) => (
                                <div key={item.pertanyaan} className="py-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setFaqAktif(
                                                faqAktif === index
                                                    ? null
                                                    : index,
                                            )
                                        }
                                        className="flex w-full items-center justify-between gap-5 py-5 text-left"
                                        aria-expanded={faqAktif === index}
                                    >
                                        <span className="leading-7 font-semibold">
                                            {item.pertanyaan}
                                        </span>
                                        <ChevronDown
                                            size={20}
                                            className={`shrink-0 text-[var(--forest)] transition-transform duration-300 ${
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
                <section className="pb-20">
                    <div className="page-shell">
                        <div className="relative overflow-hidden rounded-3xl bg-[var(--forest)] px-7 py-14 text-white sm:px-14 sm:py-16">
                            <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full border border-white/10" />
                            <div className="absolute -top-20 -right-8 h-56 w-56 rounded-full border border-white/10" />
                            <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />

                            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
                                <div className="max-w-2xl">
                                    <span className="eyebrow text-[var(--gold)]">
                                        Mulai Perjalananmu
                                    </span>
                                    <h2 className="mt-5 text-4xl leading-tight font-[var(--font-display)] sm:text-5xl">
                                        Jangan biarkan kesempatan berlalu.
                                    </h2>
                                    <p className="mt-5 max-w-xl leading-8 text-white/65">
                                        Cari tahu informasi lebih lanjut
                                        mengenai peluang beasiswa dan persiapkan
                                        masa depan pendidikanmu bersama kami.
                                    </p>
                                </div>

                                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                                    <Link
                                        href="/kontak"
                                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-bold text-[var(--forest)] transition hover:bg-white"
                                    >
                                        Konsultasi Beasiswa
                                        <ArrowUpRight size={18} />
                                    </Link>

                                    <Link
                                        href="/pmb/daftar"
                                        className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        Daftar Sekarang
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
