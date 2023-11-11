import { Box, Typography, useMediaQuery } from "@mui/material";

function Footer() {
    const media550 = useMediaQuery("(max-width: 550px)");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box
            height={88}
            bgcolor="#000000E5"
            id="contact"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            justifyContent={media550 ? "center": "space-between"}
            sx={{
                p: "0px 260px",
                color: "#EE7070"
            }}>
            <Typography
                textAlign="center">
                &copy;
                Desenvolvido por Lucas Oliveira · {String(new Date().getFullYear())}
            </Typography>

            
            <Typography
                sx={{
                    cursor: "pointer"
                }}
                onClick={scrollToTop}>
                Voltar para o topo
            </Typography>
            
        </Box>
    )
}

export default Footer;