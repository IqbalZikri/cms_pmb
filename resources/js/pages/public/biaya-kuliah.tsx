import { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    Banknote,
    CalendarDays,
    CheckCircle2,
    ChevronDown,
    CircleHelp,
    CreditCard,
    FileText,
    GraduationCap,
    HandCoins,
    MessageCircle,
    ReceiptText,
    Wallet,
} from 'lucide-react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';

const komponenBiaya = [
    {
        number: '01',
        title: 'Biaya Pendaftaran',
        description:
            'Biaya administrasi untuk mengikuti proses penerimaan mahasiswa baru.',
        icon: FileText,
    },
    {
        number: '02',
        title: 'Biaya Pendidikan',
        description:
            'Biaya pendidikan yang digunakan untuk menunjang kegiatan akademik mahasiswa.',
        icon: GraduationCap,
    },
    {
        number: '03',
        title: 'Biaya Praktikum',
        description:
            'Biaya penunjang kegiatan praktik, laboratorium, dan aktivitas pembelajaran sesuai program studi.',
        icon: ReceiptText,
    },
    {
        number: '04',
        title: 'Biaya Penunjang Akademik',
        description:
            'Biaya untuk kebutuhan administrasi dan fasilitas penunjang kegiatan akademik.',
        icon: HandCoins,
    },
];

const informasiBiaya = [
    {
        program: 'Program Studi 1',
        keterangan: 'Informasi biaya berdasarkan program studi',
    },
    {
        program: 'Program Studi 2',
        keterangan: 'Informasi biaya berdasarkan program studi',
    },
    {
        program: 'Program Studi 3',
        keterangan: 'Informasi biaya berdasarkan program studi',
    },
];

const metodePembayaran = [
    {
        number: '01',
        title: 'Pembayaran Transfer',
        description:
            'Pembayaran dapat dilakukan melalui transfer ke rekening resmi institusi sesuai instruksi dari bagian PMB.',
        icon: CreditCard,
    },
    {
        number: '02',
        title: 'Pembayaran Langsung',
        description:
            'Calon mahasiswa dapat melakukan pembayaran secara langsung melalui bagian administrasi kampus.',
        icon: Wallet,
    },
    {
        number: '03',
        title: 'Konfirmasi Pembayaran',
        description:
            'Simpan bukti pembayaran dan lakukan konfirmasi sesuai prosedur yang diberikan oleh petugas PMB.',
        icon: CheckCircle2,
    },
];

const faqs = [
    {
        question: 'Apakah biaya kuliah setiap program studi sama?',
        answer: 'Biaya pendidikan dapat berbeda berdasarkan program studi dan ketentuan institusi. Silakan hubungi bagian PMB untuk mendapatkan rincian biaya yang sesuai dengan program studi pilihanmu.',
    },
    {
        question: 'Apakah biaya kuliah dapat dibayarkan secara bertahap?',
        answer: 'Informasi mengenai pilihan pembayaran bertahap atau cicilan perlu dikonfirmasi kepada bagian PMB sesuai kebijakan pembayaran yang berlaku.',
    },
    {
        question: 'Apakah ada biaya tambahan selama perkuliahan?',
        answer: 'Beberapa kegiatan akademik atau praktikum mungkin memiliki komponen biaya tersendiri. Pastikan meminta rincian biaya secara lengkap sebelum melakukan pendaftaran.',
    },
    {
        question: 'Bagaimana cara mendapatkan informasi biaya terbaru?',
        answer: 'Kamu dapat menghubungi bagian penerimaan mahasiswa baru melalui kontak resmi kampus untuk mendapatkan informasi biaya pendidikan terbaru.',
    },
    {
        question: 'Apakah tersedia program beasiswa?',
        answer: 'Informasi mengenai program beasiswa dan persyaratannya dapat ditanyakan langsung kepada bagian PMB atau pihak kampus.',
    },
];

const reveal = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function BiayaKuliah() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <MotionConfig reducedMotion="user">
            <main className="public-theme overflow-hidden bg-background text-foreground">
                {/* =================================
                    HERO SECTION
                ================================= */}
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

                    <div className="absolute -bottom-40 -left-40 -z-10 h-[25rem] w-[25rem] rounded-full bg-white/5 blur-3xl" />

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
                                        Informasi Pendidikan
                                    </span>
                                </div>

                                <h1 className="mt-8 max-w-2xl text-4xl leading-[1.12] font-[var(--font-display)] font-semibold sm:text-5xl lg:text-6xl">
                                    Investasi Pendidikan untuk{' '}
                                    <span className="text-[var(--gold)]">
                                        Masa Depan
                                    </span>{' '}
                                    yang Lebih Baik.
                                </h1>

                                <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                                    Dapatkan informasi mengenai biaya
                                    pendidikan, komponen pembiayaan, dan metode
                                    pembayaran untuk mempersiapkan perjalanan
                                    akademikmu.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-4">
                                    <a
                                        href="#rincian-biaya"
                                        className="inline-flex items-center gap-3 rounded-md bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-[var(--forest)] transition hover:bg-white"
                                    >
                                        Lihat Informasi Biaya
                                        <ArrowRight size={18} />
                                    </a>

                                    <a
                                        href="#konsultasi"
                                        className="inline-flex items-center gap-3 rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        Konsultasi
                                        <MessageCircle size={18} />
                                    </a>
                                </div>
                            </motion.div>

                            {/* HERO VISUAL */}
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

                                    <div className="relative">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--gold)] text-[var(--forest)]">
                                            <Banknote size={34} />
                                        </div>

                                        <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
                                            Plan Your Education
                                        </p>

                                        <h2 className="mt-3 text-4xl leading-tight font-[var(--font-display)] font-semibold">
                                            Pendidikan
                                            <br />
                                            adalah Investasi.
                                        </h2>

                                        <p className="mt-5 text-sm leading-7 text-white/65">
                                            Persiapkan pendidikanmu hari ini
                                            untuk membuka lebih banyak
                                            kesempatan di masa depan.
                                        </p>

                                        <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-6">
                                            <div>
                                                <p className="text-xs text-white/50">
                                                    Mulai rencanakan
                                                </p>
                                                <p className="mt-1 font-semibold text-[var(--gold)]">
                                                    Masa Depanmu
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

                {/* =================================
                    KOMPONEN BIAYA
                ================================= */}
                <section className="my-10">
                    <div className="page-shell">
                        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <div>
                                <span className="eyebrow text-[var(--forest)]">
                                    Komponen Pembiayaan
                                </span>

                                <h2 className="mt-4 text-3xl font-[var(--font-display)] font-semibold sm:text-4xl">
                                    Apa Saja Komponen Biayanya?
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-muted-foreground">
                                Berikut gambaran komponen pembiayaan yang perlu
                                diperhatikan calon mahasiswa.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {komponenBiaya.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.article
                                        key={item.number}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={reveal}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        whileHover={{ y: -6 }}
                                        className="lift-card rounded-lg border border-border bg-card p-6"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold tracking-[0.18em] text-muted-foreground">
                                                {item.number}
                                            </span>

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--forest)] text-[var(--gold)]">
                                                <Icon size={23} />
                                            </div>
                                        </div>

                                        <h3 className="mt-7 text-xl font-[var(--font-display)] font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                            {item.description}
                                        </p>

                                        <div className="mt-6 border-t border-border pt-4">
                                            <span className="text-xs font-semibold text-[var(--forest)]">
                                                Informasi melalui PMB
                                            </span>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =================================
                    RINCIAN BIAYA
                ================================= */}
                <section
                    id="rincian-biaya"
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
                                Informasi Biaya
                            </span>

                            <h2 className="mt-5 text-3xl font-[var(--font-display)] font-semibold sm:text-4xl">
                                Rincian Biaya Berdasarkan Program Studi
                            </h2>

                            <p className="mt-5 leading-8 text-muted-foreground">
                                Dapatkan informasi pembiayaan yang sesuai dengan
                                program studi pilihanmu. Hubungi bagian PMB
                                untuk memperoleh rincian biaya terbaru.
                            </p>
                        </motion.div>

                        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                            <div className="bg-[var(--forest)] px-6 py-6 text-white sm:px-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--gold)] text-[var(--forest)]">
                                        <ReceiptText size={23} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Informasi Biaya Pendidikan
                                        </h3>
                                        <p className="mt-1 text-xs text-white/60">
                                            Pilihan program studi
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="divide-y divide-border">
                                {informasiBiaya.map((item, index) => (
                                    <div
                                        key={item.program}
                                        className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-sm font-bold text-[var(--forest)]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </span>

                                            <div>
                                                <h4 className="font-semibold">
                                                    {item.program}
                                                </h4>

                                                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                                    {item.keterangan}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-4 sm:justify-end">
                                            <span className="text-sm font-semibold text-[var(--forest)]">
                                                Hubungi PMB
                                            </span>

                                            <Link
                                                href="/kontak"
                                                aria-label={`Tanyakan biaya ${item.program}`}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--forest)]/20 text-[var(--forest)] transition hover:bg-[var(--forest)] hover:text-white"
                                            >
                                                <ArrowUpRight size={17} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-border bg-[var(--surface)] px-6 py-5 sm:px-8">
                                <p className="flex items-start gap-3 text-xs leading-6 text-muted-foreground">
                                    <CircleHelp
                                        size={17}
                                        className="mt-0.5 shrink-0 text-[var(--forest)]"
                                    />
                                    Nominal biaya, rincian pembayaran, dan
                                    ketentuan pembiayaan dapat diperoleh melalui
                                    bagian penerimaan mahasiswa baru.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================================
                    METODE PEMBAYARAN
                ================================= */}
                <section className="section-pad">
                    <div className="page-shell">
                        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="eyebrow text-[var(--forest)]">
                                    Informasi Pembayaran
                                </span>

                                <h2 className="mt-5 text-3xl leading-tight font-[var(--font-display)] font-semibold sm:text-4xl">
                                    Proses Pembayaran yang Mudah dan Terarah
                                </h2>

                                <p className="mt-5 text-sm leading-8 text-muted-foreground">
                                    Ikuti petunjuk pembayaran resmi yang
                                    diberikan oleh bagian administrasi kampus.
                                    Pastikan seluruh transaksi dilakukan melalui
                                    kanal pembayaran yang telah dikonfirmasi.
                                </p>

                                <div className="mt-8 rounded-lg border border-[var(--gold)]/40 bg-[var(--surface)] p-5">
                                    <div className="flex items-start gap-3">
                                        <CalendarDays
                                            size={22}
                                            className="mt-0.5 shrink-0 text-[var(--forest)]"
                                        />

                                        <div>
                                            <h3 className="text-sm font-bold">
                                                Perhatikan Jadwal Pembayaran
                                            </h3>

                                            <p className="mt-2 text-xs leading-6 text-muted-foreground">
                                                Pastikan pembayaran dilakukan
                                                sesuai jadwal dan ketentuan yang
                                                diinformasikan oleh pihak
                                                kampus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="space-y-5">
                                {metodePembayaran.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.number}
                                            initial={{
                                                opacity: 0,
                                                x: 25,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.12,
                                            }}
                                            className="flex gap-5 rounded-lg border border-border bg-card p-6"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--forest)] text-[var(--gold)]">
                                                <Icon size={23} />
                                            </div>

                                            <div>
                                                <span className="text-xs font-bold tracking-[0.15em] text-[var(--gold)]">
                                                    TAHAP {item.number}
                                                </span>

                                                <h3 className="mt-2 font-semibold">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =================================
                    FAQ
                ================================= */}
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
                                    Pertanyaan Seputar Biaya Kuliah
                                </h2>

                                <p className="mt-5 leading-8 text-muted-foreground">
                                    Beberapa informasi yang sering ditanyakan
                                    calon mahasiswa dan orang tua mengenai
                                    pembiayaan pendidikan.
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

                {/* =================================
                    CTA
                ================================= */}
                <section id="konsultasi" className="scroll-mt-24 section-pad">
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
                                    Butuh Informasi Lebih Lanjut?
                                </span>

                                <h2 className="mt-5 text-3xl leading-tight font-[var(--font-display)] font-semibold sm:text-5xl">
                                    Kami Siap Membantu
                                    <br />
                                    Perencanaan Pendidikanmu.
                                </h2>

                                <p className="mt-6 text-sm leading-8 text-white/70 sm:text-base">
                                    Jangan ragu untuk bertanya mengenai biaya
                                    pendidikan, pilihan pembayaran, maupun
                                    informasi lainnya. Tim PMB siap membantu
                                    memberikan informasi yang kamu butuhkan.
                                </p>

                                <div className="mt-9 flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/kontak"
                                        className="inline-flex items-center gap-3 rounded-md bg-[var(--gold)] px-7 py-3.5 text-sm font-bold text-[var(--forest)] transition hover:bg-white"
                                    >
                                        Hubungi PMB
                                        <ArrowRight size={18} />
                                    </Link>

                                    <Link
                                        href="/pmb/daftar"
                                        className="inline-flex items-center gap-3 rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                                    >
                                        Daftar Sekarang
                                        <ArrowUpRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </MotionConfig>
    );
}
