/*
 * Dicionário de textos por idioma. Conteúdo estrutural (categorias, tags,
 * links, datas) fica em src/data/*.js — aqui só entra o que é exibido ao
 * usuário e varia por idioma. Itens de projetos/certificações são casados
 * com src/data/*.js pelo campo `id`.
 *
 * TODO(vitor): todo o texto abaixo é placeholder — revisar antes de publicar.
 */
export const translations = {
  pt: {
    meta: {
      title: 'Vitor Martimiani | Portfólio',
    },
    nav: {
      links: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Skills',
        certifications: 'Certificações',
        projects: 'Projetos',
        contact: 'Contato',
      },
    },
    hero: {
      kicker: 'Olá, eu sou',
      name: 'Vitor Martimiani',
      role: 'Desenvolvedor Full-Stack & Analista em Integrações',
      tagline:
        'Transformo ideias em aplicações web e integrações robustas, conectando plataformas e tornando processos mais ágeis e escaláveis.',
      ctaPrimary: 'Ver projetos',
      ctaSecondary: 'Entrar em contato',
      scrollHint: 'Role para explorar',
    },
    services: {
      kicker: 'O que eu entrego',
      heading: 'Soluções sob medida, do full-stack à integração',
      subheading:
        'Cada projeto começa pelo problema de negócio — a tecnologia é escolhida em função dele, não o contrário.',
      items: [
        {
          id: 'web-apps',
          title: 'Aplicações Web',
          description:
            'Interfaces rápidas, acessíveis e responsivas construídas com boas práticas de engenharia front-end.',
        },
        {
          id: 'dashboards',
          title: 'Dashboards & Relatórios',
          description:
            'Painéis que transformam dados operacionais em decisões, com foco em performance e clareza visual.',
        },
        {
          id: 'automation',
          title: 'Automações',
          description:
            'Rotinas que eliminam trabalho manual repetitivo e reduzem erro humano em processos críticos.',
        },
        {
          id: 'systems',
          title: 'Sistemas Web',
          description:
            'Plataformas completas, do modelo de dados à interface, pensadas para crescer com o negócio.',
        },
        {
          id: 'integrations',
          title: 'Integrações & APIs',
          description:
            'Conexões entre sistemas com foco em idempotência, resiliência e observabilidade.',
        },
      ],
    },
    skills: {
      kicker: 'Stack & Ferramentas',
      heading: 'Tecnologias com as quais eu trabalho',
      subheading:
        'Uma seleção das ferramentas que uso no dia a dia — a lista cresce conforme o projeto exige.',
    },
    about: {
      kicker: 'Sobre mim',
      heading: 'Sobre Mim',
      tagline: 'Tecnologia, criatividade e evolução constante.',
      paragraphs: [
        'Sou um profissional apaixonado por tecnologia e desenvolvimento de software, atualmente cursando Ciência da Computação e atuando com Salesforce Marketing Cloud. Gosto de transformar desafios em soluções práticas, utilizando desenvolvimento web, automação de processos e análise de dados para gerar resultados.',
        'Minha trajetória profissional começou nas áreas de atendimento e vendas, experiência que fortaleceu habilidades como comunicação, resolução de problemas e foco no cliente. Hoje aplico esse conhecimento na tecnologia, desenvolvendo campanhas, automações e soluções digitais que unem eficiência e experiência do usuário.',
        'Mais do que escrever código, gosto de criar soluções que simplificam processos, agregam valor aos negócios e proporcionam uma melhor experiência para as pessoas.',
        'Estou em constante evolução, aprofundando meus conhecimentos em React, JavaScript, Python, Node.js, HTML, CSS, SQL, Salesforce Marketing Cloud e Power BI, sempre buscando aprender novas tecnologias e participar de projetos desafiadores.',
        'Meu propósito é crescer como desenvolvedor, contribuir para equipes de alta performance e construir soluções modernas, escaláveis e de impacto.',
      ],
      highlights: [
        { icon: 'location', label: 'Brasil' },
        { icon: 'experience', label: '4 meses de experiência' },
        { icon: 'focus', label: 'Salesforce Marketing Cloud' },
      ],
    },
    certifications: {
      kicker: 'Certificações',
      heading: 'Aprendizado contínuo',
      subheading: 'Cursos e trilhas na Alura que sustentam minha prática profissional.',
      filters: {
        all: 'Todas',
        javascript: 'JavaScript',
        python: 'Python',
        frontend: 'Front-end',
        react: 'React',
        powerbi: 'Power BI',
      },
      countLabel: (n) => `${n} certifica${n === 1 ? 'ção' : 'ções'}`,
      viewCredential: 'Ver certificado',
      stats: {
        hoursLabel: (n) => `${n} horas`,
        certificatesLabel: (n) => `${n} certificado${n === 1 ? '' : 's'}`,
      },
      pagination: { prev: 'Anterior', next: 'Próxima', page: (n) => `Página ${n}` },
      items: [
        { id: 'cert-1', title: 'JavaScript com Node.js: criando sua primeira biblioteca' },
        { id: 'cert-2', title: 'Next.js: conheça o framework React' },
        { id: 'cert-3', title: 'React: desenvolvendo com JavaScript' },
        { id: 'cert-4', title: 'Praticando Python: condicionais if, elif e else' },
        { id: 'cert-5', title: 'Praticando Python: laços for e while' },
        { id: 'cert-6', title: 'Praticando Python: Strings e Regex' },
        { id: 'cert-7', title: 'Praticando Python: listas e tuplas' },
        { id: 'cert-8', title: 'Praticando Python: conjuntos e dicionários' },
        { id: 'cert-9', title: 'Praticando Python: funções' },
        { id: 'cert-10', title: 'Praticando Python: programação assíncrona' },
        { id: 'cert-11', title: 'Praticando Python: trabalhando com projetos' },
        { id: 'cert-12', title: 'Python: Inteligência Artificial Aplicada' },
        { id: 'cert-13', title: 'HTML e CSS: responsividade em layouts' },
        { id: 'cert-14', title: 'HTML e CSS: ambientes de desenvolvimento e estrutura de arquivos' },
        { id: 'cert-15', title: 'JavaScript para Web: crie páginas dinâmicas' },
        { id: 'cert-16', title: 'JavaScript: tipos, variáveis e funções' },
        { id: 'cert-17', title: 'HTML e CSS: classes, posicionamento e flexbox' },
        { id: 'cert-18', title: 'Lógica de Programação: mergulhe em programação com JavaScript' },
        { id: 'cert-19', title: 'JavaScript: conhecendo arrays' },
        { id: 'cert-20', title: 'Acessibilidade no HTML: escrevendo códigos semânticos para inclusão' },
        { id: 'cert-21', title: 'Aplicação do Power BI para Aprimoramento da Gestão' },
      ],
    },
    projects: {
      kicker: 'Portfólio',
      heading: 'Projetos selecionados',
      subheading: 'Uma amostra do que já foi construído — cada card traz contexto, stack e links.',
      filters: {
        all: 'Todos',
        web: 'Web',
        integration: 'Integração',
        automation: 'Automação',
        uiux: 'UI/UX',
      },
      countLabel: (n) => `${n} projeto${n === 1 ? '' : 's'}`,
      modal: {
        technologies: 'Tecnologias',
        viewProject: 'Acessar projeto',
        viewCode: 'Ver código no GitHub',
        watchVideo: 'Assistir vídeo',
        close: 'Fechar',
        prev: 'Anterior',
        next: 'Próximo',
      },
      items: [
        {
          id: 'proj-1',
          title: 'Portfólio Pessoal',
          description:
            'Este próprio site: uma SPA em React com tema escuro, conteúdo em três idiomas e seções para apresentar minha trajetória, skills e certificações.',
        },
        {
          id: 'proj-2',
          title: 'Bot de Alertas Climáticos',
          description:
            'Projeto pessoal que integra uma API pública de previsão do tempo a um serviço de notificações: quando as condições mudam, o sistema dispara um alerta automático.',
        },
        {
          id: 'proj-3',
          title: 'Pipeline MySQL → Power BI',
          description:
            'Script em Python que extrai dados de um banco MySQL, trata as informações e atualiza automaticamente um dashboard no Power BI, eliminando a atualização manual de relatórios.',
        },
        {
          id: 'proj-4',
          title: 'Redesign de Landing Page',
          description:
            'Home de uma imobiliária fictícia (Liz Imóveis) em HTML5 + CSS puro, sem framework: foco em acessibilidade (navegação por teclado, leitores de tela) e responsividade.',
        },
      ],
    },
    contact: {
      kicker: 'Contato',
      heading: 'Vamos conversar',
      subheading: 'Respondo rápido pelos canais abaixo.',
      items: [
        {
          id: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/vitor-martimiani-0ab245268',
        },
        { id: 'github', label: 'GitHub', href: 'https://github.com/vitormagalhaes2709-dotcom' },
      ],
    },
    weather: {
      title: 'Clima ao vivo',
      back: 'Voltar ao portfólio',
      kicker: 'Demonstração ao vivo · Bot de Alertas Climáticos',
      location: 'São Paulo, BR',
      loading: 'Consultando a Open-Meteo...',
      error: 'Não foi possível carregar o clima agora.',
      retry: 'Tentar novamente',
      updatedAt: (time) => `Atualizado às ${time}`,
      today: 'Hoje',
      statsLabel: 'Indicadores climáticos atuais',
      forecastHeading: 'Próximos dias',
      poweredBy: 'Dados via',
      viewBotCode: 'Ver código do bot no GitHub',
      conditions: {
        clear: 'Céu limpo',
        'partly-cloudy': 'Poucas nuvens',
        cloudy: 'Nublado',
        fog: 'Neblina',
        rain: 'Chuva',
        storm: 'Tempestade',
        snow: 'Neve',
      },
      stats: {
        feelsLike: 'Sensação térmica',
        humidity: 'Umidade',
        wind: 'Vento',
        rainChance: 'Chance de chuva',
        uvIndex: 'Índice UV',
        sunrise: 'Nascer do sol',
        sunset: 'Pôr do sol',
      },
    },
    pedidos: {
      title: 'Pedidos ao vivo',
      back: 'Voltar ao portfólio',
      kicker: 'Demonstração ao vivo · Pipeline MySQL → Power BI',
      heading: 'Painel de Pedidos',
      subheading: (inicio, fim) =>
        `${inicio} — ${fim} · 1000 pedidos reais processados por um pipeline Python (planilha → MySQL → resumos), prontos para o Power BI.`,
      kpiLabel: 'Indicadores gerais de pedidos',
      kpis: {
        receitaTotal: 'Receita paga',
        totalPedidos: 'Pedidos totais',
        ticketMedio: 'Ticket médio (pago)',
        taxaCancelamento: 'Taxa de cancelamento',
      },
      charts: {
        receitaMensal: { title: 'Receita mensal', subtitle: 'Soma de pedidos pagos por mês' },
        statusMensal: {
          title: 'Status dos pedidos por mês',
          subtitle: 'Volume de pedidos: pago, pendente e cancelado',
        },
        receitaCategoria: { title: 'Receita por categoria', subtitle: 'Total pago, por categoria de produto' },
        receitaEstado: { title: 'Receita por estado', subtitle: 'Total pago, por estado' },
        vendedor: { title: 'Desempenho por vendedor', subtitle: 'Receita paga e taxa de cancelamento' },
      },
      table: { viewTable: 'Ver como tabela', viewChart: 'Ver gráfico' },
      columns: {
        mes: 'Mês',
        categoria: 'Categoria',
        estado: 'Estado',
        vendedor: 'Vendedor',
        receita: 'Receita',
        cancelamento: 'Cancelamento',
      },
      poweredBy: 'Dados gerados por',
      viewCode: 'Ver código do pipeline no GitHub',
    },
    lizImoveis: {
      back: 'Voltar ao portfólio',
      demoNote:
        'Prévia visual da home — o formulário aqui é só ilustrativo; a versão funcional (HTML/CSS/JS puro) está no repositório.',
      hero: {
        eyebrow: 'Curadoria de imóveis de alto padrão',
        title: 'Encontre o imóvel dos seus sonhos',
        lead: 'Casas e apartamentos selecionados a dedo, com atendimento consultivo do começo ao fim — da primeira visita até a chave na mão.',
      },
      listings: {
        eyebrow: 'Selecionados pela nossa equipe',
        heading: 'Imóveis em destaque',
        items: [
          {
            badge: 'Lançamento',
            price: 'R$ 3.450.000',
            title: 'Casa contemporânea — Jardim Europa',
            address: 'Rua das Palmeiras, 240 — São Paulo, SP',
            area: '320 m²',
            rooms: '4 quartos · 2 suítes',
            extra: '3 vagas',
            imageAlt: 'Fachada de casa moderna com iluminação noturna, jardim e piscina',
          },
          {
            badge: 'Novo',
            price: 'R$ 1.890.000',
            title: 'Casa térrea — Alto da Boa Vista',
            address: 'Alameda dos Ipês, 88 — São Paulo, SP',
            area: '180 m²',
            rooms: '3 quartos · 1 suíte',
            extra: '2 vagas',
            imageAlt: 'Casa térrea moderna com fachada clara e entrada iluminada',
          },
          {
            badge: 'Exclusivo',
            price: 'R$ 8.200.000',
            title: 'Vila mediterrânea — Frente-mar',
            address: 'Av. Beira-Mar, 1200 — Guarujá, SP',
            area: '510 m²',
            rooms: '5 suítes',
            extra: 'Piscina infinita',
            imageAlt: 'Vila com piscina de borda infinita e vista para o mar, estilo mediterrâneo',
          },
        ],
      },
      plans: {
        eyebrow: 'Projetos prontos para construir ou reformar',
        heading: 'Plantas disponíveis',
        items: [
          {
            title: 'Vila Luxuosa',
            spec: '440,40 m² · 3 suítes · piscina de borda infinita',
            alt: 'Planta baixa da Vila Luxuosa: área de lazer integrada com piscina, 3 suítes e área total de 440,40 m²',
          },
          {
            title: 'Residencial Compacto',
            spec: '125,30 m² · 3 quartos (1 suíte) · área gourmet',
            alt: 'Planta baixa com 3 quartos, sala de estar e jantar integradas e área gourmet, 125,30 m²',
          },
          {
            title: 'Casa Moderna — 2 Pavimentos',
            spec: '210,40 m² · 3 suítes · escritório · piscina',
            alt: 'Planta baixa de casa moderna em 2 pavimentos, com piscina, 3 suítes e escritório, 210,40 m²',
          },
          {
            title: 'Casa de Campo Rústica',
            spec: '165 m² · 1 suíte + 2 quartos · varanda de 45 m²',
            alt: 'Planta baixa de casa de campo rústica com varanda ampla, suíte e 2 quartos, 165 m²',
          },
        ],
      },
      whyUs: {
        eyebrow: 'Por que a Liz Imóveis',
        heading: 'Do primeiro clique até a chave na mão',
        items: [
          { title: 'Curadoria selecionada', description: 'Cada imóvel do catálogo passa por uma vistoria própria antes de ir ao ar.' },
          { title: 'Atendimento consultivo', description: 'Um corretor dedicado do primeiro contato até a assinatura do contrato.' },
          { title: 'Documentação sem dor de cabeça', description: 'Cuidamos da parte jurídica e cartorária — você só assina.' },
          { title: 'Financiamento facilitado', description: 'Parceria com os principais bancos para aprovar sua simulação mais rápido.' },
        ],
      },
      cta: {
        heading: 'Quer saber em primeira mão sobre novos lançamentos?',
        subheading: 'Deixe seu e-mail — sem spam, só imóveis que combinam com o que você procura.',
        disabledNote: 'Formulário funcional disponível na versão real do projeto (link abaixo).',
      },
      poweredBy: 'Projeto de estudo por',
      viewCode: 'Ver código no GitHub',
    },
    footer: {
      rights: (year) => `© ${year} Vitor Martimiani. Todos os direitos reservados.`,
    },
  },

  en: {
    meta: {
      title: 'Vitor Martimiani | Portfolio',
    },
    nav: {
      links: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        certifications: 'Certifications',
        projects: 'Projects',
        contact: 'Contact',
      },
    },
    hero: {
      kicker: "Hi, I'm",
      name: 'Vitor Martimiani',
      role: 'Full-Stack Developer & Integration Analyst',
      tagline:
        'I turn ideas into web applications and robust integrations, connecting platforms and making processes more agile and scalable.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      scrollHint: 'Scroll to explore',
    },
    services: {
      kicker: 'What I deliver',
      heading: 'Tailored solutions, from full-stack to integration',
      subheading:
        'Every project starts with the business problem — technology is chosen to serve it, not the other way around.',
      items: [
        {
          id: 'web-apps',
          title: 'Web Applications',
          description:
            'Fast, accessible and responsive interfaces built with solid front-end engineering practices.',
        },
        {
          id: 'dashboards',
          title: 'Dashboards & Reporting',
          description:
            'Panels that turn operational data into decisions, focused on performance and visual clarity.',
        },
        {
          id: 'automation',
          title: 'Automation',
          description:
            'Workflows that remove repetitive manual work and reduce human error in critical processes.',
        },
        {
          id: 'systems',
          title: 'Web Systems',
          description:
            'End-to-end platforms, from the data model to the interface, built to grow with the business.',
        },
        {
          id: 'integrations',
          title: 'Integrations & APIs',
          description:
            'System-to-system connections focused on idempotency, resilience and observability.',
        },
      ],
    },
    skills: {
      kicker: 'Stack & Tools',
      heading: 'Technologies I work with',
      subheading:
        'A selection of the tools I use day to day — the list grows as each project requires.',
    },
    about: {
      kicker: 'About me',
      heading: 'About Me',
      tagline: 'Technology, creativity and constant evolution.',
      paragraphs: [
        "I'm a professional passionate about technology and software development, currently studying Computer Science and working with Salesforce Marketing Cloud. I enjoy turning challenges into practical solutions, using web development, process automation and data analysis to drive results.",
        'My professional path started in customer service and sales, an experience that strengthened skills like communication, problem-solving and a customer-first mindset. Today I apply that knowledge to technology, building campaigns, automations and digital solutions that combine efficiency with a great user experience.',
        'More than writing code, I enjoy building solutions that simplify processes, add value to the business and create a better experience for people.',
        "I'm constantly evolving, deepening my knowledge of React, JavaScript, Python, Node.js, HTML, CSS, SQL, Salesforce Marketing Cloud and Power BI, always looking to learn new technologies and take on challenging projects.",
        'My goal is to grow as a developer, contribute to high-performing teams and build modern, scalable, high-impact solutions.',
      ],
      highlights: [
        { icon: 'location', label: 'Brazil' },
        { icon: 'experience', label: '4 months of experience' },
        { icon: 'focus', label: 'Salesforce Marketing Cloud' },
      ],
    },
    certifications: {
      kicker: 'Certifications',
      heading: 'Continuous learning',
      subheading: 'Courses and learning tracks on Alura that support my professional practice.',
      filters: {
        all: 'All',
        javascript: 'JavaScript',
        python: 'Python',
        frontend: 'Front-end',
        react: 'React',
        powerbi: 'Power BI',
      },
      countLabel: (n) => `${n} certification${n === 1 ? '' : 's'}`,
      viewCredential: 'View certificate',
      stats: {
        hoursLabel: (n) => `${n} hours`,
        certificatesLabel: (n) => `${n} certificate${n === 1 ? '' : 's'}`,
      },
      pagination: { prev: 'Previous', next: 'Next', page: (n) => `Page ${n}` },
      items: [
        { id: 'cert-1', title: 'JavaScript with Node.js: building your first library' },
        { id: 'cert-2', title: 'Next.js: get to know the React framework' },
        { id: 'cert-3', title: 'React: developing with JavaScript' },
        { id: 'cert-4', title: 'Practicing Python: if, elif and else conditionals' },
        { id: 'cert-5', title: 'Practicing Python: for and while loops' },
        { id: 'cert-6', title: 'Practicing Python: Strings and Regex' },
        { id: 'cert-7', title: 'Practicing Python: lists and tuples' },
        { id: 'cert-8', title: 'Practicing Python: sets and dictionaries' },
        { id: 'cert-9', title: 'Practicing Python: functions' },
        { id: 'cert-10', title: 'Practicing Python: async programming' },
        { id: 'cert-11', title: 'Practicing Python: working with projects' },
        { id: 'cert-12', title: 'Python: Applied Artificial Intelligence' },
        { id: 'cert-13', title: 'HTML and CSS: responsive layouts' },
        { id: 'cert-14', title: 'HTML and CSS: dev environments and file structure' },
        { id: 'cert-15', title: 'JavaScript for the Web: build dynamic pages' },
        { id: 'cert-16', title: 'JavaScript: types, variables and functions' },
        { id: 'cert-17', title: 'HTML and CSS: classes, positioning and flexbox' },
        { id: 'cert-18', title: 'Programming Logic: diving into programming with JavaScript' },
        { id: 'cert-19', title: 'JavaScript: getting to know arrays' },
        { id: 'cert-20', title: 'HTML Accessibility: writing semantic code for inclusion' },
        { id: 'cert-21', title: 'Power BI Application for Management Improvement' },
      ],
    },
    projects: {
      kicker: 'Portfolio',
      heading: 'Selected projects',
      subheading: 'A sample of what has been built — each card includes context, stack and links.',
      filters: {
        all: 'All',
        web: 'Web',
        integration: 'Integration',
        automation: 'Automation',
        uiux: 'UI/UX',
      },
      countLabel: (n) => `${n} project${n === 1 ? '' : 's'}`,
      modal: {
        technologies: 'Technologies',
        viewProject: 'View project',
        viewCode: 'View code on GitHub',
        watchVideo: 'Watch video',
        close: 'Close',
        prev: 'Previous',
        next: 'Next',
      },
      items: [
        {
          id: 'proj-1',
          title: 'Personal Portfolio',
          description:
            'This very site: a React SPA with a dark theme, content in three languages, and sections covering my background, skills and certifications.',
        },
        {
          id: 'proj-2',
          title: 'Weather Alert Bot',
          description:
            'Personal project integrating a public weather forecast API with a notification service: when conditions change, the system fires an automatic alert.',
        },
        {
          id: 'proj-3',
          title: 'MySQL → Power BI Pipeline',
          description:
            'A Python script that pulls data from a MySQL database, processes it, and automatically refreshes a Power BI dashboard, removing manual report updates.',
        },
        {
          id: 'proj-4',
          title: 'Landing Page Redesign',
          description:
            'Homepage for a fictional real estate agency (Liz Imóveis) in plain HTML5 + CSS, no framework: focused on accessibility (keyboard navigation, screen readers) and responsiveness.',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      heading: "Let's talk",
      subheading: 'I reply quickly through the channels below.',
      items: [
        {
          id: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/vitor-martimiani-0ab245268',
        },
        { id: 'github', label: 'GitHub', href: 'https://github.com/vitormagalhaes2709-dotcom' },
      ],
    },
    weather: {
      title: 'Live weather',
      back: 'Back to portfolio',
      kicker: 'Live demo · Weather Alert Bot',
      location: 'São Paulo, BR',
      loading: 'Fetching data from Open-Meteo...',
      error: 'Could not load the weather right now.',
      retry: 'Try again',
      updatedAt: (time) => `Updated at ${time}`,
      today: 'Today',
      statsLabel: 'Current weather indicators',
      forecastHeading: 'Coming days',
      poweredBy: 'Data via',
      viewBotCode: 'View bot code on GitHub',
      conditions: {
        clear: 'Clear sky',
        'partly-cloudy': 'Partly cloudy',
        cloudy: 'Cloudy',
        fog: 'Fog',
        rain: 'Rain',
        storm: 'Thunderstorm',
        snow: 'Snow',
      },
      stats: {
        feelsLike: 'Feels like',
        humidity: 'Humidity',
        wind: 'Wind',
        rainChance: 'Rain chance',
        uvIndex: 'UV index',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
      },
    },
    pedidos: {
      title: 'Live orders',
      back: 'Back to portfolio',
      kicker: 'Live demo · MySQL → Power BI Pipeline',
      heading: 'Orders Dashboard',
      subheading: (start, end) =>
        `${start} — ${end} · 1,000 real orders processed by a Python pipeline (spreadsheet → MySQL → summaries), ready for Power BI.`,
      kpiLabel: 'Overall order indicators',
      kpis: {
        receitaTotal: 'Paid revenue',
        totalPedidos: 'Total orders',
        ticketMedio: 'Average ticket (paid)',
        taxaCancelamento: 'Cancellation rate',
      },
      charts: {
        receitaMensal: { title: 'Monthly revenue', subtitle: 'Sum of paid orders per month' },
        statusMensal: {
          title: 'Monthly order status',
          subtitle: 'Order volume: paid, pending and cancelled',
        },
        receitaCategoria: { title: 'Revenue by category', subtitle: 'Total paid, by product category' },
        receitaEstado: { title: 'Revenue by state', subtitle: 'Total paid, by state' },
        vendedor: { title: 'Sales rep performance', subtitle: 'Paid revenue and cancellation rate' },
      },
      table: { viewTable: 'View as table', viewChart: 'View chart' },
      columns: {
        mes: 'Month',
        categoria: 'Category',
        estado: 'State',
        vendedor: 'Sales rep',
        receita: 'Revenue',
        cancelamento: 'Cancellation',
      },
      poweredBy: 'Data generated by',
      viewCode: 'View pipeline code on GitHub',
    },
    lizImoveis: {
      back: 'Back to portfolio',
      demoNote:
        'Visual preview of the homepage — the form here is illustrative only; the working version (plain HTML/CSS/JS) is in the repository.',
      hero: {
        eyebrow: 'Curated high-end real estate',
        title: 'Find the home of your dreams',
        lead: 'Hand-picked houses and apartments, with consultative service from start to finish — from the first visit to the keys in your hand.',
      },
      listings: {
        eyebrow: 'Curated by our team',
        heading: 'Featured properties',
        items: [
          {
            badge: 'New release',
            price: '$3,450,000',
            title: 'Contemporary house — Jardim Europa',
            address: 'Rua das Palmeiras, 240 — São Paulo, SP',
            area: '320 m²',
            rooms: '4 bedrooms · 2 suites',
            extra: '3 parking spots',
            imageAlt: 'Modern house facade with night lighting, garden and pool',
          },
          {
            badge: 'New',
            price: '$1,890,000',
            title: 'Single-story house — Alto da Boa Vista',
            address: 'Alameda dos Ipês, 88 — São Paulo, SP',
            area: '180 m²',
            rooms: '3 bedrooms · 1 suite',
            extra: '2 parking spots',
            imageAlt: 'Modern single-story house with light facade and lit entrance',
          },
          {
            badge: 'Exclusive',
            price: '$8,200,000',
            title: 'Mediterranean villa — Oceanfront',
            address: 'Av. Beira-Mar, 1200 — Guarujá, SP',
            area: '510 m²',
            rooms: '5 suites',
            extra: 'Infinity pool',
            imageAlt: 'Villa with infinity pool and ocean view, Mediterranean style',
          },
        ],
      },
      plans: {
        eyebrow: 'Ready-to-build or remodel projects',
        heading: 'Available floor plans',
        items: [
          {
            title: 'Luxury Villa',
            spec: '440.40 m² · 3 suites · infinity pool',
            alt: 'Luxury Villa floor plan: integrated leisure area with pool, 3 suites and 440.40 m² total area',
          },
          {
            title: 'Compact Residence',
            spec: '125.30 m² · 3 bedrooms (1 suite) · gourmet area',
            alt: 'Floor plan with 3 bedrooms, integrated living/dining room and gourmet area, 125.30 m²',
          },
          {
            title: 'Modern House — 2 Floors',
            spec: '210.40 m² · 3 suites · office · pool',
            alt: 'Modern 2-floor house floor plan, with pool, 3 suites and office, 210.40 m²',
          },
          {
            title: 'Rustic Country House',
            spec: '165 m² · 1 suite + 2 bedrooms · 45 m² porch',
            alt: 'Rustic country house floor plan with wide porch, suite and 2 bedrooms, 165 m²',
          },
        ],
      },
      whyUs: {
        eyebrow: 'Why Liz Imóveis',
        heading: 'From the first click to the keys in your hand',
        items: [
          { title: 'Curated listings', description: 'Every property in the catalog goes through our own inspection before going live.' },
          { title: 'Consultative service', description: 'One dedicated agent from the first contact to the signed contract.' },
          { title: 'Hassle-free paperwork', description: 'We handle the legal and notary side — you just sign.' },
          { title: 'Easier financing', description: 'Partnerships with major banks to get your simulation approved faster.' },
        ],
      },
      cta: {
        heading: 'Want to hear about new listings first?',
        subheading: 'Leave your email — no spam, just properties that match what you’re looking for.',
        disabledNote: 'The working form is available in the real version of the project (link below).',
      },
      poweredBy: 'Study project by',
      viewCode: 'View code on GitHub',
    },
    footer: {
      rights: (year) => `© ${year} Vitor Martimiani. All rights reserved.`,
    },
  },

  es: {
    meta: {
      title: 'Vitor Martimiani | Portafolio',
    },
    nav: {
      links: {
        home: 'Inicio',
        about: 'Acerca',
        skills: 'Habilidades',
        certifications: 'Certificaciones',
        projects: 'Proyectos',
        contact: 'Contacto',
      },
    },
    hero: {
      kicker: 'Hola, soy',
      name: 'Vitor Martimiani',
      role: 'Desarrollador Full-Stack y Analista en Integraciones',
      tagline:
        'Transformo ideas en aplicaciones web e integraciones robustas, conectando plataformas y haciendo los procesos más ágiles y escalables.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Contactar',
      scrollHint: 'Desplázate para explorar',
    },
    services: {
      kicker: 'Lo que entrego',
      heading: 'Soluciones a medida, del full-stack a la integración',
      subheading:
        'Cada proyecto empieza por el problema de negocio — la tecnología se elige en función de él, no al revés.',
      items: [
        {
          id: 'web-apps',
          title: 'Aplicaciones Web',
          description:
            'Interfaces rápidas, accesibles y responsivas construidas con buenas prácticas de ingeniería front-end.',
        },
        {
          id: 'dashboards',
          title: 'Dashboards e Informes',
          description:
            'Paneles que transforman datos operativos en decisiones, con foco en rendimiento y claridad visual.',
        },
        {
          id: 'automation',
          title: 'Automatizaciones',
          description:
            'Flujos que eliminan trabajo manual repetitivo y reducen el error humano en procesos críticos.',
        },
        {
          id: 'systems',
          title: 'Sistemas Web',
          description:
            'Plataformas completas, desde el modelo de datos hasta la interfaz, pensadas para crecer con el negocio.',
        },
        {
          id: 'integrations',
          title: 'Integraciones y APIs',
          description:
            'Conexiones entre sistemas con foco en idempotencia, resiliencia y observabilidad.',
        },
      ],
    },
    skills: {
      kicker: 'Stack y Herramientas',
      heading: 'Tecnologías con las que trabajo',
      subheading:
        'Una selección de las herramientas que uso a diario — la lista crece según lo exija el proyecto.',
    },
    about: {
      kicker: 'Acerca de mí',
      heading: 'Sobre Mí',
      tagline: 'Tecnología, creatividad y evolución constante.',
      paragraphs: [
        'Soy un profesional apasionado por la tecnología y el desarrollo de software, actualmente cursando Ciencias de la Computación y trabajando con Salesforce Marketing Cloud. Me gusta transformar desafíos en soluciones prácticas, utilizando desarrollo web, automatización de procesos y análisis de datos para generar resultados.',
        'Mi trayectoria profesional comenzó en las áreas de atención al cliente y ventas, experiencia que fortaleció habilidades como comunicación, resolución de problemas y enfoque en el cliente. Hoy aplico ese conocimiento en la tecnología, desarrollando campañas, automatizaciones y soluciones digitales que combinan eficiencia y experiencia de usuario.',
        'Más que escribir código, me gusta crear soluciones que simplifican procesos, agregan valor a los negocios y ofrecen una mejor experiencia a las personas.',
        'Estoy en constante evolución, profundizando mis conocimientos en React, JavaScript, Python, Node.js, HTML, CSS, SQL, Salesforce Marketing Cloud y Power BI, siempre buscando aprender nuevas tecnologías y participar en proyectos desafiantes.',
        'Mi propósito es crecer como desarrollador, contribuir a equipos de alto rendimiento y construir soluciones modernas, escalables y de impacto.',
      ],
      highlights: [
        { icon: 'location', label: 'Brasil' },
        { icon: 'experience', label: '4 meses de experiencia' },
        { icon: 'focus', label: 'Salesforce Marketing Cloud' },
      ],
    },
    certifications: {
      kicker: 'Certificaciones',
      heading: 'Aprendizaje continuo',
      subheading: 'Cursos y trayectos de aprendizaje en Alura que sostienen mi práctica profesional.',
      filters: {
        all: 'Todas',
        javascript: 'JavaScript',
        python: 'Python',
        frontend: 'Front-end',
        react: 'React',
        powerbi: 'Power BI',
      },
      countLabel: (n) => `${n} certificacion${n === 1 ? '' : 'es'}`,
      viewCredential: 'Ver certificado',
      stats: {
        hoursLabel: (n) => `${n} horas`,
        certificatesLabel: (n) => `${n} certificado${n === 1 ? '' : 's'}`,
      },
      pagination: { prev: 'Anterior', next: 'Siguiente', page: (n) => `Página ${n}` },
      items: [
        { id: 'cert-1', title: 'JavaScript con Node.js: creando tu primera biblioteca' },
        { id: 'cert-2', title: 'Next.js: conoce el framework de React' },
        { id: 'cert-3', title: 'React: desarrollando con JavaScript' },
        { id: 'cert-4', title: 'Practicando Python: condicionales if, elif y else' },
        { id: 'cert-5', title: 'Practicando Python: bucles for y while' },
        { id: 'cert-6', title: 'Practicando Python: Strings y Regex' },
        { id: 'cert-7', title: 'Practicando Python: listas y tuplas' },
        { id: 'cert-8', title: 'Practicando Python: conjuntos y diccionarios' },
        { id: 'cert-9', title: 'Practicando Python: funciones' },
        { id: 'cert-10', title: 'Practicando Python: programación asíncrona' },
        { id: 'cert-11', title: 'Practicando Python: trabajando con proyectos' },
        { id: 'cert-12', title: 'Python: Inteligencia Artificial Aplicada' },
        { id: 'cert-13', title: 'HTML y CSS: diseño responsivo' },
        { id: 'cert-14', title: 'HTML y CSS: entornos de desarrollo y estructura de archivos' },
        { id: 'cert-15', title: 'JavaScript para la Web: crea páginas dinámicas' },
        { id: 'cert-16', title: 'JavaScript: tipos, variables y funciones' },
        { id: 'cert-17', title: 'HTML y CSS: clases, posicionamiento y flexbox' },
        { id: 'cert-18', title: 'Lógica de Programación: sumérgete en la programación con JavaScript' },
        { id: 'cert-19', title: 'JavaScript: conociendo los arrays' },
        { id: 'cert-20', title: 'Accesibilidad en HTML: escribiendo código semántico para la inclusión' },
        { id: 'cert-21', title: 'Aplicación de Power BI para la Mejora de la Gestión' },
      ],
    },
    projects: {
      kicker: 'Portafolio',
      heading: 'Proyectos seleccionados',
      subheading: 'Una muestra de lo construido — cada tarjeta incluye contexto, stack y enlaces.',
      filters: {
        all: 'Todos',
        web: 'Web',
        integration: 'Integración',
        automation: 'Automatización',
        uiux: 'UI/UX',
      },
      countLabel: (n) => `${n} proyecto${n === 1 ? '' : 's'}`,
      modal: {
        technologies: 'Tecnologías',
        viewProject: 'Ver proyecto',
        viewCode: 'Ver código en GitHub',
        watchVideo: 'Ver video',
        close: 'Cerrar',
        prev: 'Anterior',
        next: 'Siguiente',
      },
      items: [
        {
          id: 'proj-1',
          title: 'Portafolio Personal',
          description:
            'Este mismo sitio: una SPA en React con tema oscuro, contenido en tres idiomas y secciones para presentar mi trayectoria, habilidades y certificaciones.',
        },
        {
          id: 'proj-2',
          title: 'Bot de Alertas Climáticas',
          description:
            'Proyecto personal que integra una API pública de pronóstico del tiempo con un servicio de notificaciones: cuando las condiciones cambian, el sistema envía una alerta automática.',
        },
        {
          id: 'proj-3',
          title: 'Pipeline MySQL → Power BI',
          description:
            'Script en Python que extrae datos de una base MySQL, los procesa y actualiza automáticamente un dashboard en Power BI, eliminando la actualización manual de informes.',
        },
        {
          id: 'proj-4',
          title: 'Rediseño de Landing Page',
          description:
            'Home de una inmobiliaria ficticia (Liz Imóveis) en HTML5 + CSS puro, sin framework: enfocado en accesibilidad (navegación por teclado, lectores de pantalla) y responsividad.',
        },
      ],
    },
    contact: {
      kicker: 'Contacto',
      heading: 'Hablemos',
      subheading: 'Respondo rápido por los siguientes canales.',
      items: [
        {
          id: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/vitor-martimiani-0ab245268',
        },
        { id: 'github', label: 'GitHub', href: 'https://github.com/vitormagalhaes2709-dotcom' },
      ],
    },
    weather: {
      title: 'Clima en vivo',
      back: 'Volver al portafolio',
      kicker: 'Demostración en vivo · Bot de Alertas Climáticas',
      location: 'São Paulo, BR',
      loading: 'Consultando Open-Meteo...',
      error: 'No se pudo cargar el clima en este momento.',
      retry: 'Intentar de nuevo',
      updatedAt: (time) => `Actualizado a las ${time}`,
      today: 'Hoy',
      statsLabel: 'Indicadores climáticos actuales',
      forecastHeading: 'Próximos días',
      poweredBy: 'Datos vía',
      viewBotCode: 'Ver código del bot en GitHub',
      conditions: {
        clear: 'Cielo despejado',
        'partly-cloudy': 'Parcialmente nublado',
        cloudy: 'Nublado',
        fog: 'Niebla',
        rain: 'Lluvia',
        storm: 'Tormenta',
        snow: 'Nieve',
      },
      stats: {
        feelsLike: 'Sensación térmica',
        humidity: 'Humedad',
        wind: 'Viento',
        rainChance: 'Prob. de lluvia',
        uvIndex: 'Índice UV',
        sunrise: 'Amanecer',
        sunset: 'Atardecer',
      },
    },
    pedidos: {
      title: 'Pedidos en vivo',
      back: 'Volver al portafolio',
      kicker: 'Demostración en vivo · Pipeline MySQL → Power BI',
      heading: 'Panel de Pedidos',
      subheading: (inicio, fin) =>
        `${inicio} — ${fin} · 1000 pedidos reales procesados por un pipeline en Python (planilla → MySQL → resúmenes), listos para Power BI.`,
      kpiLabel: 'Indicadores generales de pedidos',
      kpis: {
        receitaTotal: 'Ingresos pagados',
        totalPedidos: 'Pedidos totales',
        ticketMedio: 'Ticket promedio (pagado)',
        taxaCancelamento: 'Tasa de cancelación',
      },
      charts: {
        receitaMensal: { title: 'Ingresos mensuales', subtitle: 'Suma de pedidos pagados por mes' },
        statusMensal: {
          title: 'Estado de los pedidos por mes',
          subtitle: 'Volumen de pedidos: pagado, pendiente y cancelado',
        },
        receitaCategoria: { title: 'Ingresos por categoría', subtitle: 'Total pagado, por categoría de producto' },
        receitaEstado: { title: 'Ingresos por estado', subtitle: 'Total pagado, por estado' },
        vendedor: { title: 'Desempeño por vendedor', subtitle: 'Ingresos pagados y tasa de cancelación' },
      },
      table: { viewTable: 'Ver como tabla', viewChart: 'Ver gráfico' },
      columns: {
        mes: 'Mes',
        categoria: 'Categoría',
        estado: 'Estado',
        vendedor: 'Vendedor',
        receita: 'Ingresos',
        cancelamento: 'Cancelación',
      },
      poweredBy: 'Datos generados por',
      viewCode: 'Ver código del pipeline en GitHub',
    },
    lizImoveis: {
      back: 'Volver al portafolio',
      demoNote:
        'Vista previa visual de la home — el formulario aquí es solo ilustrativo; la versión funcional (HTML/CSS/JS puro) está en el repositorio.',
      hero: {
        eyebrow: 'Curaduría de inmuebles de alto nivel',
        title: 'Encuentra el inmueble de tus sueños',
        lead: 'Casas y departamentos seleccionados a mano, con atención consultiva de principio a fin — desde la primera visita hasta la entrega de llaves.',
      },
      listings: {
        eyebrow: 'Seleccionados por nuestro equipo',
        heading: 'Inmuebles destacados',
        items: [
          {
            badge: 'Estreno',
            price: 'R$ 3.450.000',
            title: 'Casa contemporánea — Jardim Europa',
            address: 'Rua das Palmeiras, 240 — São Paulo, SP',
            area: '320 m²',
            rooms: '4 habitaciones · 2 suites',
            extra: '3 estacionamientos',
            imageAlt: 'Fachada de casa moderna con iluminación nocturna, jardín y piscina',
          },
          {
            badge: 'Nuevo',
            price: 'R$ 1.890.000',
            title: 'Casa de un piso — Alto da Boa Vista',
            address: 'Alameda dos Ipês, 88 — São Paulo, SP',
            area: '180 m²',
            rooms: '3 habitaciones · 1 suite',
            extra: '2 estacionamientos',
            imageAlt: 'Casa moderna de un piso con fachada clara y entrada iluminada',
          },
          {
            badge: 'Exclusivo',
            price: 'R$ 8.200.000',
            title: 'Villa mediterránea — Frente al mar',
            address: 'Av. Beira-Mar, 1200 — Guarujá, SP',
            area: '510 m²',
            rooms: '5 suites',
            extra: 'Piscina infinita',
            imageAlt: 'Villa con piscina infinita y vista al mar, estilo mediterráneo',
          },
        ],
      },
      plans: {
        eyebrow: 'Proyectos listos para construir o remodelar',
        heading: 'Planos disponibles',
        items: [
          {
            title: 'Villa de Lujo',
            spec: '440,40 m² · 3 suites · piscina infinita',
            alt: 'Plano de la Villa de Lujo: área de ocio integrada con piscina, 3 suites y área total de 440,40 m²',
          },
          {
            title: 'Residencial Compacto',
            spec: '125,30 m² · 3 habitaciones (1 suite) · área gourmet',
            alt: 'Plano con 3 habitaciones, sala y comedor integrados y área gourmet, 125,30 m²',
          },
          {
            title: 'Casa Moderna — 2 Pisos',
            spec: '210,40 m² · 3 suites · oficina · piscina',
            alt: 'Plano de casa moderna de 2 pisos, con piscina, 3 suites y oficina, 210,40 m²',
          },
          {
            title: 'Casa de Campo Rústica',
            spec: '165 m² · 1 suite + 2 habitaciones · porche de 45 m²',
            alt: 'Plano de casa de campo rústica con porche amplio, suite y 2 habitaciones, 165 m²',
          },
        ],
      },
      whyUs: {
        eyebrow: 'Por qué Liz Imóveis',
        heading: 'Del primer clic a la entrega de llaves',
        items: [
          { title: 'Curaduría seleccionada', description: 'Cada inmueble del catálogo pasa por una inspección propia antes de publicarse.' },
          { title: 'Atención consultiva', description: 'Un agente dedicado desde el primer contacto hasta la firma del contrato.' },
          { title: 'Trámites sin dolores de cabeza', description: 'Nos encargamos de lo legal y notarial — usted solo firma.' },
          { title: 'Financiamiento facilitado', description: 'Alianzas con los principales bancos para aprobar tu simulación más rápido.' },
        ],
      },
      cta: {
        heading: '¿Quieres enterarte primero de los nuevos lanzamientos?',
        subheading: 'Déjanos tu correo — sin spam, solo inmuebles que combinan con lo que buscas.',
        disabledNote: 'El formulario funcional está disponible en la versión real del proyecto (enlace abajo).',
      },
      poweredBy: 'Proyecto de estudio por',
      viewCode: 'Ver código en GitHub',
    },
    footer: {
      rights: (year) => `© ${year} Vitor Martimiani. Todos los derechos reservados.`,
    },
  },
};

export const SUPPORTED_LANGUAGES = ['pt', 'en', 'es'];
export const DEFAULT_LANGUAGE = 'pt';
