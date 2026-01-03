"use client"

// LIBRARIES
import Image from "next/image";
import { useState } from "react";

// ILLUSTRATIONS
import LogInArt from "@/public/KaterinaLimpitsouni/undraw_hello_ccwj.svg";
import SignUpArt from "@/public/KaterinaLimpitsouni/undraw_exam-prep_nmly.svg";

// COMPONENTS
import Button from "@/components/button";
import EntryField from "@/components/form-control/entryField";
import Navbar from "@/components/navbar";

export default function AuthPage() {
    // States that toggle between login and registration forms
    const [isLogin, setIsLogin] = useState(true);
    const [formTitle, setFormTitle] = useState("Login");
    const [formImage, setFormImage] = useState(LogInArt);

    // Reuses the same form for login and registration by toggling the state
    function changeForm() {
        setIsLogin(!isLogin);
        setFormTitle(isLogin ? "Sign Up" : "Log In");
        setFormImage(isLogin ? SignUpArt : LogInArt);
    }

    return (
        <main id="auth" className="flex flex-1 pt-32 min-h-screen justify-center">
            {/* NAVBAR */}
            <Navbar />

            {/* FORM CONTAINER */}
            <div id="auth-form" className="flex w-3/5 max-w-4xl h-full space-x-4 border border-neutral-800 rounded-lg">
                {/* Login Form that takes half of the container */}
                <div id="login-form" className="w-1/2 m-8 mr-0 pr-8">
                    <div id="header">
                        <h1 className="text-3xl font-bold mb-4">{formTitle}</h1>
                    </div>
                    {/* FORM */}
                    <div id="form-field">
                        <form method="POST" className="mt-6 pb-6">
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

                            {/* RE-ENTER PASSWORD INPUT */}
                            {!isLogin && (
                                <EntryField
                                    id="re-password"
                                    name="re-password"
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="Confirm just to be sure"
                                    required
                                />
                            )}
                            {/* BUTTONS */}
                            <div className="mt-6 flex flex-col justify-center items-center space-y-2">
                                <Button label={isLogin ? "Let's go!" : "Sign up!"} variant="primary" type="submit" full />
                                <button
                                    type="button" 
                                    className="text-sm text-neutral-400 cursor-pointer"
                                    onClick={changeForm}
                                >
                                    Don&apos;t have an account? Click me!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Image that promotes webapp, adds a little UX to make it welcoming */}
                <div id="promo-image" className="w-1/2 p-8 hidden md:flex flex-col bg-zinc-900 justify-center items-center border-l border-neutral-800 space-y-8">
                    <Image
                        src={formImage.src}
                        alt="Promotional Image"
                        width={0}
                        height={0}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                    <h2 className="px-4 text-center text-lg">
                        {isLogin ? "Welcome back! We're glad to see you again!" : "Join us and start your TailOps journey today!"}
                    </h2>
                </div>
            </div>
        </main>
    );
}