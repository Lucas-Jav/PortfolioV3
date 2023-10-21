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
import portfolioV3img from "/public/images/portfoliov3.png"

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
            technologies: ["React JS", "Typescript", "Figma"],
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
            name: "Portfolio V3",
            description: "Portfolio pensado e criado por mim, passando pelo figma e utilizando as tecnicas de UI e UX. E desenvolvido em React + Typescript.",
            technologies: ["React JS", "Typescript", "Figma"],
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
            name: "Portfolio V3",
            description: "Portfolio pensado e criado por mim, passando pelo figma e utilizando as tecnicas de UI e UX. E desenvolvido em React + Typescript.",
            technologies: ["React JS", "Typescript", "Figma"],
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
            id: 4,
            name: "Portfolio V3",
            description: "Portfolio pensado e criado por mim, passando pelo figma e utilizando as tecnicas de UI e UX. E desenvolvido em React + Typescript.",
            technologies: ["React JS", "Typescript", "Figma"],
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
            id: 5,
            name: "Portfolio V3",
            description: "Portfolio pensado e criado por mim, passando pelo figma e utilizando as tecnicas de UI e UX. E desenvolvido em React + Typescript.",
            technologies: ["React JS", "Typescript", "Figma"],
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
            id: 6,
            name: "Portfolio V3",
            description: "Portfolio pensado e criado por mim, passando pelo figma e utilizando as tecnicas de UI e UX. E desenvolvido em React + Typescript.",
            technologies: ["React JS", "Typescript", "Figma"],
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
        
    ]
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

            <BasicSpeedDial />
        </Box>
    );
}

export default Home;
