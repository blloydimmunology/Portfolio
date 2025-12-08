import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/60 mt-20 pt-10 pb-12 bg-white/50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="flex justify-center gap-8 text-sm">
          <Link
            href="/about"
            className="text-neutral-600 hover:text-blue-900 transition-colors font-medium"
          >
            About
          </Link>
        </div>

        <p className="text-xs text-neutral-500 font-medium tracking-wide">
          © {currentYear} {siteConfig.author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
