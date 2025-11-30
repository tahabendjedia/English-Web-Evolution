import Background from "../assets/background1.jpg";
import Arrowleft from "../assets/arrowleft.png";
import Arrow from "../assets/arrow.png";
import Arrowright from "../assets/arrowright.png";
import Facebook from "../assets/facebook-2004.png";
import Linkedin from "../assets/linkedin-2004.png";
import Steam from "../assets/steam-2004.png";


export default function Seventhslide() {
  return (
    <div
          className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 "
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g1-s2" x1="0" x2="1">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.04" />
              </linearGradient>
              <filter id="blur-s2">
                <feGaussianBlur stdDeviation="28" />
              </filter>
            </defs>
    
            <circle
              cx="1150"
              cy="180"
              r="130"
              fill="#06b6d4"
              filter="url(#blur-s2)"
              className="decor-float"
              opacity="0.06"
            />

            

            <g
              stroke="url(#g1-s2)"
              strokeWidth="1.1"
              fill="none"
              opacity="0.85"
              className="decor-float-slow"
            >
              <path d="M100 420 C 260 320, 520 280, 740 360" strokeOpacity="0.18" />
            </g>
            <g fill="#fff" opacity="0.85" className="decor-pulse">
              <circle cx="110" cy="420" r="3.8" />
              <circle cx="280" cy="360" r="3.4" />
              <circle cx="580" cy="320" r="4" />
            </g>
            <circle
              cx="140"
              cy="760"
              r="90"
              fill="#fbbf24"
              filter="url(#blur-s2)"
              className="decor-float-slow"
              opacity="0.08"
            />
    
            {/* Subtle top-right grid lines */}
            <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
              <path d="M1300 0 L1300 900 M1360 0 L1360 900" />
              <path d="M0 200 L1440 200 M0 400 L1440 400" />
            </g>
          </svg>

        
            
          <div className="  hidden  md:block absolute -left-36 rotate-[-90deg] text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200">
             <h1 className="pl-28">Examples of </h1> <h1> Web 2.0 Applications</h1>
          </div>

          <div className="max-w-4xl mx-auto mt-10">
          <h1 className=" mb-10 pl-10 text-center text-3xl md:text-4xl lg:text-5xl  md:ml-[23%] font-extrabold font-scienceGothic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200">
            Popular examples of Web 2.0 Applications
          </h1>
          <div className=" ml-44 gap-10 flex flex-row justify-between items-center">
            
            <div className="block">
                <img className="h-44 pl-10 mb-16" src={Arrowleft} alt="arrow" />
                <img className="h-44 animate-bounce border-solid border-purple-400 border-4 rounded-md" src={Facebook} alt="facebook" />
                <p className="mt-4 text-center text-xl md:ml-[22%]  bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200 max-w-xl mb-4"> Facebook </p>
            </div>
            <div className="block">
                <img className="h-44 pl-10 mb-16 rotate-[90deg] " src={Arrow} alt="arrow" />
                <img className="h-44 pl-8 animate-bounce border-solid border-purple-400 border-4 rounded-md" src={Linkedin} alt="linkedin" />
                <p className="mt-4 text-center text-xl md:ml-[22%] bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200 max-w-xl mb-4"> Linkedin </p>

            </div>
            <div className=" block">
                <img className="h-44  mb-16 rotate-[90deg] " src={Arrowright} alt="arrow" />
                <img className="h-44 animate-bounce pl-10 border-solid border-purple-400 border-4 rounded-md" src={Steam} alt="steam" />
                <p className="mt-4 text-center text-xl md:ml-[22%] bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-yellow-200 max-w-xl mb-4 "> Steam </p>
            </div>
          </div>

  </div>

          
          
        </div>
        




      );
    }
    <circle
      cx="140"
      cy="760"
      r="90"
      fill="#fbbf24"
      filter="url(#blur-s2)"
      className="decor-float-slow"
      opacity="0.22"
    />;