import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'damasiocipriano425@gmail.com',
    phone: '+244 944 026 729',
    phone2: '+244 952 160 514',

    emailSubject: 'Proposta de Colaboração Profissional',
    emailBody: 'Caro Damásio Caliqui, contacto-o com o intuito de...',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/dcaliqui' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/dam%C3%A1sio-caliqui-0b570631a/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'HTML',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS',
            icon: '/logo/css.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
    ],
    backend: [
        {
            name: 'C',
            icon: '/logo/c.svg',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.svg',
        },
        {
            name: 'C#',
            icon: '/logo/csharp.svg',
        },
        {
            name: 'Spring Boot',
            icon: '/logo/spring-boot.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Controlo da Malária',
        slug: 'controlo-malaria',
        year: 2025,
        description: `A aplicação MapaZZZ destina-se ao controlo e à monitorização em tempo real da malária em comunidades vulneráveis. Constituiu o projecto vencedor do hackathon interno da Escola 42 Luanda. A plataforma viabiliza a denúncia de zonas de risco, a receção de notificações inteligentes e o acompanhamento de campanhas de prevenção.
      <br/> <br/>
      <ul>
        <li>Mapa interativo com a localização de focos de risco</li>
        <li>Sistema de pontuação e de prémios para utilizadores ativos</li>
        <li>Notificações inteligentes relativas a novos focos de risco nas imediações</li>
        <li>Relatórios comunitários e medidas de prevenção proativas</li>
        <li>Reconhecimento, por parte do júri, como o melhor projecto</li>
      </ul>`,
        role: `Programador Mobile e membro da equipa vencedora.`,
        techStack: ['Flutter', 'Firebase', 'Dart', 'Google Maps API'],
        thumbnail: '/projects/images/mapazzz.png',
        longThumbnail: '/projects/images/mapazzz.png',
        images: [
            '/projects/images/mapazzz.png',
            '/projects/images/mapazz2.png',
            '/projects/images/mapazzz3.png',
        ],
        liveUrl: 'https://mapa-zzz-team-83bq43p0i-miros-projects-c74f19f1.vercel.app/',
    },
    {
        title: 'Sistema Web para Igrejas',
        slug: 'sistema-igrejas',
        year: 2026,
        description: `Plataforma web concebida para a publicação e a gestão de atividades eclesiásticas, munida de um painel de administração e de uma interface responsiva.
      <br/> <br/>
      <ul>
        <li>Gestão de eventos, de avisos e de atividades paroquiais</li>
        <li>Interface responsiva com painel de controlo administrativo</li>
      </ul>`,
        role: `Programador Full-Stack (Projecto Pessoal).`,
        techStack: ['Next.js (App Router)', 'Frontend', 'Backend'],
        thumbnail: '/projects/images/claris1.png',
        longThumbnail: '/projects/images/claris1.png',
        images: ['/projects/images/claris1.png', '/projects/images/claris2.png', '/projects/images/claris3.png'],
    },
    {
        title: 'Projecto Inception - Docker',
        slug: 'projecto-inception',
        year: 2026,
                description: `Configuração integral de infraestruturas com recurso ao Docker e ao Docker Compose, com vista ao estabelecimento de um ambiente multi-serviço.
            <br/> <br/>
            <div class="my-6 text-center">
                <img src="/projects/images/inception.png" alt="Inception" style="max-width:100%;height:auto;" />
            </div>
            <br/>
            <ul>
                <li>Contentores para NGINX, WordPress e MariaDB</li>
                <li>Configuração de redes e de volumes em ambiente Docker</li>
                <li>Ambiente orquestrado através do Docker Compose</li>
            </ul>`,
        role: `Administrador de Sistemas / DevOps.`,
        techStack: ['Docker', 'Docker Compose', 'NGINX', 'WordPress', 'MariaDB'],
                thumbnail: '/projects/images/inception.png',
                longThumbnail: '/projects/images/inception.png',
                images: ['/projects/images/inception.png'],
    },
    {
        title: 'Minishell',
        slug: 'minishell',
        year: 2025,
        description: `O Minishell é um projecto desenvolvido no âmbito da Escola 42, focado na criação de um interpretador de comandos simples, inspirado no Bash. O projecto permite aprofundar os conhecimentos sobre processos, descritores de ficheiros e execução de comandos no sistema operativo Unix.
      <br/> <br/>
      <ul>
        <li>Implementação de um interpretador de comandos (shell) em C</li>
        <li>Gestão avançada de processos e de sinais (signals)</li>
        <li>Implementação de redirecionamentos (>, <, >>, <<) e pipes (|)</li>
        <li>Gestão de variáveis de ambiente e comandos internos (built-ins)</li>
      </ul>`,
        role: `Desenvolvedor C (Projecto Escola 42).`,
        techStack: ['C', 'Shell', 'Unix/Linux'],
        thumbnail: '/projects/images/minishell.png',
        longThumbnail: '/projects/images/minishell.png',
        images: ['/projects/images/minishell.png'],
    },
    {
        title: 'NetPractice',
        slug: 'netpractice',
        year: 2025,
        description: `Projecto da Escola 42 focado na aprendizagem de redes TCP/IP. O projecto consiste em configurar diferentes topologias de rede e resolver problemas de configuração de endereços IP, máscara de rede, routing e protocolos de rede.
      <br/> <br/>
      <ul>
        <li>Configuração e análise de redes TCP/IP</li>
        <li>Compreensão de endereços IP e máscaras de rede</li>
        <li>Implementação de routing e switches</li>
        <li>Resolução de problemas de conectividade de rede</li>
        <li>Domínio de conceitos fundamentais de redes</li>
      </ul>`,
        role: `Estudante de Redes (Projecto Escola 42).`,
        techStack: ['Networking', 'TCP/IP', 'Routing'],
        thumbnail: '/projects/images/netPractice.png',
        longThumbnail: '/projects/images/netPractice.png',
        images: ['/projects/images/netPractice.png'],
        },
        {
                title: 'Concurso Mirantes',
                slug: 'concurso-mirantes-codespace',
                year: 2025,
                description: `Participei no concurso da Mirantes com o grupo Codespace. O projecto destacou-se pela apresentação e pela qualidade da proposta, garantindo o 9.º lugar e o prémio de melhor pitch.
            <br/> <br/>
            <ul>
                <li>Participação em equipa no grupo Codespace</li>
                <li>9.º lugar na classificação final</li>
                <li>Prémio de melhor pitch</li>
                <li>Apresentação de startup com foco em comunicação e impacto</li>
            </ul>`,
                role: `Membro da equipa Codespace e orador na apresentação.`,
                techStack: ['Pitch', 'Startup', 'Teamwork'],
                thumbnail: '/projects/images/Startup2.png',
                longThumbnail: '/projects/images/Startup2.png',
                images: [
                        '/projects/images/Startup2.png',
                        '/projects/images/pitch.jpeg',
                        '/projects/images/pitch2.jpeg',
                ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Estudante de Programação (Tronco comum concluído na íntegra)',
        company: 'Escola 42 Luanda',
        duration: 'Concluído',
    },
    {
        title: 'Formação em Informática de Gestão',
        company: 'IMEL',
        duration: 'Concluído',
    },
];
