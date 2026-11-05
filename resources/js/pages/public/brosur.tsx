import { motion } from 'motion/react';
import {
    ArrowDownToLine,
    ArrowUpRight,
    BookOpen,
    FileText,
    GraduationCap,
    Sparkles,
} from 'lucide-react';

const brosurList = [
    {
        id: 1,
        kategori: 'Informasi PMB',
        judul: 'Brosur Penerimaan Mahasiswa Baru',
        deskripsi:
            'Kenali informasi penerimaan mahasiswa baru, jadwal pendaftaran, persyaratan, dan tahapan seleksi.',
        detail: 'Informasi umum',
        icon: GraduationCap,
        file: '/brosur/brosur-pmb.pdf',
        warna: 'bg-[var(--forest)]',
        nomor: '01',
    },
    {
        id: 2,
        kategori: 'Program Studi',
        judul: 'Brosur Program Studi',
        deskripsi:
            'Temukan pilihan program studi, gambaran pembelajaran, dan peluang pengembangan kompetensi.',
        detail: 'Informasi akademik',
        icon: BookOpen,
        file: '/brosur/brosur-program-studi.pdf',
        warna: 'bg-[var(--ink)]',
        nomor: '02',
    },
    {
        id: 3,
        kategori: 'Biaya dan Beasiswa',
        judul: 'Brosur Biaya Kuliah dan Beasiswa',
        deskripsi:
            'Pelajari informasi biaya pendidikan, pilihan bantuan pendidikan, dan program beasiswa.',
        detail: 'Informasi pembiayaan',
        icon: FileText,
        file: '/brosur/brosur-biaya-beasiswa.pdf',
        warna: 'bg-[#75532d]',
        nomor: '03',
    },
];

export default function Brosur() {
    return (
        <main className="overflow-hidden bg-[var(--surface)]">
            {/* Hero */}

            <section className="relative isolate overflow-hidden bg-[var(--forest)] text-white">
                {/* Background Image */}
                <motion.img
                    src="/gedung/DSC06345.jpg"
                    alt="Gedung Universitas Cendekia Abditama"
                    className="absolute inset-0 z-0 size-full object-cover object-center"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 3,
                        ease: 'easeOut',
                    }}
                />

                {/* Dark Overlay */}
                <motion.div
                    className="absolute inset-0 z-10 bg-black/65"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                />

                {/* Decorative Pattern */}
                <div className="absolute inset-0 z-10 bg-heritage-pattern opacity-10" />

                {/* Decorative Circle */}
                <div className="absolute -top-32 -right-24 z-10 h-96 w-96 rounded-full border border-white/10" />

                <div className="absolute -top-16 -right-10 z-10 h-64 w-64 rounded-full border border-white/10" />

                {/* Content */}
                <div className="relative z-20 page-shell section-pad">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="mb-6 eyebrow text-[var(--gold)]">
                            <Sparkles size={14} />
                            Pusat Informasi PMB
                        </div>

                        <h1 className="text-4xl leading-tight font-[var(--font-display)] font-semibold md:text-6xl">
                            Temukan informasi
                            <span className="block text-[var(--gold)]">
                                dalam satu genggaman.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                            Akses berbagai brosur resmi untuk membantu Anda
                            mengenal kampus, program studi, biaya pendidikan,
                            dan informasi penerimaan mahasiswa baru.
                        </p>

                        <a
                            href="#daftar-brosur"
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-7 py-3.5 font-semibold text-[var(--ink)] transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            Lihat Brosur
                            <ArrowDownToLine size={18} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="page-shell py-16 md:py-20">
                <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
                    <div>
                        <span className="eyebrow text-[var(--amber)]">
                            Informasi Kampus
                        </span>
                        <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-[var(--font-display)] text-[var(--ink)] md:text-5xl">
                            Semua informasi penting, lebih mudah dijangkau.
                        </h2>
                    </div>

                    <p className="leading-8 text-muted-foreground">
                        Kami menyediakan materi informasi yang dapat Anda baca
                        secara online maupun simpan untuk dipelajari kembali
                        bersama keluarga.
                    </p>
                </div>
            </section>

            {/* Brosur cards */}
            <section id="daftar-brosur" className="page-shell pb-20 md:pb-28">
                <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <span className="eyebrow text-[var(--amber)]">
                            Koleksi Brosur
                        </span>
                        <h2 className="mt-3 text-3xl font-[var(--font-display)] text-[var(--ink)] md:text-4xl">
                            Pilih brosur yang Anda butuhkan
                        </h2>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {brosurList.length} kategori informasi
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {brosurList.map((brosur, index) => {
                        const Icon = brosur.icon;

                        return (
                            <motion.article
                                key={brosur.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                                className="group lift-card overflow-hidden rounded-3xl border border-border bg-card"
                            >
                                {/* Visual cover */}
                                <div
                                    className={`relative flex min-h-64 flex-col justify-between overflow-hidden p-7 text-white ${brosur.warna}`}
                                >
                                    <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full border border-white/15" />
                                    <div className="absolute -top-5 -right-5 h-32 w-32 rounded-full border border-white/15" />

                                    <div className="relative flex items-center justify-between">
                                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs">
                                            {brosur.kategori}
                                        </span>
                                        <span className="text-3xl font-[var(--font-display)] text-white/40">
                                            {brosur.nomor}
                                        </span>
                                    </div>

                                    <div className="relative">
                                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gold)] text-[var(--ink)]">
                                            <Icon size={28} />
                                        </div>
                                        <h3 className="max-w-xs text-2xl leading-tight font-[var(--font-display)]">
                                            {brosur.judul}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-7">
                                    <p className="mb-5 min-h-20 text-sm leading-7 text-muted-foreground">
                                        {brosur.deskripsi}
                                    </p>

                                    <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                                        <FileText size={15} />
                                        <span>{brosur.detail}</span>
                                        <span className="ml-auto">
                                            Format PDF
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <a
                                            href={brosur.file}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground transition hover:border-[var(--forest)] hover:text-[var(--forest)]"
                                        >
                                            Lihat
                                            <ArrowUpRight size={16} />
                                        </a>

                                        <a
                                            href={brosur.file}
                                            download
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--forest)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--ink)]"
                                        >
                                            Unduh
                                            <ArrowDownToLine size={16} />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="page-shell pb-20">
                <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ink)] px-7 py-12 text-white md:px-14 md:py-16">
                    <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full border border-white/10" />

                    <div className="relative max-w-2xl">
                        <span className="eyebrow text-[var(--gold)]">
                            Butuh Informasi Lebih Lanjut?
                        </span>
                        <h2 className="mt-4 text-3xl leading-tight font-[var(--font-display)] md:text-4xl">
                            Masih ada yang ingin Anda tanyakan?
                        </h2>
                        <p className="mt-4 leading-8 text-white/65">
                            Tim penerimaan mahasiswa baru siap membantu menjawab
                            pertanyaan Anda seputar perkuliahan dan proses
                            pendaftaran.
                        </p>
                        <a
                            href="/kontak"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3 font-semibold text-[var(--ink)] transition hover:-translate-y-1"
                        >
                            Hubungi Kami
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
