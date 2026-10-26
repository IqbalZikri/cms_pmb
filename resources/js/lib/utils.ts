import type { InertiaLinkProps } from '@inertiajs/react';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // buang aksen (é -> e)
        .replace(/[^a-z0-9\s-]/g, '') // buang simbol
        .trim()
        .replace(/\s+/g, '-') // spasi -> -
        .replace(/-+/g, '-'); // beberapa - jadi satu
}
