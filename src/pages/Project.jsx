import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from "react-icons/fa";

const projects = [
  { title: "Simple Portfolio Website", description: "A college portfolio project built with HTML, CSS, and Bootstrap to showcase activities and early web-development work.", stack: ["HTML", "CSS", "Bootstrap"], live: "https://catherinetagao.github.io/webapp/", source: "https://github.com/catherinetagao/webapp" },
  { title: "My Friends", description: "A simple website created with HTML and CSS as a creative pastime project during college.", stack: ["HTML", "CSS"], live: "https://myfriends-rho.vercel.app/", source: "https://github.com/catherinetagao/myfriends" },
  { title: "Portfolio Website", description: "A portfolio experiment created while learning React and Tailwind-based styling.", stack: ["React", "Tailwind"], live: "https://cathorbe.vercel.app/", source: "https://github.com/catherinetagao/myportfolio" },
  { title: "Laravel Portfolio", description: "A portfolio website created while exploring Laravel and backend web-development workflows.", stack: ["Laravel", "HTML", "CSS"], live: "https://c-portfolio.balbuena.io/", source: "https://c-portfolio.balbuena.io/" },
  { title: "Greeting Card Website", description: "A small interactive website that generates a Mother’s Day greeting card using HTML, CSS, and JavaScript.", stack: ["HTML", "CSS", "JavaScript"], live: "https://greetings-letter-web-app.vercel.app/", source: "https://greetings-letter-web-app.vercel.app/" },
];

const Project = () => (
  <section className="w-full px-6 py-16 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">Selected work</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">Projects I&apos;ve built</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Explore the live previews, technologies, and source links behind my projects and learning journey.</p>
        </div>
        <div className="hidden rounded-2xl border border-slate-200 bg-white p-4 text-right shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:block">
          <FaLaptopCode className="ml-auto text-2xl text-indigo-600 dark:text-indigo-400" />
          <span className="mt-2 block text-2xl font-black text-slate-950 dark:text-white">{projects.length}</span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">projects</span>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 ${index === 0 ? "lg:col-span-2" : ""}`}>
            <div className={`grid ${index === 0 ? "lg:grid-cols-[1.35fr_.65fr]" : "md:grid-cols-[1.15fr_.85fr]"}`}>
              <div className="relative min-h-[300px] overflow-hidden bg-slate-100 dark:bg-slate-950">
                <div className="absolute left-4 top-4 z-10 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200">Live preview</div>
                <iframe src={project.live} title={`${project.title} live preview`} loading="lazy" className="h-[330px] w-full border-0 bg-white lg:h-full lg:min-h-[380px]" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
              </div>
              <div className="flex flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">0{index + 1}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">Web project</span>
                </div>
                <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">{project.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="skill-chip px-3 py-1.5 text-xs">{tech}</span>)}</div>
                <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-100 pt-6 dark:border-slate-800">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary py-3">Open project <FaExternalLinkAlt aria-hidden="true" className="text-xs" /></a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn-secondary py-3"><FaGithub aria-hidden="true" className="mr-2" /> Source</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-indigo-100 bg-indigo-50/70 p-7 dark:border-indigo-950 dark:bg-indigo-950/30 sm:p-8">
        <h2 className="text-xl font-black text-slate-950 dark:text-white">More projects coming soon</h2>
        <p className="mt-2 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">I&apos;m continuously learning and building new things, so this portfolio will keep growing.</p>
      </div>
    </div>
  </section>
);

export default Project;
