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
    <div className="w-full max-w-6xl mb-24">
      <p
        className="text-4xl md:text-5xl font-bold mb-10"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        Projects
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card lg:col-span-1 border border-gray-700 rounded-lg hover:border-gray-500 transition cursor-pointer bg-gray-900/50 overflow-hidden"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt="Website Banner"
                className="w-full object-cover h-60"
              />
              <div className="p-6">
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
