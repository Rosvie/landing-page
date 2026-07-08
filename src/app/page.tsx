"use client";
import TypingEffect from "@/components/TypingEffect";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between px-12 py-6 border-b border-gray-800 ">
        <div
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          className="text-2xl font-semibold"
        >
          <img src="https://avatars.githubusercontent.com/u/169994948?v=4" alt="avatar" className="rounded-full size-[50px]"/>
        </div>
        <ul
          className="hidden items-center gap-8 text-sm"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              FAQs
            </a>
          </li>
        </ul>
        {/* <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition" style={{ fontFamily: "var(--font-inter)" }}>Contact</button> */}
      </nav>

      <main className="flex flex-col items-center justify-center px-12 py-20">
        {/* Location Badge */}
        {/* <div className="mb-8 text-gray-400 text-sm flex items-center gap-2" style={{ fontFamily: "var(--font-inter)" }}>
          <span>📍</span>
          <span>Dhaka, Bangladesh</span>
        </div> */}

        {/* Main Heading */}
        <div className="mb-16">
          <h1
          className="text-6xl md:text-7xl font-bold text-center mb-6 max-w-4xl leading-tight"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          Rosvie Pepito <br />
          <span className="text-gray-400 text-2xl pt-5">
            <TypingEffect />
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-gray-400 text-lg text-center max-w-4xl"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          I specialize in front-end development, building responsive,
          user-centered web experiences with a focus on performance,
          accessibility, and clean code. I enjoy creating intuitive interfaces
          and continuously learning new technologies to deliver high-quality
          digital solutions.
        </p>
        </div>
        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-6 mb-20" style={{ fontFamily: "var(--font-inter)" }}>
          <button className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
            Get yours now
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition">
            See my works
          </button>
        </div> */}

        {/* Projects Section */}
        

        {/* Work Experience Section */}
        
        <Projects />
        <WorkExperience />
        <Contact />
      </main>
    </div>
  );
}
