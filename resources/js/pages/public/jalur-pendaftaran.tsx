import { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    CheckCircle2,
    ChevronDown,
    ClipboardCheck,
    FileText,
    GraduationCap,
    MessageCircle,
    ShieldCheck,
    Wallet,
} from 'lucide-react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';

const jalurPendaftaran = [
    {
        number: '01',
        title: 'Jalur Reguler',
        label: 'Pendaftaran Umum',
        description:
            'Jalur penerimaan mahasiswa baru bagi lulusan SMA, SMK, MA, atau sederajat yang ingin melanjutkan pendidikan tinggi.',
        icon: GraduationCap,
        requirements: [
            'Lulusan SMA, SMK, MA, atau sederajat',
            'Mengisi formulir pendaftaran',
            'Melengkapi dokumen persyaratan',
        ],
        href: '/pmb/daftar?jalur=reguler',
    },
    {
        number: '02',
        title: 'Jalur Prestasi',
        label: 'Apresiasi Pencapaian',
        description:
            'Kesempatan bagi calon mahasiswa yang memiliki pencapaian akademik maupun nonakademik untuk melanjutkan pendidikan.',
        icon: ShieldCheck,
        requirements: [
            'Memiliki prestasi akademik atau nonakademik',
            'Melampirkan bukti atau sertifikat prestasi',
            'Mengikuti ketentuan seleksi kampus',
        ],
        href: '/pmb/daftar?jalur=prestasi',
    },
    {
        number: '03',
        title: 'Jalur Beasiswa',
        label: 'Kesempatan Pendidikan',
        description:
            'Kesempatan memperoleh bantuan biaya pendidikan melalui program beasiswa sesuai dengan ketentuan yang berlaku.',
        icon: Wallet,
        requirements: [
            'Memenuhi kriteria program beasiswa',
            'Melengkapi dokumen pendukung',
            'Mengikuti proses seleksi beasiswa',
        ],
        href: '/pmb/daftar?jalur=beasiswa',
    },
];

const tahapanPendaftaran = [
    {
        number: '01',
        title: 'Pilih Jalur Pendaftaran',
        description:
            'Tentukan jalur pendaftaran yang sesuai dengan kualifikasi dan kondisi kamu.',
        icon: GraduationCap,
    },
    {
        number: '02',
        title: 'Isi Formulir Pendaftaran',
        description:
            'Lengkapi informasi pribadi, data pendidikan, dan pilihan program studi.',
        icon: ClipboardCheck,
    },
    {
        number: '03',
        title: 'Lengkapi Dokumen',
        description:
            'Unggah dokumen persyaratan yang dibutuhkan sesuai jalur pendaftaran.',
        icon: FileText,
    },
    {
        number: '04',
        title: 'Proses Seleksi',
        description:
            'Ikuti proses seleksi dan tahapan berikutnya sesuai ketentuan kampus.',
        icon: ShieldCheck,
    },
    {
        number: '05',
        title: 'Pengumuman Hasil',
        description:
            'Periksa hasil seleksi melalui sistem informasi penerimaan mahasiswa baru.',
        icon: CheckCircle2,
    },
];

const dokumenPersyaratan = [
    'Ijazah terakhir atau Surat Keterangan Lulus (SKL)',
    'Kartu Tanda Penduduk (KTP) atau identitas diri',
    'Kartu Keluarga (KK)',
    'Pas foto terbaru',
    'Dokumen tambahan sesuai jalur pendaftaran',
];

const faqs = [
    {
        question: 'Siapa saja yang dapat mendaftar?',
        answer: 'Calon mahasiswa yang telah lulus SMA, SMK, MA, atau sederajat dapat mendaftarkan diri sesuai dengan ketentuan penerimaan mahasiswa baru.',
    },
    {
        question: 'Apakah pendaftaran dapat dilakukan secara online?',
        answer: 'Ya, proses pendaftaran dapat dilakukan melalui sistem PMB online. Calon mahasiswa dapat mengisi formulir dan melengkapi dokumen melalui sistem tersebut.',
    },
    {
        question: 'Apakah setiap jalur memiliki persyaratan berbeda?',
        answer: 'Setiap jalur dapat memiliki persyaratan tambahan yang berbeda. Pastikan kamu membaca ketentuan masing-masing jalur sebelum melakukan pendaftaran.',
    },
    {
        question: 'Bagaimana cara mengetahui hasil seleksi?',
        answer: 'Informasi hasil seleksi dapat diperiksa melalui akun pendaftaran atau kanal informasi resmi kampus.',
    },
];

const reveal = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function JalurPendaftaran() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <MotionConfig reducedMotion="user">
            <main className="public-theme overflow-hidden bg-background text-foreground">
                {/* ==============================
                    HERO SECTION
                ============================== */}
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

                    <div className="absolute -top-40 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-[var(--gold)]/10 blur-3xl" />

                    <div className="absolute -bottom-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-white/5 blur-3xl" />

                    <div className="page-shell section-pad">
                        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={reveal}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                                    <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                                    <span className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
                                        Penerimaan Mahasiswa Baru
                                    </span>
                                </div>

                                <h1 className="mt-8 max-w-2xl text-4xl leading-[1.12] font-[var(--font-display)] font-semibold sm:text-5xl lg:text-6xl">
                                    Satu Langkah Menuju{' '}
                                    <span className="text-[var(--gold)]">
                                        Masa Depan
                                    </span>{' '}
                                    yang Lebih Baik.
                                </h1>

                                <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                                    Temukan jalur penerimaan mahasiswa baru yang
                                    sesuai dengan potensi dan impianmu. Mulai
                                    perjalanan akademikmu bersama kami.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-4">
                                    <a
                                        href="#pilihan-jalur"
                                        className="inline-flex items-center gap-3 rounded-md bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-[var(--forest)] transition hover:bg-white"
                                    >
                                        Temukan Jalurmu
                                        <ArrowRight size={18} />
                                    </a>

                                    <a
                                        href="#alur-pendaftaran"
                                        className="inline-flex items-center gap-3 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        Pelajari Alur
                                        <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </motion.div>

                            {/* Hero Illustration */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                }}
                                className="relative mx-auto w-full max-w-md"
                            >
                                <div className="absolute inset-0 rotate-6 rounded-[2rem] border border-[var(--gold)]/30" />

                                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm sm:p-10">
                                    <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full border border-[var(--gold)]/20" />

                                    <div className="relative flex min-h-[19rem] flex-col justify-between">
                                        <div>
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--gold)] text-[var(--forest)]">
                                                <GraduationCap size={34} />
                                            </div>

                                            <p className="mt-8 text-sm font-medium tracking-[0.2em] text-white/50 uppercase">
                                                Your Journey Starts Here
                                            </p>

                                            <h2 className="mt-3 text-4xl leading-tight font-[var(--font-display)] font-semibold text-white">
                                                Raih Impian,
                                                <br />
                                                Bangun Masa Depan.
                                            </h2>
                                        </div>

                                        <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-6">
                                            <div>
                                                <p className="text-xs text-white/50">
                                                    Mulai perjalananmu
                                                </p>
                                                <p className="mt-1 font-semibold text-[var(--gold)]">
                                                    Bersama Kami
                                                </p>
                                            </div>

                                            <div className="float-soft flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)]">
                                                <ArrowUpRight size={23} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ==============================
                    INTRO SECTION
                ============================== */}
                <section className="section-pad">
                    <div className="page-shell">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <span className="eyebrow text-[var(--forest)]">
                                Pilihan Pendaftaran
                            </span>

                            <h2 className="mt-5 text-3xl leading-tight font-[var(--font-display)] font-semibold sm:text-4xl">
                                Setiap Impian Punya Jalannya Sendiri
                            </h2>

                            <p className="mt-5 leading-8 text-muted-foreground">
                                Kami memberikan beberapa pilihan jalur
                                penerimaan mahasiswa baru. Pilih kesempatan yang
                                paling sesuai dengan latar belakang, kemampuan,
                                dan pencapaianmu.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ==============================
                    JALUR PENDAFTARAN
                ============================== */}
                <section id="pilihan-jalur" className="scroll-mt-24 pb-24">
                    <div className="page-shell">
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {jalurPendaftaran.map((jalur, index) => {
                                const Icon = jalur.icon;

                                return (
                                    <motion.article
                                        key={jalur.number}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={reveal}
                                        transition={{
                                            duration: 0.55,
                                            delay: index * 0.12,
                                        }}
                                        whileHover={{ y: -7 }}
                                        className="group flex h-full lift-card flex-col rounded-lg border border-border bg-card p-7 shadow-sm"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground">
                                                JALUR {jalur.number}
                                            </span>

                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--forest)] text-[var(--gold)] transition group-hover:bg-[var(--gold)] group-hover:text-[var(--forest)]">
                                                <Icon size={25} />
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <p className="text-xs font-bold tracking-[0.15em] text-[var(--gold)] uppercase">
                                                {jalur.label}
                                            </p>

                                            <h3 className="mt-3 text-2xl font-[var(--font-display)] font-semibold text-card-foreground">
                                                {jalur.title}
                                            </h3>

                                            <p className="mt-4 min-h-[6rem] text-sm leading-7 text-muted-foreground">
                                                {jalur.description}
                                            </p>
                                        </div>

                                        <div className="my-7 h-px bg-border" />

                                        <div className="flex-1 space-y-4">
                                            <p className="text-xs font-bold tracking-[0.15em] text-foreground uppercase">
                                                Persyaratan Umum
                                            </p>

                                            {jalur.requirements.map((item) => (
                                                <div
                                                    key={item}
                                                    className="flex items-start gap-3"
                                                >
                                                    <Check
                                                        size={17}
                                                        className="mt-1 shrink-0 text-[var(--forest)]"
                                                    />

                                                    <span className="text-sm leading-6 text-muted-foreground">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={jalur.href}
                                            className="mt-9 flex items-center justify-between rounded-md border border-[var(--forest)] px-5 py-3.5 text-sm font-bold text-[var(--forest)] transition hover:bg-[var(--forest)] hover:text-white"
                                        >
                                            Pilih Jalur Ini
                                            <ArrowUpRight size={18} />
                                        </Link>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ==============================
                    ALUR PENDAFTARAN
                ============================== */}
                <section
                    id="alur-pendaftaran"
                    className="scroll-mt-24 bg-[var(--surface)] section-pad"
                >
                    <div className="page-shell">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <span className="eyebrow text-[var(--forest)]">
                                Tahapan Pendaftaran
                            </span>

                            <h2 className="mt-5 text-3xl font-[var(--font-display)] font-semibold sm:text-4xl">
                                Mudah, Terarah, dan Transparan
                            </h2>

                            <p className="mt-5 leading-8 text-muted-foreground">
                                Ikuti setiap tahapan pendaftaran berikut untuk
                                memulai perjalananmu menjadi bagian dari
                                keluarga besar kampus kami.
                            </p>
                        </motion.div>

                        <div className="relative mx-auto mt-16 max-w-4xl">
                            <div className="absolute top-8 bottom-8 left-7 hidden w-px bg-[var(--forest)]/20 sm:block" />

                            <div className="space-y-6">
                                {tahapanPendaftaran.map((step, index) => {
                                    const Icon = step.icon;

                                    return (
                                        <motion.div
                                            key={step.number}
                                            initial={{
                                                opacity: 0,
                                                x: -25,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                            }}
                                            className="relative flex gap-5 sm:gap-8"
                                        >
                                            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--forest)]/15 bg-background text-[var(--forest)] shadow-sm">
                                                <Icon size={23} />
                                            </div>

                                            <div className="flex-1 rounded-lg border border-border bg-card p-5 sm:p-6">
                                                <span className="text-xs font-bold tracking-[0.15em] text-[var(--gold)]">
                                                    LANGKAH {step.number}
                                                </span>

                                                <h3 className="mt-2 text-lg font-bold">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==============================
                    DOKUMEN PERSYARATAN
                ============================== */}
                <section className="section-pad">
                    <div className="page-shell">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="eyebrow text-[var(--forest)]">
                                    Persiapan Pendaftaran
                                </span>

                                <h2 className="mt-5 text-3xl leading-tight font-[var(--font-display)] font-semibold sm:text-4xl">
                                    Persiapkan Dokumen yang Dibutuhkan
                                </h2>

                                <p className="mt-5 leading-8 text-muted-foreground">
                                    Sebelum melakukan pendaftaran, pastikan kamu
                                    telah menyiapkan dokumen berikut agar proses
                                    administrasi berjalan lebih mudah.
                                </p>

                                <div className="mt-9 space-y-5">
                                    {dokumenPersyaratan.map((item, index) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-sm font-bold text-[var(--forest)]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </div>

                                            <p className="pt-1 text-sm leading-6 text-foreground">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <p className="mt-8 border-l-2 border-[var(--gold)] pl-4 text-xs leading-6 text-muted-foreground">
                                    Catatan: Persyaratan di atas merupakan
                                    gambaran umum. Persyaratan resmi dapat
                                    berbeda sesuai jalur yang dipilih.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative"
                            >
                                <div className="relative overflow-hidden rounded-xl bg-[var(--forest)] p-8 text-white sm:p-10">
                                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-[var(--gold)]/20" />

                                    <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full border border-[var(--gold)]/20" />

                                    <div className="relative">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--gold)] text-[var(--forest)]">
                                            <FileText size={30} />
                                        </div>

                                        <h3 className="mt-9 text-3xl font-[var(--font-display)] font-semibold">
                                            Satu Persiapan,
                                            <br />
                                            Banyak Kesempatan.
                                        </h3>

                                        <p className="mt-5 max-w-md text-sm leading-8 text-white/70">
                                            Persiapkan seluruh dokumen dengan
                                            baik. Pastikan data yang kamu
                                            berikan benar dan sesuai dengan
                                            dokumen asli.
                                        </p>

                                        <div className="mt-9 flex items-center gap-3 border-t border-white/15 pt-6">
                                            <CheckCircle2
                                                size={21}
                                                className="shrink-0 text-[var(--gold)]"
                                            />

                                            <span className="text-sm text-white/80">
                                                Periksa kembali sebelum mengirim
                                                formulir.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ==============================
                    FAQ SECTION
                ============================== */}
                <section className="bg-[var(--surface)] section-pad">
                    <div className="page-shell">
                        <div className="mx-auto max-w-3xl">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                                transition={{ duration: 0.6 }}
                                className="text-center"
                            >
                                <span className="eyebrow text-[var(--forest)]">
                                    Pusat Informasi
                                </span>

                                <h2 className="mt-5 text-3xl font-[var(--font-display)] font-semibold sm:text-4xl">
                                    Pertanyaan yang Sering Diajukan
                                </h2>

                                <p className="mt-5 leading-8 text-muted-foreground">
                                    Masih memiliki pertanyaan seputar penerimaan
                                    mahasiswa baru? Temukan jawabannya di sini.
                                </p>
                            </motion.div>

                            <div className="mt-12 space-y-4">
                                {faqs.map((faq, index) => {
                                    const isOpen = openFaq === index;

                                    return (
                                        <div
                                            key={faq.question}
                                            className="overflow-hidden rounded-lg border border-border bg-card"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenFaq(
                                                        isOpen ? null : index,
                                                    )
                                                }
                                                aria-expanded={isOpen}
                                                className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                                            >
                                                <span className="text-sm font-semibold sm:text-base">
                                                    {faq.question}
                                                </span>

                                                <motion.span
                                                    animate={{
                                                        rotate: isOpen
                                                            ? 180
                                                            : 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                    className="shrink-0 text-[var(--forest)]"
                                                >
                                                    <ChevronDown size={20} />
                                                </motion.span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
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
                                                        <p className="px-5 pb-6 text-sm leading-7 text-muted-foreground sm:px-6">
                                                            {faq.answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==============================
                    CTA SECTION
                ============================== */}
                <section className="section-pad">
                    <div className="page-shell">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative overflow-hidden rounded-xl bg-[var(--forest)] px-6 py-16 text-center text-white sm:px-12 sm:py-20"
                        >
                            <div className="absolute inset-0 bg-heritage-pattern opacity-20" />

                            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />

                            <div className="relative mx-auto max-w-2xl">
                                <span className="eyebrow text-[var(--gold)]">
                                    Your Future Starts Here
                                </span>

                                <h2 className="mt-5 text-3xl leading-tight font-[var(--font-display)] font-semibold sm:text-5xl">
                                    Saatnya Mewujudkan
                                    <br />
                                    Impianmu!
                                </h2>

                                <p className="mt-6 text-sm leading-8 text-white/70 sm:text-base">
                                    Jangan lewatkan kesempatan untuk melanjutkan
                                    pendidikan dan mengembangkan potensi dirimu.
                                    Mulai langkah pertamamu bersama kami.
                                </p>

                                <div className="mt-9 flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/pmb/daftar"
                                        className="inline-flex items-center gap-3 rounded-md bg-[var(--gold)] px-7 py-3.5 text-sm font-bold text-[var(--forest)] transition hover:bg-white"
                                    >
                                        Daftar Sekarang
                                        <ArrowRight size={18} />
                                    </Link>

                                    <a
                                        href="/kontak"
                                        className="inline-flex items-center gap-3 rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        <MessageCircle size={18} />
                                        Hubungi Kami
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </MotionConfig>
    );
}
