'use client'
// COMPONENTS
import Button from "@/components/button";
import Navbar from "@/components/navbar";

export default function Home() {
  function handleGetStarted() {
    // Redirect to auth page
    window.location.href = "/auth";
  }

  return (
    <main id="landing-page" className="flex flex-col min-h-screen">
      <Navbar />
      <section
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
          <Button label="Get Started" variant="primary" onClick={handleGetStarted} />
        </div>
      </section>
      <section id="details">
        
      </section>
    </main>
  );
}
