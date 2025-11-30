import Background from "../assets/background1.jpg";

export default function PageFour() {
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
      `}</style>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1-p4" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-p4">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
        <circle
          cx="1200"
          cy="200"
          r="140"
          fill="#06b6d4"
          filter="url(#blur-p4)"
          className="decor-float"
          opacity="0.06"
        />
        <g
          stroke="url(#g1-p4)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.85"
          className="decor-float-slow"
        >
          <path d="M120 420 C 260 320, 520 280, 740 360" strokeOpacity="0.18" />
        </g>
        <g fill="#fff" opacity="0.85" className="decor-pulse">
          <circle cx="120" cy="420" r="3.8" />
          <circle cx="300" cy="360" r="3.4" />
          <circle cx="600" cy="320" r="4" />
        </g>
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur-p4)"
          className="decor-float-slow"
          opacity="0.08"
        />

        <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
          <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
          <path d="M0 200 L1440 200 M0 400 L1440 400" />
        </g>
      </svg>

      <h1 className="hidden md:block absolute right-[83%] rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        3.Techs
      </h1>

      <div className="max-w-4xl md:ml-[18%] text-indigo-100/90 fade-in text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
          Technologies used in Web 1.0
        </h2>
        <div className="mt-4 h-0.5 w-24 mx-auto rounded bg-white/6" />
        <ul className="mt-6 text-xl space-y-3 md:list-disc list-none md:list-inside list-inside">
          <li>HTML 1–3.2, HTTP, CGI scripts</li>
          <li>Early JavaScript almost unused.</li>
          <li>Browsers: Mosaic, Netscape, IE.</li>
          <li>Hosting platforms: GeoCities, Tripod, Angelfire.</li>
        </ul>
      </div>
    </section>
  );
}
