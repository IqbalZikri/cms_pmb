import { Link } from '@inertiajs/react';
import {
    BookOpen,
    ClipboardList,
    FolderGit2,
    LayoutGrid,
    ListCheck,
    Newspaper,
    University,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes/admin';
import type { NavItem } from '@/types';
import { index } from '@/routes/admin/berita';
import { index as index_fakultas } from '@/routes/admin/fakultas';
import { index as index_jalur_pendaftaran } from '@/routes/admin/jalur-pendaftaran';
import { index as index_prodi } from '@/routes/admin/prodi';
import { index as tahap_registrasi } from '@/routes/admin/tahap-registrasi';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Berita',
        href: index(),
        icon: Newspaper,
    },
    {
        title: 'Fakultas',
        href: index_fakultas(),
        icon: University,
    },
    {
        title: 'Program Studi',
        href: index_prodi(),
        icon: BookOpen,
    },
    {
        title: 'Tahap Registrasi',
        href: tahap_registrasi(),
        icon: ClipboardList,
    },
    {
        title: 'Jalur Pendaftaran',
        href: index_jalur_pendaftaran(),
        icon: ListCheck,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
