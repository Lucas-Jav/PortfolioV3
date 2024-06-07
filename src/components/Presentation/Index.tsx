import { Box, Typography } from "@mui/material";
import ShowWorks from "./ShowWorks";
import BtnNextSection from "./ButtonNextSection";
import useMediaQuery from '@mui/material/useMediaQuery';

interface PresentationProps {
    name: string;
    works: string[];
}

function Presentation({
    name,
    works
}:PresentationProps) {
    const showBtn = useMediaQuery('(max-width:425px)');
    return (
        <Box
            id="home"
            sx={{
                height: "100vh",
                width: "100%",
                p: "10px",
                bgcolor: "#121212",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>

                <Box 
                data-aos="fade-up"
                data-aos-duration="1000"
                mb={25}>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                        }}>
                        <Typography 
                            variant="h2"
                            fontFamily={'Tourney'}
                            color="#fff"
                            sx={{
                                textShadow: "0px 4px 4px rgba(255, 208, 208, 0.20);"
                            }}>
                                {name}
                        </Typography>
                    </Box>
                    <ShowWorks works={works}/>
                </Box>
            {!showBtn && (
                <BtnNextSection />
            )}
        </Box>
    )
}

export default Presentation;