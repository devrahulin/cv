import { useState, useEffect } from 'react';
import { ArrowUpRight, Code, Star, GitFork, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  topics: string[];
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const FALLBACK_REPOS: Repo[] = [
  {
    id: 1,
    name: 'RTunes',
    description: 'Aesthetic, high-performance open-source music streaming application and web portal.',
    language: 'TypeScript',
    topics: ['react', 'next', 'audio', 'web', 'streaming'],
    html_url: 'https://github.com/devrahulin/RTunes',
    homepage: 'https://r-tunes.vercel.app',
    stargazers_count: 5,
    forks_count: 1,
    updated_at: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Cortex-City',
    description: 'Cortex City traffic predictive digital twin simulator using machine learning algorithms.',
    language: 'JavaScript',
    topics: ['ai', 'ml', 'simulator', 'digital-twin', 'data'],
    html_url: 'https://github.com/devrahulin/Cortex-City',
    homepage: 'https://cortex-city-sigma.vercel.app/',
    stargazers_count: 3,
    forks_count: 0,
    updated_at: new Date().toISOString()
  },
  {
    id: 3,
    name: 'RTunes-Ads-Website',
    description: 'Official audio engineering guides, editorial hub, and publisher portal for RahiTunes.',
    language: 'TypeScript',
    topics: ['web', 'react', 'audio', 'frontend'],
    html_url: 'https://github.com/devrahulin/RTunes-Ads-Website',
    homepage: 'https://r-tunes-ads-website.vercel.app',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: new Date().toISOString()
  },
  {
    id: 4,
    name: 'AcousticGuard',
    description: 'Acoustic detection and machine learning based environment monitoring system.',
    language: 'Python',
    topics: ['python', 'ai', 'ml', 'machine-learning', 'sound'],
    html_url: 'https://github.com/devrahulin/AcousticGuard',
    homepage: 'https://acousticguard.vercel.app/website/index.html',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: new Date().toISOString()
  }
];

export function Projects() {
  const [allRepos, setAllRepos] = useState<Repo[]>([]);
  const [activeTab, setActiveTab] = useState('All Projects');
  const [loading, setLoading] = useState(true);

  const tabs = ['All Projects', 'Web & Cloud', 'AI & ML', 'Systems & Arch'];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/devrahulin/repos?sort=updated&per_page=30');
        if (!response.ok) {
          throw new Error(`GitHub API HTTP ${response.status}`);
        }
        const data = await response.json();
        const originalRepos = data.filter((repo: any) => !repo.fork);
        if (originalRepos.length > 0) {
          setAllRepos(originalRepos);
        } else {
          setAllRepos(FALLBACK_REPOS);
        }
      } catch (err: any) {
        console.warn('Falling back to curated projects:', err.message);
        setAllRepos(FALLBACK_REPOS);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getFilteredRepos = () => {
    let filtered = allRepos;
    if (activeTab === 'Web & Cloud') {
      filtered = allRepos.filter(repo => 
        ['TypeScript', 'JavaScript', 'HTML', 'CSS'].includes(repo.language || '') ||
        repo.topics?.some(t => ['web', 'react', 'next', 'node', 'frontend', 'backend'].includes(t.toLowerCase()))
      );
    } else if (activeTab === 'AI & ML') {
      filtered = allRepos.filter(repo => 
        ['Python', 'Jupyter Notebook'].includes(repo.language || '') ||
        repo.topics?.some(t => ['ai', 'ml', 'machine-learning', 'data', 'model'].includes(t.toLowerCase()))
      );
    } else if (activeTab === 'Systems & Arch') {
      filtered = allRepos.filter(repo => 
        ['C', 'C++', 'Kotlin', 'Java', 'Go', 'Rust'].includes(repo.language || '') ||
        repo.topics?.some(t => ['android', 'system', 'architecture', 'linux'].includes(t.toLowerCase()))
      );
    }
    // Always limit to 4 to preserve layout snapping
    return filtered.slice(0, 4);
  };

  const repos = getFilteredRepos();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="projects" className="relative w-full min-h-screen snap-start snap-always flex flex-col justify-center border-t border-zinc-900 bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <p className="text-xs font-mono font-medium text-emerald-400 tracking-widest mb-4 uppercase">
            Featured Repositories
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-zinc-100 tracking-tight mb-4">
            Projects That Push Boundaries
          </h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed text-sm mb-8">
            Automatically synced with GitHub. Showcasing open-source repositories, experiments, and production deployments.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-4 bg-zinc-900/30 p-1.5 rounded-sm border border-zinc-800/50">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-sm transition-colors ${isActive ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-900/30' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 text-zinc-500 gap-4">
            <Loader2 className="animate-spin" size={32} />
            <p className="text-sm font-mono">Syncing repositories from GitHub...</p>
          </div>
        ) : repos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-zinc-500 gap-4">
            <p className="text-sm font-mono">No projects found in this category.</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {repos.map((repo, idx) => (
                <motion.div 
                  layout
                  key={repo.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative bg-[#0f1115] border border-zinc-800 hover:border-emerald-500/50 rounded-sm p-6 flex flex-col justify-between transition-colors shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-sm bg-emerald-900/20 border border-emerald-900/30 text-emerald-400 flex items-center justify-center">
                        <Code size={18} />
                      </div>
                      <div className="flex gap-2">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-white bg-zinc-900/50 rounded-sm transition-colors" aria-label="GitHub Repo">
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                      {repo.name}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                      )}
                      <span className="ml-auto">Updated {formatDate(repo.updated_at)}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                      {repo.language && (
                        <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-emerald-400/80 text-[10px] font-mono rounded-sm">
                          {repo.language}
                        </span>
                      )}
                      {repo.topics?.slice(0, 2).map((topic) => (
                        <span key={topic} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-mono rounded-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        
        <div className="mt-8 flex justify-center">
          <a 
            href="https://github.com/devrahulin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-2 border-b border-zinc-800 pb-1"
          >
            View GitHub Profile <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
