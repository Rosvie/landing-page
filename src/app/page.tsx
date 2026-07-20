"use client";
import TypingEffect from "@/components/TypingEffect";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <nav className="fixed left-0 right-0 top-0 z-50 flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12 backdrop-blur-md">
        <div
          style={{ fontFamily: "var(--font-instrument-serif)" }}
          className="text-2xl font-semibold"
        >
          <img src="https://avatars.githubusercontent.com/u/169994948?v=4" alt="avatar" className="rounded-full size-[44px] sm:size-[50px]" />
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

      <main className="flex flex-col items-center justify-center">
        <section id="about" className="scroll-mt-24 mt-20 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24" >
          <div className="mx-auto flex flex-col items-center justify-center rounded-4xl w-full max-w-6xl px-12 py-16 sm:px-16 sm:py-20 lg:px-24 lg:py-28 backdrop-blur-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <h1
              className="mb-6 text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Rosvie Pepito <br />
              <span className="block pt-3 text-lg text-gray-400 sm:pt-5 sm:text-xl lg:text-2xl">
                <TypingEffect />
              </span>
            </h1>

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
          </div>
        </section>

        <div className="w-full px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <Projects />
          </div>
        </div>

        <div className="w-full px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <WorkExperience />
          </div>
        </div>

        <div className="w-full px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
