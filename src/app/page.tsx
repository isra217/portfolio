"use client";

import { type FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Atom,
  BriefcaseBusiness,
  Braces,
  Code2,
  Compass,
  Database,
  ExternalLink,
  Flame,
  GraduationCap,
  Hexagon,
  Lightbulb,
  Mail,
  Moon,
  Rocket,
  School,
  Sparkles,
  Sun,
  Terminal,
  Triangle,
  Wind,
} from "lucide-react";

/* Brand icons (lucide-react no longer exports these) */
function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.48 0 .13 5.34.12 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.93-11.92a11.85 11.85 0 0 0-3.47-8.42ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.87 9.87 0 0 1 2.9 7.03c0 5.47-4.45 9.92-9.93 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* Technology chips (icon + brand colour) */
const technologies = [
  { name: "JavaScript", icon: Braces, color: "#eab308" },
  { name: "React.js", icon: Atom, color: "#61dafb" },
  { name: "Next.js", icon: Triangle, color: "currentColor" },
  { name: "Node.js", icon: Hexagon, color: "#3c873a" },
  { name: "Python", icon: Terminal, color: "#3776ab" },
  { name: "MySQL", icon: Database, color: "#00758f" },
  { name: "Firebase", icon: Flame, color: "#f59e0b" },
  { name: "Tailwind CSS", icon: Wind, color: "#38bdf8" },
];



const codeLines = [
  { number: "01", content: <><span className="text-purple-400">const</span> <span className="text-sky-300">developer</span> = {"{"}</> },
  { number: "02", content: <>  name: <span className="text-emerald-300">&quot;Isra Saleem&quot;</span>,</> },
  { number: "03", content: <>  role: <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,</> },
  { number: "04", content: <>  degree: <span className="text-emerald-300">&quot;BSIT&quot;</span>,</> },
  { number: "05", content: <>  university: <span className="text-emerald-300">&quot;Bahria University&quot;</span>,</> },
  { number: "06", content: <>  skills: [</> },
  { number: "07", content: <>    <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>,</> },
  { number: "08", content: <>    <span className="text-emerald-300">&quot;Node.js&quot;</span>, <span className="text-emerald-300">&quot;Python&quot;</span></> },
  { number: "09", content: <>  ],</> },
  { number: "10", content: <>  mindset: <span className="text-emerald-300">&quot;Always learning&quot;</span>,</> },
  { number: "11", content: <span className="text-purple-400">;</span> },
];

const whatsappNumber = "923165244704";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showMoreProjects, setShowMoreProjects] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  /* Restore saved theme */
  useEffect(() => {
    const stored = window.localStorage.getItem("isra-theme");
    // Keep the server and first client render in sync, then restore the saved choice.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem("isra-theme", next);
      return next;
    });
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const text = `Hello Isra, I'm ${name} (${email}).\n\n${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      className={`portfolio-shell ${
        theme === "light" ? "theme-light" : "theme-dark"
      }`}
    >
      {/* ================= FLOATING NAVBAR ================= */}

      <header className="floating-header">
        <nav className={`floating-nav${isScrolled ? " is-scrolled" : ""}`}>
          {/* Brand — name only */}
          <a href="#home" className="brand-name">
            Isra Saleem<span>.</span>
          </a>

          {/* Desktop links */}
          <div className="nav-links-capsule hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              aria-pressed={theme === "light"}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <div className="hidden sm:block">
              <a href="#contact" className="nav-contact">
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="mobile-menu-button"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mobile-nav-panel"
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= FIXED SOCIAL RAIL (RIGHT) ================= */}

      <aside className="social-rail" aria-label="Social links">
  <a
    href="https://github.com/isra217"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub profile"
  >
    <GithubIcon size={17} />
  </a>

  <a
    href="https://www.linkedin.com/in/isra-saleem-082920247"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn profile"
  >
    <LinkedinIcon size={17} />
  </a>

  <a
    href={`https://wa.me/${whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp 03165244704"
    title="WhatsApp: 03165244704"
  >
    <WhatsAppIcon size={18} />
  </a>

  <span className="social-rail-line" />
</aside>

      <main>
        {/* ================= HERO ================= */}

        <section
          id="home"
          className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0b1120] pb-8 pt-24 text-white"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

          <div className="container-custom relative z-10">
            <div className="hero-grid">
              {/* LEFT CONTENT */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="hero-intro"
              >
                

                <p className="mb-3 text-base font-medium text-slate-400">
                  Hello, I&apos;m
                </p>

                <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-6xl">
                  Isra
                  <span className="text-blue-500"> Saleem.</span>
                </h1>

                <h2 className="mb-4 text-xl font-semibold leading-snug text-slate-200 sm:text-2xl">
                  Associate Software Engineer
                  <span className="block text-blue-400">
                    &amp; Full-Stack Web Developer
                  </span>
                </h2>

                <p className="mb-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  I create responsive, user-focused web applications with modern
                  frontend and backend technologies, turning ideas into useful
                  digital experiences.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
                  >
                    Let&apos;s Talk
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-4 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-400"
                  >
                    Explore My Work
                  </a>
                </div>
              </motion.div>

              {/* RIGHT CODE EDITOR */}

              <motion.div
                initial={{ opacity: 0, x: 45 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 blur-2xl" />

                <div className="code-window relative">
                  {/* Editor header */}

                  <div className="flex items-center justify-between border-b border-slate-700/70 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Code2 size={15} />
                      developer.tsx
                    </div>

                    <Terminal size={17} className="text-slate-400" />
                  </div>

                  {/* Editor content */}

                  <div className="p-5 sm:p-7">
                    <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
                      <span className="text-blue-400">src</span>
                      <span>/</span>
                      <span>developer.tsx</span>
                    </div>

                    <div className="space-y-1">
                      {codeLines.map((line, index) => (
                        <motion.div
                          key={line.number}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.7 + index * 0.08,
                          }}
                          className="code-line"
                        >
                          <span className="code-number">{line.number}</span>
                          <span className="text-slate-200">{line.content}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-7 rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3">
                      <div className="flex items-center gap-2 text-xs text-emerald-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Building ideas into applications...
                      </div>
                    </div>
                  </div>

                  {/* Editor footer */}

                  <div className="flex items-center justify-between border-t border-slate-700/70 bg-[#0b1220] px-5 py-3 text-xs text-slate-500">
                    <span>TypeScript React</span>
                    <span>UTF-8</span>
                  </div>
                </div>

                {/* Floating label */}

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-7 -left-5 hidden rounded-xl border border-slate-700 bg-[#182235] p-4 shadow-xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                      <Sparkles size={21} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Always Learning
                      </p>
                      <p className="text-xs text-slate-400">
                        Growing as an engineer
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* TECHNOLOGY STRIP — with logos */}

            <div className="hero-divider mt-10 pt-5 sm:mt-12">
              <div className="hero-eyebrow mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                <Code2 size={16} />
                I Work With
              </div>

              <div className="tech-marquee" aria-label="Technologies I work with">
                <div className="tech-marquee-track">
                  {[...technologies, ...technologies].map(({ name, icon: Icon, color }, index) => (
                    <span
                      key={`${name}-${index}`}
                      className="tech-logo-chip"
                      aria-hidden={index >= technologies.length}
                    >
                      <Icon size={25} style={{ color }} aria-hidden="true" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

           
          </div>

          
        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section-padding bg-white px-6 py-24 text-slate-900"
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                About Me
              </p>

              <div className="mb-10 max-w-3xl">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  More than just code.
                </h2>
                <p className="text-base leading-8 text-slate-600 md:text-lg">
                  I&apos;m Isra Saleem, an Information Technology graduate and
                  Associate Software Engineer who enjoys turning thoughtful
                  ideas into useful, easy-to-use web experiences.
                </p>
              </div>

              <div className="about-grid grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="about-copy space-y-5 text-slate-600">
                  <p className="leading-8">
                    With a BS in Information Technology from Bahria University
                    Islamabad and hands-on experience as a Junior Web Developer
                    at AFZ Global, I build responsive interfaces and practical
                    web applications with React, Next.js, JavaScript and
                    backend tools. I value clean, maintainable code, learning continuously, and making
                    digital products genuinely helpful for the people who use
                    them.
                  </p>
                 
                  <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                    <Sparkles size={16} />
                    Curious by nature. Builder by choice.
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "My focus",
                      detail: "Full-stack web development",
                      icon: Code2,
                    },
                    {
                      title: "My background",
                      detail: "BS Information Technology",
                      icon: Database,
                    },
                    {
                      title: "My mindset",
                      detail: "Always learning and improving",
                      icon: Lightbulb,
                    },
                    {
                      title: "My ambition",
                      detail: "Build useful digital products",
                      icon: Rocket,
                    },
                  ].map(({ title, detail, icon: Icon }) => (
                    <div
                      key={title}
                      className="about-card rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-300"
                    >
                      <Icon className="mb-4 text-blue-600" size={22} />
                      <h3 className="mb-1 font-bold text-slate-900">{title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= HOW I WORK ================= */}

        <section className="section-padding bg-blue-50 px-6 text-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                How I Work
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                From idea to impact.
              </h2>

              <p className="mb-10 max-w-2xl leading-7 text-slate-600">
                A thoughtful process helps me create work that is useful,
                clear, and ready to grow.
              </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { number: "01", title: "Understand", icon: Lightbulb, detail: "Clarify the people, problem, and goals." },
                    { number: "02", title: "Plan", icon: Compass, detail: "Choose a practical approach and tools." },
                    { number: "03", title: "Build", icon: Code2, detail: "Create responsive, maintainable solutions." },
                    { number: "04", title: "Improve", icon: Rocket, detail: "Test, learn, and refine the experience." },
                  ].map(({ number, title, icon: Icon, detail }) => (
                    <div
                      key={number}
                      className="process-card rounded-xl border border-slate-200 p-5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <Icon className="text-blue-600" size={21} />
                        <span className="text-xs font-bold tracking-widest text-slate-400">
                          {number}
                        </span>
                      </div>
                      <h4 className="mb-1 font-bold">{title}</h4>
                      <p className="text-sm leading-6 text-slate-600">{detail}</p>
                    </div>
                  ))}
                </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="section-padding bg-slate-50 text-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                My Skills
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Technologies I Work With
              </h2>

              <p className="mb-10 max-w-2xl leading-7 text-slate-600">
                I use modern web technologies to build responsive interfaces,
                interactive applications and practical web solutions.
              </p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Frontend Development",
                    skills: [
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "React.js",
                      "Next.js",
                      "Tailwind CSS",
                    ],
                  },
                  {
                    title: "Backend Development",
                    skills: ["Node.js", "Express.js", "REST APIs", "Python"],
                  },
                  {
                    title: "Database & Services",
                    skills: ["Firebase", "MySQL", "Firestore"],
                  },
                  {
                    title: "Tools & Workflow",
                    skills: ["Git", "GitHub", "VS Code", "Vercel"],
                  },
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="skill-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="mb-5 text-lg font-bold">{category.title}</h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section-padding bg-white px-6 py-24 text-slate-900"
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                Career Journey
              </p>

              <h2 className="mb-10 text-3xl font-bold md:text-4xl">
                Professional Experience
              </h2>

              <div className="relative space-y-8 border-l-2 border-blue-200 pl-8">
                {/* AFZ Experience */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-blue-600 bg-white"></span>

                  <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold">
                          Junior Web Developer
                        </h3>
                        <p className="mt-1 font-medium text-blue-600">
                          AFZ Global
                        </p>
                      </div>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                        May 2026 – July 2026
                      </span>
                    </div>

                    <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                      <li>
                        Developed responsive business websites and web pages.
                      </li>
                      <li>
                        Worked on website layouts, service pages and landing
                        pages.
                      </li>
                      <li>
                        Used React, Next.js, HTML, CSS and Tailwind CSS.
                      </li>
                      <li>Improved user interfaces and fixed website issues.</li>
                      <li>
                        Used Git and GitHub for version control and
                        collaboration.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Front-end Internship */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-blue-600 bg-white"></span>

                  <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold">Front-end Developer Intern</h3>
                        <p className="mt-1 font-medium text-blue-600">
                          CodeAlpha
                        </p>
                      </div>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                        July 2025 – September 2025
                      </span>
                    </div>

                    <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                      <li>
                        Built a responsive personal portfolio to present projects,
                        skills, and contact information.
                      </li>
                      <li>
                        Developed an interactive calculator with a clear,
                        accessible interface and reliable input handling.
                      </li>
                      <li>
                        Created a browser-based music player interface with
                        playback controls and responsive layouts.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="section-padding bg-blue-50 px-6 py-24 text-slate-900"
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                Education
              </p>

              <h2 className="mb-10 text-3xl font-bold md:text-4xl">
                Academic Background
              </h2>

              <div className="education-timeline grid gap-5 md:grid-cols-3">
                {[
                  {
                    period: "2017 – 2019",
                    qualification: "Matriculation · Science",
                    institution: "MC Girl Model High School",
                    icon: School,
                    detail: "Built a strong foundation in science and mathematics.",
                  },
                  {
                    period: "2019 – 2021",
                    qualification: "Intermediate · ICS",
                    institution: "IMCG F-7/2 College",
                    icon: BriefcaseBusiness,
                    detail: "Studied computer science alongside mathematics.",
                  },
                  {
                    period: "2022 – 2026",
                    qualification: "BS Information Technology",
                    institution: "Bahria University Islamabad",
                    icon: GraduationCap,
                    detail: "Focused on software, databases, and web development.",
                  },
                ].map(({ period, qualification, institution, icon: Icon, detail }, index) => (
                  <motion.article
                    key={institution}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="education-card relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <span className="education-icon flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={23} />
                      </span>
                      <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                        {period}
                      </span>
                    </div>
                    <p className="mb-2 text-sm font-semibold text-blue-600">
                      {qualification}
                    </p>
                    <h3 className="mb-3 text-lg font-bold leading-snug">
                      {institution}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">{detail}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section-padding bg-white px-6 py-24 text-slate-900"
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                My Work
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Featured Projects
              </h2>

              <p className="mb-10 max-w-2xl leading-7 text-slate-600">
                Here are some projects that demonstrate my experience in
                building responsive websites, interactive applications and
                full-stack solutions.
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* WellnessAI */}
                <motion.article
                  style={{ order: 2 }}
                  whileHover={{ y: -6 }}
                  className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="project-art project-art-wellness flex h-44 items-center justify-center">
                    <Image
                      src="/assets/1.png"
                      alt="WellnessAI fitness dashboard preview"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="project-preview-image"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold">WellnessAI</h3>
                    <p className="project-description mb-5 text-sm leading-7 text-slate-600">
                      An AI-powered fitness and wellness platform for guided
                      exercise, real-time posture feedback, personalized plans,
                      and connecting users with health professionals.
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {["HTML/CSS/JavaScript", "Node.js", "Flask", "MediaPipe", "Firebase"].map((tech) => (
                        <span key={tech} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions mt-auto flex flex-wrap gap-3">
                      <a href="https://isra217.github.io/WelnessAI-A-fitness-platform/" target="_blank" rel="noopener noreferrer" className="project-demo-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        Live Demo <ExternalLink size={15} />
                      </a>
                      <a href="https://github.com/isra217/WelnessAI-A-fitness-platform" target="_blank" rel="noopener noreferrer" className="project-github-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        <GithubIcon size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>

                {/* Travel Website */}
                <motion.article
                  style={{ order: 1 }}
                  whileHover={{ y: -6 }}
                  className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="project-art project-art-travel flex h-44 items-center justify-center">
                    <Image
                      src="/assets/2.png"
                      alt="Travel website destination and booking preview"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="project-preview-image"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold">Travel Website</h3>
                    <p className="project-description mb-5 text-sm leading-7 text-slate-600">
                      A responsive travel booking platform where visitors can
                      discover destinations, compare tour packages, view trip
                      details, and send booking requests.
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {["Next.js", "React", "TypeScript", "Node.js", "Firebase"].map((tech) => (
                        <span key={tech} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions mt-auto flex flex-wrap gap-3">
                      <a href="https://travel-website-88a4-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-demo-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        Live Demo <ExternalLink size={15} />
                      </a>
                      <a href="https://github.com/isra217/travel-website" target="_blank" rel="noopener noreferrer" className="project-github-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        <GithubIcon size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>

                {/* Crypto Dashboard */}
                <motion.article
                  style={{ order: 5 }}
                  whileHover={{ y: -6 }}
                  className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="project-art project-art-crypto flex h-44 items-center justify-center">
                    <Image
                      src="/assets/3.png"
                      alt="Crypto portfolio dashboard preview"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="project-preview-image"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold">Crypto Dashboard</h3>
                    <p className="project-description mb-5 text-sm leading-7 text-slate-600">
                      A cryptocurrency tracker for exploring live market prices,
                      reviewing coin trends with charts, managing a portfolio,
                      and monitoring price alerts.
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {["React", "JavaScript", "Chart.js", "CoinGecko API", "CSS"].map((tech) => (
                        <span key={tech} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions mt-auto flex flex-wrap gap-3">
                      <a href="https://isra217.github.io/Crypto-Dashboard/" target="_blank" rel="noopener noreferrer" className="project-demo-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        Live Demo <ExternalLink size={15} />
                      </a>
                      <a href="https://github.com/isra217/Crypto-Dashboard" target="_blank" rel="noopener noreferrer" className="project-github-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        <GithubIcon size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>

                <AnimatePresence>
                  {showMoreProjects && (
                    <>
                      <motion.article
                        key="afz-ksa"
                        style={{ order: 3 }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.35 }}
                        whileHover={{ y: -6 }}
                        className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                      >
                        <div className="project-art project-art-afz-ksa flex h-44 items-center justify-center">
                          <Image
                            src="/assets/4.png"
                            alt="AFZ KSA website project preview"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="project-preview-image"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="mb-3 text-xl font-bold">AFZ KSA</h3>
                          <p className="project-description mb-5 text-sm leading-7 text-slate-600">
                            I built a responsive Next.js website to establish
                            AFZ&apos;s company presence in Saudi Arabia and
                            introduce visitors to its regional operations. A
                            chatbot helps visitors find information and support.
                          </p>
                          <div className="mb-6 flex flex-wrap gap-2">
                            {["Next.js", "Responsive Design", "Chatbot"].map((tech) => (
                              <span key={tech} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{tech}</span>
                            ))}
                          </div>
                          <div className="project-actions mt-auto flex flex-wrap gap-3">
                      <a href="https://afz-ksa.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-demo-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        Live Demo <ExternalLink size={15} />
                      </a>
                      <a href="https://github.com/isra217/afz-ksa" target="_blank" rel="noopener noreferrer" className="project-github-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        <GithubIcon size={16} /> GitHub
                      </a>
                    </div>
                        </div>
                      </motion.article>

                      <motion.article
                        key="afz-global"
                        style={{ order: 4 }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.35, delay: 0.08 }}
                        whileHover={{ y: -6 }}
                        className="project-card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                      >
                        <div className="project-art project-art-afz-global flex h-44 items-center justify-center">
                          <Image
                            src="/assets/5.png"
                            alt="AFZ Global website project preview"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="project-preview-image"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="mb-3 text-xl font-bold">AFZ Global</h3>
                          <p className="project-description mb-5 text-sm leading-7 text-slate-600">
                            I built a responsive Next.js website for AFZ&apos;s
                            presence in Pakistan, showcasing the company&apos;s
                            operations and services. Its chatbot helps visitors
                            explore the site and get information.
                          </p>
                          <div className="mb-6 flex flex-wrap gap-2">
                            {["Next.js", "Responsive Design", "Chatbot"].map((tech) => (
                              <span key={tech} className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">{tech}</span>
                            ))}
                          </div>
                          <div className="project-actions mt-auto flex flex-wrap gap-3">
                      <a href="https://afz-global.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-demo-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        Live Demo <ExternalLink size={15} />
                      </a>
                      <a href="https://github.com/isra217/afz-global" target="_blank" rel="noopener noreferrer" className="project-github-button inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold">
                        <GithubIcon size={16} /> GitHub
                      </a>
                    </div>
                        </div>
                      </motion.article>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowMoreProjects((show) => !show)}
                  aria-expanded={showMoreProjects}
                  className="project-demo-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {showMoreProjects ? "Show fewer projects" : "Show more projects"}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="section-padding bg-slate-50 text-slate-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
                Get In Touch
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Let&apos;s Work Together
              </h2>

              <p className="mb-10 max-w-2xl leading-7 text-slate-600">
                I am open to software development opportunities, collaborations
                and interesting projects. Feel free to get in touch.
              </p>

              <div className="contact-layout grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
                {/* Contact Information */}
                <div className="contact-details">
                  <a
                    href="mailto:israsaleem66@gmail.com"
                    className="contact-link flex items-center gap-4 py-3 transition hover:text-blue-600"
                  >
                    <span className="contact-icon"><Mail size={19} /></span>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm text-slate-600">
                        israsaleem66@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/isra-saleem-082920247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link flex items-center gap-4 py-3 transition hover:text-blue-600"
                  >
                    <span className="contact-icon"><LinkedinIcon size={18} /></span>
                    <div>
                      <h3 className="font-semibold">LinkedIn</h3>
                      <p className="text-sm text-slate-600">Connect with me</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/isra217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link flex items-center gap-4 py-3 transition hover:text-blue-600"
                  >
                    <span className="contact-icon"><GithubIcon size={19} /></span>
                    <div>
                      <h3 className="font-semibold">GitHub</h3>
                      <p className="text-sm text-slate-600">
                        Explore my projects
                      </p>
                    </div>
                  </a>
                </div>

                {/* Contact Form */}
                <form
                  onSubmit={handleContactSubmit}
                  className="contact-form space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="contact-field w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="contact-field w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Write your message..."
                      className="contact-field w-full resize-y rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  <p className="text-xs leading-5 text-slate-500">
                    WhatsApp will open with your message ready to send.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer px-6 pt-12 text-sm">
        <div className="container-custom">
          <div className="footer-main grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
            <div>
              <a href="#home" className="brand-name text-xl">
                Isra Saleem<span>.</span>
              </a>
              <p className="mt-4 max-w-sm leading-7">
                Associate Software Engineer building thoughtful, responsive
                digital experiences. Open to opportunities and collaborations.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a href="https://github.com/isra217" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="footer-social"><GithubIcon size={16} /></a>
                <a href="https://www.linkedin.com/in/isra-saleem-082920247" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="footer-social"><LinkedinIcon size={16} /></a>
              </div>
            </div>

            <div>
              <h2 className="footer-heading">Explore</h2>
              <nav className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3" aria-label="Footer navigation">
                {navigation.slice(0, 6).map((item) => (
                  <a key={item.label} href={item.href} className="footer-link">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="footer-heading">Get in touch</h2>
              <p className="mt-4 leading-6">Have a project or opportunity in mind?</p>
              <a href="mailto:israsaleem66@gmail.com" className="footer-email mt-3 inline-flex items-center gap-2">
                <Mail size={17} />
                israsaleem66@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-bottom flex flex-col items-center justify-between gap-3 border-t py-5 text-center sm:flex-row sm:text-left">
            <p>© 2026 Isra Saleem. All rights reserved.</p>
            <a href="#home" className="footer-link inline-flex items-center gap-2">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
