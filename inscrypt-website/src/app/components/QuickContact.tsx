'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function QuickContact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const templateParams = {
        from_name: name,
        from_company: company,
        message: message,
      };

      await emailjs.send(
        'service_tbstyfj',
        'template_bwo4428',
        templateParams,
        'S00Pro-Zh5p8m7jEU'
      );

      setSubmitMessage('Your message has been sent successfully! We will be in touch within 24 hours.');
      // Reset form fields
      setName('');
      setCompany('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='quick-contact' className="relative font-sans overflow-hidden py-16 sm:py-24">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/5226462-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s create something amazing together
          </h2>
          <p className="mt-4 text-lg text-white">
            Reach out to us and start turning your vision into reality.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 bg-white/5 py-3 px-4 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white">
                  Company (optional)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-gray-300 bg-white/5 py-3 px-4 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 bg-white/5 py-3 px-4 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {submitMessage && (
            <p className="mt-4 text-lg text-white">{submitMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}