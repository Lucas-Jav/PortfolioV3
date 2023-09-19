import Box from '@mui/material/Box';
import BasicSpeedDial from '../components/ButtonFloat/Index';
import Presentation from '../components/Presentation/Index';
import About from '../components/About/Index';

const data = {
    name: "Lucas Henrique Oliveira de Amorim",
    birthday: new Date('2004-03-24'),
    location: {
        state: "MG",
        country: "Brasil",
    },
    descriptions: [`Olá! Me chamo Lucas Oliveira, um entusiasta do desenvolvimento Front-End, 
    apaixonado por transformar ideias em experiências digitais cativantes.`,
    `Estou comprometido em criar soluções web inovadoras e acessíveis, 
    transformando visões em realidade digital. Se você está procurando por um desenvolvedor Front-End dedicado, 
    versátil e apaixonado, estou aqui para trazer sua visão à vida. Vamos colaborar e construir algo incrível juntos!`]
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
                name='Lucas Oliveira' 
                works={["Desenvolvedor Front End...", "Designer UI & UX..."]}/>

            <About 
                data={data}/>

            <BasicSpeedDial />
        </Box>
    );
}

export default Home;
