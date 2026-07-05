"use client";

const CONTACT = {
  email: "pepitorosvie08@gmail.com",
  linkedinImage: "", // Add image path later
  linkedinLink: "https://www.linkedin.com/in/rosviepepito/",
  githubImage: "", // Add image path later
  githubLink: "https://github.com/rosvie",
};

export default function Contact() {
  return (
    <div className="w-full max-w-6xl">
      <h2
        className="text-4xl md:text-5xl font-bold mb-12"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        Connect With Me
      </h2>

      <div className="space-y-8">
        {/* Social Media */}
        <div>
          <h3
            className="text-xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Social Media
          </h3>

          <div className="flex gap-4">
            <a
              href={CONTACT.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-gray-400 transition"
            >
              <span className="text-gray-300">in</span>
            </a>

            <a
              href={CONTACT.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-gray-400 transition"
            >
              <span className="text-gray-300">GH</span>
            </a>
          </div>
        </div>

        {/* Email */}
        <div>
          <h3
            className="text-xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Email
          </h3>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
          >
            <span>✉️</span>
            <span>{CONTACT.email}</span>
          </a>
        </div>

        {/* Status */}
        <div>
          <h3
            className="text-xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Status
          </h3>

          <p className="text-gray-500 text-sm">
            Available for remote work worldwide
          </p>
        </div>
      </div>
    </div>
  );
}