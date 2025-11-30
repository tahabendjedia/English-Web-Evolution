import Background from "../assets/background1.jpg";

export default function PageSix() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @keyframes floatY{from{transform:translateY(0)}to{transform:translateY(-12px)}}
        @keyframes pulseOpacity{0%{opacity:0.7;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}100%{opacity:0.7;transform:scale(1)}}
        @keyframes fadeIn{0%{opacity:0;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}
        .decor-float{animation:floatY 10s ease-in-out infinite alternate;transform-origin:center}
        .decor-float-slow{animation:floatY 16s ease-in-out infinite alternate;transform-origin:center}
        .decor-pulse{animation:pulseOpacity 4.5s ease-in-out infinite;transform-origin:center}
        .fade-in{animation:fadeIn 520ms cubic-bezier(.22,.9,.35,1) both}
        .glass-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);backdrop-filter:blur(8px)}
        /* CTA pill */
        .cta-pill{display:inline-block;padding:0.45rem 0.8rem;border-radius:9999px;font-weight:800;font-size:1.05rem;line-height:1;color:transparent;background-clip:text;position:relative}
        .cta-pill-inner{display:inline-block;padding:0.8rem 1.6rem;border-radius:9999px;background:linear-gradient(90deg,#ef4444,#fb7185);color:white;font-weight:800;font-size:1.25rem;box-shadow:0 10px 24px rgba(251,113,133,0.14);transition:transform .18s ease,box-shadow .18s ease}
        .cta-pill-inner:hover{transform:translateY(-4px) scale(1.02);box-shadow:0 16px 36px rgba(251,113,133,0.18)}
      `}</style>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1-p6" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-p6">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur-p6)"
          className="decor-float-slow"
          opacity="0.08"
        />
        <g
          stroke="url(#g1-p6)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.85"
          className="decor-float-slow"
        >
          <path d="M140 420 C 300 320, 540 280, 760 360" strokeOpacity="0.18" />
        </g>
        <g fill="#fff" opacity="0.85" className="decor-pulse">
          <circle cx="140" cy="420" r="3.8" />
          <circle cx="320" cy="360" r="3.4" />
          <circle cx="620" cy="320" r="4" />
        </g>

        <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
          <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
          <path d="M0 200 L1440 200 M0 400 L1440 400" />
        </g>
      </svg>

      <h1 className="hidden md:block absolute left-[-11%] rotate-[-90deg] text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        5.Advantages & Disadvantages
      </h1>

      <div className="max-w-4xl md:ml-[18%] text-indigo-100/90 fade-in text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
          Advantages and Disadvantages
        </h2>
        <div className="mt-4 h-0.5 w-24 rounded bg-white/6" />

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Advantages</h3>
            <ul className="mt-3 md:list-disc list-none md:list-inside list-inside space-y-2 text-lg">
              <li>Simple</li>
              <li>Fast</li>
              <li>Secure and easy to host</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Disadvantages</h3>
            <ul className="mt-3 md:list-disc list-none md:list-inside list-inside space-y-2 text-lg">
              <li>No interactivity and poor design</li>
              <li>Hard to update</li>
              <li>No personalisation</li>
              <li>No user Content</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="cta-pill">
              <span className="cta-pill-inner">
                Need to go to another kind of web
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
