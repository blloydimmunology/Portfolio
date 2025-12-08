import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'About',
  description: `About ${siteConfig.title}`,
};

export default function AboutPage() {
  return (
    <>
      <TopBanner />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <article className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-900">
              About This Blog
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Exploring the intersection of medicine, biology, and human health through clear, accessible writing.
            </p>
          </div>

          {/* Main content */}
          <div className="prose prose-lg max-w-3xl mx-auto">
            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <p className="text-lg">
                Welcome to {siteConfig.title} — a space dedicated to making complex medical and biological concepts
                accessible to curious minds. Whether you&apos;re a student, healthcare professional, or simply
                fascinated by how the human body works, you&apos;ll find in-depth explorations of topics ranging
                from immunology to cardiology.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">What We Offer</h2>

              <p>
                Each article is crafted to break down intricate scientific concepts into understandable pieces,
                without sacrificing accuracy or depth. We cover:
              </p>

              <ul className="space-y-2 ml-6 list-disc text-neutral-700">
                <li>Immunology and how our bodies defend against disease</li>
                <li>Cardiovascular health and heart function</li>
                <li>Cellular biology and molecular mechanisms</li>
                <li>Medical research breakthroughs and their implications</li>
                <li>Evidence-based health information</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Our Approach</h2>

              <p>
                Science communication should be clear, engaging, and grounded in evidence. Every article here is
                researched thoroughly and written to illuminate rather than obscure. We believe that understanding
                how our bodies work empowers better health decisions and fosters appreciation for the remarkable
                complexity of biology.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">About the Author</h2>

              <p>
                This blog is written by {siteConfig.author}, a passionate science communicator dedicated to
                bridging the gap between complex medical research and public understanding. With a background
                in biomedical sciences, the goal is to make cutting-edge research and fundamental biological
                concepts accessible to everyone.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <p className="text-sm text-blue-900 font-medium mb-2">
                  Stay Updated
                </p>
                <p className="text-sm text-neutral-700">
                  Subscribe to receive notifications when new articles are published. No spam, just quality
                  content delivered to your inbox.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
