import Box from '@mui/material/Box';
import BasicSpeedDial from '../components/ButtonFloat/ButtonFloat';
import Presentation from '../components/Presentation/Presentation';

function Home() {
    
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "200vh",
                color: "text.primary",
            }}
        >
            <Presentation name='Lucas Oliveira' works={["Desenvolvedor Front End...", "Designer UI & UX..."]}/>

            <BasicSpeedDial />
        </Box>
    );
}

export default Home;
