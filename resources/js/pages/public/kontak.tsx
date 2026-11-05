import { useState, type FormEvent } from 'react';
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
    Send,
    Sparkles,
} from 'lucide-react';

const informasiKontak = [
    {
        icon: Phone,
        judul: 'Telepon',
        deskripsi: 'Hubungi bagian informasi kampus',
        nilai: '(021) 0000 0000',
        href: 'tel:+622100000000',
    },
    {
        icon: Mail,
        judul: 'Email',
        deskripsi: 'Kirim pertanyaan melalui email',
        nilai: 'info@kampus.ac.id',
        href: 'mailto:info@kampus.ac.id',
    },
    {
        icon: MapPin,
        judul: 'Alamat Kampus',
        deskripsi: 'Kunjungi lokasi kampus kami',
        nilai: 'Alamat lengkap kampus',
        href: '#lokasi',
    },
];

export default function Kontak() {
    const [form, setForm] = useState({
        nama: '',
        email: '',
        subjek: '',
        pesan: '',
    });

    const [sedangMengirim, setSedangMengirim] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value } = e.target;

        setForm((sebelumnya) => ({
            ...sebelumnya,
            [name]: value,
        }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Integrasikan dengan endpoint Laravel di sini.
        // Saat ini formulir belum mengirim data ke server.
        setSedangMengirim(true);

        window.alert(
            'Formulir sudah siap. Hubungkan bagian ini dengan Laravel agar pesan dapat dikirim.',
        );

        setSedangMengirim(false);
    }

    return (
        <main className="overflow-hidden bg-[var(--surface)]">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[var(--forest)] text-white">
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

                <div className="relative z-20 page-shell section-pad">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
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

            {/* Contact information */}
            <section className="relative z-10 page-shell -mt-8 pb-16">
                <div className="grid gap-4 md:grid-cols-3">
                    {informasiKontak.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={item.judul}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="lift-card rounded-2xl border border-border bg-card p-6 shadow-sm"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--forest)]/10 text-[var(--forest)]">
                                    <Icon size={22} />
                                </div>
                                <h2 className="font-semibold text-[var(--ink)]">
                                    {item.judul}
                                </h2>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {item.deskripsi}
                                </p>
                                <p className="mt-4 font-semibold text-[var(--forest)]">
                                    {item.nilai}
                                </p>
                            </motion.a>
                        );
                    })}
                </div>
            </section>

            {/* Form and service information */}
            <section className="page-shell pb-20 md:pb-28">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-border bg-card p-6 md:p-10"
                    >
                        <span className="eyebrow text-[var(--amber)]">
                            Formulir Kontak
                        </span>

                        <h2 className="mt-4 text-3xl font-[var(--font-display)] text-[var(--ink)] md:text-4xl">
                            Kirim pesan kepada kami
                        </h2>

                        <p className="mt-3 leading-7 text-muted-foreground">
                            Isi formulir berikut dengan informasi yang sesuai.
                            Tim kami akan membantu menindaklanjuti pertanyaan
                            Anda.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            <div>
                                <label
                                    htmlFor="nama"
                                    className="mb-2 block text-sm font-semibold text-foreground"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    id="nama"
                                    name="nama"
                                    type="text"
                                    value={form.nama}
                                    onChange={handleChange}
                                    placeholder="Masukkan nama lengkap"
                                    required
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition outline-none placeholder:text-muted-foreground focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-foreground"
                                >
                                    Alamat Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="nama@email.com"
                                    required
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition outline-none placeholder:text-muted-foreground focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subjek"
                                    className="mb-2 block text-sm font-semibold text-foreground"
                                >
                                    Subjek Pertanyaan
                                </label>
                                <input
                                    id="subjek"
                                    name="subjek"
                                    type="text"
                                    value={form.subjek}
                                    onChange={handleChange}
                                    placeholder="Contoh: Informasi pendaftaran"
                                    required
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition outline-none placeholder:text-muted-foreground focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="pesan"
                                    className="mb-2 block text-sm font-semibold text-foreground"
                                >
                                    Pesan
                                </label>
                                <textarea
                                    id="pesan"
                                    name="pesan"
                                    value={form.pesan}
                                    onChange={handleChange}
                                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                                    rows={5}
                                    required
                                    className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm transition outline-none placeholder:text-muted-foreground focus:border-[var(--forest)] focus:ring-2 focus:ring-[var(--forest)]/10"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={sedangMengirim}
                                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--forest)] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                {sedangMengirim
                                    ? 'Memproses...'
                                    : 'Kirim Pesan'}
                                <Send size={17} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Service information */}
                    <div className="space-y-6">
                        <div>
                            <span className="eyebrow text-[var(--amber)]">
                                Pelayanan Informasi
                            </span>
                            <h2 className="mt-4 text-3xl font-[var(--font-display)] text-[var(--ink)] md:text-4xl">
                                Kami siap menyambut Anda.
                            </h2>
                            <p className="mt-4 leading-8 text-muted-foreground">
                                Silakan datang langsung ke kampus atau hubungi
                                tim informasi pada jam pelayanan yang tersedia.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-[var(--forest)] p-7 text-white md:p-9">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gold)] text-[var(--ink)]">
                                <Clock3 size={23} />
                            </div>

                            <h3 className="text-2xl font-[var(--font-display)]">
                                Jam Pelayanan
                            </h3>

                            <div className="mt-6 space-y-4 text-sm">
                                <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                                    <span className="text-white/65">
                                        Senin – Jumat
                                    </span>
                                    <span className="font-semibold">
                                        08.00 – 16.00
                                    </span>
                                </div>
                                <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
                                    <span className="text-white/65">Sabtu</span>
                                    <span className="font-semibold">
                                        08.00 – 12.00
                                    </span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-white/65">
                                        Minggu & Hari Libur
                                    </span>
                                    <span className="font-semibold">Tutup</span>
                                </div>
                            </div>

                            <p className="mt-6 text-xs leading-6 text-white/50">
                                * Jam pelayanan di atas merupakan contoh dan
                                perlu disesuaikan dengan jadwal resmi kampus.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-border bg-card p-7">
                            <h3 className="text-2xl font-[var(--font-display)] text-[var(--ink)]">
                                Terhubung dengan kami
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                Ikuti informasi dan aktivitas kampus melalui
                                media sosial resmi.
                            </p>

                            <div className="mt-5 flex gap-3">
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--forest)] transition hover:bg-[var(--forest)] hover:text-white"
                                >
                                    <Instagram size={19} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--forest)] transition hover:bg-[var(--forest)] hover:text-white"
                                >
                                    <Facebook size={19} />
                                </a>
                                <a
                                    aria-label="WhatsApp"
                                    href="https://wa.me/6280000000000"
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--forest)] transition hover:bg-[var(--forest)] hover:text-white"
                                >
                                    <MessageCircle size={19} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section id="lokasi" className="page-shell pb-20">
                <div className="overflow-hidden rounded-3xl border border-border bg-card">
                    <div className="grid md:grid-cols-2">
                        <div className="p-7 md:p-10">
                            <span className="eyebrow text-[var(--amber)]">
                                Lokasi Kampus
                            </span>
                            <h2 className="mt-4 text-3xl font-[var(--font-display)] text-[var(--ink)]">
                                Temukan lokasi kami
                            </h2>
                            <p className="mt-4 leading-8 text-muted-foreground">
                                Kunjungi kampus kami untuk mendapatkan informasi
                                secara langsung. Kami akan dengan senang hati
                                membantu kebutuhan Anda.
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
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--forest)] transition hover:gap-3"
                            >
                                Buka Google Maps
                                <ArrowRight size={17} />
                            </a>
                        </div>

                        <div className="flex min-h-72 items-center justify-center bg-[var(--forest)]/10 p-8 text-center">
                            <div>
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--forest)] text-[var(--gold)]">
                                    <MapPin size={30} />
                                </div>
                                <p className="mt-4 font-semibold text-[var(--ink)]">
                                    Lokasi Kampus
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Peta lokasi dapat ditampilkan di sini.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp CTA */}
            <section className="page-shell pb-20">
                <div className="flex flex-col gap-6 rounded-3xl bg-[var(--ink)] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
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
                        href="https://wa.me/6280000000000"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--gold)] px-7 py-4 font-semibold text-[var(--ink)] transition hover:-translate-y-1"
                    >
                        <MessageCircle size={19} />
                        Chat WhatsApp
                        <ArrowRight size={17} />
                    </a>
                </div>
            </section>
        </main>
    );
}
