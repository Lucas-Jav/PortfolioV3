import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Fab from '@mui/material/Fab';

export default function BtnToTop() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Fab
            onClick={scrollToTop}
            size="medium"
            sx={{ position: "fixed", bottom: 26, right: 26 }}>
            <ExpandLessIcon />
        </Fab>
    );
}
