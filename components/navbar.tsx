export default function Navbar() {
    return (
        <nav className="flex px-6 py-4 min-w-screen justify-between items-center">
            <div id="logo">
                TailOps
            </div>
            <div id="tabs">
                <ul className="flex justify-center items-center space-x-4">
                    <li className="text-white hover:underline cursor-pointer">Documentation</li>
                    <li className="text-white hover:underline cursor-pointer">About Us</li>
                    <li className="text-white hover:underline cursor-pointer">Contact</li>
                    <li>
                        <button className="bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-200">
                            Sign In
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}