import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: "Bryce's Journal",
  description: `About ${siteConfig.title}`,
};

export default function AboutPage() {
  return (
    <>
      <TopBanner />

      <main className="max-w-[680px] mx-auto px-6 py-16">
        <article>
          <h1 className="text-4xl font-semibold text-primary-text mb-6 font-serif" style={{ lineHeight: '1.3' }}>
            About
          </h1>

          <div className="space-y-6 text-base text-primary-text" style={{ lineHeight: '1.7' }}>
            <p>
              Welcome to {siteConfig.title}, a collection of articles exploring topics in medicine,
              biology, and the life sciences.
            </p>

            <p>
              This site is maintained by {siteConfig.author}, focusing on making complex scientific
              concepts accessible and engaging for a broad audience.
            </p>

            <p>
              The articles here cover a range of subjects from immunology to cardiology,
              biochemistry to public health. Each piece aims to combine scientific rigor
              with clear, readable prose.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
