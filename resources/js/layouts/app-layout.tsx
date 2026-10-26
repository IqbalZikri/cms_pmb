import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem, FlashMessages } from '@/types';
import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast, Toaster } from 'sonner';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    useEffect(() => {
        // jalan setiap kunjungan Inertia yang sukses; mengembalikan fungsi unsubscribe
        return router.on('success', (event) => {
            const flash = event.detail.page.props.flash as
                FlashMessages | undefined;

            if (flash?.success) toast.success(flash.success);
            if (flash?.error) toast.error(flash.error);
        });
    }, []);
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            {children}
            <Toaster richColors position="top-right" />
        </AppLayoutTemplate>
    );
}
