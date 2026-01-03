// ILLUSTRATIONS
import LogInArt from "@/public/KaterinaLimpitsouni/undraw_exam-prep_nmly.svg";

// COMPONENTS
import Button from "@/components/button";
import EntryField from "@/components/form-control/entryField";

export default function AuthPage() {
    return (
        <main id="auth" className="flex flex-1 min-h-screen justify-center items-center">
            {/* FORM CONTAINER */}
            <div id="auth-form" className="flex w-3/5 max-w-4xl h-full space-x-4 border border-neutral-800 rounded-lg">
                {/* Login Form that takes half of the container */}
                <div id="login-form" className="w-1/2 m-8 mr-0 pr-8">
                    <div id="header">
                        <h1 className="text-3xl font-bold mb-4">Login</h1>
                    </div>
                    {/* FORM */}
                    <div id="form-field">
                        <form method="POST" className="mt-6">
                            {/* EMAIL INPUT */}
                            <EntryField
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />

                            {/* PASSWORD INPUT */}
                            <EntryField
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                required
                            />
                            <div className="mt-6 flex flex-col justify-center items-center space-y-2">
                                <Button label="Login" variant="primary" type="submit" full />
                                <button className="text-sm text-neutral-400 cursor-pointer">Don't have an account? Create one!</button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Image that promotes webapp */}
                <div id="promo-image" className="w-1/2 p-8 hidden md:flex flex-col bg-zinc-900 justify-center items-center border-l border-neutral-800">
                    <img
                        src={LogInArt.src}
                        alt="Promotional Image"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                    <h2 className="mt-4 px-4 text-center text-lg">Tired of tracking your tailoring projects manually?</h2>
                    <h1 className="mt-2 px-4 text-center text-2xl font-bold">Go WHOA with <span className="text-(--accent-color)">TailOps!</span></h1>
                </div>
            </div>
        </main>
    );
}