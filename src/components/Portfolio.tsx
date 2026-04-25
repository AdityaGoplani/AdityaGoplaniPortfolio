import { useState, useEffect } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { num: "3+", label: "Internships" },
  { num: "2", label: "Live Projects" },
  { num: "8+", label: "Technologies" },
  { num: "'26", label: "Graduating" },
];

const SKILLS = [
  { title: "Frontend", tags: ["React.js", "HTML5", "CSS3", "JavaScript"] },
  { title: "Backend", tags: ["Node.js", "REST APIs"] },
  { title: "Languages", tags: ["JavaScript", "Java", "Python", "C++", "C", "DSA"] },
  { title: "Databases", tags: ["MySQL", "Firestore"] },
  { title: "Tools & Platforms", tags: ["Git", "GitHub"] },
  { title: "Soft Skills", tags: ["Communication", "Leadership", "Adaptability", "Problem-Solving"] },
];

const EXPERIENCE = [
  {
    date: "Jul 2025 — Aug 2025",
    role: "Developer Intern",
    company: "Ekaggata Technologies & Consulting",
    url: "https://www.linkedin.com/company/ekaggata-technologies/",
    bullets: [
      "Developed responsive frontend components and integrated backend APIs, improving application functionality and user interaction efficiency.",
      "Optimised UI performance and resolved technical issues, resulting in faster page responsiveness and improved user experience.",
      "Collaborated with the development team to implement new features and debug existing modules, ensuring smoother application performance.",
    ],
  },
  {
    date: "Apr 2023 — May 2023",
    role: "Backend Development Intern",
    company: "Manacle Technologies Pvt Ltd",
    url: "https://www.linkedin.com/company/manacle-technologies/",
    bullets: [
      "Assisted in backend development and REST API integration, improving system functionality and data processing accuracy.",
      "Supported database management and query optimisation, helping reduce data retrieval time and improve application efficiency.",
      "Worked closely with the team to test backend functionalities and troubleshoot API-related issues.",
    ],
  },
  {
    date: "Jul 2022 — Sep 2022",
    role: "Research / Technical Intern",
    company: "Indian Knowledge System — Ministry of Education",
    url: "https://www.education.gov.in/",
    bullets: [
      "Conducted research and contributed to technical documentation of Indian Knowledge Systems, improving information accuracy and organisation.",
      "Assisted in compiling and structuring research materials to create accessible, well-documented academic resources.",
    ],
  },
];

const PROJECTS = [
  {
    num: "001",
    title: "Employee Tracking & Project Management Dashboard",
    desc: "A web-based dashboard enabling managers to efficiently manage employee tasks and monitor project progress across teams. Features real-time task assignment, deadline tracking, and status monitoring — backed by Node.js and Firestore for seamless data communication and live updates.",
    stack: ["React.js", "Node.js", "Firestore", "REST API"],
    url: "https://github.com/adityagoplani",
  },
  {
    num: "002",
    title: "Medico Medical Website",
    desc: "A fully responsive medical services website built with modular React components. Implements dynamic data rendering for services and treatments without modifying the core UI structure. Optimised for consistent performance across mobile, tablet, and desktop.",
    stack: ["React.js", "JavaScript", "CSS3", "Responsive"],
    url: "https://medicomedical.netlify.app/",
  },
];

const EDUCATION = [
  {
    badge: "Primary Degree",
    degree: "B.Tech — Computer Science & Engineering",
    school: "JIMS Engineering Management Technical Campus, Greater Noida",
    url: "https://www.jimsgn.ac.in/",
    date: "Aug 2022 — Jun 2026",
  },
  {
    badge: "Minor",
    degree: "Minor in Computer Science",
    school: "Indian Institute of Technology, Mandi",
    url: "https://www.iitmandi.ac.in/",
    date: "Feb 2025 — Mar 2026",
  },
];

const CERTS = [
  {
    name: "The Complete 2024 Web Development Bootcamp",
    date: "Oct 2024",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    name: "Build a Website using WordPress",
    date: "Apr 2024",
    url: "https://www.coursera.org/projects/build-a-website-using-wordpress",
  },
  {
    name: "Wix ADI Automated Landing Page",
    date: "Apr 2024",
    url: "https://support.wix.com/en/article/wix-adi-overview",
  },
];

const CONTACT_LINKS = [
  { icon: "✉", label: "Email", value: "adityagoplani4@gmail.com", href: "mailto:adityagoplani4@gmail.com", external: false },
  { icon: "☎", label: "Phone", value: "+91 62631 41442", href: "tel:+916263141442", external: false },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/adityagoplani", href: "https://www.linkedin.com/in/adityagoplani", external: true },
  { icon: "</>", label: "GitHub", value: "github.com/adityagoplani", href: "https://github.com/adityagoplani", external: true },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

.ag-portfolio, .ag-portfolio *, .ag-portfolio *::before, .ag-portfolio *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

.ag-portfolio {
  --bg: #0a0a0f;
  --surface: #111118;
  --surface2: #16161f;
  --border: rgba(255,255,255,0.07);
  --accent: #6EE7B7;
  --accent2: #818CF8;
  --accent3: #F472B6;
  --text: #e8e8f0;
  --muted: #6b6b80;
  --tag-bg: rgba(110,231,183,0.08);
  --tag-border: rgba(110,231,183,0.2);

  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
}

.ag-portfolio::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.4;
}

.ag-portfolio .orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; opacity: 0.15; }
.ag-portfolio .orb-1 { width: 600px; height: 600px; background: var(--accent2); top: -200px; right: -100px; }
.ag-portfolio .orb-2 { width: 400px; height: 400px; background: var(--accent); bottom: 100px; left: -100px; }
.ag-portfolio .orb-3 { width: 300px; height: 300px; background: var(--accent3); top: 50%; right: 20%; opacity: 0.08; }

.ag-portfolio .ag-nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100; padding: 20px 48px;
  display: flex; justify-content: space-between; align-items: center;
  backdrop-filter: blur(20px);
  background: rgba(10,10,15,0.7);
  border-bottom: 1px solid var(--border);
}
.ag-portfolio .nav-logo {
  font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem;
  letter-spacing: -0.02em; color: var(--text); text-decoration: none; cursor: pointer;
  background: none; border: none;
}
.ag-portfolio .nav-logo span { color: var(--accent); }
.ag-portfolio .nav-links { display: flex; gap: 36px; list-style: none; }
.ag-portfolio .nav-links a {
  font-family: 'DM Mono', monospace; font-size: 0.78rem; color: var(--muted);
  text-decoration: none; letter-spacing: 0.05em; text-transform: uppercase; transition: color 0.2s;
  cursor: pointer;
}
.ag-portfolio .nav-links a:hover, .ag-portfolio .nav-links a.active { color: var(--accent); }

.ag-portfolio .hero {
  min-height: 100vh; display: flex; align-items: center;
  padding: 120px 48px 80px; position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
}
.ag-portfolio .hero-inner { max-width: 800px; width: 100%; }

.ag-portfolio .hero-label {
  font-family: 'DM Mono', monospace; font-size: 0.75rem;
  color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 24px; display: flex; align-items: center; gap: 12px;
  opacity: 0; animation: agFadeUp 0.6s ease forwards 0.1s;
}
.ag-portfolio .hero-label::before { content: ''; display: block; width: 32px; height: 1px; background: var(--accent); }

.ag-portfolio .hero-name {
  font-family: 'Syne', sans-serif;
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 800; line-height: 0.95; letter-spacing: -0.03em;
  margin-bottom: 28px;
  opacity: 0; animation: agFadeUp 0.7s ease forwards 0.25s;
}
.ag-portfolio .hero-name .line2 { color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.25); display: block; }

.ag-portfolio .hero-tagline {
  font-size: 1.15rem; color: var(--muted); max-width: 520px;
  line-height: 1.7; margin-bottom: 48px; font-weight: 300;
  opacity: 0; animation: agFadeUp 0.7s ease forwards 0.4s;
}
.ag-portfolio .hero-tagline strong { color: var(--text); font-weight: 500; }

.ag-portfolio .hero-cta {
  display: flex; gap: 16px; flex-wrap: wrap;
  opacity: 0; animation: agFadeUp 0.7s ease forwards 0.55s;
}

.ag-portfolio .btn-primary {
  display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px;
  background: var(--accent); color: #0a0a0f;
  font-family: 'DM Mono', monospace; font-size: 0.82rem; letter-spacing: 0.04em;
  font-weight: 400; text-decoration: none; border-radius: 2px;
  transition: all 0.2s; text-transform: uppercase; cursor: pointer; border: none;
}
.ag-portfolio .btn-primary:hover { background: #a7f3d0; transform: translateY(-2px); }

.ag-portfolio .btn-ghost {
  display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px;
  border: 1px solid var(--border); color: var(--muted); background: transparent;
  font-family: 'DM Mono', monospace; font-size: 0.82rem; letter-spacing: 0.04em;
  text-decoration: none; border-radius: 2px; transition: all 0.2s; text-transform: uppercase; cursor: pointer;
}
.ag-portfolio .btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

.ag-portfolio .scroll-hint {
  position: absolute; bottom: 40px; left: 48px;
  display: flex; flex-direction: column; align-items: center; gap: 12px; color: var(--muted);
  font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
  opacity: 0; animation: agFadeUp 0.7s ease forwards 0.9s;
}
.ag-portfolio .scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: agScrollLine 2s ease-in-out infinite;
}
@keyframes agScrollLine {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50% { opacity: 0.4; transform: scaleY(0.5); }
}

.ag-portfolio .stats-bar {
  position: relative; z-index: 1;
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  background: var(--surface); padding: 32px 48px;
  display: grid; grid-template-columns: repeat(4, 1fr);
}
.ag-portfolio .stat-item { padding: 0 40px; border-right: 1px solid var(--border); }
.ag-portfolio .stat-item:first-child { padding-left: 0; }
.ag-portfolio .stat-item:last-child { border-right: none; }
.ag-portfolio .stat-num { font-family: 'Syne', sans-serif; font-size: 2.4rem; font-weight: 800; color: var(--text); line-height: 1; margin-bottom: 4px; }
.ag-portfolio .stat-num span { color: var(--accent); }
.ag-portfolio .stat-label { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; }

.ag-portfolio .ag-section { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 100px 48px; }
.ag-portfolio .section-header { display: flex; align-items: baseline; gap: 20px; margin-bottom: 60px; }
.ag-portfolio .section-num { font-family: 'DM Mono', monospace; font-size: 0.75rem; color: var(--accent); letter-spacing: 0.08em; }
.ag-portfolio .section-title { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 700; letter-spacing: -0.02em; }
.ag-portfolio .section-line { flex: 1; height: 1px; background: var(--border); margin-bottom: 6px; }

.ag-portfolio .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2px; }
.ag-portfolio .skill-card { background: var(--surface); padding: 28px 32px; border: 1px solid var(--border); transition: all 0.25s; position: relative; overflow: hidden; }
.ag-portfolio .skill-card::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 0; background: var(--accent); transition: height 0.3s ease; }
.ag-portfolio .skill-card:hover { background: var(--surface2); border-color: rgba(110,231,183,0.2); }
.ag-portfolio .skill-card:hover::before { height: 100%; }
.ag-portfolio .skill-card-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; }
.ag-portfolio .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.ag-portfolio .skill-tag { padding: 5px 12px; background: var(--tag-bg); border: 1px solid var(--tag-border); border-radius: 2px; font-family: 'DM Mono', monospace; font-size: 0.75rem; color: var(--text); letter-spacing: 0.03em; }

.ag-portfolio .exp-list { display: flex; flex-direction: column; }
.ag-portfolio .exp-item { display: grid; grid-template-columns: 200px 1fr; gap: 48px; padding: 40px 0; border-bottom: 1px solid var(--border); }
.ag-portfolio .exp-item:first-child { border-top: 1px solid var(--border); }
.ag-portfolio .exp-date { font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--muted); letter-spacing: 0.06em; padding-top: 4px; }
.ag-portfolio .exp-role { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 4px; letter-spacing: -0.01em; }
.ag-portfolio .exp-company { font-family: 'DM Mono', monospace; font-size: 0.78rem; color: var(--accent); letter-spacing: 0.05em; margin-bottom: 16px; transition: color 0.2s; text-decoration: none; display: inline-block; cursor: pointer; }
.ag-portfolio .exp-company:hover { color: #a7f3d0; text-decoration: underline; text-underline-offset: 3px; }
.ag-portfolio .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.ag-portfolio .exp-bullets li { font-size: 0.9rem; color: var(--muted); padding-left: 18px; position: relative; line-height: 1.6; }
.ag-portfolio .exp-bullets li::before { content: '→'; position: absolute; left: 0; color: var(--accent); font-size: 0.8rem; }

.ag-portfolio .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; }
.ag-portfolio .project-card { background: var(--surface); border: 1px solid var(--border); padding: 40px; position: relative; overflow: hidden; transition: all 0.3s; display: flex; flex-direction: column; text-decoration: none; color: inherit; cursor: pointer; }
.ag-portfolio .project-card::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(110,231,183,0.04), transparent); opacity: 0; transition: opacity 0.3s; }
.ag-portfolio .project-card:hover { border-color: rgba(110,231,183,0.25); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.ag-portfolio .project-card:hover::after { opacity: 1; }
.ag-portfolio .project-num { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--muted); letter-spacing: 0.1em; margin-bottom: 24px; opacity: 0.5; }
.ag-portfolio .project-title { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 16px; }
.ag-portfolio .project-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.7; flex: 1; margin-bottom: 24px; }
.ag-portfolio .project-stack { display: flex; gap: 8px; flex-wrap: wrap; }
.ag-portfolio .stack-tag { padding: 4px 10px; background: rgba(129,140,248,0.08); border: 1px solid rgba(129,140,248,0.2); border-radius: 2px; font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--accent2); letter-spacing: 0.04em; text-transform: uppercase; }
.ag-portfolio .project-link-hint { display: inline-flex; align-items: center; gap: 6px; font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; margin-top: 20px; transition: color 0.2s; }
.ag-portfolio .project-card:hover .project-link-hint { color: var(--accent); }

.ag-portfolio .edu-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; }
.ag-portfolio .edu-card { background: var(--surface); border: 1px solid var(--border); padding: 36px 40px; transition: all 0.25s; }
.ag-portfolio .edu-card:hover { border-color: rgba(110,231,183,0.2); }
.ag-portfolio .edu-badge { display: inline-block; padding: 4px 12px; background: rgba(244,114,182,0.08); border: 1px solid rgba(244,114,182,0.2); border-radius: 2px; font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--accent3); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 16px; }
.ag-portfolio .edu-degree { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.01em; }
.ag-portfolio .edu-school-link { font-size: 0.88rem; color: var(--muted); margin-bottom: 12px; line-height: 1.5; text-decoration: none; display: block; transition: color 0.2s; }
.ag-portfolio .edu-school-link:hover { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
.ag-portfolio .edu-date { font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--accent); letter-spacing: 0.06em; }

.ag-portfolio .certs-block { margin-top: 60px; }
.ag-portfolio .certs-section-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
.ag-portfolio .certs-list { display: flex; flex-direction: column; gap: 2px; }
.ag-portfolio .cert-item { display: flex; align-items: center; justify-content: space-between; padding: 20px 28px; background: var(--surface); border: 1px solid var(--border); transition: all 0.2s; text-decoration: none; color: var(--text); gap: 16px; }
.ag-portfolio .cert-item:hover { border-color: rgba(110,231,183,0.2); background: var(--surface2); transform: translateX(4px); }
.ag-portfolio .cert-name { font-size: 0.92rem; font-weight: 500; }
.ag-portfolio .cert-date { font-family: 'DM Mono', monospace; font-size: 0.72rem; color: var(--muted); letter-spacing: 0.05em; white-space: nowrap; }

.ag-portfolio .contact-section { position: relative; z-index: 1; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--surface); }
.ag-portfolio .contact-inner { max-width: 1200px; margin: 0 auto; padding: 80px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.ag-portfolio .contact-heading { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 800; line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 20px; }
.ag-portfolio .contact-heading .accent { color: var(--accent); }
.ag-portfolio .contact-sub { color: var(--muted); font-size: 0.95rem; line-height: 1.7; max-width: 380px; }
.ag-portfolio .contact-links { display: flex; flex-direction: column; gap: 16px; }
.ag-portfolio .contact-link { display: flex; align-items: center; gap: 20px; padding: 20px 24px; border: 1px solid var(--border); border-radius: 2px; text-decoration: none; color: var(--text); transition: all 0.25s; background: var(--bg); }
.ag-portfolio .contact-link:hover { border-color: var(--accent); transform: translateX(6px); }
.ag-portfolio .contact-link-icon { width: 40px; height: 40px; background: var(--tag-bg); border: 1px solid var(--tag-border); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-family: 'DM Mono', monospace; flex-shrink: 0; color: var(--accent); }
.ag-portfolio .contact-link-label { font-family: 'DM Mono', monospace; font-size: 0.68rem; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 2px; }
.ag-portfolio .contact-link-value { font-size: 0.9rem; font-weight: 500; }

.ag-portfolio .ag-footer { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 32px 48px; display: flex; justify-content: space-between; align-items: center; font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--muted); letter-spacing: 0.05em; }

.ag-portfolio .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
.ag-portfolio .reveal.visible { opacity: 1; transform: translateY(0); }

@keyframes agFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .ag-portfolio .ag-nav { padding: 16px 24px; }
  .ag-portfolio .nav-links { display: none; }
  .ag-portfolio .hero { padding: 100px 24px 60px; }
  .ag-portfolio .scroll-hint { left: 24px; }
  .ag-portfolio .stats-bar { grid-template-columns: repeat(2, 1fr); padding: 24px; gap: 24px; }
  .ag-portfolio .stat-item { border-right: none; padding: 0; }
  .ag-portfolio .ag-section { padding: 60px 24px; }
  .ag-portfolio .exp-item { grid-template-columns: 1fr; gap: 8px; }
  .ag-portfolio .projects-grid { grid-template-columns: 1fr; }
  .ag-portfolio .edu-grid { grid-template-columns: 1fr; }
  .ag-portfolio .contact-inner { grid-template-columns: 1fr; gap: 40px; padding: 60px 24px; }
  .ag-portfolio .ag-footer { flex-direction: column; gap: 8px; text-align: center; padding: 24px; }
}
`;

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".ag-portfolio .reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 60);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll<HTMLElement>(".ag-portfolio section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function scrollToId(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Nav({ active }: { active: string }) {
  return (
    <nav className="ag-nav">
      <button
        className="nav-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        AG<span>.</span>
      </button>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href.replace("#", "") ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(l.href);
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-label">Available for opportunities</div>
          <h1 className="hero-name">
            Aditya
            <span className="line2">Goplani</span>
          </h1>
          <p className="hero-tagline">
            <strong>Frontend Developer</strong> specialising in React.js and modern web development.
            I build responsive, user-centric applications that bridge clean UIs with scalable backend systems.
          </p>
          <div className="hero-cta">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#projects");
              }}
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#contact");
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        {STATS.map((s) => {
          const hasPlus = s.num.includes("+");
          const base = s.num.replace("+", "");
          return (
            <div key={s.label} className="stat-item">
              <div className="stat-num">
                {base}
                {hasPlus && <span>+</span>}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Skills() {
  return (
    <section id="skills" className="ag-section">
      <div className="section-header reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">Technical Skills</h2>
        <span className="section-line" />
      </div>
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <div key={s.title} className="skill-card reveal">
            <h3 className="skill-card-title">{s.title}</h3>
            <div className="skill-tags">
              {s.tags.map((t) => (
                <span key={t} className="skill-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="ag-section">
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <span className="section-line" />
      </div>
      <div className="exp-list">
        {EXPERIENCE.map((e) => (
          <article key={e.role + e.date} className="exp-item reveal">
            <div className="exp-date">{e.date}</div>
            <div>
              <h3 className="exp-role">{e.role}</h3>
              <a className="exp-company" href={e.url} target="_blank" rel="noopener noreferrer">
                {e.company} ↗
              </a>
              <ul className="exp-bullets">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="ag-section">
      <div className="section-header reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <span className="section-line" />
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <a
            key={p.num}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card reveal"
          >
            <div className="project-num">{p.num}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map((t) => (
                <span key={t} className="stack-tag">
                  {t}
                </span>
              ))}
            </div>
            <span className="project-link-hint">
              {p.url.includes("github.com") ? "View on GitHub →" : "View Live Site →"}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="ag-section">
      <div className="section-header reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">Education</h2>
        <span className="section-line" />
      </div>
      <div className="edu-grid">
        {EDUCATION.map((e) => (
          <div key={e.degree} className="edu-card reveal">
            <span className="edu-badge">{e.badge}</span>
            <h3 className="edu-degree">{e.degree}</h3>
            <a
              className="edu-school-link"
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {e.school} ↗
            </a>
            <div className="edu-date">{e.date}</div>
          </div>
        ))}
      </div>

      <div className="certs-block">
        <h3 className="certs-section-title">Certifications</h3>
        <div className="certs-list">
          {CERTS.map((c) => (
            <a
              key={c.name}
              className="cert-item reveal"
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cert-name">{c.name} ↗</span>
              <span className="cert-date">{c.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div>
          <h2 className="contact-heading">
            Let's build
            <br />
            <span className="accent">something great.</span>
          </h2>
          <p className="contact-sub">
            I'm actively looking for opportunities in frontend and full-stack roles.
            If you have a project or opening, I'd love to connect.
          </p>
        </div>
        <div className="contact-links">
          {CONTACT_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="contact-link"
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className="contact-link-icon">{l.icon}</div>
              <div>
                <div className="contact-link-label">{l.label}</div>
                <div className="contact-link-value">{l.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ag-footer">
      <span>© 2025 Aditya Goplani</span>
      <span>FRONTEND DEVELOPER — UJJAIN, M.P.</span>
    </footer>
  );
}

// ─── ROOT ────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const active = useActiveSection();
  useReveal();

  return (
    <div className="ag-portfolio">
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Nav active={active} />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
