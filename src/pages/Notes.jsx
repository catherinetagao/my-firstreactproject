import { FaCode, FaDatabase, FaFolderOpen, FaServer } from "react-icons/fa";
import FolderView from "../components/FolderView";

const folders = [
  {
    name: "SQL Commands",
    items: [
      { type: "note", content: "SELECT * FROM table_name" },
      { type: "note", content: "INSERT INTO table_name VALUES (value1, value2)" },
      { type: "note", content: "UPDATE table_name SET column_name = value WHERE condition" },
      { type: "image", content: "../assets/images/IMG_20250322_101702_534.jpg" },
      { type: "image", content: "../assets/images/IMG_20250322_101724_833.jpg" },
    ],
  },
  {
    name: "System Administation and Maintenance",
    items: [
      { type: "note", content: "Check disk space" },
      { type: "note", content: "Check system logs" },
      { type: "note", content: "Check system updates" },
      { type: "image", content: "../assets/images/img20250322_10405261.png" },
      { type: "image", content: "../assets/images/img20250322_10444394.png" },
      { type: "image", content: "../assets/images/img20250322_10483908.png" },
      { type: "image", content: "../assets/images/img20250322_10493833.png" },
      { type: "image", content: "../assets/images/img20250322_10525126.png" },
      { type: "image", content: "../assets/images/img20250322_10535544.png" },
      { type: "image", content: "../assets/images/img20250322_10552666.png" },
    ],
  },
];

const Notes = () => {
  return (
    <section className="w-full px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            Learning library
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Notes & resources
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A personal collection of useful commands, reminders, and screenshots
            from my development journey.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="profile-card flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300"><FaDatabase /></div>
            <div><strong className="block text-slate-900 dark:text-white">SQL</strong><span className="text-sm text-slate-500 dark:text-slate-400">Queries & commands</span></div>
          </div>
          <div className="profile-card flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300"><FaServer /></div>
            <div><strong className="block text-slate-900 dark:text-white">System Admin</strong><span className="text-sm text-slate-500 dark:text-slate-400">Maintenance notes</span></div>
          </div>
          <div className="profile-card flex items-center gap-4 p-5 sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300"><FaCode /></div>
            <div><strong className="block text-slate-900 dark:text-white">Practical</strong><span className="text-sm text-slate-500 dark:text-slate-400">Quick references</span></div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <FaFolderOpen className="text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-black text-slate-950 dark:text-white">My folders</h2>
          </div>
          <FolderView folders={folders} />
        </div>
      </div>
    </section>
  );
};

export default Notes;
