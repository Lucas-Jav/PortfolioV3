import { Box, Typography, useMediaQuery } from "@mui/material";
import { useLanguage } from "../../i18n/LanguageContext";
import { translations } from "../../i18n/translations";

function Footer() {
    const media550 = useMediaQuery("(max-width: 550px)");

    const { language } = useLanguage();

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
                {translations[language]['footer']['developedBy']} · {String(new Date().getFullYear())}
            </Typography>

            
            <Typography
                sx={{
                    cursor: "pointer"
                }}
                onClick={scrollToTop}>
                {translations[language]['footer']['backToTop']}
            </Typography>
            
        </Box>
    )
}

export default Footer;