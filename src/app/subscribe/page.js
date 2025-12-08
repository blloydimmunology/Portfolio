import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: "Bryce's Journal",
  description: `Subscribe to ${siteConfig.title}`,
};

export default function SubscribePage() {
  return (
    <>
      <TopBanner />

      <main className="max-w-[680px] mx-auto px-6 py-16">
        <article className="text-center">
          <h1 className="text-4xl font-semibold text-primary-text mb-6 font-serif" style={{ lineHeight: '1.3' }}>
            Subscribe
          </h1>

          <p className="text-base text-secondary-text mb-12" style={{ lineHeight: '1.7' }}>
            Get notified when new articles are published. No spam, unsubscribe anytime.
          </p>

          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-divider text-sm text-primary-text placeholder:text-tertiary-text focus:outline-none focus:border-primary-accent transition-colors duration-200"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-accent text-white text-sm font-medium hover:bg-primary-accent-hover transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-tertiary-text mt-6">
              By subscribing, you agree to receive email updates. You can unsubscribe at any time.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
