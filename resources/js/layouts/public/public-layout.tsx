import { FooterPublic } from '@/components/public/footer';
import NavbarPublic from '@/components/public/navbar';
import { useEffect } from 'react';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const root = document.documentElement;
        root.classList.add('public-theme');
        return () => root.classList.remove('public-theme');
    }, []);
    return (
        <>
            <NavbarPublic />
            {children}
            <FooterPublic />
        </>
    );
}
