import Link from 'next/link';
import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <TopBanner />

      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          404 - Page Not Found
        </h1>

        <p className="text-neutral-700 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </main>

      <Footer />
    </>
  );
}
