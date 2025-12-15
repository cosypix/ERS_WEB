import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ers-black text-white selection:bg-ers-yellow selection:text-black">
      {/* Top Nav */}
      <header className="sticky top-0 z-20">
        <div className="bg-black border-b-4 border-ers-yellow shadow-[0_8px_0_0_#f4c430]">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 uppercase font-tech text-sm tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-14 bg-ers-yellow clip-corner flex items-center justify-center text-black font-bold text-lg">
                ERS
              </div>
              <span className="text-ers-yellow/80 font-body text-xs">
                Electronics & Robotics Society
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link className="nav-link" href="/events">
                Events
              </Link>
              <Link className="nav-link" href="/team">
                Team
              </Link>
              <Link className="nav-link" href="/studio">
                Studio
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ers-yellow/30">
        <div className="absolute inset-0 bg-gradient-to-br from-ers-dark via-black to-black opacity-90" />
        <div className="absolute inset-x-0 top-0 h-24 barcode-stripe opacity-80" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="font-tech text-6xl md:text-8xl font-bold tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-ers-yellow via-white to-ers-yellow drop-shadow-[0_0_18px_rgba(244,196,48,0.45)]">
            ERS CLUB
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#c8c8c8] font-body">
            Industrial cyberpunk hub for makers, coders, and circuit-smiths.
            Building the future one solder joint at a time.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/events" className="btn-primary">
              <span>View Events</span>
            </Link>
            <Link href="/team" className="btn-ghost">
              <span>Meet the Team</span>
            </Link>
          </div>
        </div>
        <div className="relative h-16 bg-black border-t border-ers-yellow/30 flex items-center justify-center">
          <div className="h-10 w-full max-w-6xl barcode-stripe opacity-60" />
        </div>
      </section>
    </main>
  );
}