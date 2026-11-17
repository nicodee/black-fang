import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export const metadata = {
  title: 'Writing — Nicodemus Nutsukpui',
  description: 'A collection of thoughts and notes.',
};

export default function WritingPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="animate-rise max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <h1 className="text-5xl sm:text-6xl font-thin font-serif tracking-tighter mb-8 max-w-2xl">
        Writing
      </h1>
      <p className="text-xl font-thin font-serif text-gray-700 dark:text-gray-300 max-w-lg mb-16">
        Notes on offline-first systems, regulated environments, and cognitive tooling for developers.
      </p>

      <div className="flex flex-col">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <Link
            key={id}
            href={`/writing/${id}`}
            className="group py-6 border-t border-slate-200 dark:border-slate-800 transition-colors hover:bg-slate-50 dark:hover:bg-gray-800 -mx-4 px-4"
          >
            <span className="block text-xs font-mono text-gray-500 mb-2">
              {date}
            </span>
            <span className="block font-serif text-2xl text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 mb-2">
              {title}
            </span>
            <span className="block text-base text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-400 max-w-2xl">
              {excerpt}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
