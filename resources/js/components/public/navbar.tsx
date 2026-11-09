import { Link, usePage } from "@inertiajs/react";
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../ui/button";
import { login } from "@/routes";

const mainLinks = [
    { label: "Beranda", href: "/" },
    { label: "Program Studi", href: "/program-studi" },
    { label: "Jalur Pendaftaran", href: "/jalur-pendaftaran" },
    { label: "Biaya Kuliah", href: "/biaya-kuliah" },
    { label: "Beasiswa", href: "/beasiswa" },
    { label: "Panduan Pendaftaran", href: "/panduan" },
    { label: "FAQ", href: "/faq" },
    { label: "Brosur", href: "/brosur" },
    { label: "Kontak", href: "/kontak" },
] as const;

export default function NavbarPublic() {
    const [open, setOpen] = useState(false);

    // url dari Inertia, mis. "/berita/judul-berita?page=2"
    const { url } = usePage();
    const path = url.split("?")[0];

    const isActive = (href: string) =>
        href === "/"
            ? path === "/"
            : path === href || path.startsWith(`${href}/`);

    const [beranda, ...otherLinks] = mainLinks;
    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
            <div className="page-shell flex h-20 items-center justify-between">
                <Link
                    href="/"
                    className="flex min-w-0 items-center gap-3"
                    aria-label="LPPM UCA - Beranda"
                >
                    <img
                        src="/logo_uca.jpg"
                        alt="Logo Universitas Cendekia Abditama"
                        className="h-14 w-14 shrink-0 object-contain"
                    />
                    <div className="min-w-0 border-l border-border pl-3">
                        <strong className="block font-display text-xl leading-none text-muted-foreground">
                            Penerimaan Mahasiswa Baru
                        </strong>
                        <span className="mt-1 block truncate text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                            Universitas Cendekia Abditama
                        </span>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav
                    className="hidden items-center gap-1 lg:flex"
                    aria-label="Navigasi utama"
                >
                    <Link
                        href={beranda.href}
                        className={`nav-link ${isActive(beranda.href) ? "nav-link-active" : ""}`}
                        aria-current={
                            isActive(beranda.href) ? "page" : undefined
                        }
                        viewTransition
                    >
                        {beranda.label}
                    </Link>

                    {otherLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
                            aria-current={
                                isActive(item.href) ? "page" : undefined
                            }
                            viewTransition
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link href="https://pmb.uca.ac.id/app" target="__blank" viewTransition>
                        <Button variant={"default"}>Login</Button>
                    </Link>
                </nav>

                <Button
                    size="icon"
                    variant="ghost"
                    className="lg:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Tutup menu" : "Buka menu"}
                    aria-expanded={open}
                >
                    {open ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Mobile nav */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t bg-background lg:hidden"
                    >
                        <div className="page-shell space-y-1 py-4">
                            <Link
                                href={beranda.href}
                                onClick={closeMenu}
                                className={`mobile-link ${isActive(beranda.href) ? "mobile-link-active" : ""}`}
                                viewTransition
                            >
                                {beranda.label}
                            </Link>

                            {otherLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className={`mobile-link ${isActive(item.href) ? "mobile-link-active" : ""}`}
                                    viewTransition
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
