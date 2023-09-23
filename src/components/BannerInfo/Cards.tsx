import { Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';


interface CardsProps {
    specializes: Array<{
        id: number;
        icon: JSX.Element;
        time: Date;
        specialize: string;
        variante: string;
    }>;
}

function Cards({
    specializes
}:CardsProps) {
    const mediaQuery1040 = useMediaQuery('(max-width: 1040px)');
    return (
        <Box
            sx={{
                maxWidth: "1061px",

                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                flexDirection: mediaQuery1040 ? "column" : "row",
                gap: mediaQuery1040 ? "50px" : "0"
            }}>   
            {specializes.map((specializeData) => {
                const { id, icon, specialize, time, variante } = specializeData;
                const currentYear = new Date().getFullYear();
                const startYear = time.getFullYear();

                return (
                    <Box
                        sx={{
                            width: "300px",
                            height:  "230px",
                            flexShrink: "0",
                            backgroundColor: variante === "2" ? "#EE70701A" : "transparent",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            border: `1px solid ${variante === "1" ? "#EE7070": "#EE70701A"}`,
                            borderRadius: "1rem",
                        }}
                        key={id}>
                            {icon}
                            <Typography 
                                color="#fff"
                                sx={{
                                    textAlign: "center",
                                    fontFamily: "Roboto",
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    lineHeight: "1.3875rem",
                                    letterSpacing: "0.04rem"
                                }}>
                                {String(currentYear - startYear)}
                                {(currentYear - startYear) < 2 ? " ano": " anos"}
                                {variante === "1" ? " como": " de"}
                            </Typography>
                            <Typography 
                                color="#fff"
                                sx={{
                                    textAlign: "center",
                                    fontFamily: "Montserrat",
                                    fontSize: "1.875rem",
                                    fontWeight: "700",
                                    lineHeight: "1.925rem"
                                }}>
                                    {specialize}
                            </Typography>
                            
                    </Box>
                )
            })}

        </Box>
    )
}

export default Cards;