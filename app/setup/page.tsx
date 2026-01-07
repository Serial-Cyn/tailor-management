"use client"

// LIBRARIES
import Image from "next/image";

// ILLUSTRATIONS
import RegisterArt from "@/public/KaterinaLimpitsouni/undraw_working_n9u0.svg";

// COMPONENTS
import Button from "@/components/button";
import ComboBox from "@/components/form-control/comboBox";
import EntryField from "@/components/form-control/entryField";

export default function Register() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(event.currentTarget);
        const fname = formData.get("fname") as string;
        const lname = formData.get("lname") as string;
        const role = formData.get("role") as string;

        try {
            // Send data to the server
            const response = await fetch("/api/setup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fname, lname, role }),
            });

            // Handles the response from the server
            const data = await response.json();

            if (!response.ok) {
                console.error("Registration failed:", data.message);
                return;
            }

        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    return (
        <main id="register" className="flex min-w-full min-h-screen flex-col justify-center items-center">
            <div id="register-form" className="w-1/3">
                <div id="header" className="mb-6">
                    <Image
                        src={RegisterArt.src}
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-full h-auto mb-4 object-contain"
                        loading="eager"
                    />
                    <h1 className="text-5xl font-bold mb-1">Congratulations!</h1>
                    <p className="text-neutral-400">Let's set you up to get your workspace ready.</p>
                </div>

                {/* FORM FIELDS */}
                <div id="form-field">
                    <form onSubmit={handleSubmit} method="POST">
                        <div id="fields">
                            <div id="name-fields" className="flex mx-auto gap-4">
                                {/* FIRST NAME FIELD */}
                                <EntryField
                                    id="fname"
                                    name="fname"
                                    label="First Name"
                                    type="text"
                                    placeholder="Enter your first name"
                                    required
                                />

                                {/* LAST NAME FIELD */}
                                <EntryField
                                    id="lname"
                                    name="lname"
                                    label="Last Name"
                                    type="text"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>

                            {/* ROLE FIELD */}
                            <ComboBox
                                id="role"
                                name="role"
                                label="Role"
                                options={["Client", "Manager", "Tailor"]}
                                required
                            />
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="mt-6 flex flex-col justify-center items-center">
                            <Button label="Get Started!" variant="primary" type="submit" full />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}