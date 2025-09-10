export const profile = {
  name: 'Lucas Morais',
  role: 'Desenvolvedor Full Stack',
  email: 'lucas.morais23ti@gmail.com',
  github: 'https://github.com/LRmorais',
  linkedin: 'https://www.linkedin.com/in/lrmorais/',
  whatsapp: 'https://wa.me/5548991638846',
  location: 'Florianópolis, SC — Brasil',
  summary:
    'Com 5+ anos de experiência, construo produtos web e mobile ponta a ponta (Angular, React/React Native, Java/Spring, Node), com foco em qualidade, automações CI/CD e nuvem (AWS/OpenShift).'
}

export const experiences = [
  {
    period: '2023 — atual',
    title: 'Dev Full Stack · SEFA-PA (via Techlead IT Solutions)',
    bullets: [
      'Angular 16 no front, Java 17 + Spring Boot 3 no back, Oracle.',
      'Autenticação Keycloak, CI/CD (Jenkins), qualidade com SonarQube.',
      'Bitbucket, OpenShift, Jira (Scrum).'
    ]
  },
  {
    period: '2021 — atual',
    title: 'Full Stack · Clube Gazeta do Povo (PJ)',
    bullets: [
      'Apps iOS/Android e Web com React/React Native + TypeScript.',
      'APIs Node/Express, serverless em AWS (Lambdas/ECS), Firebase.',
      'Release contínua com GitLab CI/CD e monitoramento.'
    ]
  },
  {
    period: '2018 — 2021',
    title: 'Pesquisador/Dev · CEAMAZON (UFPA)',
    bullets: ['Sistemas web e IoT; Node.js, bancos SQL, automação de dispositivos.']
  }
]

export const skills: Record<string, string[]> = {
  Frontend: ['Angular', 'React', 'React Native', 'Tailwind', 'Material UI'],
  Backend: ['Java 17', 'Spring Boot 3', 'Node.js', 'Express', 'REST', 'Kafka'],
  'Banco & Segurança': ['PostgreSQL', 'MySQL', 'Oracle', 'Redis', 'Keycloak', 'OAuth2/JWT'],
  DevOps: ['Docker', 'OpenShift', 'AWS', 'Jenkins', 'GitLab CI/CD'],
  Outros: ['TypeScript', 'Prisma', 'Jest/JUnit', 'Mockito']
}

export const projects = [
  {
    title: 'Zet Organizador',
    img: 'https://picsum.photos/seed/zet/800/600',
    href: '#',
    tags: ['React Native', 'QR Code', 'Ingressos'],
    blurb: 'Validação de ingressos, fluxo offline e sincronização confiável.'
  },
  {
    title: 'SGP — Gestão de Pessoas',
    img: 'https://picsum.photos/seed/sgp/800/600',
    href: '#',
    tags: ['Angular', 'Spring Boot', 'Oracle'],
    blurb: 'Módulos de pessoas e contratos; filtros avançados e relatórios.'
  },
  {
    title: 'Sisjud',
    img: 'https://picsum.photos/seed/sisjud/800/600',
    href: '#',
    tags: ['Angular', 'Spring Boot'],
    blurb: 'Acompanhamento processual com integrações e auditoria.'
  },
  {
    title: 'Clube Gazeta do Povo',
    img: 'https://picsum.photos/seed/clube/800/600',
    href: 'https://play.google.com/store/apps/details?id=br.com.gazetadopovo.clubeapp',
    tags: ['React Native', 'Firebase'],
    blurb: 'App oficial; novas features e releases contínuos.'
  },
  {
    title: 'Pacemaker',
    img: 'https://picsum.photos/seed/pacemaker/800/600',
    href: 'https://github.com/LRmorais/pacemaker-react-native',
    tags: ['React Native'],
    blurb: 'Projeto open source focado em treinos e ritmo.'
  }
]

export const testimonials = [
  {
    name: 'Ana Paula (PM)',
    text: 'Excelente na comunicação e entrega. Conduziu o projeto de ponta a ponta mantendo qualidade e prazos.'
  },
  {
    name: 'Rafael (Tech Lead)',
    text: 'Código limpo, observabilidade e cuidado com performance. Virou referência no time.'
  }
]

export const posts = [
  {
    title: 'Estratégias de CI/CD para apps mobile',
    date: '2025-01-12',
    href: '#',
    blurb: 'Como organizei pipelines multiambiente para iOS/Android.'
  },
  {
    title: 'Keycloak na prática',
    date: '2024-10-03',
    href: '#',
    blurb: 'Fluxos de OAuth2/JWT e dicas de integração com SPAs/Backends.'
  }
]

export const stats = [
  { label: 'Anos de XP', value: '5+' },
  { label: 'Microsserviços', value: '10+' },
  { label: 'Uptime (interno)', value: '99.9%' }
]