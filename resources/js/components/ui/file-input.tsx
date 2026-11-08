import { useEffect, useState } from "react";
import { Input } from "./input";

interface FileInputProps {
    id: string;
    name: string;
    required?: boolean;
    accept?: string;
    existingUrl?: string; // path lama dari database (khusus edit)
}

export default function FileInput({ id, name, required, accept, existingUrl }: FileInputProps) {
    const [preview, setPreview] = useState<string | null>(null);

    // Bersihkan object URL saat berganti file atau komponen dilepas
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        setPreview(file ? URL.createObjectURL(file) : null);
    }

    const oldUrl = existingUrl ? `/storage/${existingUrl.replace(/^\/+/, "")}` : null;
    const src = preview ?? oldUrl;

    return (
        <>
            <Input
                id={id}
                name={name}
                type="file"
                required={required}
                accept={accept}
                onChange={handleChange}
            />
            {src && (
                <img
                    src={src}
                    alt="Preview"
                    className="h-[200px] rounded-md border object-contain"
                />
            )}
        </>
    );
}