
import projects from "./projects";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Mail,
  ArrowUpRight,
  Code2,
  Send,
  MapPin,
  Phone,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#080810] text-white px-6 md:px-16">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 max-w-7xl mx-auto flex justify-between items-center py-5 px-4 bg-[#080810]/90 backdrop-blur-xsm border-b border-white/10">
        <h2 className="text-2xl font-bold tracking-wide">
          Tanishq<span className="text-purple-500">.</span><span>dev</span>
        </h2>

        <div className="hidden md:flex gap-8 text-gray-400">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize transition-all duration-300 ${
                activeSection === item
                  ? "text-purple-400 font-semibold"
                  : "hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="border border-purple-500 px-5 py-2 rounded-full hover:bg-purple-500 transition"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 py-16"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-purple-400 font-semibold mb-5">
            HELLO, I'M
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Tanishq
            <br />
            <span className="text-purple-500">Maheshwari.</span>
            <br />
            Developer.
          </h1>

          <p className="text-gray-400 text-lg mt-7 max-w-xl leading-relaxed">
            I create modern, responsive and interactive
            websites. I enjoy turning creative ideas into
            real digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition"
            >
              View My Work <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 border border-gray-600 hover:border-purple-500 px-6 py-3 rounded-full transition"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>

          {/* Hero Social Links */}
          <div className="flex items-center justify-start gap-4 mt-8 w-full flex-wrap">

            {/* GitHub */}
            <a
              href="https://github.com/Tanishq-2008"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="flex items-center justify-center p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tanishq-maheshwari-2k26/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex items-center justify-center p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:maheshwaritanishq83@gmail.com"
              aria-label="Email"
              title="Send Email"
              className="flex items-center justify-center p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={22} />
            </a>

            {/* Phone */}
            <a
              href="tel:+917599552449"
              aria-label="Call"
              title="Call Me"
              className="flex items-center justify-center p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-purple-400 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone size={22} />
            </a>

          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-[#11111d] flex flex-col items-center justify-center">
              <Code2 size={90} className="text-purple-400 mb-5" />
              <h2 className="text-3xl font-bold">Creative</h2>
              <p className="text-gray-400 mt-2">Think. Design. Develop.</p>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#1c1c2c] border border-purple-500/40 p-4 rounded-2xl">
              <span className="text-purple-400 font-bold">01</span>
              <p className="text-xs text-gray-400">Always Learning</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 font-semibold tracking-widest mb-3">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            About <span className="text-purple-500">Me.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-5">
                A passionate developer in the making.
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5">
                Hi, I'm Tanishq Maheshwari, a Computer Science
                student specializing in Artificial Intelligence
                and Machine Learning. I enjoy building modern
                websites, exploring new technologies, and
                turning ideas into practical digital experiences.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Currently, I'm strengthening my skills in
                frontend development, React, and Data Structures
                & Algorithms while working on projects that help
                me grow as a developer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#151523] border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition">
                <h3 className="text-purple-400 text-3xl font-bold">
                  B.Tech
                </h3>
                <p className="text-gray-400 mt-3">
                  Computer Science & Engineering
                </p>
              </div>

              <div className="bg-[#151523] border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition">
                <h3 className="text-purple-400 text-3xl font-bold">
                  AI & ML
                </h3>
                <p className="text-gray-400 mt-3">
                  Specialization
                </p>
              </div>

              <div className="col-span-2 bg-[#151523] border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition">
                <h3 className="text-xl font-bold">
                  Tula's Institute
                </h3>
                <p className="text-gray-400 mt-2">
                  Undergraduate Education
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 font-semibold tracking-widest mb-3">
            WHAT I WORK WITH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            My Technical <span className="text-purple-500">Skills.</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mb-14">
            Technologies and tools I am learning and using to
            build modern digital experiences.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming */}
            <div className="bg-[#151523] border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 transition duration-300">
              <h3 className="text-xl font-bold mb-5 text-purple-400">
                Programming
              </h3>
              <div className="flex flex-wrap gap-3">
                {["C++", "JavaScript", "HTML", "CSS"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-[#151523] border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 transition duration-300">
              <h3 className="text-xl font-bold mb-5 text-purple-400">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Tailwind CSS", "Responsive Design"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#151523] border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 transition duration-300">
              <h3 className="text-xl font-bold mb-5 text-purple-400">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {["VS Code", "Git", "GitHub", "Vite"].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-400 font-semibold tracking-widest mb-3">
            MY RECENT WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Featured <span className="text-purple-500">Projects.</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mb-14">
            A collection of projects I've built while learning
            and exploring web development.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#151523] border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-purple-400 text-sm font-semibold">
                    PROJECT {String(project.id).padStart(2, "0")}
                  </span>

                  <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs text-purple-300 bg-purple-500/10 px-3 py-2 rounded-lg"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-purple-400"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-purple-400"
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
     

<section id="contact" className="py-24 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-5">
        Let's Work <span className="text-purple-500">Together.</span>
      </h2>

      <p className="text-gray-400 text-md max-w-3xl">
        Have an interesting project, internship opportunity, or just want
        to connect? Feel free to reach out.
      </p>
    </div>

    {/* Main Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-6">

        {/* Email Card */}
        <div className="bg-[#151523] border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:border-purple-500/40 transition-all duration-300">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-purple-500/15 flex items-center justify-center">
            <Mail size={34} className="text-purple-400" />
          </div>

          <div className="min-w-0">
            <p className="text-white text-lg mb-2">Email Me</p>
            <a
              href="mailto:maheshwaritanishq83@gmail.com"
              className="text-gray-400 text-lg md:text-xl font-medium hover:text-purple-400 transition break-all"
            >
              maheshwaritanishq83@gmail.com
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-[#151523] border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:border-purple-500/40 transition-all duration-300">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-purple-500/15 flex items-center justify-center">
            <MapPin size={34} className="text-purple-400" />
          </div>

          <div>
            <p className="text-white text-lg mb-2">Location</p>
            <h3 className="text-gray-400 text-xl font-medium">India</h3>
          </div>
        </div>

        {/* Connect Card */}
        <div className="flex-1 bg-[#151523] border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">

          <h3 className="text-xl font-bold text-white mb-6">
            Connect with me
          </h3>

          <div className="flex flex-wrap items-center gap-6">

            {/* GitHub */}
            <a
              href="https://github.com/Tanishq-2008"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.31 3.69 1.76.1-.7.39-1.18.7-1.45-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub
              <ArrowUpRight size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tanishq-maheshwari-2k26/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.02 18.34H5.04V9.01h2.98v9.33ZM6.53 7.74a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm12.03 10.6h-2.97v-4.54c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.39v4.62H9.37V9.01h2.85v1.28h.04c.4-.74 1.37-1.52 2.82-1.52 3.02 0 3.58 1.99 3.58 4.58v4.99Z" />
              </svg>
              LinkedIn
              <ArrowUpRight size={17} />
            </a>

          </div>
        </div>

      </div>

      {/* RIGHT COLUMN - CONVERSATION CARD */}
      <div className="bg-[#151523] border border-white/10 rounded-2xl p-6 md:p-8">

        <h3 className="text-2xl md:text-4xl font-bold text-white mb-7">
          Let's start a conversation
        </h3>

        <p className="text-gray-400 text-lg mb-10">
          I'm always open to discussing new ideas and opportunities.
        </p>

        {/* Email Button */}
        <a
          href="mailto:maheshwaritanishq83@gmail.com?subject=Portfolio%20Inquiry"
          className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          Send Me an Email
          <Send size={22} />
        </a>

        {/* Phone Inner Card */}
        <div className="mt-6 border border-white/10 rounded-2xl p-6 md:p-6">

          <div className="flex items-center gap-6">

            <div className="w-20 h-20 shrink-0 rounded-2xl bg-purple-500/15 flex items-center justify-center">
              <Phone size={34} className="text-purple-400" />
            </div>

            <div>
              <p className="text-white text-lg mb-2">Phone</p>
              <p className="text-gray-400 text-xl font-medium">
                +91 7599552449
              </p>

              <div className="flex flex-wrap gap-7 mt-7">

                <a
                  href="tel:+917599552449"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                >
                  <Phone size={19} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/917599552449"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
                >
                  <Send size={19} />
                  WhatsApp Message
                  <ArrowUpRight size={17} />
                </a>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <h2 className="text-xl font-bold">
            Tanishq<span className="text-purple-500">.</span><span>dev</span>
          </h2>

          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Tanishq Maheshwari.
            Built with <span className="text-red-500">&#10084;</span> and lots of &#9749;
          </p>

          <a
            href="#home"
            className="text-purple-400 hover:text-purple-300 transition text-sm"
          >
            Back to Top ↑
          </a>

        </div>
      </footer>

    </main>
  );
}

export default App;
