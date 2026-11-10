
import { Link, usePage } from "@inertiajs/react";
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Twitter,
    Youtube,
    ArrowUpRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { SharedData } from "@/pages/interface/siteData";
import { TikTokIcon } from "@/pages/public/kontak";

const navigation = [
    { label: "Beranda", href: "/" },
    { label: "Program Studi", href: "/program-studi" },
    { label: "Jalur Pendaftaran", href: "/penelitian" },
    { label: "Biaya Kuliah", href: "/publikasi" },
    { label: "Beasiswa", href: "/pkm" },
    { label: "Panduan Pendaftaran", href: "/panduan" },
    { label: "FAQ", href: "/faq" },
];

export function FooterPublic() {
    const { site } = usePage<SharedData>().props;    

    const sosmed = [
        { label: "Instagram", icon: Instagram, url: site.instagram },
        { label: "Facebook", icon: Facebook, url: site.facebook },
        { label: "Twitter", icon: Twitter, url: site.twitter },
        { label: "Tiktok", icon: TikTokIcon, url: site.tiktok },
        {
            label: "WhatsApp",
            icon: MessageCircle,
            url: site.whatsapp
                ? `https://wa.me/${site.whatsapp}`
                : null,
        },
    ].filter((item) => item.url);

    return (
        <footer className="bg-[#0f7134] text-white">
            {/* Main footer */}
            <div className="page-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr]">

                {/* Brand */}
                <div>
                    <Link href="/" className="inline-flex items-center gap-3">
                        <div className="rounded-lg bg-white p-2">
                            <img
                                src="/logo_uca.jpg"
                                alt="Logo UCA"
                                className="h-14 w-14 object-contain"
                            />
                        </div>

                        <div>
                            <strong className="block font-display text-lg leading-tight text-white">
                                Penerimaan Mahasiswa Baru
                            </strong>
                            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-widest text-[#D8C18A]">
                                Universitas Cendekia Abditama
                            </span>
                        </div>
                    </Link>

                    <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
                        Wujudkan masa depan bersama Universitas Cendekia
                        Abditama. Temukan potensi, kembangkan kemampuan,
                        dan raih cita-citamu melalui pendidikan berkualitas.
                    </p>

                    {/* Social media */}
                    {sosmed.length > 0 && (
                        <div className="mt-6 flex gap-3">
                            {sosmed.map(({ label, icon: Icon, url }) => (
                                <Button
                                    key={label}
                                    asChild
                                    size="icon"
                                    variant="outline"
                                    className="size-10 rounded-full border-white/20 bg-white/5 text-white hover:border-[#D8B66A] hover:bg-[#D8B66A] hover:text-[#073D20]"
                                >
                                    <a
                                        href={url!}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                    >
                                        <Icon className="size-4" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                        Navigasi
                    </h3>

                    <div className="mt-5 space-y-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group flex w-fit items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#D8B66A]"
                            >
                                {item.label}
                                <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                        Hubungi Kami
                    </h3>

                    <p className="mt-2 text-sm text-[#D8B66A]">
                        Universitas Cendekia Abditama
                    </p>

                    <div className="mt-5 space-y-4 text-sm text-white/65">
                        <div className="flex items-start gap-3">
                            <MapPin className="mt-1 size-4 shrink-0 text-[#D8B66A]" />
                            <span className="leading-6">
                                {site.alamat ??
                                    "Jl. Islamic Raya, Kelapa Dua, Kabupaten Tangerang, Banten 15811"}
                            </span>
                        </div>

                        <a
                            href={`mailto:${site.email ?? "info@uca.ac.id"}`}
                            className="flex items-center gap-3 transition-colors hover:text-[#D8B66A]"
                        >
                            <Mail className="size-4 shrink-0 text-[#D8B66A]" />
                            {site.email ?? "info@uca.ac.id"}
                        </a>

                        <a
                            href={`tel:${site.telepon ?? "+6285810279040"}`}
                            className="flex items-center gap-3 transition-colors hover:text-[#D8B66A]"
                        >
                            <Phone className="size-4 shrink-0 text-[#D8B66A]" />
                            {site.telepon ?? "+6285810279040"}
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="border-t border-white/10">
                <div className="page-shell flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Universitas Cendekia
                        Abditama. Seluruh Hak Dilindungi.
                    </p>

                    <p className="text-[#D8B66A]">
                        Penerimaan Mahasiswa Baru
                    </p>
                </div>
            </div>
        </footer>
    );
}
