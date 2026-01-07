type FieldProps = {
    id: string;
    name: string;
    label: string;
    type: "text" | "email" | "password" | "number";
    placeholder?: string;
    required?: boolean;
};

export default function EntryField(
    {
        id, 
        name, 
        label, 
        type = "text", 
        placeholder, 
        required = false
    }: FieldProps
) {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="mb-2 font-semibold">{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-neutral-600 rounded-full"
                required={required}
            />
        </div>
    );
}