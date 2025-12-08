import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-divider mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-sm text-secondary-text mb-3">
            © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center text-sm">
            <Link href="/about" className="text-secondary-text hover:text-primary-accent transition-colors duration-200">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
