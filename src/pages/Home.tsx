import Box from '@mui/material/Box';
import BasicSpeedDial from '../components/ButtonFloat/Index';
import Presentation from '../components/Presentation/Index';
import About from '../components/About/Index';
import BannerInfo from '../components/BannerInfo/Index';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import BrushIcon from '@mui/icons-material/Brush';
import GitHubIcon from '@mui/icons-material/GitHub';
import { User } from '../types';
import LanguageIcon from '@mui/icons-material/Language';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import WorksProjects from '../components/WorksProjects/Index';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';

// imgs
import portfolioV3img from "/images/portfoliov3.png";
import puaimg from "/images/pua.png";
import tw4img from "/images/tw4.png";
import pokedeximg from "/images/pokedex.png";
import catologoApp from "/images/catalogoapp.png";
import unicomunica from "/images/unicomunica.png";

import awsImg from "/images/techs/Aws.png";
import cssImg from "/images/techs/Css.png";
import figmaImg from "/images/techs/Figma.png";
import gitImg from "/images/techs/Git.png";
import githubImg from "/images/techs/Github.png";
import htmlImg from "/images/techs/Html.png";
import jsImg from  "/images/techs/Javascript.png";
import mongodbImg from "/images/techs/MongoDb.png";
import nodeImg from "/images/techs/Nodejs.png";
import reactImg from "/images/techs/React.png";
import sassImg from "/images/techs/Sass.png";
import typescriptImg from "/images/techs/Typescript.png";
import vueImg from "/images/techs/Vue.png";
import reactNativeImg from "/images/techs/ReactNative.png"
import mysqlLogo from "/images/techs/MySQL.png"
import Techs from '../components/Techs/Index';
import Contact from '../components/Contact/Index';
import { LinkedIn, WhatsApp } from '@mui/icons-material';
import Traject from '../components/Traject/Index';
import Footer from '../components/Footer/Index';
import Header from '../components/Header';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';


const propsIcon = {
    color: "#EE7070",
    height: "3.125rem",
    width: "3.125rem"
}

const propsIcon2 = {
    color: "#EE7070",
    height: "1.25rem",
    width: "1.25rem"
}

const data: User = {
    name: "Lucas Henrique Oliveira de Amorim",
    username: 'Lucas Oliveira',
    birthday: new Date('2004-03-24'),
    email: "lucasrazebra@gmail.com",
    works: [
        "Desenvolvedor Front End...",
        "Designer UI & UX..."
    ],
    location: {
        state: "MG",
        country: "Brasil",
    },
    descriptions: [`Olá! Me chamo Lucas Oliveira, um entusiasta do desenvolvimento Front-End, 
    apaixonado por transformar ideias em experiências digitais cativantes.`,
    `Estou comprometido em criar soluções web inovadoras e acessíveis, 
    transformando visões em realidade digital. Se você está procurando por um desenvolvedor Front-End dedicado, 
    versátil e apaixonado, estou aqui para trazer sua visão à vida. Vamos colaborar e construir algo incrível juntos!`],
    specializes: [
        {   
            id: 1,
            icon: <CodeIcon sx={propsIcon}/>,
            time: new Date('2021-09-30'),
            specialize: "Desenvolvedor",
            variante: "1",
        },
        {
            id: 2,
            icon: <WorkIcon sx={propsIcon}/>,
            time: new Date('2022-09-01'),
            specialize: "Trabalho",
            variante: "2",
        }, 
        {
            id: 3,
            icon: <BrushIcon sx={propsIcon}/>,
            time: new Date('2022-09-01'),
            specialize: "Designer",
            variante: "1",
        }
    ],
    timeSpecializes: [
        {
            id: 1,
            specialize: "Desenvolvedor",
            variante: "Front-end"
        },
        {
            id: 2,
            specialize: "Dezenas de projetos e",
            variante: "Experiências"
        },
        {
            id: 3,
            specialize: "Designer Freelancer e",
            variante: "UI . UX"
        },
    ],
    worksProjects: [
        {
            id: 2,
            name: "Plante uma Árvore",
            description: "Plante uma árvore e contribua com a natureza. É rápido e fácil! Com apenas alguns cliques, você já estará ajudando o meio ambiente.",
            technologies: ["React JS", "Css"],
            links: [
                {
                    id: 1,
                    type: "WebSite",
                    link: "https://planteumaarvoreoficial.com.br",
                    icon: <LanguageIcon sx={propsIcon2}/>
                }
            ],
            img: puaimg
        },
        {
            id: 6,
            name: "CatalogoApp",
            description: "Projeto desenvolvido de forma híbrida, utilizando react native, nele você pode criar sua loja virtual, e personalizar ela para que fique profissional e a cara do seu negocio. (Projeto da @SupliuTech)",
            technologies: ["React Native", "GraphQl", "Typescript"],
            links: [
                {
                    id: 1,
                    type: "WebSite",
                    link: "https://web.catalogoapp.mobi",
                    icon: <LanguageIcon sx={propsIcon2}/>
                },
                {
                    id: 2,
                    type: "Play Store",
                    link: "https://play.google.com/store/apps/details?id=mobi.catalogoapp&hl=pt_BR&gl=US&pli=1",
                    icon: <PlayArrowIcon sx={propsIcon2}/>
                },
                {
                    id: 3,
                    type: "App Store",
                    link: "https://apps.apple.com/br/app/catálogo-app/id1541545374",
                    icon: <AppleIcon sx={propsIcon2}/>
                },

            ],
            img: catologoApp
        },
        {
            id: 5,
            name: "UniComunica",
            description: "Portal de notícias moderno, desenvolvido em Next visando o SEO, e a qualidade do software, utilizando libs de estilos minimalistas e modernas, com o back end feito em apollo server para consumo em graphql em um banco de dados mongoDB",
            technologies: ["Next.js", "MongoDB", "GraphQl", "Node.js"],
            links: [
                {
                    id: 1,
                    type: "WebSite",
                    link: "https://webapp-chi-one.vercel.app",
                    icon: <LanguageIcon sx={propsIcon2}/>
                }
            ],
            img: unicomunica
        },
        {
            id: 1,
            name: "Portfolio V3",
            description: "Portfolio pensado e criado por mim, passando pelo figma e utilizando as tecnicas de UI e UX. E desenvolvido em React + Typescript.",
            technologies: ["React JS", "Typescript", "Figma", "Node.js"],
            links: [
                {
                    id: 1,
                    type: "GitHub",
                    link: "https://github.com/Lucas-Jav/PortfolioV3",
                    icon: <GitHubIcon sx={propsIcon2}/>
                }, {
                    id: 2,
                    type: "WebSite",
                    link: "https://lucas-jav.github.io/PortfolioV3/",
                    icon: <LanguageIcon sx={propsIcon2}/>
                },
                {
                    id: 3,
                    type: "Figma",
                    link: "https://www.figma.com/community/file/1290820055556325949/portfolio",
                    icon: <ArchitectureIcon sx={propsIcon2}/>
                }
            ],
            img: portfolioV3img
        },
        {
            id: 3,
            name: "TW4 Tcc",
            description: "Este é um projeto no qual eu fiquei responsável em desenvolver para o meu grupo do tcc da Escola da Nuvem, do curso Fundamentos AWS Cloud.",
            technologies: ["Html", "Css", "JavaScript"],
            links: [
                {
                    id: 1,
                    type: "GitHub",
                    link: "https://github.com/Lucas-Jav/tccgp4",
                    icon: <GitHubIcon sx={propsIcon2}/>
                }, 
                {
                    id: 2,
                    type: "WebSite",
                    link: "https://tccgp4.vercel.app/",
                    icon: <LanguageIcon sx={propsIcon2}/>
                }
            ],
            img: tw4img
        },
        {
            id: 4,
            name: "Pokedex",
            description: "Pokedex desenvolvida utilizando a API pokeApiV2, neste projeto você pode buscar por pokemons, e ver suas informações!",
            technologies: ["Html", "Scss", "JavaScript"],
            links: [
                {
                    id: 1,
                    type: "GitHub",
                    link: "https://github.com/Lucas-Jav/Pokedex-API",
                    icon: <GitHubIcon sx={propsIcon2}/>
                }, {
                    id: 2,
                    type: "WebSite",
                    link: "https://pokedexweb23.netlify.app/",
                    icon: <LanguageIcon sx={propsIcon2}/>
                }
            ],
            img: pokedeximg
        },
    ],
    techsAll: {
        techsUseToday: [
            reactImg,
            awsImg,
            typescriptImg,
            jsImg,
            cssImg,
            figmaImg,
            gitImg,
            githubImg,
            mysqlLogo
        ],
        techsUtils: [
            nodeImg,
            sassImg,
            reactNativeImg,
            mongodbImg,
            vueImg,
            htmlImg
        ]
    },
    contactInfo: [
        {
            icon: <HomeIcon sx={{fontSize: 20}}/>,
            text: "Endereço: Bairro Cristo Redentor, Rua Paraíba, nº 143"
        },
        {
            icon: <EmailIcon sx={{fontSize: 20}}/>,
            text: `Email: lucasrazebra@gmail.com`
        },
        {
            icon: <PhoneAndroidIcon sx={{fontSize: 20}}/>,
            text: "Telefone: +55 34 99212-9901"
        }
    ],
    linksSocialMedias: [
        {
            id: 1,
            type: "Lucas-Jav",
            link: "https://github.com/Lucas-Jav",
            icon: <GitHubIcon sx={{fontSize: 20}}/>
        },
        {
            id: 2,
            type: "oliveiradilucas",
            link: "https://www.linkedin.com/in/oliveiradilucas/",
            icon: <LinkedIn sx={{fontSize: 20}}/>
        },
        {
            id: 3,
            type: "Whatsapp",
            link: "https://api.whatsapp.com/send/?phone=5534992129901&text=Ol%C3%A1+Lucas%2C+vim+pelo+seu+trabalho+de+desenvolvedor%21&type=phone_number&app_absent=0",
            icon: <WhatsApp sx={{fontSize: 20}}/>
        }
    ],
    professionalArea: [
        {
            name: "Área profisional",
            dateFormated: "2022 · Atualmente",
            history: [
                {
                    title: "Desenvolvedor Front End na Leadtax",
                    description: "Desenvolvimento de sistemas Front End e UI & UX designer, arquitetura em Cloud na AWS.",
                    dateFormated: "Janeiro/2024 · Atualmente",
                    date: new Date("2024-01-15")
                },
                {
                    title: "Desenvolvedor React Trainee na Supliu",
                    description: "Desenvolvimento de sistemas em React e React Native, criando novas features e ferramentas.",
                    dateFormated: "Agosto/2023 · Janeiro/2024",
                    date: new Date("2023-08-22"),
                    date_end: new Date("2024-01-15")
                },
                {
                    title: "Desenvolvedor Front-End no Patos Hoje",
                    description: "Colocar em prática, através de códigos, projetar o visual do site responsivo, otimização e correção de bugs, melhorar a usabilidade, utilizando as tecnologias: HTML, CSS, JavaScript e Vue.js.",
                    dateFormated: "Novembro/2022 · Atualmente",
                    date: new Date("2022-11-18")
                },
            ]
        },
        {
            name: "Acadêmica ",
            dateFormated: "2021 · Atualmente",
            history: [
                {
                    title: "Desenvolvedor Full Stack",
                    description: "Aprender do zero a programar ao avançado, novas técnicas, tecnologias, bibliotecas. Com uma metodologia de ensino voltada para o que as empresas precisam",
                    dateFormated: "Março/2022 · Atualmente",
                    date: new Date("2022-03-03")
                },
                {
                    title: "Ciência da Computação",
                    description: "Conhecer todas as áreas da computação, aprender novas tecnologias, aprender novos conceitos.",
                    dateFormated: "Janeiro/2023 · Atualmente",
                    date: new Date("2023-01-12")
                },
                {
                    title: "Fundamentos AWS Cloud ",
                    description: "O AWS Fundamentos da Escola da Nuvem é um programa rápido e de curta duração, com o principal objetivo de introduzir os principais conceitos e serviços da nuvem AWS.",
                    dateFormated: "Abril/2023 · Julho/2023",
                    date: new Date("2023-04-01"),
                    date_end: new Date("2023-07-18")
                },
            ]
        },
    ]
}

function Home() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    });
    
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsHeaderVisible(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                color: "text.primary",
            }}
        >
            {inView && isHeaderVisible  && <Header />}

            <Presentation 
                name={data.username} 
                works={data.works}/>
            
            <Box ref={ref}>
                <About
                    data={data}/>
            </Box>
            
            <BannerInfo 
                specializes={data.specializes}
                timeSpecializes={data.timeSpecializes}/>

            <Box id="projectos"/>

            <WorksProjects 
                worksProjects={data.worksProjects}/>

            <Techs 
                techsAll={data.techsAll}/>

            <Traject 
                allHistory={data.professionalArea}/>

            <Contact 
                contactInfo={data.contactInfo}
                linksSocialMedia={data.linksSocialMedias}/>

            <Footer />

            <BasicSpeedDial />
        </Box>
    );
}

export default Home;
