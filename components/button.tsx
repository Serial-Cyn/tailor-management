type ButtonProps = {
    label: string;
    variant: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    full?: boolean;
};

const buttonVariants = {
    primary: "bg-sky-400 text-background hover:bg-sky-600",
    secondary: "border-2 border-neutral-400 text-neutral-400 hover:bg-neutral-400 hover:text-foreground",
};

export default function Button(
    { 
        label = "Click Me", 
        variant = "secondary", 
        type = "button",
        full = false
    } : ButtonProps) {
    

    return (
        <button 
            type={type}
            className={`${buttonVariants[variant]} ${full ? "w-full" : ""} px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200`}
        >
            {label}
        </button>
    );
}