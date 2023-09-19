import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Fab from "@mui/material/Fab";
import { useState } from "react";

export default function BtnToTop() {
    const [showBtn, setShowFloatBtn] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowFloatBtn(currentScrollY !== 0);
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            {showBtn && (
                <Fab
                    onClick={scrollToTop}
                    size="medium"
                    sx={{ position: "fixed", bottom: 26, right: 26 }}
                >
                    <ExpandLessIcon />
                </Fab>
            )}
        </>
    );
}
