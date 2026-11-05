
import { useMemo, useState } from "react";
import { Link } from "@inertiajs/react";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    GraduationCap,
    Search,
    Sparkles,
    Building2,
    X,
} from "lucide-react";
import {
    motion,
    AnimatePresence,
    MotionConfig,
} from "motion/react";

// ======================================================
// ANIMATION VARIANTS
// ======================================================

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const,
        },
    },
};

const fadeIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: "easeOut" as const,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.94,
        y: 15,
        transition: {
            duration: 0.2,
        },
    },
};

// ======================================================
// TYPE & DATA
// ======================================================

type ProgramStudi = {
    id: number;
    nama: string;
    fakultas: string;
    jenjang: string;
    deskripsi: string;
    akreditasi: string;
    slug: string;
    warna: string;
};

const programs: ProgramStudi[] = [
    {
        id: 1,
        nama: "Nama Program Studi 1",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        jenjang: "S1",
        deskripsi:
            "Pelajari ilmu, keterampilan, dan strategi profesional untuk menghadapi tantangan dunia kerja.",
        akreditasi: "Akreditasi institusi/prodi",
        slug: "#",
        warna: "bg-emerald-50 text-emerald-800",
    },
    {
        id: 2,
        nama: "Nama Program Studi 2",
        fakultas: "Fakultas Ekonomi dan Bisnis",
        jenjang: "S1",
        deskripsi:
            "Kembangkan kemampuan analisis, pemecahan masalah, dan inovasi untuk masa depan.",
        akreditasi: "Akreditasi institusi/prodi",
        slug: "#",
        warna: "bg-amber-50 text-amber-800",
    },
    {
        id: 3,
        nama: "Nama Program Studi 3",
        fakultas: "Fakultas Teknik dan Informatika",
        jenjang: "S1",
        deskripsi:
            "Bangun kompetensi teknologi dan kreativitas untuk menciptakan solusi digital.",
        akreditasi: "Akreditasi institusi/prodi",
        slug: "#",
        warna: "bg-blue-50 text-blue-800",
    },
    {
        id: 4,
        nama: "Nama Program Studi 4",
        fakultas: "Fakultas Teknik dan Informatika",
        jenjang: "S1",
        deskripsi:
            "Persiapkan diri menjadi tenaga profesional yang adaptif dan kompetitif.",
        akreditasi: "Akreditasi institusi/prodi",
        slug: "#",
        warna: "bg-purple-50 text-purple-800",
    },
    {
        id: 5,
        nama: "Nama Program Studi 5",
        fakultas: "Fakultas Ilmu Sosial",
        jenjang: "S1",
        deskripsi:
            "Kembangkan wawasan, komunikasi, dan kemampuan profesional untuk masyarakat.",
        akreditasi: "Akreditasi institusi/prodi",
        slug: "#",
        warna: "bg-orange-50 text-orange-800",
    },
    {
        id: 6,
        nama: "Nama Program Studi 6",
        fakultas: "Fakultas Ilmu Sosial",
        jenjang: "D3",
        deskripsi:
            "Dapatkan keterampilan praktis dan pengalaman untuk memasuki dunia profesional.",
        akreditasi: "Akreditasi institusi/prodi",
        slug: "#",
        warna: "bg-teal-50 text-teal-800",
    },
];

const filters = ["Semua", "D3", "S1", "S2"];

// ======================================================
// COMPONENT
// ======================================================

export default function ProgramStudi() {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("Semua");

    const filteredPrograms = useMemo(() => {
        return programs.filter((program) => {
            const keyword = search.toLowerCase();

            const matchesSearch =
                program.nama.toLowerCase().includes(keyword) ||
                program.fakultas.toLowerCase().includes(keyword);

            const matchesFilter =
                activeFilter === "Semua" ||
                program.jenjang === activeFilter;

            return matchesSearch && matchesFilter;
        });
    }, [search, activeFilter]);

    return (
        <MotionConfig reducedMotion="user">
            <main>
                {/* ==================================================
                    HERO SECTION
                ================================================== */}

                <section className="relative isolate overflow-hidden bg-[#073D20] text-white">
                    {/* Background image */}
                    <motion.img
                        src="/gedung/DSC06345.jpg"
                        alt="Gedung Universitas Cendekia Abditama"
                        className="absolute inset-0 -z-20 size-full object-cover object-center"
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 3,
                            ease: "easeOut",
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
                        className="absolute -right-40 -top-40 -z-10 size-[500px] rounded-full bg-[#D8B66A]/15 blur-[100px]"
                        animate={{
                            x: [0, -30, 0],
                            y: [0, 25, 0],
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <div className="relative page-shell grid items-center gap-12 py-20 md:min-h-[500px] md:grid-cols-[1.2fr_0.8fr] md:py-24">
                        {/* Hero text */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div
                                variants={fadeUp}
                                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
                            >
                                <Sparkles className="size-4 text-[#D8B66A]" />
                                <span className="eyebrow text-[#E7D5A9]">
                                    Temukan Potensimu
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="font-display max-w-3xl text-4xl leading-tight font-semibold md:text-6xl"
                            >
                                Pilih Program Studi,
                                <span className="block text-[#D8B66A] italic">
                                    Wujudkan Masa Depan.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base"
                            >
                                Temukan bidang ilmu yang sesuai dengan minat,
                                bakat, dan cita-citamu. Mulai perjalanan
                                akademikmu bersama Universitas Cendekia
                                Abditama.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="mt-8 flex flex-wrap gap-3"
                            >
                                <motion.a
                                    href="#daftar-program"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -3,
                                    }}
                                    whileTap={{ scale: 0.96 }}
                                    className="inline-flex items-center gap-2 rounded-md bg-[#D8B66A] px-6 py-3 text-sm font-bold text-[#073D20] transition-colors hover:bg-[#E9CF91]"
                                >
                                    Jelajahi Program Studi
                                    <ArrowRight className="size-4" />
                                </motion.a>

                                <motion.div
                                    whileHover={{ scale: 1.04, y: -3 }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    <Link
                                        href="/panduan"
                                        className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                    >
                                        Panduan Pendaftaran
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Hero illustration */}
                        <motion.div
                            className="relative hidden md:block"
                            initial={{ opacity: 0, scale: 0.8, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                        >

                            <div className="absolute -inset-10 rounded-full border border-[#D8B66A]/10" />

                            <div className="relative mx-auto flex aspect-square max-w-[340px] items-center justify-center rounded-full bg-white/5 backdrop-blur-sm">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.06, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="flex size-56 items-center justify-center rounded-full border border-[#D8B66A]/40 bg-[#D8B66A]/10"
                                >
                                    <GraduationCap
                                        className="size-28 text-[#D8B66A]"
                                        strokeWidth={1}
                                    />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute top-10 -right-2 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                                >
                                    <BookOpen className="size-7 text-[#D8B66A]" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute -bottom-1 left-0 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                                >
                                    <Sparkles className="size-7 text-[#D8B66A]" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-transparent via-[#D8B66A] to-transparent"
                    />
                </section>

                {/* ==================================================
                    PROGRAM LIST
                ================================================== */}

                <section
                    id="daftar-program"
                    className="section-pad scroll-mt-20 bg-[var(--surface)]"
                >
                    <div className="page-shell">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
                        >
                            <div>
                                <motion.span
                                    variants={fadeUp}
                                    className="eyebrow text-primary"
                                >
                                    Akademik UCA
                                </motion.span>

                                <motion.h2
                                    variants={fadeUp}
                                    className="font-display mt-3 text-3xl font-semibold text-foreground md:text-4xl"
                                >
                                    Program Studi
                                </motion.h2>

                                <motion.p
                                    variants={fadeUp}
                                    className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground"
                                >
                                    Pilih program studi yang sesuai dengan
                                    minat dan rencana masa depanmu.
                                </motion.p>
                            </div>

                            <motion.div
                                variants={fadeUp}
                                className="text-sm text-muted-foreground"
                            >
                                Menampilkan{" "}
                                <strong className="text-primary">
                                    {filteredPrograms.length}
                                </strong>{" "}
                                program studi
                            </motion.div>
                        </motion.div>

                        {/* SEARCH & FILTER */}

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-10 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm md:flex-row md:items-center md:justify-between"
                        >
                            <div className="relative w-full md:max-w-md">
                                <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Cari nama program studi atau fakultas..."
                                    className="h-12 w-full rounded-lg border border-input bg-background pr-10 pl-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20"
                                />

                                <AnimatePresence>
                                    {search && (
                                        <motion.button
                                            initial={{
                                                opacity: 0,
                                                scale: 0.7,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.7,
                                            }}
                                            type="button"
                                            onClick={() => setSearch("")}
                                            className="absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                            aria-label="Hapus pencarian"
                                        >
                                            <X className="size-4" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {filters.map((filter) => (
                                    <motion.button
                                        key={filter}
                                        type="button"
                                        whileTap={{ scale: 0.94 }}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                                            activeFilter === filter
                                                ? "bg-primary text-primary-foreground shadow-md"
                                                : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                                        }`}
                                    >
                                        {filter}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* PROGRAM CARDS */}

                        <motion.div
                            layout
                            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredPrograms.map((program, index) => (
                                    <motion.article
                                        key={program.id}
                                        layout
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{
                                            layout: {
                                                duration: 0.35,
                                                ease: "easeInOut",
                                            },
                                        }}
                                        whileHover={{
                                            y: -8,
                                            transition: { duration: 0.25 },
                                        }}
                                        className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
                                    >
                                        {/* Card image area */}
                                        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[#073D20]">
                                            <motion.div
                                                className="absolute inset-0 bg-heritage-pattern opacity-20"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.7 }}
                                            />

                                            <motion.div
                                                className="absolute -right-10 -bottom-20 size-56 rounded-full border border-[#D8B66A]/20"
                                                animate={{
                                                    rotate: [0, 360],
                                                }}
                                                transition={{
                                                    duration: 40,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            />

                                            <motion.div
                                                whileHover={{
                                                    scale: 1.15,
                                                    rotate: 5,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                }}
                                                className="relative flex size-20 items-center justify-center rounded-2xl border border-[#D8B66A]/30 bg-white/10 text-[#D8B66A] backdrop-blur-sm"
                                            >
                                                <GraduationCap
                                                    className="size-10"
                                                    strokeWidth={1.5}
                                                />
                                            </motion.div>

                                            <span className="absolute top-4 left-4 rounded-md bg-[#D8B66A] px-3 py-1 text-xs font-bold text-[#073D20]">
                                                {program.jenjang}
                                            </span>

                                            <span className="absolute right-4 bottom-4 text-xs font-medium text-white/60">
                                                UCA ACADEMIC
                                            </span>
                                        </div>

                                        {/* Card content */}
                                        <div className="p-6">
                                            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                                                {program.fakultas}
                                            </span>

                                            <h3 className="font-display mt-3 text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                                                {program.nama}
                                            </h3>

                                            <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted-foreground">
                                                {program.deskripsi}
                                            </p>

                                            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                                                <span
                                                    className={`rounded-md px-3 py-1.5 text-xs font-semibold ${program.warna}`}
                                                >
                                                    {program.akreditasi}
                                                </span>

                                                <motion.div
                                                    whileHover={{
                                                        scale: 1.15,
                                                        rotate: 45,
                                                    }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Link
                                                        href={program.slug}
                                                        className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                                                        aria-label={`Detail ${program.nama}`}
                                                    >
                                                        <ArrowUpRight className="size-4" />
                                                    </Link>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* EMPTY STATE */}

                        <AnimatePresence>
                            {filteredPrograms.length === 0 && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                        scale: 0.97,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -10,
                                    }}
                                    className="mt-8 rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center"
                                >
                                    <Search className="mx-auto size-10 text-muted-foreground" />

                                    <h3 className="font-display mt-4 text-xl font-semibold text-foreground">
                                        Program studi tidak ditemukan
                                    </h3>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Coba gunakan kata kunci atau filter
                                        yang berbeda.
                                    </p>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="button"
                                        onClick={() => {
                                            setSearch("");
                                            setActiveFilter("Semua");
                                        }}
                                        className="mt-5 text-sm font-semibold text-primary hover:underline"
                                    >
                                        Reset pencarian
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* ==================================================
                    CTA
                ================================================== */}

                <section className="section-pad">
                    <div className="page-shell">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50,
                                scale: 0.97,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="relative overflow-hidden rounded-2xl bg-[#0f7134] px-6 py-12 text-center text-white md:px-12 md:py-16"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 60,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute -right-16 -bottom-32 size-80 rounded-full border border-[#D8B66A]/20"
                            />

                            <motion.div
                                animate={{
                                    x: [0, 20, 0],
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -left-20 -top-20 size-64 rounded-full bg-[#D8B66A]/10 blur-3xl"
                            />

                            <div className="absolute inset-0 bg-heritage-pattern opacity-20" />

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="relative mx-auto max-w-2xl"
                            >
                                <motion.span
                                    variants={fadeUp}
                                    className="eyebrow text-[#D8B66A]"
                                >
                                    Langkah Selanjutnya
                                </motion.span>

                                <motion.h2
                                    variants={fadeUp}
                                    className="font-display mt-4 text-3xl font-semibold md:text-4xl"
                                >
                                    Masa Depanmu Dimulai
                                    <span className="block text-[#D8B66A] italic">
                                        Dari Sini.
                                    </span>
                                </motion.h2>

                                <motion.p
                                    variants={fadeUp}
                                    className="mt-5 text-sm leading-7 text-white/70 md:text-base"
                                >
                                    Jangan lewatkan kesempatan untuk menjadi
                                    bagian dari Universitas Cendekia Abditama.
                                    Persiapkan dirimu dan mulai proses
                                    pendaftaran sekarang.
                                </motion.p>

                                <motion.div
                                    variants={fadeUp}
                                    className="mt-8 flex flex-wrap justify-center gap-3"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.06, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href="/panduan"
                                            className="inline-flex items-center gap-2 rounded-md bg-[#D8B66A] px-6 py-3 text-sm font-bold text-[#073D20] transition-colors hover:bg-[#E9CF91]"
                                        >
                                            Mulai Pendaftaran
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.06, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href="/kontak"
                                            className="inline-flex items-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                                        >
                                            Hubungi Kami
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </MotionConfig>
    );
}
