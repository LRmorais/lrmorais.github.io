import { useEffect, useState, type ComponentType } from 'react'
import {
  Lightning, CheckCircle, ChatCircleDots, Handshake,
  Globe, DeviceMobile, Plugs, Wrench,
  Sun, Moon, List, X, WhatsappLogo, EnvelopeSimple, LinkedinLogo,
  ArrowUpRight, ArrowUp, Plus, Star, MapPin, Clock, GraduationCap,
} from '@phosphor-icons/react'
import {
  profile, experiences, skills, projects,
  testimonials, posts, stats, services, valueProps, howItWorks, faq, clients,
} from './data'
import { Logo } from './Logo'
import avatar from './images/perfil.jpg'

const ICONS: Record<string, ComponentType<{ size?: number; weight?: 'regular' | 'bold' | 'fill'; className?: string }>> = {
  Lightning, CheckCircle, ChatCircleDots, Handshake, Globe, DeviceMobile, Plugs, Wrench,
}

function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    const s = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    return s === 'dark' || (!s && prefers)
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return { dark, setDark }
}

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Por que a Morais' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

function Nav() {
  const { setDark, dark } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/70 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-neutral-950/80">
      <div className="section h-16 flex items-center justify-between">
        <a href="#home" onClick={() => setMenuOpen(false)} aria-label="Morais Soluções Digitais — início">
          <Logo height={30} />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="hover:text-brand dark:hover:text-brand-light transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(v => !v)}
            className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Alternar tema"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn btn-primary text-sm"
          >
            Contratar
          </a>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur">
          <nav className="section py-3 flex flex-col gap-0.5">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-3 rounded-xl text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn btn-primary text-sm"
            >
              <WhatsappLogo size={18} weight="fill" /> Contratar via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

const ROTATING_WORDS = [
  'um site profissional',
  'um app próprio',
  'uma API de integração',
  'manutenção pro seu sistema',
]

function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setVisible(false), 2800)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!visible) {
      const id = setTimeout(() => {
        setWordIdx(i => (i + 1) % ROTATING_WORDS.length)
        setVisible(true)
      }, 300)
      return () => clearTimeout(id)
    }
  }, [visible])

  return (
    <section id="home" className="section pt-16 pb-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          {profile.available && (
            <div className="badge-available mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Disponível para novos projetos
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-ink dark:text-white">
            Seu negócio<br />
            precisa de<br />
            <span className="block min-h-[1.15em]">
              <span
                className="text-gradient transition-opacity duration-300"
                style={{ opacity: visible ? 1 : 0 }}
              >
                {ROTATING_WORDS[wordIdx]}
              </span>
            </span>
          </h1>
          <p className="mt-5 text-base text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm"
            >
              <WhatsappLogo size={18} weight="fill" /> Contratar via WhatsApp
            </a>
            <a href="#portfolio" className="btn btn-ghost text-sm">
              Ver portfólio <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 items-center">
            <span className="text-xs text-neutral-400 mr-1">Já entreguei projetos para:</span>
            {clients.map(c => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
          {profile.education && (
            <p className="mt-4 text-xs text-neutral-400 flex items-center gap-1.5">
              <GraduationCap size={14} /> {profile.education}
            </p>
          )}
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 -z-10 translate-y-6 md:translate-y-8 md:translate-x-6 blur-3xl opacity-25 bg-brand-gradient rounded-[2rem]" />
          <figure className="rounded-[2rem] overflow-hidden border border-neutral-200/70 dark:border-neutral-800/70 shadow-soft max-w-[14rem] md:max-w-[18rem]">
            <img
              src={avatar}
              alt={`${profile.name} — fundador da Morais Soluções Digitais`}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="section pb-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="card p-5 flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand dark:text-brand-light leading-none tabular-nums">{s.value}</div>
            <div className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="section pt-14">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">O que a Morais constrói para você</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Serviços para empresas e projetos freelance, de ponta a ponta</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon]
          return (
            <div key={i} className="card p-6 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-brand/10 dark:bg-brand-light/10 flex items-center justify-center mb-4">
                <Icon size={22} weight="bold" className="text-brand dark:text-brand-light" />
              </div>
              <h3 className="font-semibold text-ink dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 flex-1 leading-relaxed">{s.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {s.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
              </div>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm mt-5"
              >
                Solicitar proposta
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function ValueProps() {
  return (
    <section id="sobre" className="section pt-14">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">Por que contratar a Morais Soluções Digitais</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Benefícios concretos para o seu projeto</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {valueProps.map((vp, i) => {
          const Icon = ICONS[vp.icon]
          return (
            <div key={i} className="card p-6">
              <Icon size={28} weight="bold" className="text-brand dark:text-brand-light mb-3" />
              <h3 className="font-semibold text-sm text-ink dark:text-white">{vp.title}</h3>
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{vp.text}</p>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center mt-8">
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
          Vamos conversar sobre seu projeto <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section pt-14">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">Como funciona</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Do primeiro contato até o produto no ar</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {howItWorks.map((step, i) => (
          <div key={i} className="card p-6 relative">
            <div className="text-5xl font-black text-brand/15 dark:text-brand-light/15 leading-none mb-3 select-none tabular-nums">{step.step}</div>
            <h3 className="font-semibold text-ink dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm">
          <WhatsappLogo size={18} weight="fill" /> Começar agora
        </a>
      </div>
    </section>
  )
}

function Portfolio() {
  const [filter, setFilter] = useState('Todos')
  const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.category)))]
  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="section pt-14 pb-8">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">Portfólio</h2>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Projetos reais entregues para clientes</p>
        </div>
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-sm hidden sm:inline-flex"
        >
          Precisa de algo similar? <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`cursor-pointer px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              filter === cat
                ? 'bg-brand text-white border-transparent'
                : 'border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            {cat}
            {cat !== 'Todos' && (
              <span className="ml-1.5 opacity-60 tabular-nums">
                {projects.filter(p => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <article key={idx} className="card hover:border-brand/40 dark:hover:border-brand-light/40 transition overflow-hidden group">
            <div className="w-full aspect-[4/3] overflow-hidden relative bg-neutral-50 dark:bg-neutral-900">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-contain p-6 group-hover:scale-[1.03] transition duration-300"
              />
              <span className="absolute top-3 left-3 bg-ink/70 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                {p.badge}
              </span>
            </div>
            <div className="p-5">
              <div className="text-xs text-brand dark:text-brand-light mb-1">{p.tags.join(' · ')}</div>
              <h3 className="font-semibold leading-tight text-ink dark:text-white">{p.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{p.blurb}</p>
              {p.href !== '#' && (
                <div className="mt-4">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-xs">
                    Ver projeto <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section pt-10">
      <h2 className="text-2xl font-extrabold text-ink dark:text-white">O que dizem sobre meu trabalho</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-5">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="card p-6">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} weight="fill" className="text-amber-400" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-ink dark:text-neutral-200">"{t.text}"</p>
            <div className="mt-4">
              <div className="text-sm font-medium text-ink dark:text-white">{t.name}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}</div>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="section pt-14">
      <h2 className="text-2xl font-extrabold text-ink dark:text-white">Experiência</h2>
      <ol className="relative border-s border-neutral-200 dark:border-neutral-800 mt-6 space-y-8">
        {experiences.map((exp, idx) => (
          <li key={idx} className="ms-4 relative">
            <div className="absolute w-3 h-3 rounded-full bg-brand dark:bg-brand-light -start-1.5 mt-1.5" />
            <time className="text-xs text-neutral-500 dark:text-neutral-400">{exp.period}</time>
            <h3 className="font-semibold mt-0.5 text-ink dark:text-white">{exp.title}</h3>
            <ul className="list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-400 mt-1.5 space-y-1">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section pt-14">
      <h2 className="text-2xl font-extrabold text-ink dark:text-white">Tecnologias</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="card p-5">
            <h3 className="text-sm font-medium mb-3 text-ink dark:text-white">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map(item => <span key={item} className="chip">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="section pt-14">
      <h2 className="text-xl font-semibold text-ink dark:text-white">Artigos técnicos</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {posts.map((p, i) => (
          <a key={i} href={p.href} className="card p-5 hover:border-brand/40 dark:hover:border-brand-light/40 transition group">
            <div className="text-xs text-neutral-400">{new Date(p.date).toLocaleDateString('pt-BR')}</div>
            <h3 className="font-semibold leading-tight mt-1 text-ink dark:text-white group-hover:text-brand dark:group-hover:text-brand-light transition-colors">{p.title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{p.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="section pt-14">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">Perguntas frequentes</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Dúvidas comuns de quem está pensando em contratar</p>
      </div>
      <div className="max-w-2xl mx-auto space-y-3">
        {faq.map((item, i) => (
          <div key={i} className="card overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="cursor-pointer w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              aria-expanded={open === i}
            >
              <span className="text-ink dark:text-white">{item.q}</span>
              <Plus
                size={16}
                weight="bold"
                className={`shrink-0 text-brand dark:text-brand-light transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
              />
            </button>
            <div className={`grid transition-all duration-200 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
          Tem outra dúvida? Me manda uma mensagem <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="section pt-14 pb-24 sm:pb-16">
      <div className="card p-8 sm:p-12 bg-brand-gradient border-none">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Vamos construir algo juntos?</h2>
          <p className="mt-3 text-white/85 leading-relaxed">
            Descreva seu projeto e receba uma proposta clara em até 24 horas.
            Mais de 21 projetos entregues para clientes em todo o Brasil — do app mobile ao sistema governamental.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-brand border-transparent hover:bg-white/90 w-full sm:w-auto"
            >
              <WhatsappLogo size={18} weight="fill" /> Falar no WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn border-white/40 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              <EnvelopeSimple size={18} /> Enviar e-mail
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-white/40 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              <LinkedinLogo size={18} weight="fill" /> LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-white/70 flex items-center justify-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1"><Clock size={13} /> Resposta em até 24h</span>
            <span className="inline-flex items-center gap-1"><MapPin size={13} /> {profile.location} · remoto</span>
          </p>
        </div>
      </div>
    </section>
  )
}

function FloatingCTA() {
  return (
    <a
      href={profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-2xl shadow-lg transition-all hover:scale-105 text-sm font-medium"
      aria-label="Falar no WhatsApp"
    >
      <WhatsappLogo size={20} weight="fill" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="section py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <Logo height={24} showTagline />
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} · Florianópolis, SC</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand dark:hover:text-brand-light transition-colors">
            <WhatsappLogo size={16} /> WhatsApp
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand dark:hover:text-brand-light transition-colors">
            <LinkedinLogo size={16} /> LinkedIn
          </a>
          <a href="#home" className="inline-flex items-center gap-1.5 hover:text-brand dark:hover:text-brand-light transition-colors">
            <ArrowUp size={16} /> Topo
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-ink dark:text-neutral-100">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ValueProps />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <Experience />
        <Skills />
        {posts.some(p => p.href !== '#') && <Blog />}
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
