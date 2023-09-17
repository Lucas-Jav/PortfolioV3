import { Context } from 'react';
import Box from '@mui/material/Box';
import BasicSpeedDial from '../components/ButtonFloat/ButtonFloat';

interface HomeProps {
    colorModeContext: Context<{
        toggleColorMode: () => void;
    }>;
}

function Home({
    colorModeContext
}:HomeProps) {
    
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                minHeight: "200vh",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                borderRadius: 1,
                p: 3,
            }}
        >

            <BasicSpeedDial colorModeContext={colorModeContext}/>
        </Box>
    );
}

export default Home;
