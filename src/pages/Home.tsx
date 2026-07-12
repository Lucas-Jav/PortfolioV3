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
import WorksProjects from '../components/WorksProjects/Index';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';

// imgs
import portalleadtaxImg from "/images/portalleadtax.png";
import puaimg from "/images/pua.png";
import beecareImg from "/images/beecare.png";
import ultracar from "/images/ultracar.png";
import catologoApp from "/images/catalogoapp.png";
import unicomunica from "/images/unicomunica.png";

import phpImg from "/images/techs/php.png";
import awsImg from "/images/techs/Aws.png";
import cssImg from "/images/techs/Css.png";
import figmaImg from "/images/techs/Figma.png";
import gitImg from "/images/techs/Git.png";
import githubImg from "/images/techs/Github.png";
import htmlImg from "/images/techs/Html.png";
import jsImg from "/images/techs/Javascript.png";
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
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

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

function Home() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    });

    const { language } = useLanguage();

    const data: User = {
        name: "Lucas Henrique Oliveira de Amorim",
        username: 'Lucas Oliveira',
        birthday: new Date('2004-03-24'),
        email: "lucasrazebra@gmail.com",
        works: translations[language]['user']['works'],
        location: translations[language]['user']['location'],
        descriptions: translations[language]['user']['descriptions'] as string[],
        specializes: [
            {
                id: 1,
                icon: <CodeIcon sx={propsIcon} />,
                time: new Date('2021-09-30'),
                specialize: translations[language]['user']['specializes']['developer'],
                variante: "1",
            },
            {
                id: 2,
                icon: <WorkIcon sx={propsIcon} />,
                time: new Date('2022-09-01'),
                specialize: translations[language]['user']['specializes']['work'],
                variante: "2",
            },
            {
                id: 3,
                icon: <BrushIcon sx={propsIcon} />,
                time: new Date('2022-09-01'),
                specialize: translations[language]['user']['specializes']['design'],
                variante: "1",
            }
        ],
        timeSpecializes: [
            {
                id: 1,
                specialize: translations[language]['user']['timeSpecializes']['developer']['specialize'],
                variante: translations[language]['user']['timeSpecializes']['developer']['variante']
            },
            {
                id: 2,
                specialize: translations[language]['user']['timeSpecializes']['experiences']['specialize'],
                variante: translations[language]['user']['timeSpecializes']['experiences']['variante']
            },
            {
                id: 3,
                specialize: translations[language]['user']['timeSpecializes']['UI&UX']['specialize'],
                variante: translations[language]['user']['timeSpecializes']['UI&UX']['variante']
            },
        ],
        worksProjects: [
            {
                id: 1,
                name: translations[language]['user']['worksProjects']['Portal Leadtax']['name'],
                description: translations[language]['user']['worksProjects']['Portal Leadtax']['description'],
                technologies: ["React JS", "Typescript", "Figma", "Laravel", "AWS"],
                links: [
                    {
                        id: 1,
                        type: "WebSite",
                        link: "https://portal.lead.tax",
                        icon: <LanguageIcon sx={propsIcon2} />
                    }
                ],
                img: portalleadtaxImg
            },
            {
                id: 3,
                name: translations[language]['user']['worksProjects']['Beecare']['name'],
                description: translations[language]['user']['worksProjects']['Beecare']['description'],
                technologies: ["WebScraping", "RPA's"],
                links: [
                    {
                        id: 1,
                        type: "WebSite",
                        link: "https://beecare.bionexo.com",
                        icon: <LanguageIcon sx={propsIcon2} />
                    }
                ],
                img: beecareImg
            },
            {
                id: 4,
                name: translations[language]['user']['worksProjects']['UltraCar']['name'],
                description: translations[language]['user']['worksProjects']['UltraCar']['description'],
                technologies: ["React", "Typescript", "Material UI"],
                links: [
                    {
                        id: 2,
                        type: "WebSite",
                        link: "https://ultracarr.com.br",
                        icon: <LanguageIcon sx={propsIcon2} />
                    }
                ],
                img: ultracar
            },
            {
                id: 2,
                name: translations[language]['user']['worksProjects']['Plante uma Árvore']['name'],
                description: translations[language]['user']['worksProjects']['Plante uma Árvore']['description'],
                technologies: ["React JS", "Css", "Typescript"],
                links: [
                    {
                        id: 1,
                        type: "WebSite",
                        link: "https://planteumaarvoreoficial.com.br",
                        icon: <LanguageIcon sx={propsIcon2} />
                    }
                ],
                img: puaimg
            },
            {
                id: 6,
                name: translations[language]['user']['worksProjects']['CatalogoApp']['name'],
                description: translations[language]['user']['worksProjects']['CatalogoApp']['description'],
                technologies: ["React Native", "GraphQl", "Typescript"],
                links: [
                    {
                        id: 1,
                        type: "WebSite",
                        link: "https://web.catalogoapp.mobi",
                        icon: <LanguageIcon sx={propsIcon2} />
                    },
                    {
                        id: 2,
                        type: "Play Store",
                        link: "https://play.google.com/store/apps/details?id=mobi.catalogoapp&hl=pt_BR&gl=US&pli=1",
                        icon: <PlayArrowIcon sx={propsIcon2} />
                    },
                    {
                        id: 3,
                        type: "App Store",
                        link: "https://apps.apple.com/br/app/catálogo-app/id1541545374",
                        icon: <AppleIcon sx={propsIcon2} />
                    },

                ],
                img: catologoApp
            },
            {
                id: 5,
                name: translations[language]['user']['worksProjects']['UniComunica']['name'],
                description: translations[language]['user']['worksProjects']['UniComunica']['description'],
                technologies: ["Next.js", "MongoDB", "GraphQl", "Node.js"],
                links: [
                    {
                        id: 1,
                        type: "WebSite",
                        link: "https://webapp-chi-one.vercel.app",
                        icon: <LanguageIcon sx={propsIcon2} />
                    }
                ],
                img: unicomunica
            }
        ],
        techsAll: {
            techsUseToday: [
                reactImg,
                phpImg,
                awsImg,
                typescriptImg,
                jsImg,
                cssImg,
                figmaImg,
                mysqlLogo
            ],
            techsUtils: [
                githubImg,
                gitImg,
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
                icon: <HomeIcon sx={{ fontSize: 20 }} />,
                text: translations[language]['user']['contactInfo']['location']
            },
            {
                icon: <EmailIcon sx={{ fontSize: 20 }} />,
                text: translations[language]['user']['contactInfo']['email']
            },
            {
                icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />,
                text: translations[language]['user']['contactInfo']['phone']
            }
        ],
        linksSocialMedias: [
            {
                id: 1,
                type: "Lucas-Jav",
                link: "https://github.com/Lucas-Jav",
                icon: <GitHubIcon sx={{ fontSize: 20 }} />
            },
            {
                id: 2,
                type: "oliveiradilucas",
                link: "https://www.linkedin.com/in/oliveiradilucas/",
                icon: <LinkedIn sx={{ fontSize: 20 }} />
            },
            {
                id: 3,
                type: "Whatsapp",
                link: "https://api.whatsapp.com/send/?phone=5534992129901&text=Ol%C3%A1+Lucas%2C+vim+pelo+seu+trabalho+de+desenvolvedor%21&type=phone_number&app_absent=0",
                icon: <WhatsApp sx={{ fontSize: 20 }} />
            }
        ],
        professionalArea: [
            {
                name: translations[language]["user"]["areas"]["professional"]["name"],
                dateFormated: translations[language]["user"]["areas"]["professional"]["dateFormated"],
                history: [
                    {
                        title: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor Full Stack na Leadtax"]["title"],
                        description: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor Full Stack na Leadtax"]["description"],
                        dateFormated: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor Full Stack na Leadtax"]["dateFormated"],
                        date: new Date("2024-01-15")
                    },
                    {
                        title: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor React Trainee na Supliu"]["title"],
                        description: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor React Trainee na Supliu"]["description"],
                        dateFormated: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor React Trainee na Supliu"]["dateFormated"],
                        date: new Date("2023-08-22"),
                        date_end: new Date("2024-01-15")
                    },
                    {
                        title: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor Front-End no Patos Hoje"]["title"],
                        description: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor Front-End no Patos Hoje"]["description"],
                        dateFormated: translations[language]["user"]["areas"]["professional"]["history"]["Desenvolvedor Front-End no Patos Hoje"]["dateFormated"],
                        date: new Date("2022-11-18")
                    },
                ]
            },
            {
                name: translations[language]["user"]["areas"]["academic"]["name"],
                dateFormated: translations[language]["user"]["areas"]["academic"]["dateFormated"],
                history: [
                    {
                        title: translations[language]["user"]["areas"]["academic"]["history"]["Ciência da Computação"]["title"],
                        description: translations[language]["user"]["areas"]["academic"]["history"]["Ciência da Computação"]["description"],
                        dateFormated: translations[language]["user"]["areas"]["academic"]["history"]["Ciência da Computação"]["dateFormated"],
                        date: new Date("2023-01-12")
                    },
                    {
                        title: translations[language]["user"]["areas"]["academic"]["history"]["Desenvolvedor Full Stack"]["title"],
                        description: translations[language]["user"]["areas"]["academic"]["history"]["Desenvolvedor Full Stack"]["description"],
                        dateFormated: translations[language]["user"]["areas"]["academic"]["history"]["Desenvolvedor Full Stack"]["dateFormated"],
                        date: new Date("2022-03-03"),
                        date_end: new Date("2024-05-10")
                    },
                    {
                        title: translations[language]["user"]["areas"]["academic"]["history"]["Fundamentos AWS Cloud"]["title"],
                        description: translations[language]["user"]["areas"]["academic"]["history"]["Fundamentos AWS Cloud"]["description"],
                        dateFormated: translations[language]["user"]["areas"]["academic"]["history"]["Fundamentos AWS Cloud"]["dateFormated"],
                        date: new Date("2023-04-01"),
                        date_end: new Date("2023-07-18")
                    },
                ]
            },
        ]
    }

    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHeaderVisible(window.scrollY > 0);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            component="main"
            sx={{
                width: "100%",
                minHeight: "100vh",
                color: "text.primary",
            }}
        >
            {inView && isHeaderVisible && <Header />}

            <Presentation
                name={data.username}
                works={data.works} />

            <Box ref={ref}>
                <About
                    data={data} />
            </Box>

            <BannerInfo
                specializes={data.specializes}
                timeSpecializes={data.timeSpecializes} />

            <Box id="projects" />

            <WorksProjects
                worksProjects={data.worksProjects} />

            <Techs
                techsAll={data.techsAll} />

            <Traject
                allHistory={data.professionalArea} />

            <Contact
                contactInfo={data.contactInfo}
                linksSocialMedia={data.linksSocialMedias} />

            <Footer />

            <BasicSpeedDial />
        </Box>
    );
}

export default Home;
