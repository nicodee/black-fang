import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();
  const latestPosts = allPostsData.slice(0, 3);

  return (
    <div className="animate-rise max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-24 sm:py-32 border-b border-slate-200 dark:border-slate-800">
        <p className="text-sm font-mono tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-6">
          Stockholm
        </p>
        <h1 className="text-6xl sm:text-7xl font-thin font-serif tracking-tighter mb-8 max-w-2xl">
          Tinkerer.
        </h1>
        <p className="text-2xl font-thin font-serif text-gray-700 dark:text-gray-300 max-w-lg mb-10">
          I build software for places that can’t afford downtime — banks, clinics, pharmacies.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/writing" className="inline-flex items-center gap-2 px-6 py-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-md transition-colors hover:bg-gray-700 dark:hover:bg-gray-300">
            Read the writing
          </Link>
          <Link href="/about" className="inline-flex items-center px-6 py-4 border border-slate-300 dark:border-slate-700 rounded-md transition-colors hover:border-teal-600 dark:hover:border-teal-400">
            About
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 py-16 border-b border-slate-200 dark:border-slate-800">
        <div>
          <p className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-4">Latest writing</p>
          <div className="flex flex-col space-y-4">
            {latestPosts.map(({ id, date, title }) => (
              <Link key={id} href={`/posts/${id}`} className="group">
                <span className="block font-serif text-lg text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  {title}
                </span>
                <span className="block text-xs font-mono text-gray-500 mt-1">
                  {date}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-4">Now</p>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
            Senior software engineer at SEB, on the web platform shell for corporate banking.
          </p>
          <p className="text-sm text-gray-500">
            Tinkering with developer tooling on the side — the kind that tries to fit how people actually think while they work.
          </p>
        </div>
        <div>
          <p className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-4">Elsewhere</p>
          <div className="flex flex-col space-y-1 font-sans text-sm">
            <a href="https://linkedin.com/in/nnutsukpui" target="_blank" rel="noopener" className="py-2 border-b border-slate-200 dark:border-slate-800 hover:text-teal-600 dark:hover:text-teal-400">
              LinkedIn ↗
            </a>
            <a href="https://github.com/nicodee" target="_blank" rel="noopener" className="py-2 border-b border-slate-200 dark:border-slate-800 hover:text-teal-600 dark:hover:text-teal-400">
              GitHub ↗
            </a>
            <a href="/uploads/Nicodemus-Nutsukpui-Resume-v3.pdf" className="py-2 border-b border-slate-200 dark:border-slate-800 hover:text-teal-600 dark:hover:text-teal-400">
              Résumé ↓
            </a>
            <a href="mailto:hello@example.com" className="py-2 hover:text-teal-600 dark:hover:text-teal-400">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
