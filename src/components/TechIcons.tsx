"use client";

const icons = [
  {
    type: "image",
    src: "/images/icon-git.png",
    alt: "Git",
  },
  {
    type: "svg",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
        <path fill="#FFFFFF" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.5 19h-2v-9h2v9zm-1-10.5A1.25 1.25 0 118.75 7.25 1.25 1.25 0 017.5 8.5zM19 19h-2v-5.2c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.7 1.4-.1.3-.1.8-.1 1.2V19h-2V10h2v1.1c.3-.5 1.1-1.3 2.5-1.3 1.8 0 3.2 1.2 3.2 3.7V19z"/>
      </svg>
    ),
    alt: "LinkedIn",
  },
];

export default function TechIcons() {
  return (
    <div className="mb-10 w-full">
      <p
        className="mb-6 text-center text-sm text-gray-500"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Tech Stack
      </p>
      <div className="overflow-hidden rounded-2xl py-5 backdrop-blur-sm">
        <div
          className="marquee-track flex flex-nowrap items-center gap-4 sm:gap-6"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[0, 1, 2].map((setIndex) => (
            <div
              key={setIndex}
              className="flex flex-nowrap items-center gap-4 sm:gap-6"
            >
              {icons.map((icon, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="marquee-item group flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900/30 backdrop-blur-lg p-3 transition-all duration-500 hover:-translate-y-2 shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                >
                  {icon.type === "image" ? (
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="h-8 w-8 object-contain transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-8 w-8 transition-transform duration-300">
                      {icon.svg}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
