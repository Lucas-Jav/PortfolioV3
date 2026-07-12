import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useLanguage } from '../../i18n/LanguageContext';

interface NaviconProps {
    subTitle: string;
    downloadCv?: boolean;
}

const cvByLanguage = {
    pt: "/pdf/lucas-oliveira-curriculo-pt.pdf",
    en: "/pdf/lucas-oliveira-resume-en.pdf",
} as const;

const cvFileNameByLanguage = {
    pt: "Lucas_Oliveira_Curriculo_PT.pdf",
    en: "Lucas_Oliveira_Resume_EN.pdf",
} as const;

function Navicon({
    subTitle,
    downloadCv
}:NaviconProps) {
    const { language } = useLanguage();
    const cvUrl = cvByLanguage[language];
    const cvFileName = cvFileNameByLanguage[language];

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
                    href={cvUrl}
                    download={cvFileName}
                    aria-label={subTitle}
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
