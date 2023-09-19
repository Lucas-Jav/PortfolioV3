import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Cv from "/public/pdf/lucas.pdf";

interface NaviconProps {
    subTitle: string;
    downloadCv?: boolean;
}

function Navicon({
    subTitle,
    downloadCv
}:NaviconProps) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}
        >
            {downloadCv ? (
                <a 
                    href={Cv} 
                    download={Cv}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}>
                        <span className="line"></span>
                        <Typography className="textIcon" variant="body2">
                            {subTitle}
                        </Typography>
                </a>
            ): (
                <>
                    <span className="line"></span>
                    <Typography className="textIcon" variant="body2">
                            {subTitle}
                    </Typography>
                </>
            )}
        </Box>
    );
}

export default Navicon;