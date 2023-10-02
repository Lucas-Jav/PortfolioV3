import Box from '@mui/material/Box';
import BasicSpeedDial from '../components/ButtonFloat/Index';
import Presentation from '../components/Presentation/Index';
import About from '../components/About/Index';
import BannerInfo from '../components/BannerInfo/Index';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import BrushIcon from '@mui/icons-material/Brush';
import { User } from '../types';

const propsIcon = {
    color: "#EE7070",
    height: "3.125rem",
    width: "3.125rem"
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

            <BasicSpeedDial />
        </Box>
    );
}

export default Home;
