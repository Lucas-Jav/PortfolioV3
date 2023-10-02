import Box from '@mui/material/Box';
import Cards from './Cards';
import { Specializes, User } from '../../types';
import BannerBottonInfo from './BannerBotton';
import { useMediaQuery } from '@mui/material';

interface BannerProps {
    specializes: Specializes[];
    timeSpecializes: User["timeSpecializes"];
}

function BannerInfo({
    specializes,
    timeSpecializes
}: BannerProps) {
    const media1040 = useMediaQuery("(max-width: 1040px)");
    return (
        <Box
            sx={{
                bgcolor: "#121212",
                p: "100px 50px",
                display: "flex",
                justifyContent: "center"
            }}>
                <Box sx={{
                    width: "1061px",
                    
                }}>
                    <Cards 
                        specializes={specializes}/>

                    {!media1040 && (
                        <BannerBottonInfo 
                            timeSpecializes={timeSpecializes}/>
                    )}
                </Box>
        </Box>
    )
}

export default BannerInfo;