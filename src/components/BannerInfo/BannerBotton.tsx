import Box from '@mui/material/Box';
import { User } from '../../types';
import { Typography } from '@mui/material';

interface BannerBottonProps {
    timeSpecializes: User["timeSpecializes"];
}

function BannerBottonInfo({
    timeSpecializes
}: BannerBottonProps) {
    
    return (
        <Box
            mt={6}
            data-aos="fade-up"
            data-aos-duration="1800"
            sx={{
                bgcolor: "#EE70701A",
                p: "50px 36px",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "1rem",
                flexWrap: "wrap"
            }}>
                {timeSpecializes.map(timeSpecialize => (
                    <Box key={timeSpecialize.id}>
                        <Typography
                            color="#EE7070"
                            sx={{
                                textAlign: "center",
                                fontFamily: "Roboto",
                                fontSize: "1rem",
                                fontWeight: "500",
                                letterSpacing: "0.04rem"
                            }}>
                                {timeSpecialize.specialize}
                        </Typography>
                        <Typography
                            color="#EE7070"
                            sx={{
                                textAlign: "center",
                                fontFamily: "Montserrat",
                                fontSize: "1.875rem",
                                fontWeight: "700",
                                lineHeight: "1.5rem"
                            }}>
                                {timeSpecialize.variante}
                        </Typography>
                    </Box>
                ))}
        </Box>
    )
}

export default BannerBottonInfo;