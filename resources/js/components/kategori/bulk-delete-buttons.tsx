import { router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { bulkDestroy } from '@/routes/kategori';

interface Props {
    ids: number[];
    onSuccess?: () => void;
}

export function BulkDeleteButton({ ids, onSuccess }: Props) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        router.delete(bulkDestroy().url, {
            data: { ids },
            preserveScroll: true,
            onStart: () => setLoading(true),
            onSuccess: () => onSuccess?.(),
            onFinish: () => {
                setLoading(false);
                setOpen(false);
            },
        });
    };

    return (
        <>
            <Button
                variant="destructive"
                size="sm"
                onClick={() => setOpen(true)}
            >
                <Trash2 className="mr-2 h-4 w-4" />
                Hapus ({ids.length})
            </Button>

            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Hapus {ids.length} kategori?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Data yang dipilih akan dihapus dan tidak bisa
                            dikembalikan.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={loading}>
                            Batal
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={(e) => {
                                e.preventDefault();
                                handleDelete();
                            }}
                            disabled={loading}
                            className="bg-destructive text-white hover:bg-destructive/90"
                        >
                            {loading ? 'Menghapus...' : 'Ya, hapus'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
