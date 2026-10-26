'use client';

import { createColumnHelper } from '@tanstack/react-table';

import { type DataTableFeatures } from './data-table-features';
import { Berita } from '@/types/berita';

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Berita>();

export const columns = columnHelper.columns([
    columnHelper.accessor('kategori', {
        header: 'kategori',
    }),
    columnHelper.accessor('judul', {
        header: 'judul',
    }),
    columnHelper.accessor('views', {
        header: 'views',
    }),
    columnHelper.accessor('status', {
        header: 'Status',
    }),
    columnHelper.accessor('slug', {
        header: 'slug',
    }),
    columnHelper.accessor('published_at', {
        header: 'published_at',
    }), 
]);
