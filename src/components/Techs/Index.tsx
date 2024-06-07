import { Box, Typography } from "@mui/material";
import { User } from "../../types";

interface TechsProps {
    techsAll: User["techsAll"];
}

function Techs({
    techsAll
}: TechsProps) {
    
    return (
        <Box
            id="traject"
            sx={{
                bgcolor: "#121212",
                p: "100px 50px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
            }}>
                <Box
                    sx={{
                        width: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        justifyContent: "center"
                    }}>
                    <Typography
                    data-aos="fade-up"
                    data-aos-duration={`1000`}
                        sx={{
                            color: "#fff",
                            fontFamily: "Montserrat",
                            fontSize: "2.375rem",
                            fontWeight: "700",
                            textAlign: "center"
                        }}>
                        Tecnologias e habilidades
                    </Typography>

                    <Typography
                    data-aos="fade-up"
                    data-aos-duration={`1100`}
                        sx={{
                            color: "rgba(255, 255, 255, 0.50)",
                            fontFamily: "Raleway",
                            fontSize: "1.5rem",
                            fontWeight: "400",
                            textAlign: "center",
                            mt: 5
                        }}>
                        Techs que uso no dia a dia
                    </Typography>

                    <Box 
                        sx={{
                            display: "flex",
                            gap: 5,
                            flexWrap: "wrap",
                            mt: 5,
                            justifyContent: "center",
                        }}>
                        {techsAll.techsUseToday.map((link, index) => (
                            <img 
                                data-aos="fade-up"
                                data-aos-duration={`${index * 2 + 10}00`}
                                width={64}
                                height={64}
                                src={link} 
                                alt={link} 
                                style={{ objectFit: "contain" }} 
                                loading="lazy" 
                                key={link}/>
                        ))}
                    </Box>

                    <Typography
                    data-aos="fade-up"
                    data-aos-duration={`1100`}
                        sx={{
                            color: "rgba(255, 255, 255, 0.50)",
                            fontFamily: "Raleway",
                            fontSize: "1.5rem",
                            fontWeight: "400",
                            textAlign: "center",
                            mt: 6
                        }}>
                        Outras techs com que já realizei projetos
                    </Typography>

                    <Box 
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 5,
                            flexWrap: "wrap",
                            mt: 3
                        }}>
                        {techsAll.techsUtils.map((link, index) => (
                            <img 
                                data-aos="fade-up"
                                data-aos-duration={`${index * 2 + 10}00`}
                                width={64}
                                height={64}
                                src={link} 
                                alt={link} 
                                style={{ objectFit: "contain" }} 
                                loading="lazy" 
                                key={link}/>
                        ))}
                    </Box>

                </Box>
        </Box>
    )
}

export default Techs;