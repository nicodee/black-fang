export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nicodemus Nutsukpui. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
