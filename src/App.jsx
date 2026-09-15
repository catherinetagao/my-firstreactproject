import { FaArrowRight, FaFacebook, FaGithub, FaReact } from "react-icons/fa";
import { SiJavascript, SiLaravel, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

const skills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Laravel", icon: SiLaravel },
];

function App() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-950/40" />
      <div className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-950/30" />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-900 dark:bg-slate-900/70 dark:text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for creative projects
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Front-end developer
          </p>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">Catherine Orbe.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            I build clean, responsive web experiences with a focus on thoughtful
            design, simple interactions, and practical user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="skill-chip"
                title={name}
              >
                <Icon aria-hidden="true" />
                {name}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/project" className="btn-primary">
              View my projects <FaArrowRight aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn-secondary">
              More about me
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              className="icon-button"
              href="https://github.com/catherinetagao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Catherine's GitHub profile"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              className="icon-button"
              href="https://www.facebook.com/tagao.kate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Catherine's Facebook profile"
            >
              <FaFacebook aria-hidden="true" />
            </a>
            <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
              Let&apos;s connect
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="profile-card">
            <div className="flex items-center justify-between border-b border-slate-200/80 px-6 py-4 dark:border-slate-700/80">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-slate-400">cath.dev</span>
            </div>

            <div className="p-7 sm:p-9">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-3xl font-black text-white shadow-lg shadow-indigo-500/20">
                CO
              </div>
              <h2 className="mt-7 text-2xl font-extrabold text-slate-950 dark:text-white">
                Turning ideas into interfaces.
              </h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                A small portfolio for projects, experiments, notes, and everything
                I&apos;m learning along the way.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="stat-card">
                  <strong>React</strong>
                  <span>Building with</span>
                </div>
                <div className="stat-card">
                  <strong>UI/UX</strong>
                  <span>Design mindset</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
