"use client";

const projects = [
  {
    id: "bexar-hospice",
    title: "Bexar Hospice",
    subtitle: "UI & Wordpress Developer",
    image: "/images/proj-img1.png",
    link: "https://www.bexarhospice.com/",
    skills: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
  },
  {
    id: "mount-valley",
    title: "MOUNT VALLEY MONTESSORI",
    subtitle: "UX & Wordpress Developer",
    image: "/images/proj-img2.png",
    link: "https://www.mountvalleymontessori.com/",
    skills: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
  },
  {
    id: "zion-pentecostal",
    title: "Spiritual Awakening Ministries Inc - Zion Pentecostal FTH CTR",
    subtitle: "UX & Wordpress Developer",
    image: "/images/proj-img3.png",
    link: "http://www.zionpentecostalfaithcenter.org/",
    skills: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <div className="mb-16 w-full max-w-6xl sm:mb-24">
      <p
        className="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        Projects
      </p>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 transition hover:border-gray-500 lg:col-span-1"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt="Website Banner"
                className="h-56 w-full object-cover sm:h-60 lg:h-64"
              />
              <div className="p-5 sm:p-6">
                <h3
                  className="text-white text-lg text-center font-semibold mb-1"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-400 text-sm text-center italic mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
