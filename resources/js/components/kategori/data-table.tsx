'use client';

import {
    useTable,
    type ColumnDef,
    type RowData,
    type SortingState,
} from '@tanstack/react-table';
import * as React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { features, type DataTableFeatures } from './data-table-features';
import { Button } from '../ui/button';
import { BulkDeleteButton } from './bulk-delete-buttons';
import { Kategori } from '@/types/kategori';

interface DataTableProps<TData extends { id: number }, TValue> {
    columns: ColumnDef<DataTableFeatures, TData, TValue>[];
    data: TData[];
}

export function DataTable<TData extends { id: number }, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const table = useTable({
        getRowId: (row: Kategori) => String(row.id),
        features,
        data,
        columns,
        onSortingChange: setSorting,
        state: {
            sorting,
        },
    });
    const selectedIds = table
        .getSelectedRowModel()
        .rows.map((row) => (row.original as Kategori).id);

    return (
        <div>
            <div className="overflow-hidden rounded-md border">
                {selectedIds.length > 0 && (
                    <div className="flex items-center justify-between rounded-md border bg-muted/50 px-4 py-2">
                        <span className="text-sm text-muted-foreground">
                            {selectedIds.length} baris dipilih
                        </span>
                        <BulkDeleteButton
                            ids={selectedIds}
                            onSuccess={() => table.resetRowSelection()}
                        />
                    </div>
                )}
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : (
                                                <table.FlexRender
                                                    header={header}
                                                />
                                            )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            <table.FlexRender cell={cell} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
