import { useState } from "react";
import { Form } from "@inertiajs/react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "./dialog";
import { Button } from "./button";
import FormFields, { FormFieldConfig } from "./form-fields";


interface DialogCreateProps {
    title: string;
    actionUrl: string;
    form: FormFieldConfig[];
}

export default function DialogCreate({ title, actionUrl, form }: DialogCreateProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus />
                    Tambah
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>Tambah data {title}</DialogDescription>
                </DialogHeader>

                <Form
                    action={actionUrl}
                    method="post"
                    resetOnSuccess
                    options={{ preserveScroll: true }}
                    onSuccess={() => setOpen(false)}
                    className="space-y-4"
                >
                    {({ errors, processing }) => (
                        <>
                            <FormFields fields={form} errors={errors} />
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                    Batal
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? "Menyimpan..." : "Simpan"}
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

interface DialogEditProps {
    title: string;
    actionUrl: string; // contoh: update(item.id).url
    form: FormFieldConfig[];
    initialData: object;
}

export function DialogEdit({ title, actionUrl, form, initialData }: DialogEditProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" aria-label={`Edit ${title}`}>
                    <Pencil />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>Ubah data {title}</DialogDescription>
                </DialogHeader>

                <Form
                    action={actionUrl}
                    method="post"
                    options={{ preserveScroll: true }}
                    onSuccess={() => setOpen(false)}
                    className="space-y-4"
                >
                    {({ errors, processing }) => (
                        <>
                            {/* Method spoofing: Laravel membaca ini sebagai PUT */}
                            <input type="hidden" name="_method" value="put" />

                            <FormFields fields={form} errors={errors} defaults={initialData} />
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                    Batal
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? "Menyimpan..." : "Simpan Perubahan"}
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

interface DialogDeleteProps {
    title: string;
    itemName?: string; // nama item yang akan dihapus, untuk konfirmasi
    actionUrl: string;
}

export function DialogDelete({ title, itemName, actionUrl }: DialogDeleteProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="destructive" size="icon" aria-label={`Hapus ${title}`}>
                    <Trash2 />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Hapus {title}</DialogTitle>
                    <DialogDescription>
                        Yakin ingin menghapus {itemName ? <strong>{itemName}</strong> : "data ini"}?
                        Tindakan ini tidak dapat dibatalkan.
                    </DialogDescription>
                </DialogHeader>

                <Form
                    action={actionUrl}
                    method="delete"
                    options={{ preserveScroll: true }}
                    onSuccess={() => setOpen(false)}
                >
                    {({ processing }) => (
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                Batal
                            </Button>
                            <Button type="submit" variant="destructive" disabled={processing}>
                                {processing ? "Menghapus..." : "Ya, Hapus"}
                            </Button>
                        </DialogFooter>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}