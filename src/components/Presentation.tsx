import { Box } from "@mui/material";

interface PresentationProps {
    name: string;
    works: string[];
}

function Presentation({
    name,
    works
}:PresentationProps) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%"
            }}>
            
        </Box>
    )
}

export default Presentation;