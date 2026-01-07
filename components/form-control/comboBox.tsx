type ComboBoxProps = {
    id: string;
    name: string;
    label: string;
    options: string[];
    required?: boolean;
}

export default function ComboBox(
    { 
        id, 
        name, 
        label, 
        options, 
        required 
    }: ComboBoxProps) 
{
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="mb-2 font-semibold">{label}</label>
            <select id={id} name={name} required={required} className="border border-neutral-600 rounded px-3 py-2 bg-background">
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}