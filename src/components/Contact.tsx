import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Loader2, CheckCircle, XCircle } from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen snap-start snap-always flex flex-col justify-center border-t border-zinc-900 bg-[#0a0a0a] py-24">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-mono font-medium text-emerald-400 tracking-widest mb-4 uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-zinc-100 tracking-tight mb-4">
            Let's Build Something <span className="text-emerald-500">Together</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed text-sm">
            Whether you have an idea for an AI integration, need a robust native Android application, or just want to chat about systems engineering, I'm just a message away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 bg-[#0f1115] border border-zinc-800 p-8 md:p-12 rounded-sm shadow-xl relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-wide">Name</label>
                <input required type="text" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-wide">Email</label>
                <input required type="email" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-zinc-400 uppercase tracking-wide">Message</label>
              <textarea required rows={4} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none" placeholder="Tell me about your project..." />
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full sm:w-auto self-start mt-2 px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-sm hover:bg-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              {formStatus === 'submitting' ? (
                <><Loader2 size={16} className="animate-spin" /> Sending...</>
              ) : formStatus === 'success' ? (
                <><CheckCircle size={16} /> Sent Successfully</>
              ) : formStatus === 'error' ? (
                <><XCircle size={16} /> Failed to Send</>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          <div className="flex flex-col gap-8 relative z-10 border-t md:border-t-0 md:border-l border-zinc-800/50 pt-8 md:pt-0 md:pl-12">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-4">Contact Details</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="mailto:rahuljangra070407@gmail.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group">
                    <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/30">
                      <Mail size={14} />
                    </div>
                    rahuljangra070407@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/devrahulin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-emerald-400 transition-colors group">
                    <div className="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/30">
                      <Code size={14} />
                    </div>
                    github.com/devrahulin
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-4">Availability</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Currently open for new collaborations, hackathons, and select freelance opportunities. Based in India (IST).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
