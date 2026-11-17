import Link from 'next/link';
import { getAllPostIds, getPostData } from '@/lib/posts';

export async function generateStaticParams() {
  const allPostIds = getAllPostIds();
  return allPostIds;
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
    description: postData.excerpt,
  };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <div className="animate-rise max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <Link href="/writing" className="inline-block text-teal-600 dark:text-teal-400 text-sm font-mono mb-8 hover:underline">
        ← writing
      </Link>
      <p className="text-sm font-mono text-gray-500 mb-2">
        {postData.date}
      </p>
      <h1 className="text-4xl sm:text-5xl font-thin font-serif tracking-tighter mb-6 max-w-2xl">
        {postData.title}
      </h1>
      <p className="text-xl font-thin font-serif text-gray-700 dark:text-gray-300 max-w-lg mb-10">
        {postData.excerpt}
      </p>
      <div
        className="prose dark:prose-invert max-w-none mb-10"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      {postData.draft && (
        <p className="mt-4 p-4 border border-dashed border-gray-400 dark:border-gray-600 rounded-md text-sm font-mono text-gray-700 dark:text-gray-300 max-w-2xl">
          Draft — the rest of this post is yours to write.
        </p>
      )}
    </div>
  );
}
