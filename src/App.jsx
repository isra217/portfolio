import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github, Mail, Phone, ExternalLink, Sun, Moon,
  Linkedin, ChevronRight, Award, Calendar,
  Code, Brain, Database, Cloud, Sparkles,
  CheckCircle, Download, ArrowRight, Users
} from "lucide-react";
import './App.css';




export default function App() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Your project images
  // Project 1 images
const project1Images = [
  `${import.meta.env.BASE_URL}images/image31.PNG`,
  `${import.meta.env.BASE_URL}images/image32.PNG`,
  `${import.meta.env.BASE_URL}images/image33.PNG`,
  `${import.meta.env.BASE_URL}images/image34.PNG`,
  `${import.meta.env.BASE_URL}images/image35.PNG`,
  `${import.meta.env.BASE_URL}images/image36.PNG`,
  `${import.meta.env.BASE_URL}images/image37.PNG`,
  `${import.meta.env.BASE_URL}images/image38.PNG`
];

// Project 2 images
const project2Images = [
  `${import.meta.env.BASE_URL}images/image1.PNG`,
  `${import.meta.env.BASE_URL}images/image2.PNG`,
  `${import.meta.env.BASE_URL}images/image3.PNG`,
  `${import.meta.env.BASE_URL}images/image4.PNG`,
  `${import.meta.env.BASE_URL}images/image5.PNG`
];

// Project 3 images
const project3Images = [
  `${import.meta.env.BASE_URL}images/image11.PNG`,
  `${import.meta.env.BASE_URL}images/image12.PNG`,
  `${import.meta.env.BASE_URL}images/image13.PNG`
];

  // State for image rotation
  const [proj1ImgIndex, setProj1ImgIndex] = useState(0);
  const [proj2ImgIndex, setProj2ImgIndex] = useState(0);
  const [proj3ImgIndex, setProj3ImgIndex] = useState(0);

  // Rotate images every 3 seconds
  useEffect(() => {
    const interval1 = setInterval(() => setProj1ImgIndex(prev => (prev + 1) % project1Images.length), 3000);
    const interval2 = setInterval(() => setProj2ImgIndex(prev => (prev + 1) % project2Images.length), 3000);
    const interval3 = setInterval(() => setProj3ImgIndex(prev => (prev + 1) % project3Images.length), 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      quote: "Isra is a highly motivated developer who consistently delivers clean and well-structured code. Her projects are practical, innovative, and user-friendly.",
      name: "Project Mentor",
      role: "CodeAlpha Internship Supervisor"
    },
    {
      quote: "I had the pleasure of collaborating with Isra on a real-time AI exercise project. She is detail-oriented, proactive, and skilled in both frontend and backend development.",
      name: "Team Lead",
      role: "WellnessAI Project"
    },
  ];

  return (
    <div className={dark ? "dark-mode" : "light-mode"}>

      {/* HEADER */}
      <header className="header">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          <Sparkles size={20} />
          <span>ISRA SALEEM</span>
        </motion.div>
        <nav className="nav">
          {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
            <button
              key={item}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mode-btn"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </nav>
        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <span className="hero-badge">Web & AI Developer</span>
            <h1>
              Turning <span className="gradient-text">Ideas</span> Into Smart
              <br />Web & AI Experiences
            </h1>

            <p className="hero-description">
              IT graduate with hands-on experience building AI-powered fitness systems, real-time
              dashboards, and responsive web applications using modern technologies. Skilled in
              working with APIs, databases, and cloud-based tools to create practical and user-friendly
              digital solutions.
            </p>
            <div className="hero-buttons">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn btn-primary"
              >
                View Projects <ArrowRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn btn-secondary"
              >
                Let's Connect
              </motion.a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-number">2026</span>
                <span className="stat-label">IT Graduate</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-visual"
          >
            <div className="floating-card">
              <Code size={32} />
              <span>Web Development</span>
            </div>
            <div className="floating-card">
              <Brain size={32} />
              <span>AI/ML</span>
            </div>
            <div className="floating-card">
              <Database size={32} />
              <span>Backend</span>
            </div>
            <div className="floating-card">
              <Cloud size={32} />
              <span>APIs</span>
            </div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="scroll-dot"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Web & AI Project Developer</p>
          </motion.div>
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <p className="about-description">
                I am an Information Technology graduate from Bahria University (2022–2026) with a strong
                interest in building modern web applications and AI-based systems. I enjoy transforming
                ideas into practical digital solutions that are both functional and visually appealing.
              </p>

              <p className="about-description">
                My academic and project experience includes developing an AI-powered fitness platform,
                real-time cryptocurrency dashboard, and a weather analytics web application. I have also
                completed a professional internship at CodeAlpha, where I strengthened my skills in
                development workflows, problem solving, and system integration.
              </p>

              <div className="about-features">
                <div className="feature">
                  <CheckCircle size={18} />
                  <span>Project-based learning approach</span>
                </div>
                <div className="feature">
                  <CheckCircle size={18} />
                  <span>Clean and readable code structure</span>
                </div>
                <div className="feature">
                  <CheckCircle size={18} />
                  <span>API and database integration</span>
                </div>
                <div className="feature">
                  <CheckCircle size={18} />
                  <span>Responsive and user-focused design</span>
                </div>
              </div>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-image"
            >
              <div className="profile-card">
                <div className="profile-stats">
                  <div className="profile-stat">
                    <span className="stat-value">3</span>
                    <span className="stat-label">Major Projects</span>
                  </div>
                  <div className="profile-stat">
                    <span className="stat-value">1</span>
                    <span className="stat-label">Internship</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section bg-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Tools and technologies I work with</p>
          </motion.div>

          <div className="skills-grid">
            {/* Frontend Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <Code size={24} />
                </div>
                <h3 className="skill-card-title">Frontend Development</h3>
                <p className="skill-card-desc">Modern UI/UX implementation</p>
              </div>
              <div className="skill-tags">
                {["React", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Chart.js", "Recharts"]
                  .map(skill => (
                    <div key={skill} className="skill-tag">
                      <span className="skill-tag-text">{skill}</span>
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* Backend & AI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="skill-card"
            >
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <Database size={24} />
                </div>
                <h3 className="skill-card-title">Backend & AI/ML</h3>
                <p className="skill-card-desc">Server, database & AI solutions</p>
              </div>
              <div className="skill-tags">
                {["Node.js", "Python", "Flask", "MySQL", "Firebase Firestore", "MediaPipe", "OpenCV", "Stripe API", "Cloudinary", "REST APIs"]
                  .map(skill => (
                    <div key={skill} className="skill-tag">
                      <span className="skill-tag-text">{skill}</span>
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* Soft Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="skill-card"
            >
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <Users size={24} />
                </div>
                <h3 className="skill-card-title">Soft Skills</h3>
                <p className="skill-card-desc">Professional competencies</p>
              </div>
              <div className="soft-skills-container">
                {[
                  { skill: "Problem Solving", level: "Advanced" },
                  { skill: "Team Collaboration", level: "Advanced" },
                  { skill: "Communication", level: "Advanced" },
                  { skill: "Time Management", level: "Advanced" },
                  { skill: "Self Learning", level: "Expert" },

                ]
                  .map((item, index) => (
                    <div key={index} className="soft-skill-item">
                      <div className="soft-skill-info">
                        <span className="soft-skill-name">{item.skill}</span>
                        <span className="soft-skill-level">{item.level}</span>
                      </div>
                      <div className="soft-skill-bar">
                        <div
                          className="soft-skill-progress"
                          style={{
                            width: item.level === "Expert" ? "90%" :
                              item.level === "Advanced" ? "75%" : "60%"
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Real-world applications I've built</p>
          </motion.div>

          <div className="projects-grid">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image-container">
                <div className="project-image">
                  <img
                    src={project1Images[proj1ImgIndex]}
                    alt="AI Exercise Recognition System"
                  />
                </div>
                
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">WellnessAI-A Fitness Platform</h3>
                  <p className="project-description">
                    WellnessAI is an AI-powered fitness platform that guides users to exercise correctly in real-time. It detects your posture, counts reps, gives instant feedback, generates personalized workout & diet plans, and lets you book professional trainers—all in one smart, safe, and interactive platform.
                  </p>
                </div>

                <div className="project-tech">
                  <div className="tech-stack">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-tags">
                      {["HTML", "CSS", "JavaScript", "Node.js", "Flask", "Python", "OpenCV", "MediaPipe", "Firebase", "Cloudinary", "Stripe API", "Stripe API"].map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-links">
                  <a href="https://isra217.github.io/WelnessAI-A-fitness-platform/" target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                  <a href="https://github.com/isra217/WelnessAI-A-fitness-platform/" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <span>View Code</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="project-card"
            >
              <div className="project-image-container">
                <div className="project-image">
                  <img
                    src={project2Images[proj2ImgIndex]}
                    alt="Wellness Web Application"
                  />
                </div>
                <div className="project-tags">
                  <span className="project-tag">Full Stack</span>
                  <span className="project-tag">E-commerce</span>
                  <span className="project-tag">Responsive</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Crypto Dashboard</h3>
                  <p className="project-description">
                    Track, analyze, and manage your crypto investments effortlessly! This modern dashboard provides real-time coin prices, interactive charts, portfolio tracking, and price alerts—helping users make informed decisions with a sleek, responsive interface.
                  </p>
                </div>

                <div className="project-tech">
                  <div className="tech-stack">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-tags">
                      {["React", "HTML5", "CSS3", "JavaScript", "Chart.js", "CoinGecko API", "React Usestate"].map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-links">
                  <a href="https://isra217.github.io/Crypto-Dashboard/" target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                  <a href="https://github.com/isra217/Crypto-Dashboard" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <span>View Code</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="project-card"
            >
              <div className="project-image-container">
                <div className="project-image">
                  <img
                    src={project3Images[proj3ImgIndex]}
                    alt="Crypto Dashboard"
                  />
                </div>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Finance</span>
                  <span className="project-tag">API</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Weather Dashboard</h3>
                  <p className="project-description">
                    Get accurate weather updates at a glance! This responsive dashboard shows current weather, 5-day forecasts, supports city search and location detection, toggles between Celsius/Fahrenheit, and saves favorites—all wrapped in a modern, user-friendly interface.
                  </p>
                </div>

                <div className="project-tech">
                  <div className="tech-stack">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-tags">
                      {["HTML5", "CSS3", "JavaScript (ES6)", "OpenWeatherMap API", "Local Storage"].map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-links">
                  <a href="https://isra217.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                  <a href="https://github.com/isra217/weather-dashboard" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <span>View Code</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section id="experience" className="section bg-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-subtitle">My journey so far</p>
          </motion.div>

          <div className="timeline">
            {/* Degree */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2022 – Jan 2026</div>
                <h3 className="timeline-title">BS Information Technology</h3>
                <p className="timeline-description">
                  Completed my degree from Bahria University with a CGPA of 3.5.
                </p>
                <span className="timeline-tag">Degree</span>
              </div>
            </div>

            {/* Online Courses / Certificates */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2022 – 2023</div>
                <h3 className="timeline-title">Online Certificates</h3>
                <p className="timeline-description">
                  Earned programming & web development certificates and completed UNICEF Child Safeguarding Training focused on child protection.
                </p>
                <span className="timeline-tag">Certification</span>
              </div>
            </div>

            {/* Internship */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2025 (3 months)</div>
                <h3 className="timeline-title">CodeAlpha Internship</h3>
                <p className="timeline-description">
                  Developed web development skills, built responsive websites, and gained hands-on experience with real-world projects.
                </p>
                <span className="timeline-tag">Remote</span>
              </div>
            </div>

            {/* Quiz Certificate */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">2025</div>
                <h3 className="timeline-title">CodeAlpha Quiz Certificate</h3>
                <p className="timeline-description">
                  Participated in CodeAlpha's technical quiz and earned a certificate for problem-solving and coding performance.
                </p>
                <span className="timeline-tag">Achievement</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* TESTIMONIALS SECTION */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">What others say about my work</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div>
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">Get in touch for projects or opportunities</p>
          </motion.div>

          <div className="contact-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="contact-info-full"
            >
              <h3 className="contact-title">Contact Information</h3>
              <div className="contact-details">
                <a href="mailto:israsaleem66@gmail.com" className="contact-item">
                  <Mail size={20} />
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">israsaleem66@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+6013165244705" className="contact-item">
                  <Phone size={20} />
                  <div>
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+92 316 5244705</span>
                  </div>
                </a>
                <a href="https://github.com/isra217" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <Github size={20} />
                  <div>
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">github.com/isra217</span>
                  </div>
                </a>
              </div>

              <div className="social-links-center">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://github.com/isra217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open('resume.pdf', '_blank')}
                  className="btn btn-primary resume-btn"
                >
                  <Download size={18} />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Sparkles size={24} />
              <span>ISRA SALEEM</span>
            </div>
            <p className="footer-tagline">
              Building the future, one line of code at a time
            </p>
            <div className="footer-links">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="footer-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <p className="footer-copyright">
              © 2026 Isra Saleem. All rights reserved.
              <br />
              Built with React & Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, features, tech, live, github, image, tags }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="project-card"
    >
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-features">
          <h4 className="features-title">Key Features:</h4>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <ChevronRight size={14} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-tech">
          <h4 className="tech-title">Tech Stack:</h4>
          <p className="tech-stack">{tech}</p>
        </div>

        <div className="project-links">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link secondary"
          >
            <Github size={16} />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}
