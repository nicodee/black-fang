export const metadata = {
  title: 'About — Nicodemus Nutsukpui',
  description: 'Learn more about Nicodemus Nutsukpui.',
};

export default function AboutPage() {
  return (
    <div className="animate-rise max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <h1 className="text-5xl sm:text-6xl font-thin font-serif tracking-tighter mb-8 max-w-2xl">
        About
      </h1>
      <p className="text-xl font-thin font-serif text-gray-700 dark:text-gray-300 max-w-lg mb-8">
        I’m an engineer in Stockholm, by way of Accra. Thirteen years of building software in industries where a bug is somebody’s bad day.
      </p>
      <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
        I started at MEST in Accra, co-founded a crowdfunding platform that never raised, then spent six years as the first engineer at mPharma — building through every business model the company went through and ending with Bloom, an offline-first system for pharmacies that lose power daily. Sweden came next: a digital clinic, then a bank.
      </p>
      <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mb-16">
        I still write code every week, and I tinker with developer tooling in the evenings. Reach me by email — I answer.
      </p>

      <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <p className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-4">Education</p>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
          Post-graduate diploma, software entrepreneurship — MEST Africa
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          BSc Computer Engineering — KNUST
        </p>
      </div>
    </div>
  );
}
