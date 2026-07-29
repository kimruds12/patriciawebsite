import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Facebook } from 'lucide-react';
import { Footer } from './Footer';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section 
      id="contact" 
      className="scroll-section w-full min-h-dvh flex flex-col justify-between pt-28 px-6 md:px-12 lg:px-24 bg-white"
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

          {/* Availability Status Tag */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-[10px] font-bold text-green-700 border border-green-200 shadow-sm font-sans">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Availability: Open for roles & projects
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
                  href="mailto:pdmiguel9961val@student.fatima.edu.ph" 
                  className="text-xs md:text-sm font-bold text-textDark hover:text-primary transition-colors mt-0.5 inline-block break-all"
                >
                  pdmiguel9961val@student.fatima.edu.ph
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-bgGradientEnd rounded-full border border-gray-100 text-primary">
                <MapPin size={16} />
              </div>
              <div className="text-left font-sans">
                <p className="text-[9px] font-bold text-neutral uppercase tracking-wider leading-none">LOCATION</p>
                <p className="text-xs md:text-sm font-bold text-textDark mt-0.5">
                  Valenzuela City, Philippines
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons row with Glowing Outline Ring Highlights */}
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
            
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 text-center py-4 rounded-xl font-bold font-sans">
                  ✓ Message sent! Thank you for connecting.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="flex flex-col items-start space-y-1 text-left font-sans">
                      <label className="text-[9px] font-bold text-neutral uppercase tracking-wider">Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Jane Doe" 
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-xs transition-all bg-white/50"
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-1 text-left font-sans">
                      <label className="text-[9px] font-bold text-neutral uppercase tracking-wider">Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="jane@example.com" 
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-xs transition-all bg-white/50"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-start space-y-1 text-left font-sans">
                    <label className="text-[9px] font-bold text-neutral uppercase tracking-wider">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Project Inquiry / Job Role" 
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-xs transition-all bg-white/50"
                    />
                  </div>

                  <div className="flex flex-col items-start space-y-1 text-left font-sans">
                    <label className="text-[9px] font-bold text-neutral uppercase tracking-wider">Message</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Tell me about your project..." 
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-xs transition-all bg-white/50 resize-none"
                    />
                  </div>

                  {/* Send Message button with Glowing Outline Ring Highlights */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-full font-bold text-xs shadow-premium transition-all duration-300 hover:scale-[1.01] hover:ring-4 hover:ring-primary/25 focus:ring-4 focus:ring-primary/35 active:scale-95 cursor-pointer font-sans"
                  >
                    Send Message
                    <Send size={12} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Sticky footer at the bottom of the viewport snapped content */}
      <Footer />
    </section>
  );
};
