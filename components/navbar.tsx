
export default function Navbar() {
    return (
        <nav className="sticky flex px-6 py-4 min-w-full bg-zinc-900 rounded-b-md justify-between items-center">
            {/* COMPANY LOGO OR BRANDING */}
            <div id="logo">
                TailOps
            </div>
            {/* MENUS FOR NAVIGATION */}
            <div id="tabs">
                <ul className="flex justify-center items-center space-x-8">
                    <li className="hover:text-neutral-400 cursor-pointer">Documentation</li>
                    <li className="hover:text-neutral-400 cursor-pointer">About Us</li>
                    <li className="hover:text-neutral-400 cursor-pointer">Contact</li>
                    {/* CTA */}
                    <li>
                        <button className="bg-foreground hover:bg-neutral-400 px-6 py-2 text-zinc-950 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200">
                            Log in
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}