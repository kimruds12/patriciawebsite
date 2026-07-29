import React, { useState } from 'react';
import { Mail, Send, Linkedin, Facebook, Loader2 } from 'lucide-react';

import { Footer } from './Footer';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);

    try {
      // Send email via Formsubmit.co (zero-config, emails go directly to Gmail)
      const response = await fetch('https://formsubmit.co/ajax/patriciaarliemiguel08@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      // Fallback: open mailto link so the message still gets through
      const mailtoUrl = `mailto:patriciaarliemiguel08@gmail.com?subject=${encodeURIComponent(
        'Portfolio Contact from ' + form.name
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-section scroll-mt-20 w-full min-h-dvh flex flex-col justify-between pt-28 px-6 md:px-12 lg:px-24 bg-white"
    >
      {/* Contact Content Area */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto py-6">
        {/* Left Column: Let's Connect */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-5 text-left font-sans">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase font-sans">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-textDark font-sans leading-tight">
              Let's Connect
            </h2>
            <p className="text-secondary-dark text-xs md:text-sm font-sans max-w-sm mt-1">
              Open to new career opportunities, project partnerships, and banking operations inquiries.
            </p>
          </div>

          {/* Details Row */}
          <div className="space-y-3.5 w-full">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-bgGradientEnd rounded-full border border-gray-100 text-primary">
                <Mail size={16} />
              </div>
              <div className="text-left font-sans">
                <p className="text-[9px] font-bold text-neutral uppercase tracking-wider leading-none">EMAIL</p>
                <a
                  href="mailto:patriciaarliemiguel08@gmail.com"
                  className="text-xs md:text-sm font-bold text-textDark hover:text-primary transition-colors mt-0.5 inline-block break-all"
                >
                  patriciaarliemiguel08@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://ph.linkedin.com/in/patricia-miguel-500896425"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-bgGradientEnd hover:bg-primary hover:text-white border border-gray-100 text-secondary-dark rounded-full transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-primary/20 focus:ring-4 focus:ring-primary/30 cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.facebook.com/patriciaarlie.miguel.5?mibextid=wwXIfr&rdid=U3moFTMpxYfcjafm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Juw7LrJF7%2F%3Fmibextid%3DwwXIfr"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-bgGradientEnd hover:bg-primary hover:text-white border border-gray-100 text-secondary-dark rounded-full transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-primary/20 focus:ring-4 focus:ring-primary/30 cursor-pointer"
              title="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Send a Message Form */}
        <div className="lg:col-span-7 flex justify-center items-center w-full">
          <div className="glass-card p-5 md:p-6 rounded-2xl w-full max-w-md border border-white/60 shadow-premium">
            <h3 className="text-lg font-extrabold text-textDark text-left font-sans mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 text-center py-4 rounded-xl font-bold font-sans text-xs md:text-sm animate-fade-in">
                  ✓ Message sent! Thank you for getting in touch.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="flex flex-col items-start space-y-1 text-left font-sans">
                      <label className="text-[9px] font-bold text-neutral uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-xs transition-all bg-white/50"
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-1 text-left font-sans">
                      <label className="text-[9px] font-bold text-neutral uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-xs transition-all bg-white/50"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-start space-y-1 text-left font-sans">
                    <label className="text-[9px] font-bold text-neutral uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-xs transition-all bg-white/50 resize-none"
                    />
                  </div>

                  {/* Send Message button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 rounded-full font-bold text-xs shadow-premium transition-all duration-300 hover:scale-[1.01] hover:ring-4 hover:ring-primary/25 focus:ring-4 focus:ring-primary/35 active:scale-95 cursor-pointer font-sans disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Sticky footer */}
      <Footer />
    </section>
  );
};
