/**
 * Tipo estrutural da tradução (sem literais)
 */
export type Translation = {
  nav: {
    home: string;
    about: string;
    projects: string;
    trajectory: string;
    contact: string;
  };
  about: {
    aboutMe: string;
  }
  contact: {
    contacts: string;
    letsTalk: string;
    contactMeHere: string;
    name: string;
    writeYourName: string;
    lastName: string;
    writeYourLastName: string;
    email: string;
    subject: string;
    message: string;
    writeYourMessage: string;
    send: string;
    contactInformation: string;
    contactInformationText: string;
  }
  footer: {
    developedBy: string;
    backToTop: string;
  }
  trajectory: {
    technologiesSkills: string;
    techsIDailyUse: string;
    otherTechs: string;
    journeySoFar: string;
  }
  worksProjects: {
    projects: string;
    worksAndProjects: string;
    seeMoreProjectsOnGithub: string;
  }
  user: {
    works: readonly string[];
    location: {
      state: string;
      country: string;
    };
    descriptions: readonly string[];
    specializes: {
      developer: string;
      work: string;
      design: string;
    };
    timeSpecializes: {
      [key in "developer" | "experiences" | "UI&UX"]: {
        specialize: string;
        variante: string;
      };
    };
    worksProjects: {
      [key in
        | "Portal Leadtax"
        | "Beecare"
        | "UltraCar"
        | "Plante uma Árvore"
        | "CatalogoApp"
        | "UniComunica"]: {
        name: string;
        description: string;
      };
    };
    contactInfo: {
      [key in "email" | "phone" | "location"]: string;
    };
    areas: {
      professional: {
        name: string;
        dateFormated: string;
        history: {
          [key in
            | "Desenvolvedor Full Stack na Leadtax"
            | "Desenvolvedor React Trainee na Supliu"
            | "Desenvolvedor Front-End no Patos Hoje"]: {
            title: string;
            description: string;
            dateFormated: string;
          };
        };
      };
      academic: {
        name: string;
        dateFormated: string;
        history: {
          [key in
            | "Ciência da Computação"
            | "Desenvolvedor Full Stack"
            | "Fundamentos AWS Cloud"]: {
            title: string;
            description: string;
            dateFormated: string;
          };
        };
      };
    };
  };
  others: {
    year: string;
    years: string;
    minusThanAMonth: string;
    month: string;
    months: string;
    of: string;
    as: string;
  }
};

export const translations: Record<"pt" | "en", Translation> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      trajectory: "Trajetória",
      contact: "Contate-me",
    },
    about: {
      aboutMe: "Sobre mim",
    },
    others: {
      year: "ano",
      years: "anos",
      minusThanAMonth: "Menos de um mês",
      month: "mês",
      months: "meses",
      as: "como",
      of: "de",
    },
    worksProjects: {
      projects: "Projetos",
      worksAndProjects: "Trabalhos e projetos",
      seeMoreProjectsOnGithub: "Ver mais projetos no github",
    },
    trajectory: {
      technologiesSkills: "Tecnologias e Habilidades",
      techsIDailyUse: "Techs que uso no dia a dia",
      otherTechs: "Outras techs com que já realizei projetos",
      journeySoFar: "Trajetória até aqui",
    },
    footer: {
      developedBy: "Desenvolvido por Lucas Oliveira",
      backToTop: "Voltar ao topo",
    },
    contact: {
      contacts: "Contatos",
      letsTalk: "Vamos conversar?",
      contactMeHere: "Entre em contato comigo",
      name: "Nome",
      writeYourName: "Digite seu nome",
      lastName: "Sobrenome",
      writeYourLastName: "Digite seu sobrenome",
      email: "E-mail",
      subject: "Assunto",
      message: "Mensagem",
      writeYourMessage: "Digite sua mensagem",
      send: "Enviar",
      contactInformation: "Informações de Contato",
      contactInformationText: "Se você apreciou o meu trabalho e está buscando um profissional comprometido e apaixonado para colaborar em projetos inovadores, estou à disposição para discutir como posso contribuir para o seu próximo desafio. Com anos de experiência no desenvolvimento de soluções criativas e eficazes, estou pronto para ajudá-lo a atingir seus objetivos.",
    },
    user: {
      works: [
        "Desenvolvedor Full Stack...",
        "Designer UI & UX...",
        "Engenheiro de DevOps...",
      ],
      location: {
        state: "MG",
        country: "Brasil",
      },
      descriptions: [
        `Olá! Me chamo Lucas Oliveira, um entusiasta do desenvolvimento Front-End, 
        apaixonado por transformar ideias em experiências digitais cativantes.`,
        `Estou comprometido em criar soluções web inovadoras e acessíveis, 
        transformando visões em realidade digital. Se você está procurando por um desenvolvedor Front-End dedicado, 
        versátil e apaixonado, estou aqui para trazer sua visão à vida. Vamos colaborar e construir algo incrível juntos!`,
      ],
      specializes: {
        developer: "Desenvolvedor",
        work: "Trabalho",
        design: "Designer",
      },
      timeSpecializes: {
        developer: {
          specialize: "Desenvolvedor",
          variante: "Full-Stack",
        },
        experiences: {
          specialize: "Dezenas de projetos e",
          variante: "Experiências",
        },
        "UI&UX": {
          specialize: "Designer Freelancer e",
          variante: "Designer",
        },
      },
      worksProjects: {
        "Portal Leadtax": {
          name: "Portal Leadtax",
          description: "Portal de automações financeiras e gestão de clientes.",
        },
        Beecare: {
          name: "Beecare",
          description:
            "Este é um projeto no qual eu fiquei responsável em desenvolver soluções completa para integração entre prestadores e operadoras de saúde.",
        },
        UltraCar: {
          name: "UltraCar",
          description:
            "Landing page feita para a futura empresa de aplicativo de corridas ultra car, para cidade de Patos de Minas.",
        },
        "Plante uma Árvore": {
          name: "Plante uma Árvore",
          description:
            "Plante uma árvore e contribua com a natureza. É rápido e fácil! Com apenas alguns cliques, você já estará ajudando o meio ambiente.",
        },
        CatalogoApp: {
          name: "CatalogoApp",
          description:
            "Projeto desenvolvido de forma híbrida, utilizando react native, nele você pode criar sua loja virtual, e personalizar ela para que fique profissional e a cara do seu negocio. (Projeto da @SupliuTech)",
        },
        UniComunica: {
          name: "UniComunica",
          description:
            "Portal de notícias moderno, desenvolvido em Next visando o SEO, e a qualidade do software, utilizando libs de estilos minimalistas e modernas, com o back end feito em apollo server para consumo em graphql em um banco de dados mongoDB",
        },
      },
      contactInfo: {
        email: "Email: lucasrazebra@gmail.com",
        phone: "Telefone: +55 34 99212-9901",
        location: "Endereço: Bairro Cristo Redentor, Rua Paraíba, nº 143",
      },
      areas: {
        professional: {
          name: "Área Profissional",
          dateFormated: "2022 · Atualmente",
          history: {
            "Desenvolvedor Full Stack na Leadtax": {
              title: "Desenvolvedor Full Stack na Leadtax",
              description:
                "Desenvolvimento de sistemas front end em react typescript, back end utilizando Laravel PHP e UI & UX designer, arquitetura em Cloud na AWS.",
              dateFormated: "Janeiro/2024 · Atualmente",
            },
            "Desenvolvedor React Trainee na Supliu": {
              title: "Desenvolvedor React Trainee na Supliu",
              description:
                "Desenvolvimento de sistemas em React e React Native, criando novas features e ferramentas.",
              dateFormated: "Agosto/2023 · Janeiro/2024",
            },
            "Desenvolvedor Front-End no Patos Hoje": {
              title: "Desenvolvedor Front-End no Patos Hoje",
              description:
                "Colocar em prática, através de códigos, projetar o visual do site responsivo, otimização e correção de bugs, melhorar a usabilidade, utilizando as tecnologias: HTML, CSS, JavaScript e Vue.js.",
              dateFormated: "Novembro/2022 · Atualmente",
            },
          },
        },
        academic: {
          name: "Área Acadêmica",
          dateFormated: "2021 · Atualmente",
          history: {
            "Ciência da Computação": {
              title: "Ciência da Computação - FAM",
              description:
                "Conhecer todas as áreas da computação, aprender novas tecnologias, aprender novos conceitos.",
              dateFormated: "Janeiro/2023 · Atualmente",
            },
            "Desenvolvedor Full Stack": {
              title: "Desenvolvedor Full Stack - OnebitCode",
              description:
                "Aprender do zero a programar ao avançado, novas técnicas, tecnologias, bibliotecas. Com uma metodologia de ensino voltada para o que as empresas precisam.",
              dateFormated: "Março/2022 · Maio/2024",
            },
            "Fundamentos AWS Cloud": {
              title: "Fundamentos AWS Cloud - Escola da Nuvem",
              description:
                "O AWS Fundamentos da Escola da Nuvem é um programa rápido e de curta duração, com o principal objetivo de introduzir os principais conceitos e serviços da nuvem AWS.",
              dateFormated: "Abril/2023 · Julho/2023",
            },
          },
        },
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      trajectory: "Trajectory",
      contact: "Contact",
    },
    others: {
      year: "year",
      years: "years",
      minusThanAMonth: "Less than a month",
      month: "month",
      months: "months",
      as: "as",
      of: "of",
    },
    about: {
      aboutMe: "About me",
    },
    worksProjects: {
      projects: "Projects",
      worksAndProjects: "Works and Projects",
      seeMoreProjectsOnGithub: "See more projects on github",
    },
    trajectory: {
      technologiesSkills: "Technologies and Skills",
      techsIDailyUse: "Techs I use daily",
      otherTechs: "Other techs I've worked with",
      journeySoFar: "Journey so far",
    },
    footer: {
      developedBy: "Developed by Lucas Oliveira",
      backToTop: "Back to top",
    },
    contact: {
      contacts: "Contacts",
      letsTalk: "Let's talk?",
      contactMeHere: "Get in touch with me",
      name: "First name",
      writeYourName: "Enter your first name",
      lastName: "Last name",
      writeYourLastName: "Enter your last name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      writeYourMessage: "Enter your message",
      send: "Send",
      contactInformation: "Contact Information",
      contactInformationText:
        "If you enjoyed my work and are looking for a committed and passionate professional to collaborate on innovative projects, I would be happy to discuss how I can contribute to your next challenge. With years of experience developing creative and effective solutions, I am ready to help you achieve your goals.",
    },
    user: {
      works: [
        "Full Stack Developer...",
        "UI/UX Designer...",
        "DevOps Engineer...",
      ],
      location: {
        state: "MG",
        country: "Brazil",
      },
      descriptions: [
        `Hello! My name is Lucas Oliveira, a Front-End development enthusiast,
        passionate about transforming ideas into captivating digital experiences.`,
        `I am committed to creating innovative and accessible web solutions,
        transforming visions into digital reality. If you are looking for a dedicated,
        versatile and passionate Front-End developer, I am here to bring your vision to life. Let's collaborate and build something amazing together!`,
      ],
      specializes: {
        developer: "Developer",
        work: "Work",
        design: "Design",
      },
      timeSpecializes: {
        developer: {
          specialize: "Developer",
          variante: "Full-Stack",
        },
        experiences: {
          specialize: "Hundreds of projects and",
          variante: "Experiences",
        },
        "UI&UX": {
          specialize: "Freelancer UI/UX Designer and",
          variante: "Designer",
        },
      },
      worksProjects: {
        "Portal Leadtax": {
          name: "Leadtax Portal",
          description:
            "Portal for financial automation and customer management.",
        },
        Beecare: {
          name: "Beecare",
          description:
            "This is a project in which I was responsible for developing complete solutions for integration between healthcare providers and health insurance companies.",
        },
        UltraCar: {
          name: "UltraCar",
          description:
            "Landing page created for the future ride-hailing app company Ultra Car, for the city of Patos de Minas.",
        },
        "Plante uma Árvore": {
          name: "Plant a Tree",
          description:
            "Plant a tree and contribute to nature. It's quick and easy! With just a few clicks, you'll already be helping the environment.",
        },
        CatalogoApp: {
          name: "CatalogoApp",
          description:
            "This project was developed using a hybrid approach, utilizing React Native. It allows you to create and customize your online store to look professional and reflect your business. (Project by @SupliuTech)",
        },
        UniComunica: {
          name: "UniComunica",
          description:
            "A modern news portal, developed in Next with SEO in mind, and focused on software quality, using minimalist and modern style libraries, with the back end built on Apollo Server for consumption in GraphQL on a MongoDB database.",
        },
      },
      contactInfo: {
        email: "Email: lucasrazebra@gmail.com",
        phone: "Phone: +55 34 99212-9901",
        location:
          "Location: Neighborhood Cristo Redentor, Street Paraíba, nº 143",
      },
      areas: {
        professional: {
          name: "Professional Experience",
          dateFormated: "2022 · Present",
          history: {
            "Desenvolvedor Full Stack na Leadtax": {
              title: "Full Stack Developer at Leadtax",
              description:
                "Development of front-end systems using React and TypeScript, back-end development with Laravel (PHP), UI & UX design, and cloud architecture on AWS.",
              dateFormated: "January/2024 · Present",
            },
            "Desenvolvedor React Trainee na Supliu": {
              title: "React Trainee Developer at Supliu",
              description:
                "Development of systems using React and React Native, creating new features and tools.",
              dateFormated: "August/2023 · January/2024",
            },
            "Desenvolvedor Front-End no Patos Hoje": {
              title: "Front-End Developer at Patos Hoje",
              description:
                "Implementation of responsive website interfaces through code, visual design, optimization and bug fixing, usability improvements, using technologies such as HTML, CSS, JavaScript, and Vue.js.",
              dateFormated: "November/2022 · Present",
            },
          },
        },
        academic: {
          name: "Academic Experience",
          dateFormated: "2021 · Present",
          history: {
            "Ciência da Computação": {
              title: "Computer Science – FAM",
              description:
                "Comprehensive study of computer science fields, learning new technologies and core computing concepts.",
              dateFormated: "January/2023 · Present",
            },
            "Desenvolvedor Full Stack": {
              title: "Full Stack Developer – OneBitCode",
              description:
                "From beginner to advanced programming, learning new techniques, technologies, and libraries, using a teaching methodology aligned with real market demands.",
              dateFormated: "March/2022 · May/2024",
            },
            "Fundamentos AWS Cloud": {
              title: "AWS Cloud Fundamentals – Escola da Nuvem",
              description:
                "A fast-paced, short-term program designed to introduce core AWS cloud concepts and services.",
              dateFormated: "April/2023 · July/2023",
            },
          },
        },
      },
    },
  },
} as const;

export type Language = keyof typeof translations;
