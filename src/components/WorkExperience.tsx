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
    <div className="mb-16 w-full max-w-6xl sm:mb-24">
      <h2
        className="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        Work Experience
      </h2>

      <div className="work-exp-holder space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-900/30 md:flex-row"
          >
            <div
              className="w-full bg-gray-900/30 p-6 transition sm:p-8 md:w-3/4"
            >
              <h3
                className="mb-2 text-2xl font-bold text-white sm:text-3xl"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                {exp.company}
              </h3>
              <p
                className="mb-4 text-base text-gray-300 italic sm:text-lg"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {exp.position}
              </p>
              <span className="mb-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
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
            <div className="w-full overflow-hidden bg-gray-900/30 transition md:w-1/4">
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <img
                  src={exp.image}
                  alt="Work representation"
                  className="h-56 w-full object-cover sm:h-64 md:h-full"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
