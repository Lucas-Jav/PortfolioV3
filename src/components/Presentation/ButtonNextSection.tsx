import { Box } from "@mui/material";


function BtnNextSection() {
    return(
        <Box 
            sx={{
                position: "absolute",
                bottom: -8
            }}>
            <a href="#about">
                <img src="/src/assets/imgs/to-button.png" alt="" />
            </a>
        </Box>
    )
}

export default BtnNextSection;