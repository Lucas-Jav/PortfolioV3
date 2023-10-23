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

// imgs
import portfolioV3img from "/images/portfoliov3.png";
import playlistimg from "/images/playlist.png";
import tw4img from "/images/tw4.png";
import pokedeximg from "/images/pokedex.png";
import portfolioV2 from "/images/portfoliov2.png"
import todoListImg from "/images/todolist.png";

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

import Techs from '../components/Techs/Index';
import Contact from '../components/Contact/Index';

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
            id: 2,
            name: "Playlist",
            description: "Albuns e faixas dinamicos do grupo Tião carreiro e Pardinho, projeto para vaga de React Trainee da empresa Supliu!",
            technologies: ["React JS", "Css"],
            links: [
                {
                    id: 1,
                    type: "GitHub",
                    link: "https://github.com/Lucas-Jav/playlist",
                    icon: <GitHubIcon sx={propsIcon2}/>
                }, {
                    id: 2,
                    type: "WebSite",
                    link: "https://playlist-sandy.vercel.app/",
                    icon: <LanguageIcon sx={propsIcon2}/>
                }
            ],
            img: playlistimg
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
        {
            id: 5,
            name: "Portfolio V2",
            description: "Portfolio pessoal desenvolvido com base na Netflix, utilizando o designer parecido.",
            technologies: ["React.js", "Scss"],
            links: [
                {
                    id: 1,
                    type: "GitHub",
                    link: "https://github.com/Lucas-Jav/PortfolioLucas",
                    icon: <GitHubIcon sx={propsIcon2}/>
                }, {
                    id: 2,
                    type: "WebSite",
                    link: "https://portfolio-lucas-roan.vercel.app/",
                    icon: <LanguageIcon sx={propsIcon2}/>
                }
            ],
            img: portfolioV2
        },
        {
            id: 6,
            name: "Todo List",
            description: "Este projeto permite você criar tarefas, ver, deletar e atualizar, projeto moderno rodando em tempo real. (Ainda está sendo desenvolvido)",
            technologies: ["Node.js", "MongoDB"],
            links: [
                {
                    id: 1,
                    type: "GitHub",
                    link: "https://github.com/Lucas-Jav/to-do-list-express",
                    icon: <GitHubIcon sx={propsIcon2}/>
                }
            ],
            img: todoListImg
        },
    ],
    techsAll: {
        techsUseToday: [
            reactImg,
            reactNativeImg,
            typescriptImg,
            jsImg,
            cssImg,
            figmaImg,
            gitImg,
            githubImg
        ],
        techsUtils: [
            nodeImg,
            sassImg,
            mongodbImg,
            awsImg,
            vueImg,
            htmlImg
        ]
    }
}

function Home() {
    
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                color: "text.primary",
            }}
        >
            <Presentation 
                name={data.username} 
                works={data.works}/>

            <About 
                data={data}/>

            <BannerInfo 
                specializes={data.specializes}
                timeSpecializes={data.timeSpecializes}/>

            <WorksProjects 
                worksProjects={data.worksProjects}/>

            <Techs 
                techsAll={data.techsAll}/>

            <Contact />

            <BasicSpeedDial />
        </Box>
    );
}

export default Home;
