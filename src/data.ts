export const profile = {
  name: 'Lucas Morais',
  role: 'Desenvolvedor Full Stack',
  email: 'lucas.morais23ti@gmail.com',
  github: 'https://github.com/LRmorais',
  linkedin: 'https://www.linkedin.com/in/lrmorais/',
  whatsapp: 'https://wa.me/5548991638846',
  location: 'Florianópolis, SC — Brasil',
  available: true,
  summary:
    'Construo produtos web e mobile completos — do frontend ao backend e deploy em nuvem — com 6+ anos entregando para empresas como Previ, Gazeta do Povo e órgãos do governo federal.',
  education: 'Bacharelando em Eng. da Computação · UFPA (2020–2026)',
}

export const clients = ['Previ', 'Gazeta do Povo', 'SEFA-PA', 'CEAMAZON / UFPA']

export const stats = [
  { label: 'Projetos entregues', value: '20+' },
  { label: 'Anos de experiência', value: '6+' },
  { label: 'Apps nas lojas', value: '2' },
  { label: 'Tempo de resposta', value: '<24h' },
]

export const valueProps = [
  {
    icon: '⚡',
    title: 'Entrega full stack',
    text: 'Frontend, backend e deploy num só contrato. Sem depender de outro dev para fechar o produto.',
  },
  {
    icon: '✅',
    title: 'Qualidade garantida',
    text: 'Testes automatizados, CI/CD desde o primeiro sprint e code review rigoroso em cada PR.',
  },
  {
    icon: '💬',
    title: 'Comunicação direta',
    text: 'Updates frequentes, sem enrolação. Você acompanha o progresso em tempo real.',
  },
  {
    icon: '📅',
    title: 'Prazo respeitado',
    text: 'Entregas incrementais toda semana. Problemas são identificados cedo, nunca na véspera.',
  },
]

export const services = [
  {
    icon: '🌐',
    title: 'Aplicação Web',
    description:
      'Sistema completo com interface React/Angular, API robusta e banco de dados. Autenticação, deploy em nuvem e documentação inclusos.',
    tags: ['React', 'Angular', 'Node.js', 'Spring Boot'],
  },
  {
    icon: '📱',
    title: 'App Mobile',
    description:
      'App iOS e Android em um único código com React Native. Da primeira tela à publicação nas lojas com CI/CD automatizado.',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
  },
  {
    icon: '🔌',
    title: 'API & Integrações',
    description:
      'API REST com autenticação segura (JWT/OAuth2), integração com serviços externos, documentação e cobertura de testes.',
    tags: ['Node.js', 'Spring Boot', 'Quarkus', 'AWS Lambda'],
  },
  {
    icon: '🏗️',
    title: 'Consultoria Técnica',
    description:
      'Revisão de arquitetura, code review, setup de CI/CD e definição de padrões técnicos para o seu time crescer com qualidade.',
    tags: ['Arquitetura', 'Code Review', 'CI/CD', 'DevOps'],
  },
]

export const experiences = [
  {
    period: '2025 — atual',
    title: 'Dev Full Stack · Previ (via Montreal Informática)',
    bullets: [
      'Atua no módulo de financiamento imobiliário da Previ — uma das maiores fundações de previdência complementar do Brasil.',
      'Frontend com Angular 17: componentes reutilizáveis, formulários reativos e integração com APIs RESTful.',
      'Backend com Java 17 + Quarkus: microsserviços de alta performance para processos financeiros críticos.',
    ],
  },
  {
    period: '2022 — 2025',
    title: 'Analista de Sistemas Pleno · SEFA-PA, IGEPPS, CBM-PA (via Techlead IT Solutions)',
    bullets: [
      'Desenvolveu múltiplos sistemas governamentais: SGP e SGC (SEFA-PA), SISJURI/SIAP/SIAAG (IGEPPS) e SICOM/SIGA (CBM-PA).',
      'Microsserviços Java 17 + Spring Boot com Clean Architecture, DDD, Kafka, Keycloak (OpenID/OAuth2) e deploy no OpenShift.',
      'Criou frameworks internos e bibliotecas reutilizáveis que aceleraram o desenvolvimento de novos serviços.',
      'Referência técnica do time: code reviews, mentoria de devs juniores e definição de padrões arquiteturais.',
    ],
  },
  {
    period: '2021 — 2025',
    title: 'Analista de Sistemas Pleno · Clube Gazeta do Povo (PJ)',
    bullets: [
      'Manteve e evoluiu app iOS/Android (React Native + TypeScript) com dezenas de milhares de downloads.',
      'Construiu APIs serverless em AWS Lambda (Node.js + Serverless Framework) e GraphQL para comunicação eficiente.',
      'Automatizou o ciclo de release com GitLab CI/CD, zerando deploys manuais para Google Play e App Store.',
    ],
  },
  {
    period: '2020 — 2023',
    title: 'Desenvolvedor Web P&D · CEAMAZON (UFPA)',
    bullets: [
      'Desenvolveu sistemas IoT para automação médica e residencial em parceria multidisciplinar (engenharia elétrica, computação e biomédica).',
      'Participou de depósito de patente e publicação de artigos científicos; React, React Native, Node-RED, MySQL e PostgreSQL.',
    ],
  },
]

export const skills: Record<string, string[]> = {
  Frontend: ['Angular 17', 'React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Material UI'],
  Backend: ['Java 17', 'Spring Boot 3', 'Quarkus', 'Node.js', 'Express', 'GraphQL', 'Kafka'],
  'Banco & Segurança': ['PostgreSQL', 'MySQL', 'Oracle', 'Redis', 'Keycloak', 'OAuth2/JWT'],
  'Cloud & DevOps': ['AWS (Lambda/ECS)', 'Docker', 'OpenShift', 'Jenkins', 'GitLab CI/CD', 'SonarQube'],
}

export const projects = [
  {
    title: 'Clube Gazeta do Povo',
    img: 'https://picsum.photos/seed/clube/800/600',
    href: 'https://play.google.com/store/apps/details?id=br.com.gazetadopovo.clubeapp',
    tags: ['React Native', 'Firebase', 'AWS'],
    blurb: 'App iOS/Android oficial com dezenas de milhares de downloads e releases contínuos.',
    badge: 'Na Play Store',
  },
  {
    title: 'Zet Organizador',
    img: 'https://picsum.photos/seed/zet/800/600',
    href: '#',
    tags: ['React Native', 'QR Code'],
    blurb: 'Validação de ingressos com modo offline e sincronização confiável para eventos ao vivo.',
    badge: 'Offline-first',
  },
  {
    title: 'SGP — Gestão de Pessoas',
    img: 'https://picsum.photos/seed/sgp/800/600',
    href: '#',
    tags: ['Angular', 'Spring Boot', 'Oracle'],
    blurb: 'Sistema para órgão federal com módulos de contratos, filtros avançados e relatórios.',
    badge: 'Gov. Federal',
  },
  {
    title: 'Sisjud',
    img: 'https://picsum.photos/seed/sisjud/800/600',
    href: '#',
    tags: ['Angular', 'Spring Boot'],
    blurb: 'Acompanhamento processual com integrações governamentais e trilha de auditoria completa.',
    badge: 'Setor público',
  },
  {
    title: 'Pacemaker',
    img: 'https://picsum.photos/seed/pacemaker/800/600',
    href: 'https://github.com/LRmorais/pacemaker-react-native',
    tags: ['React Native', 'Open Source'],
    blurb: 'App open source de treinos focado em ritmo e performance. Contribuições bem-vindas.',
    badge: 'Open source',
  },
]

export const testimonials = [
  {
    name: 'Ana Paula',
    role: 'Product Manager · Gazeta do Povo',
    text: 'Excelente na comunicação e entrega. Conduziu o projeto de ponta a ponta mantendo qualidade e prazos rigorosamente.',
  },
  {
    name: 'Rafael',
    role: 'Tech Lead · Techlead IT Solutions',
    text: 'Código limpo, atenção à observabilidade e cuidado genuíno com performance. Virou referência técnica no time rapidamente.',
  },
]

export const posts = [
  {
    title: 'Estratégias de CI/CD para apps mobile',
    date: '2025-01-12',
    href: '#',
    blurb: 'Como organizei pipelines multiambiente para iOS/Android, zerando deploys manuais.',
  },
  {
    title: 'Keycloak na prática',
    date: '2024-10-03',
    href: '#',
    blurb: 'Fluxos de OAuth2/JWT e dicas de integração com SPAs e backends Java/Node.',
  },
]