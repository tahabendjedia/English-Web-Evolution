import Background from "../assets/background1.jpg";
import Google from "../assets/google-1998-04.png";
import Yahoo from "../assets/yahoo_desing.png";

export default function PageFive() {
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
          <linearGradient id="g1-p5" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
          </linearGradient>
          <filter id="blur-p5">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
        <circle
          cx="140"
          cy="760"
          r="90"
          fill="#fbbf24"
          filter="url(#blur-p5)"
          className="decor-float-slow"
          opacity="0.08"
        />
        <g
          stroke="url(#g1-p5)"
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

      <h1 className="hidden md:block absolute left-[-0.01%] rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
        4.Examples
      </h1>

      <div className="max-w-5xl md:ml-[10%] w-full text-indigo-100/90 fade-in text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
          Examples
        </h2>
        <div className="mt-4 h-0.5 w-24 rounded bg-white/6" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">Google in 1998</h3>
            <img
              src={Google}
              alt="Google 1998"
              className="w-64 md:w-80 rounded-xl border shadow-sm"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">Yahoo in 1998</h3>
            <img
              src={Yahoo}
              alt="Yahoo 1998"
              className="w-64 md:w-80 rounded-xl border shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
