import { motion } from "motion/react";
import { Users, Trophy, Play, Mail, Twitter, Instagram, Github, ChevronRight, Target, Zap, Shield } from "lucide-react";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-brand-accent rounded-full" />
          <div className="absolute inset-1 border border-purple-600 rounded-full" />
          <span className="font-display font-black text-lg tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-brand-accent to-purple-600">ZEV</span>
        </div>
        <span className="font-display font-bold text-2xl tracking-tighter uppercase hidden sm:block">Zevokia</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
        <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
        <a href="#roster" className="hover:text-brand-accent transition-colors">Roster</a>
        <a href="#media" className="hover:text-brand-accent transition-colors">Media</a>
        <a href="#achievements" className="hover:text-brand-accent transition-colors">Stats</a>
      </div>
      <button className="px-6 py-2 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all rounded-sm">
        Partner
      </button>
    </div>
  </nav>
);

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-10">
          <div className="relative w-32 h-32 flex items-center justify-center animate-float">
            <div className="absolute inset-0 border-4 border-brand-accent rounded-full neon-glow" />
            <div className="absolute inset-2 border-2 border-brand-purple rounded-full" />
            <span className="font-display font-black text-4xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-brand-accent to-brand-purple">ZEV</span>
          </div>
        </div>
        <span className="inline-block px-4 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
          Competitive Counter-Strike
        </span>
        <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-[0.85] mb-8">
          Precision <br /> 
          <span className="text-gradient">Redefined</span>
        </h1>
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Zevokia is an elite esports organization built on discipline, tactical mastery, and the relentless pursuit of dominance in the server.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-brand-accent text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-sm neon-glow">
            Follow the Team
          </button>
          <button className="w-full sm:w-auto px-10 py-4 glass text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-sm flex items-center justify-center gap-2">
            <Play size={16} fill="white" /> Watch Highlights
          </button>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
      <div className="w-px h-12 bg-white" />
    </div>
  </section>
);

export const About = () => (
  <section id="about" className="py-32 bg-brand-grey/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-brand-grey rounded-2xl overflow-hidden border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" 
              alt="Gaming Setup" 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 glass p-8 rounded-2xl hidden md:block">
            <div className="text-4xl font-display font-bold text-brand-accent mb-2">98%</div>
            <div className="text-xs uppercase tracking-widest text-white/40">Win rate in regional qualifiers</div>
          </div>
        </motion.div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-8 leading-tight">
            The <span className="text-brand-accent">Zevokia</span> <br /> Mindset
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Founded in 2024, Zevokia emerged from a desire to return to the core fundamentals of Counter-Strike: mechanics, chemistry, and cold-blooded strategy. We don't just play for the win; we play for the perfect execution.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Target size={24} />
              </div>
              <h4 className="font-display font-bold uppercase tracking-wider">Discipline</h4>
              <p className="text-sm text-white/40">Rigorous training schedules and tactical reviews define our daily routine.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Zap size={24} />
              </div>
              <h4 className="font-display font-bold uppercase tracking-wider">Mechanics</h4>
              <p className="text-sm text-white/40">Our players possess world-class aim and movement, refined through thousands of hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const players = [
  { ign: "Shadowstrike", role: "IGL", desc: "The tactical mastermind. Known for mid-round calls that dismantle Tier 1 defenses.", stats: "1.18 Rating" },
  { ign: "Cribnest", role: "AWPer", desc: "Lightning-fast reflexes. Holds angles that most wouldn't dare to challenge.", stats: "0.85 KPR" },
  { ign: "Messmongoo", role: "Entry", desc: "The tip of the spear. Unmatched confidence and explosive entry fragging.", stats: "1.26 Impact" },
  { ign: "Nayf", role: "Rifler", desc: "The anchor. Impeccable positioning and clutch potential in 1vX situations.", stats: "79% KAST" },
];

export const Roster = () => (
  <section id="roster" className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Active Roster</h2>
          <p className="text-white/40 uppercase tracking-[0.2em] text-sm">The warriors behind the screen</p>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-1 bg-brand-accent" />
          <div className="w-4 h-1 bg-white/10" />
          <div className="w-4 h-1 bg-white/10" />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {players.map((player, i) => (
          <motion.div
            key={player.ign}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="aspect-[3/4] bg-brand-grey rounded-xl overflow-hidden border border-white/5 transition-all group-hover:border-brand-accent/50 group-hover:translate-y-[-8px]">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10" />
              <img 
                src={`https://picsum.photos/seed/${player.ign}/600/800`} 
                alt={player.ign} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1 block">{player.role}</span>
                <h3 className="text-2xl font-display font-bold uppercase mb-2">{player.ign}</h3>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                  <p className="text-xs text-white/50 mb-4 line-clamp-2">{player.desc}</p>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase text-white/30">Season Stats</span>
                    <span className="text-xs font-bold text-brand-accent">{player.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Media = () => (
  <section id="media" className="py-32 bg-brand-grey/20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Battle Records</h2>
        <p className="text-white/40 uppercase tracking-[0.2em] text-sm">Highlights from the front lines</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-video glass rounded-2xl overflow-hidden relative group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" 
            alt="Highlight 1" 
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
              <Play fill="white" size={32} />
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <h4 className="text-xl font-display font-bold uppercase">Zevokia vs. Titan | Grand Finals</h4>
            <p className="text-xs text-white/40 uppercase tracking-widest">Major Qualifier Highlights</p>
          </div>
        </div>
        
        <div className="grid grid-rows-2 gap-8">
          <div className="glass rounded-2xl p-8 flex items-center gap-6 group cursor-pointer hover:bg-white/5 transition-all">
            <div className="w-24 h-24 bg-brand-grey rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://picsum.photos/seed/clip1/200/200" alt="Clip" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h4 className="font-display font-bold uppercase mb-1">Vortex 1v4 Clutch</h4>
              <p className="text-xs text-white/40 mb-4">Inferno B-Site Defense</p>
              <div className="flex items-center gap-2 text-brand-accent text-[10px] font-bold uppercase tracking-widest">
                Watch Clip <ChevronRight size={12} />
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-8 flex items-center gap-6 group cursor-pointer hover:bg-white/5 transition-all">
            <div className="w-24 h-24 bg-brand-grey rounded-lg overflow-hidden flex-shrink-0">
              <img src="https://picsum.photos/seed/clip2/200/200" alt="Clip" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h4 className="font-display font-bold uppercase mb-1">Kaelo AWP Ace</h4>
              <p className="text-xs text-white/40 mb-4">Mirage Mid Control</p>
              <div className="flex items-center gap-2 text-brand-accent text-[10px] font-bold uppercase tracking-widest">
                Watch Clip <ChevronRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Stats = () => (
  <section id="achievements" className="py-20 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <div>
          <div className="text-5xl font-display font-bold mb-2">12</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">Tournament Wins</div>
        </div>
        <div>
          <div className="text-5xl font-display font-bold mb-2 text-brand-accent">$250K+</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">Prize Earnings</div>
        </div>
        <div>
          <div className="text-5xl font-display font-bold mb-2">#14</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">Global Ranking</div>
        </div>
        <div>
          <div className="text-5xl font-display font-bold mb-2 text-white">84%</div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">Win Percentage</div>
        </div>
      </div>
    </div>
  </section>
);

export const CTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-brand-accent/5" />
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8">Join the <span className="text-brand-accent">Elite</span></h2>
      <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto">
        Stay updated with the latest matches, roster changes, and exclusive merchandise drops.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="w-full sm:w-auto px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all rounded-sm">
          Join Discord
        </button>
        <div className="flex items-center gap-6">
          <Twitter className="text-white/40 hover:text-brand-accent cursor-pointer transition-colors" />
          <Instagram className="text-white/40 hover:text-brand-accent cursor-pointer transition-colors" />
          <Github className="text-white/40 hover:text-brand-accent cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-brand-accent rounded-full" />
            <div className="absolute inset-1 border border-brand-purple rounded-full" />
            <span className="font-display font-black text-[10px] tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-brand-accent to-brand-purple">ZEV</span>
          </div>
          <span className="font-display font-bold text-xl uppercase tracking-tighter">Zevokia</span>
        </div>
        <div className="text-white/20 text-xs uppercase tracking-widest">
          © 2026 Zevokia Esports. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="mailto:contact@zevokia.gg" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} /> contact@zevokia.gg
          </a>
        </div>
      </div>
    </div>
  </footer>
);
