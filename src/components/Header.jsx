'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-30 bg-opacity-90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-lg">
              Nicodemus Nutsukpui
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/writing" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Writing
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              About
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? '☀️' : '☾'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
