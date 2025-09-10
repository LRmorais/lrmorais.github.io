import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, experiences, skills, projects, testimonials, posts, stats } from './data'
import { clsx } from 'clsx'
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

function Nav() {
  const { setDark, dark } = useTheme()
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60">
      <div className="section h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">{profile.name}</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#sobre" className="hover:opacity-80">Sobre</a>
          <a href="#experiencia" className="hover:opacity-80">Experiências</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#portfolio" className="hover:opacity-80">Portfólio</a>
          <a href="#blog" className="hover:opacity-80">Blog</a>
          <a href="#contato" className="hover:opacity-80">Contato</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(v => !v)} className="text-xs px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
            {dark ? 'Tema: Escuro' : 'Tema: Claro'}
          </button>
          <a href={profile.github} target="_blank" className="text-xs px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700">GitHub</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="section pt-16 pb-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] max-w-2xl">{profile.name}</h1>
          <p className="mt-2 text-xl text-neutral-700 dark:text-neutral-300">{profile.role}</p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-2xl">{profile.summary}</p>
          <div className="flex flex-wrap gap-3 mt-7 text-sm">
            <a href={profile.linkedin} target="_blank" className="btn btn-ghost">LinkedIn</a>
            <a href={profile.whatsapp} target="_blank" className="btn btn-ghost">Whatsapp</a>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
          </div>
        </div>

        {/* Foto com moldura harmonizada */}
        <div className="relative flex justify-center md:justify-end">
          {/* halo sutil */}
          <div className="absolute inset-0 -z-10 translate-y-6 md:translate-y-8 md:translate-x-6 blur-2xl opacity-30 bg-gradient-to-br from-blue-500/40 to-fuchsia-500/40 rounded-[2rem]"></div>
          <figure className="rounded-[2rem] overflow-hidden border border-neutral-200/70 dark:border-neutral-800/70 shadow-soft max-w-[14rem] md:max-w-[16rem]">
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
    <section className="section pb-2">
      <div className="grid sm:grid-cols-3 gap-5">
        {stats.map((s, i) => (
          <div key={i} className="card p-6 flex flex-col items-center justify-center min-h-[110px] text-center">
            <div className="text-2xl font-bold leading-none">{s.value}</div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="section pt-8">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold">Sobre mim</h2>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
            Comecei aos 13 com Android e Java. Hoje atuo como full stack em times multidisciplinares,
            entregando soluções web e mobile com qualidade, observabilidade e releases contínuas.
            Interesse especial por autenticação (Keycloak/OAuth2), performance e DX.
          </p>
        </div>
        <div className="card p-5 text-sm">
          <h3 className="font-medium">Local & Contato</h3>
          <ul className="mt-3 space-y-2">
            <li>{profile.location}</li>
            <li><a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="hover:underline" href={profile.linkedin} target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="section pt-12">
      <h2 className="text-xl font-semibold">Experiências</h2>
      <ol className="relative border-s border-neutral-200 dark:border-neutral-800 mt-6 space-y-8">
        {experiences.map((exp, idx) => (
          <li key={idx} className="ms-4 relative">
            <div className="absolute w-3 h-3 rounded-full bg-brand -start-1.5 mt-1.5" />
            <time className="text-xs text-neutral-500 dark:text-neutral-400">{exp.period}</time>
            <h3 className="font-semibold mt-0.5">{exp.title}</h3>
            <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 mt-1">
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
    <section id="skills" className="section pt-12">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="card p-5">
            <h3 className="font-medium mb-2">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map(item => <span key={item} className="chip">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Lightbox({ src, title, onClose }: { src: string, title: string, onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [onClose])
  return (
    <div className="fixed inset-0 bg-black/70 grid place-items-center p-4 z-50" onClick={onClose}>
      <figure className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        <img src={src} alt={title} className="w-full h-auto rounded-2xl" />
        <figcaption className="mt-2 text-center text-sm text-neutral-300">{title}</figcaption>
      </figure>
    </div>
  )
}

function Portfolio() {
  const [open, setOpen] = useState<{src: string, title: string} | null>(null)
  return (
    <section id="portfolio" className="section pt-12 pb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Portfólio</h2>
        <a href="#contato" className="text-sm hover:underline">Precisa de algo? Vamos falar</a>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {projects.map((p, idx) => (
          <article key={idx} className="card hover:border-neutral-300 dark:hover:border-neutral-700 transition overflow-hidden">
            <button className="w-full aspect-[4/3] overflow-hidden" onClick={() => setOpen({src: p.img, title: p.title})} title="Ampliar">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-[1.02] transition" />
            </button>
            <div className="p-5">
              <div className="text-sm text-brand mb-1">{p.tags.join(' • ')}</div>
              <h3 className="font-semibold leading-tight">{p.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{p.blurb}</p>
              <div className="mt-3 flex items-center gap-3">
                <a href={p.href} target="_blank" className="btn btn-ghost text-sm">Abrir projeto</a>
                <button className="btn btn-ghost text-sm" onClick={() => setOpen({src: p.img, title: p.title})}>Ampliar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {open && <Lightbox src={open.src} title={open.title} onClose={() => setOpen(null)} />}
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section pt-10">
      <h2 className="text-xl font-semibold">Depoimentos</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="card p-5">
            <p className="text-sm">“{t.text}”</p>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">— {t.name}</div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="section pt-12">
      <h2 className="text-xl font-semibold">Artigos</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {posts.map((p, i) => (
          <a key={i} href={p.href} className="card p-5 hover:border-neutral-300 dark:hover:border-neutral-700">
            <div className="text-xs text-neutral-500">{new Date(p.date).toLocaleDateString('pt-BR')}</div>
            <h3 className="font-semibold leading-tight mt-1">{p.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{p.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="section pt-12 pb-16">
      <div className="card p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Vamos construir algo juntos?</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Me chame e te respondo o quanto antes.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
            <a href={profile.linkedin} target="_blank" className="btn btn-ghost">LinkedIn</a>
            <a href={profile.github} target="_blank" className="btn btn-ghost">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="section py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
        <a href="#home" className="btn btn-ghost">Voltar ao topo</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}