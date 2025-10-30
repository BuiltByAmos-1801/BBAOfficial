import Section from "@/components/Section";
import { education, experience, certifications, profile, projects } from "@/lib/data";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const projectsList = [
  {
    icon: "🚀",
    name: "BuiltByAmosOfficial",
    desc: "Personal portfolio website showcasing skills, projects, and GitHub analytics with a modern dark UI.",
    stack: ["HTML", "CSS", "JavaScript", "React", "GitHub API"]
  },
  {
    icon: "⚙️",
    name: "Website Performance Analyzer",
    desc: "Web-based analyzer that evaluates website speed, SEO, and performance, providing optimization insights.",
    stack: ["Node.js", "Express.js", "JavaScript", "Lighthouse API"]
  },
  {
    icon: "🎬",
    name: "YtDownloader",
    desc: "A YouTube video downloader supporting multiple resolutions and formats via a clean UI.",
    stack: ["Python", "Flask", "pytube", "HTML", "CSS"]
  },
  {
    icon: "☁️",
    name: "SkyTale",
    desc: "Cloud storage and sharing system offering secure file upload/download with Firebase integration.",
    stack: ["React", "Firebase", "Cloud Firestore", "Tailwind CSS"]
  },
  {
    icon: "🤖",
    name: "Desktop Assistant",
    desc: "AI-based assistant to automate system commands, perform web searches, and manage tasks.",
    stack: ["Python", "SpeechRecognition", "PyAutoGUI", "Tkinter"]
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "MySQL", "Firebase"
];

const softSkills = [
  "Problem-Solving", "Team Collaboration", "Time Management", "Leadership", "Adaptability"
];

const languages = [
  { lang: "English", level: "Fluent" },
  { lang: "Hindi", level: "Native" }
];

export const metadata = {
  title: "Resume",
  description: "Curriculum Vitae | Amos Anand",
};

const today = new Date();
const dateStr = today.toLocaleDateString();

export default function ResumePage() {
  return (
    <Section id="resume" title="Resume">
      <div className="mx-auto max-w-2xl space-y-8 print:bg-white p-4 print:p-0">
        {/* NAME + PHOTO + CONTACT/SOCIAL */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
          <div className="flex-shrink-0 mb-2 sm:mb-0">
            <img
              src={profile.image}
              alt={profile.name}
              className="h-28 w-28 rounded-full border border-zinc-300 bg-zinc-50 object-cover shadow"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Amos Anand</h1>
            <div className="mt-2 text-zinc-700 dark:text-zinc-300">Garhwa, Jharkhand, India</div>
            <div className="mt-1 flex flex-wrap gap-4 items-center">
              <span className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-300 text-sm"><FaPhone /> +91 8757603560</span>
              <span className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-300 text-sm"><FaEnvelope /> amosanand871@gmail.com</span>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm hover:underline"><FaGithub /> BuiltByAmos-1801</a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm hover:underline"><FaLinkedin /> Amos (BuiltByAmos)</a>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <h2 className="text-lg font-semibold mb-1">About Me</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Passionate Software Engineer and Web Developer skilled in building efficient, scalable, and user-friendly applications.
            Currently pursuing a Diploma in Computer Science & Engineering (2024–2027) from Garhwa Polytechnic, JUT Ranchi.
            Enthusiastic about AI, automation, and modern web technologies.
          </p>
        </div>

        {/* EDUCATION */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Education</h2>
          <div className="space-y-3">
            <div>
              <b>Diploma in Computer Science & Engineering (2024–2027)</b><br />
              Garhwa Polytechnic, Jharkhand University of Technology (JUT), Ranchi<br />
              <span className="text-sm text-zinc-500">• Focus on programming, database systems, and networking.</span>
            </div>
            <div>
              <b>Matriculation (2020)</b><br />
              B.N.T. St. Mary School, Garhwa
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Experience</h2>
          <div className="space-y-2">
            <div>
              <b>Manager (Intern)</b> — Joyal Services Pvt. Ltd. (2024–2025)<br />
              <ul className="list-disc pl-6 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Assisted in day-to-day operations and coordinated team activities.</li>
                <li>Improved data flow efficiency and managed task distribution.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Certifications</h2>
          <ul className="list-disc pl-6 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Professional ChatGPT Certification – 2025</li>
            <li>Data Entry Training – Shakti Infotech Pvt. Ltd.</li>
          </ul>
        </div>

        {/* PROJECTS SECTION */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Key Projects (2025)</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projectsList.map((proj) => (
              <div key={proj.name} className="rounded border border-zinc-200 bg-white/60 p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{proj.icon}</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{proj.name}</span>
                </div>
                <div className="text-sm text-zinc-700 dark:text-zinc-300 mb-1">{proj.desc}</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {proj.stack.map((t) => (
                    <span key={t} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Skills</h2>
          <div>
            <b>Software Skills:</b>
            <div className="mt-1 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{s}</span>
              ))}
            </div>
          </div>
          <div className="mt-1">
            <b>Soft Skills:</b>
            <div className="mt-1 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* LANGUAGES */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l.lang} className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">{l.lang} &ndash; {l.level}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}


