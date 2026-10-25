export function Footer() {
  return (
    <footer className="w-full snap-end border-t border-zinc-900 bg-[#050505] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-zinc-100 font-mono font-semibold tracking-tighter uppercase">Rahul Jangra</span>
          <span className="text-zinc-500 text-xs font-mono">BCA (AI & ML) • Software & AI Systems Developer</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/devrahulin" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm">
            GitHub
          </a>
          <a href="mailto:rahuljangra070407@gmail.com" className="text-zinc-500 hover:text-white transition-colors text-sm">
            Email
          </a>
          <a href="/privacy" className="text-zinc-500 hover:text-white transition-colors text-sm">
            Privacy
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Rahul Jangra. All rights reserved.</p>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>
    </footer>
  );
}
