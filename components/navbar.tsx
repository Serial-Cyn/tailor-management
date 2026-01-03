export default function Navbar() {
    return (
        <nav className="absolute top-0 flex p-6 min-w-full bg-zinc-900 rounded-b-md justify-between items-center">
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
                </ul>
            </div>
        </nav>
    );
}