export const profile = {
  company: 'Morais Soluções Digitais',
  name: 'Lucas Morais',
  role: 'Fundador & Desenvolvedor Full Stack',
  email: 'lucas.morais23ti@gmail.com',
  github: 'https://github.com/LRmorais',
  linkedin: 'https://www.linkedin.com/in/lrmorais/',
  whatsapp: 'https://wa.me/5548991638846',
  location: 'Florianópolis, SC — Brasil',
  available: true,
  summary:
    'Sites, aplicativos, APIs de integração e manutenção de sistemas — tudo com quem programa falando direto com você, sem intermediário no meio do caminho. 6+ anos de experiência, 21 projetos entregues, proposta em até 24h.',
  education: 'Bacharelando em Eng. da Computação · UFPA (2020–2026)',
}

export const clients = ['Previ', 'Gazeta do Povo', 'SEFA-PA', 'CBMPA', 'IGEPPS', 'CEAMAZON / UFPA']

export const stats = [
  { label: 'Projetos entregues', value: '21' },
  { label: 'Anos de experiência', value: '6+' },
  { label: 'Apps nas lojas', value: '2' },
  { label: 'Tempo de resposta', value: '<24h' },
]

export const valueProps = [
  {
    icon: 'Lightning',
    title: 'Tudo num só lugar',
    text: 'Site, app, API e manutenção no mesmo contrato. Você não precisa gerenciar vários fornecedores para ter o produto funcionando.',
  },
  {
    icon: 'CheckCircle',
    title: 'Sem surpresas no preço nem no prazo',
    text: 'Você recebe um escopo claro antes de começar. Se aparecer algo diferente no meio do caminho, eu te aviso antes de mudar qualquer coisa.',
  },
  {
    icon: 'ChatCircleDots',
    title: 'Você sempre sabe o que está acontecendo',
    text: 'Atualização toda semana e uma demonstração ao vivo no final de cada etapa. Seu projeto nunca vira uma caixa preta.',
  },
  {
    icon: 'Handshake',
    title: 'Já entregou para quem exige qualidade',
    text: 'Mais de 21 sistemas rodando para clientes como Previ e Gazeta do Povo. O mesmo cuidado vai para o seu projeto.',
  },
]

export const howItWorks = [
  {
    step: '01',
    title: 'Me conta seu projeto',
    text: 'Manda uma mensagem descrevendo o que você precisa. Sem formulário longo, sem reunião obrigatória.',
  },
  {
    step: '02',
    title: 'Proposta em até 24h',
    text: 'Você recebe escopo, prazo e investimento por escrito — sem surpresas no meio do caminho.',
  },
  {
    step: '03',
    title: 'Entrega incremental',
    text: 'Sprints semanais com demos reais. Você acompanha o progresso e aprova cada etapa.',
  },
]

export const services = [
  {
    icon: 'Globe',
    title: 'Criação de sites',
    description:
      'Do site institucional à landing page de vendas, com o sistema com login, cadastros e painel por trás quando o projeto precisar. Pronto para usar, sem você precisar entender de tecnologia.',
    tags: ['React', 'Angular', 'Node.js', 'Spring Boot'],
  },
  {
    icon: 'DeviceMobile',
    title: 'Aplicativos',
    description:
      'Leve seu negócio para o celular dos seus clientes. Um único desenvolvimento, publicado nas duas lojas (iOS e Android) com atualizações automáticas.',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
  },
  {
    icon: 'Plugs',
    title: 'APIs de integração',
    description:
      'Conecte seu negócio a sistemas de pagamento, marketplaces, ERPs ou qualquer serviço externo. Automatize o que hoje ainda é feito na mão.',
    tags: ['Pagamentos', 'Integrações', 'Automação', 'AWS'],
  },
  {
    icon: 'Wrench',
    title: 'Manutenção e evolução de sistemas',
    description:
      'Já tem um site, app ou sistema rodando? Cuido da manutenção, corrijo bugs e evoluo o produto com novas funcionalidades sem parar o que já funciona.',
    tags: ['Legado', 'Correção de bugs', 'Novas features', 'Performance'],
  },
]

export const experiences = [
  {
    period: '2025 — atual',
    title: 'Dev Full Stack · Previ (via Montreal Informática)',
    bullets: [
      'Atua no módulo de financiamento imobiliário da Previ — uma das maiores fundações de previdência complementar do Brasil.',
      'Três sistemas: Autoatendimento Web (clientes Previ), Backoffice (funcionários) e backend compartilhado em Java 21 + Quarkus.',
      'Frontend com Angular 21: componentes reutilizáveis, formulários reativos e integração com APIs RESTful.',
    ],
  },
  {
    period: '2022 — 2025',
    title: 'Analista de Sistemas Pleno · SEFA-PA, IGEPPS, CBM-PA (via Techlead IT Solutions)',
    bullets: [
      'Desenvolveu sistemas governamentais para múltiplos clientes: SGP/SGC (SEFA-PA, 2025–2026), SISJURI/SISJUD/SIAP + App Móvel (IGEPPS, 2023–2024) e SICOM/SIED/SIGA/SISGAT (CBMPA, 2022–2023).',
      'Sistemas criados do zero com Angular 17, Java 17, microsserviços (Clean Architecture + DDD), Kafka, Keycloak (OpenID/OAuth2), Redis, SonarQube, Jenkins e OpenShift — stack completo Red Hat.',
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
  // Previ — 2025–presente
  {
    title: 'Autoatendimento Web — Previ',
    img: '/clients/previ.jpg',
    href: '#',
    tags: ['Angular 21', 'Java 21', 'Quarkus', 'REST API'],
    blurb: 'Portal de autoatendimento para clientes da Previ — uma das maiores fundações de previdência complementar do Brasil.',
    badge: 'Previ',
    category: 'Web',
  },
  {
    title: 'Backoffice — Previ',
    img: '/clients/previ.jpg',
    href: '#',
    tags: ['Angular 21', 'Java 21', 'Quarkus', 'REST API'],
    blurb: 'Sistema backoffice para funcionários da Previ — gestão operacional interna com Angular 21 e backend compartilhado em Java 21 + Quarkus.',
    badge: 'Previ',
    category: 'Web',
  },
  // SEFA-PA — 2025–2026
  {
    title: 'SGP — Gestão de Pessoas',
    img: '/clients/sefa.png',
    href: '#',
    tags: ['Angular 17', 'Java 17', 'Keycloak', 'Kafka', 'Redis', 'OpenShift'],
    blurb: 'Sistema de gestão de pessoas criado do zero para a SEFA-PA — microsserviços, SSO via Keycloak, mensageria Kafka e deploy em cluster OpenShift Red Hat.',
    badge: 'SEFA-PA',
    category: 'Governo',
  },
  {
    title: 'SGC — Gestão de Contratos',
    img: '/clients/sefa.png',
    href: '#',
    tags: ['Angular 17', 'Java 17', 'Kafka', 'SonarQube', 'Jenkins'],
    blurb: 'Sistema de gestão de contratos criado do zero para a SEFA-PA — arquitetura de microsserviços com orquestração Jenkins e pipeline de qualidade SonarQube.',
    badge: 'SEFA-PA',
    category: 'Governo',
  },
  // Freelance — 2025
  {
    title: 'API de Integração — Loocal Delivery',
    img: '/clients/loocal.png',
    href: '#',
    tags: ['Node.js', 'Express', 'AWS', 'Open Delivery'],
    blurb: 'API de abertura de plataforma para a Loocal Delivery seguindo o padrão Open Delivery — permite que sistemas externos integrem com os serviços da empresa via REST padronizado.',
    badge: 'Freelance',
    category: 'Web',
  },
  {
    title: 'Rosi Educação Financeira',
    img: '/clients/rosi.png',
    href: 'https://rosieducacaofinanceira.com.br/',
    tags: ['WordPress', 'Web Design', 'SEO'],
    blurb: 'Site institucional para profissional de educação financeira — desenvolvimento completo em WordPress com foco em conversão e identidade visual.',
    badge: 'Freelance',
    category: 'Web',
  },
  // Gazeta do Povo — 2021–presente
  {
    title: 'Clube Gazeta do Povo',
    img: '/clients/gazeta.png',
    href: 'https://play.google.com/store/apps/details?id=br.com.gazetadopovo.clubeapp',
    tags: ['React Native', 'AWS Lambda', 'GraphQL', 'GitLab CI/CD'],
    blurb: 'App iOS/Android com dezenas de milhares de downloads — em desenvolvimento ativo desde 2021. Evolução contínua de produto, performance e releases automatizados.',
    badge: 'Gazeta · App',
    category: 'Mobile',
  },
  {
    title: 'Empresas — Dashboard Corporativo',
    img: '/clients/gazeta.png',
    href: '#',
    tags: ['Next.js', 'GraphQL', 'TypeScript'],
    blurb: 'Dashboard para empresas que compram assinaturas em grupo para seus funcionários — gestão de colaboradores, download de faturas e controle de pagamentos.',
    badge: 'Gazeta · Web',
    category: 'Web',
  },
  {
    title: 'Painel de Controle — Clube Gazeta',
    img: '/clients/gazeta.png',
    href: '#',
    tags: ['React', 'AWS Lambda', 'Node.js'],
    blurb: 'Dashboard interno para funcionários e parceiros do Clube Gazeta do Povo — métricas, gestão de assinaturas e controle operacional.',
    badge: 'Gazeta · Web',
    category: 'Web',
  },
  // Zet — 2023–2025
  {
    title: 'Zet Organizador',
    img: '/clients/gazeta.png',
    href: '#',
    tags: ['React Native', 'Node.js', 'QR Code'],
    blurb: 'Validação de ingressos com modo offline e sincronização confiável para eventos ao vivo. Desenvolvido de 2023 a 2025.',
    badge: 'Zet · App',
    category: 'Mobile',
  },
  {
    title: 'Painel de Controle — ZET',
    img: '/clients/gazeta.png',
    href: '#',
    tags: ['React', 'Node.js', 'AWS Lambda'],
    blurb: 'Painel administrativo do ZET integrado ao ecossistema Clube Gazeta — gestão de eventos, ingressos e relatórios de validação.',
    badge: 'Zet · Web',
    category: 'Web',
  },
  // IGEPPS — 2023–2024
  {
    title: 'Aplicativo Móvel IGEPPS',
    img: '/clients/igepps.jpg',
    href: '#',
    tags: ['React Native', 'TypeScript'],
    blurb: 'App mobile para servidores e segurados do IGEPPS — consulta de benefícios, demonstrativos e serviços previdenciários.',
    badge: 'IGEPPS',
    category: 'Mobile',
  },
  {
    title: 'SISJUD — Sistema Judiciário',
    img: '/clients/igepps.jpg',
    href: '#',
    tags: ['Angular', 'Spring Boot', 'Keycloak', 'SonarQube'],
    blurb: 'Sistema judiciário com autenticação SSO via Keycloak, qualidade de código com SonarQube e deploy em cluster OpenShift orquestrado por Jenkins.',
    badge: 'IGEPPS',
    category: 'Governo',
  },
  {
    title: 'SIAP — Acompanhamento Previdenciário',
    img: '/clients/igepps.jpg',
    href: '#',
    tags: ['Angular', 'Spring Boot', 'Oracle', 'OpenShift'],
    blurb: 'Sistema de acompanhamento previdenciário para o Instituto de Gestão Previdenciária e Proteção Social do Estado do Pará.',
    badge: 'IGEPPS',
    category: 'Governo',
  },
  {
    title: 'SISJURI — Sistema Jurídico',
    img: '/clients/igepps.jpg',
    href: '#',
    tags: ['Angular 7', 'Java 8', 'Oracle', 'OpenShift'],
    blurb: 'Sistema jurídico legado (Java 8 + Angular 7) mantido e evoluído em cluster OpenShift — migração incremental sem interrupção do serviço.',
    badge: 'IGEPPS',
    category: 'Governo',
  },
  // CBMPA — 2022–2023
  {
    title: 'SICOM — Condecorações e Medalhas',
    img: '/clients/cbmpa.png',
    href: '#',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    blurb: 'Sistema de gestão de condecorações e medalhas dos Bombeiros Militares do Pará — controle de registros e cerimônias.',
    badge: 'CBMPA',
    category: 'Governo',
  },
  {
    title: 'SIED — Ética e Disciplina',
    img: '/clients/cbmpa.png',
    href: '#',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    blurb: 'Sistema Integrado de Ética e Disciplina — gestão de processos administrativos disciplinares dos Bombeiros Militares do Pará.',
    badge: 'CBMPA',
    category: 'Governo',
  },
  {
    title: 'SIGA — Gestão Administrativa',
    img: '/clients/cbmpa.png',
    href: '#',
    tags: ['PHP', 'PostgreSQL'],
    blurb: 'Sistema Integrado de Gestão Administrativa dos Bombeiros Militares do Pará — módulos operacionais e controle de recursos.',
    badge: 'CBMPA',
    category: 'Governo',
  },
  {
    title: 'SISGAT — Atividades Técnicas',
    img: '/clients/cbmpa.png',
    href: '#',
    tags: ['PHP', 'PostgreSQL'],
    blurb: 'Sistema de Gerenciamento de Atividades Técnicas dos Bombeiros Militares do Pará — registro e acompanhamento de operações.',
    badge: 'CBMPA',
    category: 'Governo',
  },
  // 2021
  {
    title: 'Pacemaker',
    img: '/clients/pacemaker.png',
    href: 'https://github.com/LRmorais/pacemaker-react-native',
    tags: ['React Native', 'Open Source'],
    blurb: 'App open source de treinos focado em ritmo e performance. Contribuições bem-vindas.',
    badge: 'Open source',
    category: 'Mobile',
  },
  // CEAMAZON / UFPA — 2020–2021
  {
    title: 'SRM-V&A',
    img: '/clients/smva.jpg',
    href: 'https://ieeexplore.ieee.org/document/9529879',
    tags: ['IoT', 'React Native', 'Node.js'],
    blurb: 'Sistema de monitoramento de temperatura para vacinas — patente concedida pelo INPI e artigo publicado no IEEE INDUSCON 2021.',
    badge: 'Patente INPI',
    category: 'Pesquisa',
  },
]

export const faq = [
  {
    q: 'A Morais Soluções Digitais é uma agência grande ou é você mesmo quem desenvolve?',
    a: 'É um estúdio boutique liderado por mim, Lucas Morais. Isso significa que você fala direto com quem vai programar o seu projeto — sem gerente de contas no meio, sem telefone sem fio. Quando o projeto pede mais mãos, monto um time sob medida para a demanda.',
  },
  {
    q: 'Preciso entender de tecnologia para trabalhar com você?',
    a: 'Não. Você me conta o que seu negócio precisa e eu cuido do resto. A comunicação é sempre em português claro — sem siglas, sem jargão técnico.',
  },
  {
    q: 'Quanto tempo leva para ficar pronto?',
    a: 'Depende do projeto. Um site institucional fica pronto em 2–3 semanas. Um app completo leva em média 2–4 meses. Depois de conversar sobre o que você precisa, te passo um prazo real e por escrito.',
  },
  {
    q: 'Quanto custa?',
    a: 'Cada projeto tem escopo diferente — não existe tabela única. Me conta o que você precisa pelo WhatsApp e te envio uma proposta detalhada em até 24 horas, sem compromisso.',
  },
  {
    q: 'Você atende pequenas empresas e autônomos?',
    a: 'Sim. Já desenvolvi desde sites simples para profissionais liberais até sistemas para grandes empresas. O tamanho do cliente não muda o cuidado com a entrega.',
  },
  {
    q: 'E se eu precisar de mudanças depois da entrega?',
    a: 'Todo projeto inclui um período de ajustes após a entrega. Para evoluções maiores, combinamos um contrato de manutenção ou tratamos como novo projeto — você escolhe.',
  },
  {
    q: 'Você trabalha com clientes fora de Florianópolis?',
    a: 'Sim, 100% remoto. Atendo clientes em todo o Brasil. Todo o acompanhamento é feito por videochamada, WhatsApp ou e-mail — onde for mais cômodo para você.',
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