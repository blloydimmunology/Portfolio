'use client';

import { useState } from 'react';
import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong');
    }
  };

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

          {status === 'success' ? (
            <div className="max-w-md mx-auto py-8">
              <p className="text-primary-accent font-medium mb-2">
                ✓ {message}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                className="w-full px-4 py-3 border border-divider text-sm
                           focus:outline-none focus:border-primary-accent
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors duration-200"
              />

              {status === 'error' && (
                <p className="text-sm text-red-600">{message}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-primary-accent text-white text-sm font-medium
                           hover:bg-primary-accent-hover transition-colors duration-200
                           disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>

              <p className="text-xs text-tertiary-text">
                By subscribing, you agree to receive email updates.
              </p>
            </form>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
