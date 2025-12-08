'use client';

import { useState } from 'react';

export default function SubscribeForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
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
        setMessage('Successfully subscribed!');
        setEmail('');
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setStatus('idle');
    setMessage('');
  };

  return (
    <>
      {/* Subscribe Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-primary-accent text-white text-sm font-medium hover:bg-primary-accent-hover transition-colors duration-200"
      >
        Subscribe
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={handleClose}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="bg-white max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-secondary-text hover:text-primary-text"
              >
                ✕
              </button>

              {/* Modal header */}
              <h2 className="text-2xl font-semibold text-primary-text mb-2 font-serif">
                Subscribe
              </h2>
              <p className="text-sm text-secondary-text mb-6">
                Get notified when new articles are published.
              </p>

              {/* Form or success message */}
              {status === 'success' ? (
                <div className="text-center py-8">
                  <p className="text-primary-accent font-medium mb-2">
                    ✓ {message}
                  </p>
                  <p className="text-sm text-secondary-text">
                    Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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

                  <p className="text-xs text-tertiary-text text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
