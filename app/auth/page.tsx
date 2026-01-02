import Button from "@/components/button";
import EntryField from "@/components/form-control/entryField";

export default function AuthPage() {
    return (
        <main id="auth" className="flex flex-1 min-h-screen justify-center items-center">
            {/* FORM CONTAINER */}
            <div id="auth-form" className="flex p-6 w-3/5 max-w-4xl h-full space-x-4 border-2 border-neutral-600 rounded-lg">
                {/* Login Form that takes half of the container */}
                <div id="login-form" className="w-1/2">
                    <div id="header">
                        <h1 className="text-3xl font-bold mb-4">Login</h1>
                        <p>Let's get back on track!</p>
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

                {/* Signup Form that takes the other half of the container */}
            </div>
        </main>
    );
}