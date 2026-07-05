"use client";

const experiences = [
    {
    id: "fdci-work",
    company: "Forty Degrees Celsius Inc.",
    position: "Frontend Developer",
    duration: "January 2025 - Present",
    image: "/images/proj-img4.png",
    link: "https://nativecamp.net/",
    description: [
      "Developed and maintained responsive, user-friendly web applications using PHP/CakePHP and modern frontend technologies. ",
      "Translated Figma designs into reusable frontend components, managed multilingual content and localization (i18n), and ensured compatibility across desktop, tablet, and mobile devices.",
      "Collaborated with UI/UX designers, backend developers, and stakeholders using Git and Jira to deliver high-quality digital solutions.",
    ],
  },
  {
    id: "proweaver-work",
    company: "Proweaver Inc.",
    position: "Wordpress Frontend Developer II",
    duration: "October 2022 - August 2024",
    image: "/images/proj-img2.png",
    link: "https://www.mountvalleymontessori.com/",
    description: [
      "Trained in converting Xara website designs into functional, responsive websites using HTML, PHP, CSS, and WordPress, gaining hands-on experience in web development. ",
      "Developed functional, quality-tested websites and deployed them using Git and FileZilla, ensuring compliance with project requirements and deadlines. ",
      "Collaborated with co-developers and maintain a productive work environment.",
    ],
  },
  
];

// const sample = [
//   {
//     id: "bexar-hospice",
//     title: "Bexar Hospice",
//     subtitle: "UI & Wordpress Developer",
//     image: "/images/proj-img1.png",
//     link: "https://www.bexarhospice.com/",
//     skills: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
//   },
// ]

export default function WorkExperience() {
  return (
    <div className="w-full max-w-6xl mb-24">
      <h2
        className="text-4xl md:text-5xl font-bold mb-10"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        Work Experience
      </h2>

      <div className="work-exp-holder space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex w-full gap-0 rounded-lg border border-gray-700 overflow-hidden"
          >
            <div
              className="work-exp-card w-3/4 p-8 bg-gray-900/30 hover:border-gray-500 transition"
            >
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                {exp.company}
              </h3>
              <p
                className="text-gray-300 italic text-lg mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {exp.position}
              </p>
              <span className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-full mb-6">
                {exp.duration}
              </span>

              <ul className="space-y-3 text-gray-300" style={{ fontFamily: "var(--font-inter)" }}>
                {exp.description.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-white min-w-fit">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="work-rep-card w-1/4 overflow-hidden bg-gray-900/30 hover:border-gray-500 transition"
            >
            <a href={exp.link} target="_blank" rel="noopener noreferrer">
              <img
                src={exp.image}
                alt="Work representation"
                className="w-full h-full object-cover"
              />
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
