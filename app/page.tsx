import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main id="landing-page" className="flex flex-col min-h-screen">
      <Navbar />
      <div
        id="hero"
        className="flex flex-col flex-1 w-full h-full justify-center items-center space-y-6"
      >
        <div id="text" className="text-center space-y-4">
          <h1 className="text-7xl font-bold">TailOps</h1>
          <p className="text-neutral-400 text-lg">
            Streamline your operations with TailOps.
          </p>
        </div>
        <div id="cta">
          <button className="bg-(--accent-color) hover:bg-sky-600 px-4 py-2 text-zinc-950 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200">
            Get Started!
          </button>
        </div>
      </div>
    </main>
  );
}
