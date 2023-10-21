import { Box } from "@mui/material";
import imgToBotton from "/public/images/to-button.png";

function BtnNextSection() {
    return(
        <Box 
            sx={{
                position: "absolute",
                bottom: -8
            }}>
            <a href="#about">
                <img 
                    src={imgToBotton}
                    alt="To-botton" loading="lazy"/>
            </a>
        </Box>
    )
}

export default BtnNextSection;