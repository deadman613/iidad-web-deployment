"use client";
import { useState } from "react";
import styles from "./threeYearCurriculum.module.css";

const CURRICULUM = [
  {
    year: 1,
    label: "Year 01",
    title: "Full-Stack Development",
    modules: [
      { month: 1,  title: "Web Foundations",            project: "Portfolio Landing Page",         topics: ["HTML5 Semantic Elements", "CSS3 Layouts & Flexbox", "CSS Grid", "Box Model", "Developer Tools"] },
      { month: 2,  title: "Advanced CSS & Animations",  project: "Animated Product Showcase",       topics: ["CSS Animations", "CSS Variables", "Responsive Design", "Media Queries", "SCSS Basics"] },
      { month: 3,  title: "JavaScript Essentials",      project: "Interactive Quiz App",            topics: ["Variables & Data Types", "Control Flow", "Functions & Scope", "Arrays & Objects", "DOM Manipulation"] },
      { month: 4,  title: "JavaScript Advanced",        project: "Weather Dashboard",               topics: ["ES6+ Syntax", "Promises & Async/Await", "Fetch API", "Error Handling", "Local Storage"] },
      { month: 5,  title: "React.js Fundamentals",      project: "Task Manager App",                topics: ["Component Architecture", "JSX", "Props & State", "Event Handling", "useState / useEffect"] },
      { month: 6,  title: "React.js Advanced",          project: "E-Commerce Frontend",             topics: ["React Router v6", "Context API", "Custom Hooks", "React Query", "Performance Optimization"] },
      { month: 7,  title: "Node.js & Express.js",       project: "Blog REST API",                   topics: ["Node.js Runtime", "Express Server", "Routing & Middleware", "REST API Design", "JWT Auth"] },
      { month: 8,  title: "MongoDB & Database Design",  project: "Full Auth System",                topics: ["MongoDB CRUD", "Mongoose ODM", "Schema Design", "Aggregation", "Indexing"] },
      { month: 9,  title: "Full-Stack Integration",     project: "Full-Stack Social App",           topics: ["React + Node Connection", "CORS", "File Uploads", "Email (Nodemailer)", "Env Variables"] },
      { month: 10, title: "Auth & Security",            project: "Secure Login Portal",             topics: ["OAuth 2.0", "bcrypt Password Hashing", "Rate Limiting", "Injection Prevention", "HTTPS Basics"] },
      { month: 11, title: "DevOps & Deployment",        project: "Deploy Live App",                 topics: ["Git Advanced", "CI/CD with GitHub Actions", "Docker Basics", "Vercel / Render", "Monitoring"] },
      { month: 12, title: "Capstone & Career Prep",     project: "Complete MERN Project",           topics: ["System Design Basics", "Agile Methods", "Resume Building", "Mock Interviews", "Portfolio Review"] },
    ],
  },
  {
    year: 2,
    label: "Year 02",
    title: "Application Development",
    modules: [
      { month: 1,  title: "Mobile Dev Foundations",     project: "Hello World Mobile App",          topics: ["Mobile Architecture", "React Native CLI", "Core Components", "Styling in RN", "Platform Code"] },
      { month: 2,  title: "React Native Navigation",    project: "Multi-Screen Recipe App",         topics: ["Stack Navigator", "Tab Navigator", "Drawer Navigation", "Deep Linking", "Params & State"] },
      { month: 3,  title: "State Management",           project: "Offline Notes App",               topics: ["Redux Toolkit", "Zustand", "Async Storage", "Offline-First", "Data Sync"] },
      { month: 4,  title: "Firebase & BaaS",            project: "Real-Time Chat App",              topics: ["Realtime DB", "Firestore CRUD", "Firebase Auth", "Cloud Storage", "Functions Intro"] },
      { month: 5,  title: "Native Device APIs",         project: "Location Aware Travel App",       topics: ["Camera & Gallery", "Location & Maps", "Push Notifications", "Sensors", "Biometric Auth"] },
      { month: 6,  title: "Flutter & Dart Basics",      project: "Expense Tracker",                 topics: ["Dart Language", "Flutter Widgets", "Stateful vs Stateless", "Layout & Theming", "Hot Reload"] },
      { month: 7,  title: "Flutter Advanced",           project: "Flutter News App",                topics: ["Provider & Riverpod", "REST API Integration", "Animations", "Custom Painters", "Platform Channels"] },
      { month: 8,  title: "UI/UX Design for Mobile",   project: "Design System Library",           topics: ["Material Design 3", "Cupertino Components", "Accessibility", "Figma Workflow", "Micro-interactions"] },
      { month: 9,  title: "Database & Storage",         project: "Secure Finance App",              topics: ["SQLite & Drift", "Hive Local DB", "Secure Storage", "Data Encryption", "Multi-User Sync"] },
      { month: 10, title: "Performance & Testing",      project: "Fully Tested App",                topics: ["App Profiling", "Memory Leak Detection", "Unit Testing", "Widget Tests", "CI Integration"] },
      { month: 11, title: "App Store Publishing",       project: "Publish Real App to Store",       topics: ["Google Play Setup", "Apple App Store", "Signing & Certs", "ASO", "Update Strategy"] },
      { month: 12, title: "Mobile Capstone",            project: "Full Published Mobile App",       topics: ["Feature Planning", "Full Build Cycle", "Beta Testing", "Monetization", "Portfolio Pitch"] },
    ],
  },
  {
    year: 3,
    label: "Year 03",
    title: "Game Development",
    modules: [
      { month: 1,  title: "Game Design Principles",     project: "Game Design Document",            topics: ["Game Loop & Mechanics", "Player Psychology", "Level Design", "Game Genres", "GDD Writing"] },
      { month: 2,  title: "Unity Fundamentals",         project: "2D Flappy Bird Clone",            topics: ["Unity Editor", "GameObjects & Components", "Prefabs", "C# Basics", "Transform & Physics Intro"] },
      { month: 3,  title: "C# for Game Dev",            project: "Inventory & Loot System",         topics: ["OOP in C#", "Unity Event System", "Coroutines", "ScriptableObjects", "Design Patterns"] },
      { month: 4,  title: "2D Game Development",        project: "Complete 2D Platformer",          topics: ["Tilemap & Level Editor", "2D Physics", "Sprite Animation", "Cinemachine", "Particle Effects"] },
      { month: 5,  title: "3D Game Development",        project: "3D First-Person Explorer",        topics: ["3D Modeling Import", "3D Physics", "Character Controller", "Lighting & Shadows", "3D Camera Rigs"] },
      { month: 6,  title: "Game UI & UX",               project: "Full UI System",                  topics: ["Unity Canvas System", "Health Bars & HUD", "Menus & Scene Management", "Pause System", "Localization"] },
      { month: 7,  title: "AI & Enemy Behaviors",       project: "Enemy AI Game Demo",              topics: ["State Machines", "NavMesh Pathfinding", "Finite State Machines", "Behavior Trees", "Boss Fight Design"] },
      { month: 8,  title: "Audio & VFX",                project: "Atmospheric Game Scene",          topics: ["Unity Audio System", "Spatial 3D Audio", "Shader Graph", "VFX Graph", "Post-Processing"] },
      { month: 9,  title: "Multiplayer & Networking",   project: "2-Player Online Mini-Game",       topics: ["Netcode for GameObjects", "Lobby & Matchmaking", "Photon PUN", "Lag Compensation", "Anti-Cheat Concepts"] },
      { month: 10, title: "AR & VR Fundamentals",       project: "AR Scavenger Hunt",               topics: ["XR Toolkit", "AR Foundation", "VR Locomotion", "Oculus / Meta SDK", "Spatial UI"] },
      { month: 11, title: "Game Publishing",            project: "Publish on Itch.io",              topics: ["Build Optimization", "Steam & Itch.io", "Google Play Games", "Monetization", "Analytics"] },
      { month: 12, title: "Game Capstone",              project: "Fully Released Original Game",    topics: ["Full Production Cycle", "QA & Bug Fixing", "Trailer & Screenshots", "Press Kit", "Launch Marketing"] },
    ],
  },
];

export default function ThreeYearCurriculum() {
  const [activeYear, setActiveYear] = useState(0);
  const [openModule, setOpenModule]   = useState(null);
  const year = CURRICULUM[activeYear];

  return (
    <section className={styles.section} id="curriculum">
      <div className={styles.frame}>
        {/* LEFT — nav */}
        <div className={styles.left}>
          <p className={styles.sectionLabel}>Month-by-Month Curriculum</p>
          <h2 className={styles.heading}>36 Modules.<br />Zero Fluff.</h2>
          <p className={styles.sub}>Click any module to see topics and the project you will build that month.</p>

          <nav className={styles.yearNav}>
            {CURRICULUM.map((y, i) => (
              <button
                key={y.year}
                id={`tab-year-${y.year}`}
                className={`${styles.navBtn} ${activeYear === i ? styles.navBtnActive : ""}`}
                onClick={() => { setActiveYear(i); setOpenModule(null); }}
              >
                <span className={styles.navNum}>{y.label}</span>
                <span className={styles.navTitle}>{y.title}</span>
              </button>
            ))}
          </nav>

          <div className={styles.activeInfo}>
            <span className={styles.activeLabel}>Now viewing</span>
            <span className={styles.activeTitle}>{year.title}</span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.sep} />

        {/* RIGHT — modules */}
        <div className={styles.right}>
          <div className={styles.moduleList}>
            {year.modules.map((mod, idx) => {
              const isOpen = openModule === idx;
              return (
                <div
                  key={idx}
                  id={`module-y${year.year}-m${mod.month}`}
                  className={`${styles.moduleRow} ${isOpen ? styles.moduleOpen : ""}`}
                  onClick={() => setOpenModule(isOpen ? null : idx)}
                >
                  <div className={styles.moduleHeader}>
                    <span className={styles.moduleMonth}>M{String(mod.month).padStart(2, "0")}</span>
                    <span className={styles.moduleTitle}>{mod.title}</span>
                    <span className={styles.moduleChevron}>{isOpen ? "−" : "+"}</span>
                  </div>
                  {isOpen && (
                    <div className={styles.moduleBody}>
                      <ul className={styles.topicList}>
                        {mod.topics.map((t) => (
                          <li key={t} className={styles.topicItem}>{t}</li>
                        ))}
                      </ul>
                      <p className={styles.projectLine}>
                        <span className={styles.projectKey}>Project —</span> {mod.project}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
