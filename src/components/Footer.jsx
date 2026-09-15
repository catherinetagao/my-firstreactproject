import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <Link to="/" className="font-black text-slate-950 dark:text-white">&lt;CathTagao/&gt;</Link>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Building, learning, and creating on the web.
          </p>
        </div>
        <a
          href="https://github.com/catherinetagao/my-firstreactproject"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300"
          aria-label="Open this project on GitHub"
        >
          <FaGithub aria-hidden="true" /> GitHub
        </a>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} Catherine Orbe</p>
      </div>
    </footer>
  );
};

export default Footer;
