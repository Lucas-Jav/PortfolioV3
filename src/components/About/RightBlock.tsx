import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Navicon from '../NavIcon/Index';

interface RightBlockProps {
    descriptions: string[];
}

function RightBlock({
    descriptions
}: RightBlockProps) {
    return (
        <Box
            className="blockAbout"
            sx={{
                gap: "30px",
                width: "100%"
            }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}>
                    {descriptions.map((description, index) => (
                        <Typography 
                            color="#54595F"
                            className='robotoMedium'
                            variant='subtitle1' 
                            key={index}>
                            {description}
                        </Typography>
                    ))}
                </Box>
                <Navicon 
                    subTitle='donwload cv'
                    downloadCv/>
        </Box>
    )
}

export default RightBlock;