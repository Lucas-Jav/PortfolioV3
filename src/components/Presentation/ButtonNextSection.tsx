import { Box } from "@mui/material";

function BtnNextSection() {
    return(
        <Box 
            sx={{
                position: "absolute",
                bottom: -8
            }}>
            <a href="#about">
                <img 
                    src="/images/to-button.png"
                    alt="To-botton" loading="lazy"/>
            </a>
        </Box>
    )
}

export default BtnNextSection;