import Box from '@mui/material/Box';
import Cards from './Cards';

interface BannerProps {
    specializes: Array<{
        id: number;
        icon: JSX.Element;
        time: Date;
        specialize: string;
        variante: "1" | "2";
    }>;
}

function BannerInfo({
    specializes
}: BannerProps) {
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
                </Box>
        </Box>
    )
}

export default BannerInfo;