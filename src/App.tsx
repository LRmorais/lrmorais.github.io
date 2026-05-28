import { useEffect, useState } from 'react'
import {
  profile, experiences, skills, projects,
  testimonials, posts, stats, services, valueProps, howItWorks, faq, clients,
} from './data'
import avatar from './images/perfil.jpg'

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
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
]

function Nav() {
  const { setDark, dark } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/70 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-neutral-900/80">
      <div className="section h-14 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight" onClick={() => setMenuOpen(false)}>
          {profile.name}
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="hover:opacity-70 transition-opacity">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(v => !v)}
            className="text-sm p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Alternar tema"
          >
            {dark ? '☀️' : '🌙'}
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
            className="md:hidden p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-base leading-none"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? '✕' : '☰'}
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
              className="mt-2 btn btn-primary text-sm justify-center"
            >
              💬 Contratar via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Full Stack que<br />
            <span className="text-brand">entrega</span> — web,<br />
            mobile e APIs.
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
              💬 Contratar via WhatsApp
            </a>
            <a href="#portfolio" className="btn btn-ghost text-sm">
              Ver portfólio →
            </a>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 items-center">
            <span className="text-xs text-neutral-400 mr-1">Trabalhei com:</span>
            {clients.map(c => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
          {profile.education && (
            <p className="mt-4 text-xs text-neutral-400">🎓 {profile.education}</p>
          )}
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 -z-10 translate-y-6 md:translate-y-8 md:translate-x-6 blur-3xl opacity-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-[2rem]" />
          <figure className="rounded-[2rem] overflow-hidden border border-neutral-200/70 dark:border-neutral-800/70 shadow-soft max-w-[14rem] md:max-w-[18rem]">
            <img
              src={avatar}
              alt={`${profile.name} — foto de perfil`}
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
            <div className="text-2xl sm:text-3xl font-bold text-brand leading-none">{s.value}</div>
            <div className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ValueProps() {
  return (
    <section id="sobre" className="section pt-14 pb-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">O que você ganha contratando comigo</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Benefícios concretos para o seu projeto</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {valueProps.map((vp, i) => (
          <div key={i} className="card p-6">
            <div className="text-3xl mb-3">{vp.icon}</div>
            <h3 className="font-semibold text-sm">{vp.title}</h3>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{vp.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
          Vamos conversar sobre seu projeto →
        </a>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="section pt-14">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">O que posso construir para você</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Serviços para empresas e projetos freelance</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <div key={i} className="card p-6 flex flex-col">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 flex-1 leading-relaxed">{s.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {s.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
            </div>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm mt-5 justify-center"
            >
              Solicitar proposta
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section pt-14">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Como funciona</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Do primeiro contato até o produto no ar</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {howItWorks.map((step, i) => (
          <div key={i} className="card p-6 relative">
            <div className="text-5xl font-black text-brand/15 leading-none mb-3 select-none">{step.step}</div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm">
          💬 Começar agora
        </a>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="section pt-14">
      <h2 className="text-2xl font-bold">Experiências</h2>
      <ol className="relative border-s border-neutral-200 dark:border-neutral-800 mt-6 space-y-8">
        {experiences.map((exp, idx) => (
          <li key={idx} className="ms-4 relative">
            <div className="absolute w-3 h-3 rounded-full bg-brand -start-1.5 mt-1.5" />
            <time className="text-xs text-neutral-500 dark:text-neutral-400">{exp.period}</time>
            <h3 className="font-semibold mt-0.5">{exp.title}</h3>
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
      <h2 className="text-2xl font-bold">Tecnologias</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="card p-5">
            <h3 className="text-sm font-medium mb-3">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map(item => <span key={item} className="chip">{item}</span>)}
            </div>
          </div>
        ))}
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
          <h2 className="text-2xl sm:text-3xl font-bold">Portfólio</h2>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Projetos reais entregues para clientes</p>
        </div>
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-sm hidden sm:inline-flex"
        >
          Precisa de algo similar? →
        </a>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              filter === cat
                ? 'bg-brand text-white border-transparent'
                : 'border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            {cat}
            {cat !== 'Todos' && (
              <span className="ml-1.5 opacity-60">
                {projects.filter(p => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <article key={idx} className="card hover:border-neutral-300 dark:hover:border-neutral-700 transition overflow-hidden group">
            <div className="w-full aspect-[4/3] overflow-hidden relative">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-contain p-6 group-hover:scale-[1.03] transition duration-300"
              />
              <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                {p.badge}
              </span>
            </div>
            <div className="p-5">
              <div className="text-xs text-brand mb-1">{p.tags.join(' · ')}</div>
              <h3 className="font-semibold leading-tight">{p.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{p.blurb}</p>
              {p.href !== '#' && (
                <div className="mt-4">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-xs">
                    Ver projeto ↗
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
      <h2 className="text-2xl font-bold">O que dizem sobre meu trabalho</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-5">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="card p-6">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="text-amber-400 text-sm">★</span>
              ))}
            </div>
            <p className="text-sm leading-relaxed">"{t.text}"</p>
            <div className="mt-4">
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}</div>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="section pt-14">
      <h2 className="text-xl font-semibold">Artigos técnicos</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {posts.map((p, i) => (
          <a key={i} href={p.href} className="card p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition group">
            <div className="text-xs text-neutral-400">{new Date(p.date).toLocaleDateString('pt-BR')}</div>
            <h3 className="font-semibold leading-tight mt-1 group-hover:text-brand transition-colors">{p.title}</h3>
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
        <h2 className="text-2xl sm:text-3xl font-bold">Perguntas frequentes</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Dúvidas comuns de quem está pensando em contratar</p>
      </div>
      <div className="max-w-2xl mx-auto space-y-3">
        {faq.map((item, i) => (
          <div key={i} className="card overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <span>{item.q}</span>
              <span className={`shrink-0 text-brand text-lg leading-none transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
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
          Tem outra dúvida? Me manda uma mensagem →
        </a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="section pt-14 pb-24 sm:pb-16">
      <div className="card p-8 sm:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Vamos construir algo juntos?</h2>
          <p className="mt-3 text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Descreva seu projeto e receba uma proposta clara em até 24 horas.
            Mais de 21 projetos entregues para clientes em todo o Brasil — do app mobile ao sistema governamental.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto justify-center"
            >
              💬 Falar no WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-ghost w-full sm:w-auto justify-center"
            >
              ✉️ Enviar e-mail
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full sm:w-auto justify-center"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-neutral-400">
            ⏱ Resposta geralmente em menos de 24 horas · 📍 {profile.location} · trabalho remoto
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
      <span>💬</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="section py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} {profile.name} — Florianópolis, SC</p>
        <div className="flex items-center gap-4">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">WhatsApp</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          <a href="#home" className="hover:opacity-70 transition-opacity">↑ Topo</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <ValueProps />
        <Services />
        <HowItWorks />
        <Portfolio />
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