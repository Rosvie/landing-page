"use client";
import TypingEffect from "@/components/TypingEffect";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <nav className="fixed left-0 right-0 top-0 z-50 flex flex-col gap-4 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12 bg-zinc-900 shadow-[0_8px_6px_-6px_rgba(0,0,0,0.3)]">
        <div
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          className="text-2xl font-semibold"
        >
          <img src="https://avatars.githubusercontent.com/u/169994948?v=4" alt="avatar" className="rounded-full size-[44px] sm:size-[50px]"/>
        </div>
        <ul
          className="hidden items-center gap-8 text-sm md:flex"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <li>
            <a href="#about" className="hover:text-gray-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#work-experience" className="hover:text-gray-400 transition">
              Experiences
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition">
              Connect
            </a>
          </li>
        </ul>
        {/* <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition" style={{ fontFamily: "var(--font-inter)" }}>Contact</button> */}
      </nav>

      <main className="flex flex-col items-center justify-center px-4 pt-24 py-12 sm:px-8 sm:pt-28 sm:py-16 lg:px-12 lg:pt-32 lg:py-20">
        {/* Location Badge */}
        {/* <div className="mb-8 text-gray-400 text-sm flex items-center gap-2" style={{ fontFamily: "var(--font-inter)" }}>
          <span>📍</span>
          <span>Dhaka, Bangladesh</span>
        </div> */}

        {/* Main Heading */}
        <section id="about" className="mb-12 scroll-mt-24 w-full max-w-4xl sm:mb-16">
          <h1
          className="mb-6 text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          Rosvie Pepito <br />
          <span className="block pt-3 text-lg text-gray-400 sm:pt-5 sm:text-xl lg:text-2xl">
            <TypingEffect />
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-center text-base leading-7 text-gray-400 sm:text-lg"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          I specialize in front-end development, building responsive,
          user-centered web experiences with a focus on performance,
          accessibility, and clean code. I enjoy creating intuitive interfaces
          and continuously learning new technologies to deliver high-quality
          digital solutions.
        </p>
        </section>
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
