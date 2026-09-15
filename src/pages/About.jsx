import { FaCode, FaHeart, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            About me
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            A developer who enjoys making the web feel simple.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I&apos;m Catherine Orbe, a web developer focused on creating engaging,
            responsive front-end experiences. I enjoy turning ideas into useful
            interfaces and learning something new with every project.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [FaCode, "Build", "I work with HTML, CSS, JavaScript, React, Tailwind, and Laravel."],
            [FaLightbulb, "Learn", "I document experiments, technical notes, and lessons from building."],
            [FaHeart, "Create", "I care about clear layouts, approachable interactions, and enjoyable experiences."],
          ].map(([Icon, title, text]) => (
            <article key={title} className="profile-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300">
                <Icon aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-extrabold text-slate-950 dark:text-white">{title}</h2>
              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">What&apos;s here?</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
            Explore my projects to see what I&apos;ve built, or visit my notes for
            practical snippets and learning references.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/project" className="btn-primary">Explore projects</Link>
            <Link to="/notes" className="btn-secondary">Browse notes</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
