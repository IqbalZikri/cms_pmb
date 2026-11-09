import { Field, FieldGroup, FieldLabel } from "./field";
import FileInput from "./file-input";
import { Input } from "./input";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select";

export interface FormFieldConfig {
    label: string;
    name: string;
    type?: "text" | "number" | "email" | "password" | "date" | "radio" | "file" | "select";
    required?: boolean;
    options?: { label: string; value: string }[]; // untuk type "radio" dan "select"
    placeholder?: string;
    accept?: string; // khusus type "file", contoh: "image/*"
}

interface FormFieldsProps {
    fields: FormFieldConfig[];
    errors: Record<string, string>;
    defaults?: object;
}

export default function FormFields({ fields, errors, defaults = {} }: FormFieldsProps) {
    const values = defaults as Record<string, unknown>;

    return (
        <FieldGroup>
            {fields.map((item) => {
                const id = `field-${item.name}`;
                const rawDefault = values[item.name];
                const defaultValue = rawDefault != null ? String(rawDefault) : undefined;
                const isFile = item.type === "file";

                return (
                    <Field key={item.name}>
                        <FieldLabel htmlFor={id}>{item.label}</FieldLabel>

                        {item.type === "radio" ? (
                            <RadioGroup
                                name={item.name}
                                defaultValue={defaultValue}
                                required={item.required}
                            >
                                {item.options?.map((opt) => {
                                    const optId = `${id}-${opt.value}`;
                                    return (
                                        <div key={opt.value} className="flex items-center gap-2">
                                            <RadioGroupItem value={opt.value} id={optId} />
                                            <FieldLabel htmlFor={optId} className="font-normal">
                                                {opt.label}
                                            </FieldLabel>
                                        </div>
                                    );
                                })}
                            </RadioGroup>
                        ) : item.type === "select" ? (
                             (() => {
                                const hasOptions = (item.options?.length ?? 0) > 0;

                                return (
                                    <Select
                                        name={item.name}
                                        defaultValue={defaultValue}
                                        required={item.required}
                                        disabled={!hasOptions}
                                    >
                                        <SelectTrigger id={id} className="w-full">
                                            <SelectValue
                                                placeholder={
                                                    hasOptions
                                                        ? (item.placeholder ?? "Pilih salah satu")
                                                        : "Belum ada data"
                                                }
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {item.options?.map((opt) => (
                                                <SelectItem key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                );
                            })()
                        ) : isFile ? (
                            <FileInput
                                id={id}
                                name={item.name}
                                required={item.required && !defaultValue}
                                accept={item.accept}
                                existingUrl={defaultValue}
                            />
                        ) : (
                            <Input
                                id={id}
                                name={item.name}
                                type={item.type ?? "text"}
                                required={item.required}
                                placeholder={item.placeholder}
                                defaultValue={item.type === "password" ? undefined : defaultValue}
                            />
                        )}

                        {/* Tampilkan file lama (khusus edit) di luar input file */}
                        {isFile && defaultValue && (
                            <img
                                src={`/storage/${defaultValue.replace(/^\/+/, "")}`}
                                alt={item.label}
                                className="h-[200px] rounded-md border object-contain"
                            />
                        )}

                        {errors[item.name] && (
                            <div className="text-sm text-destructive">{errors[item.name]}</div>
                        )}
                    </Field>
                );
            })}
        </FieldGroup>
    );
}