import { motion } from 'motion/react';
import {
    ArrowRight,
    Clock3,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Sparkles,
} from 'lucide-react';

const jamPelayanan = [
    { hari: 'Senin – Jumat', jam: '08.00 – 16.00' },
    { hari: 'Sabtu', jam: '08.00 – 12.00' },
    { hari: 'Minggu & Hari Libur', jam: 'Tutup' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

interface Props {
    telepon: string | null;
    email: string | null;
    alamat: string | null;
    instagram: string | null;
    facebook: string | null;
    tiktok: string | null;
    whatsapp: string | null;
}

interface TikTokIconProps {
    size?: number;
    className?: string;
}

export function TikTokIcon({ size = 24, className }: TikTokIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.54v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.9-2.9c0-.2-.02-.4-.05-.6v-3.7a6.45 6.45 0 1 0 3.59 5.78V9.26a8.36 8.36 0 0 0 4.9 1.58V7.3a4.84 4.84 0 0 1-1.13-.61Z" />
        </svg>
    );
}

export default function Kontak({
    telepon,
    email,
    alamat,
    instagram,
    facebook,
    tiktok,
    whatsapp,
}: Props) {
    const informasiKontak = [
        {
            icon: Phone,
            judul: 'Telepon',
            deskripsi: 'Hubungi bagian informasi kampus',
            nilai: telepon,
            href: `tel:+62 ${telepon}`,
        },
        {
            icon: Mail,
            judul: 'Email',
            deskripsi: 'Kirim pertanyaan melalui email',
            nilai: email,
            href: 'mailto:info@uca.ac.id',
        },
        {
            icon: MapPin,
            judul: 'Alamat Kampus',
            deskripsi: 'Kunjungi lokasi kampus kami',
            nilai: 'Universitas Cendekia Abditama',
        },
    ];

    const mediaSosial = [
        {
            icon: Instagram,
            label: 'Instagram',
            href: instagram,
        },
        {
            icon: Facebook,
            label: 'Facebook',
            href: facebook,
        },
        {
            icon: TikTokIcon,
            label: 'Tiktok',
            href: tiktok,
        },
    ];

    return (
        <main className="overflow-hidden bg-[var(--surface)]">
            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-[var(--forest)] text-white">
                <motion.img
                    src="/gedung/DSC06345.jpg"
                    alt="Gedung Universitas Cendekia Abditama"
                    className="absolute inset-0 -z-20 size-full object-cover object-center"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.5, ease: 'easeOut' }}
                />

                <div className="absolute inset-0 -z-10 bg-black/65" />

                <div className="absolute inset-0 -z-10 bg-heritage-pattern opacity-10" />

                <div className="absolute -top-32 -right-24 -z-10 size-96 rounded-full border border-white/10" />

                <div className="absolute -top-16 -right-10 -z-10 size-64 rounded-full border border-white/10" />

                <div className="page-shell section-pad">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <span className="eyebrow text-[var(--gold)]">
                            <Sparkles size={14} />
                            Kami Siap Membantu
                        </span>

                        <h1 className="mt-6 text-4xl leading-tight font-[var(--font-display)] font-semibold md:text-6xl">
                            Mari terhubung
                            <span className="block text-[var(--gold)]">
                                dengan kami.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                            Punya pertanyaan tentang kampus, program studi, atau
                            penerimaan mahasiswa baru? Jangan ragu untuk
                            menghubungi tim kami.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Informasi Kontak */}
            <section className="relative z-10 page-shell -mt-8 pb-16">
                <div className="grid gap-5 md:grid-cols-3">
                    {informasiKontak.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={item.judul}
                                href={item.href}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[var(--forest)]/10 text-[var(--forest)] transition-colors group-hover:bg-[var(--forest)] group-hover:text-white">
                                    <Icon size={22} />
                                </div>

                                <h2 className="font-semibold text-[var(--ink)]">
                                    {item.judul}
                                </h2>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {item.deskripsi}
                                </p>

                                <div className="mt-5 flex items-center justify-between gap-2">
                                    <span className="font-semibold text-[var(--forest)]">
                                        {item.nilai ?? '-'}
                                    </span>

                                    <ArrowRight
                                        size={17}
                                        className="shrink-0 text-[var(--forest)] transition-transform group-hover:translate-x-1"
                                    />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </section>

            {/* Pelayanan Informasi */}
            <section className="page-shell pb-20 md:pb-28">
                <div className="grid items-start gap-10 lg:grid-cols-2">
                    {/* Kolom Kiri */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-7"
                    >
                        <div>
                            <span className="eyebrow text-[var(--amber)]">
                                Pelayanan Informasi
                            </span>

                            <h2 className="mt-4 text-3xl font-[var(--font-display)] text-[var(--ink)] md:text-4xl">
                                Kami siap menyambut Anda.
                            </h2>

                            <p className="mt-4 leading-8 text-muted-foreground">
                                Silakan datang langsung ke kampus atau hubungi
                                tim informasi kami pada jam pelayanan yang
                                tersedia. Kami siap membantu kebutuhan informasi
                                akademik maupun administrasi Anda.
                            </p>
                        </div>

                        {/* Jam Pelayanan */}
                        <div className="rounded-3xl bg-[var(--forest)] p-7 text-white md:p-9">
                            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[var(--gold)] text-[var(--ink)]">
                                <Clock3 size={23} />
                            </div>

                            <h3 className="text-2xl font-[var(--font-display)]">
                                Jam Pelayanan
                            </h3>

                            <div className="mt-6 space-y-4 text-sm">
                                {jamPelayanan.map((item) => (
                                    <div
                                        key={item.hari}
                                        className="flex justify-between gap-4 border-b border-white/15 pb-3 last:border-0 last:pb-0"
                                    >
                                        <span className="text-white/65">
                                            {item.hari}
                                        </span>

                                        <span className="font-semibold">
                                            {item.jam}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-xs leading-6 text-white/50">
                                * Jam pelayanan merupakan contoh dan perlu
                                disesuaikan dengan jadwal resmi kampus.
                            </p>
                        </div>
                    </motion.div>

                    {/* Kolom Kanan */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-6"
                    >
                        {/* Informasi Tambahan */}
                        <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
                            <span className="eyebrow text-[var(--amber)]">
                                Informasi Kampus
                            </span>

                            <h3 className="mt-4 text-2xl font-[var(--font-display)] text-[var(--ink)] md:text-3xl">
                                Satu langkah lebih dekat dengan UCA.
                            </h3>

                            <p className="mt-4 text-sm leading-8 text-muted-foreground">
                                Universitas Cendekia Abditama senantiasa
                                berkomitmen memberikan pelayanan informasi yang
                                baik kepada calon mahasiswa, mahasiswa, alumni,
                                serta masyarakat umum.
                            </p>

                            <div className="mt-7 space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--forest)]/10 text-[var(--forest)]">
                                        <MessageCircle size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-[var(--ink)]">
                                            Konsultasi Informasi
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                            Dapatkan informasi seputar
                                            pendaftaran, program studi, dan
                                            layanan akademik.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--forest)]/10 text-[var(--forest)]">
                                        <MapPin size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-[var(--ink)]">
                                            Kunjungan Kampus
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                            Kenali lingkungan dan fasilitas
                                            kampus dengan berkunjung langsung ke
                                            Universitas Cendekia Abditama.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Media Sosial */}
                        <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
                            <h3 className="text-2xl font-[var(--font-display)] text-[var(--ink)]">
                                Terhubung dengan kami.
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                Ikuti informasi dan aktivitas kampus melalui
                                media sosial resmi Universitas Cendekia
                                Abditama.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {mediaSosial.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href ?? "-"}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={item.label}
                                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-[var(--ink)] transition-all hover:border-[var(--forest)] hover:bg-[var(--forest)] hover:text-white"
                                        >
                                            <Icon size={18} />
                                            {item.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Lokasi Kampus */}
            <section id="lokasi" className="page-shell pb-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-3xl border border-border bg-card"
                >
                    <div className="grid md:grid-cols-2">
                        <div className="p-7 md:p-10">
                            <span className="eyebrow text-[var(--amber)]">
                                Lokasi Kampus
                            </span>

                            <h2 className="mt-4 text-3xl font-[var(--font-display)] text-[var(--ink)]">
                                Temukan lokasi kami.
                            </h2>

                            <p className="mt-4 leading-8 text-muted-foreground">
                                Kunjungi Universitas Cendekia Abditama untuk
                                mendapatkan informasi secara langsung. Kami akan
                                dengan senang hati membantu Anda.
                            </p>

                            <div className="mt-7 flex items-start gap-3">
                                <MapPin
                                    className="mt-1 shrink-0 text-[var(--amber)]"
                                    size={21}
                                />

                                <p className="text-sm leading-7 text-muted-foreground">
                                    Alamat lengkap kampus, kota, provinsi, dan
                                    kode pos.
                                </p>
                            </div>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Universitas+Cendekia+Abditama"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--forest)] transition-all hover:gap-3"
                            >
                                Buka Google Maps
                                <ArrowRight size={17} />
                            </a>
                        </div>

                        {/* Peta Lokasi */}
                        <div className="relative min-h-80 bg-[var(--forest)]/10">
                            <iframe
                                title="Lokasi Universitas Cendekia Abditama"
                                src="https://maps.google.com/maps?q=Universitas%20Cendekia%20Abditama&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    minHeight: '320px',
                                }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* WhatsApp CTA */}
            <section className="page-shell pb-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6 rounded-3xl bg-[var(--ink)] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12"
                >
                    <div className="max-w-2xl">
                        <span className="eyebrow text-[var(--gold)]">
                            Butuh Respons Cepat?
                        </span>

                        <h2 className="mt-3 text-3xl font-[var(--font-display)] md:text-4xl">
                            Hubungi kami melalui WhatsApp.
                        </h2>

                        <p className="mt-3 leading-7 text-white/65">
                            Sampaikan pertanyaan Anda secara langsung kepada tim
                            informasi kampus.
                        </p>
                    </div>

                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-4 font-semibold text-[var(--ink)] transition-all hover:-translate-y-1"
                    >
                        <MessageCircle size={19} />
                        Chat WhatsApp
                        <ArrowRight size={17} />
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
