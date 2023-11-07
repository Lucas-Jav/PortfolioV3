import { Box, Typography, useMediaQuery } from "@mui/material";
import { User } from "../../types"
import { calcularDiferencaEntreDatas } from "../../utils/mask";

interface TrajectProps {
    allHistory: User["professionalArea"];
}

function Traject({
    allHistory
} : TrajectProps) {
    const media1400 = useMediaQuery("(max-width: 1400px)");
    const media1200 = useMediaQuery("(max-width: 1200px)");

    return (
        <Box
            sx={{
                bgcolor: "#121212",
                p: media1200 ? "50px 2%" : "100px 50px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
            }}>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        justifyContent: "center",
                    }}>
                    <Typography
                        sx={{
                            color: "#fff",
                            fontFamily: "Montserrat",
                            fontSize: "2.375rem",
                            fontWeight: "700",
                            textAlign: "center"
                        }}>
                        Trajetória até aqui
                    </Typography>

                    <Box
                        mt={8}
                        px={6}
                        display="flex"
                        flexDirection={media1400 ? "column" : "row"}
                        justifyContent="space-around">
                        {allHistory.map((history) => (
                            <Box
                                key={history.name}>
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontFamily: "Raleway",
                                        fontSize: "2rem",
                                        fontWeight: "800",
                                        textAlign: media1400 ? "left" : "center"
                                    }}>
                                    {history.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#FFFFFF80",
                                        fontFamily: "Raleway",
                                        fontSize: "1.5rem",
                                        fontWeight: 400,
                                        textAlign: media1400 ? "left" : "center"
                                    }}>
                                    {history.dateFormated}
                                </Typography>

                                <Box
                                    mt={4.5}
                                    display="flex"
                                    flexDirection={media1400 ? "row" : "column"}
                                    gap={4}
                                    width={media1200 ? "100%" : "auto"}
                                    sx={{overflowX: "scroll"}}
                                    whiteSpace="nowrap"
                                    >
                                    {history.history.map((obj) => (
                                        <Box
                                            display={media1200 ? "inline-flex" : "flex"}
                                            flexDirection="column"
                                            justifyContent="space-between"
                                            mb={media1400 ? 4 : 0}
                                            sx={{
                                                width: media1200 ? "100%" : "36.25rem",
                                                height: media1200 ? "auto" : "13.75rem",
                                                borderRadius: "1rem",
                                                border: "1px solid #EE7070",
                                                "&:hover": {
                                                    border: "1px solid transparent",
                                                    bgcolor: "#EE70701A"
                                                },
                                                px: 4,
                                                py: 3,
                                                cursor: "pointer",
                                            }}
                                            key={obj.title}>
                                                <Box>
                                                    <Typography
                                                        fontSize="1.25rem"
                                                        fontFamily="Raleway"
                                                        fontWeight={700}
                                                        whiteSpace="pre-wrap"
                                                        color="#fff">
                                                            {obj.title}
                                                    </Typography>
                                                    <Typography
                                                        color="#FFFFFF80"
                                                        fontFamily="Raleway"
                                                        fontSize="1rem"
                                                        whiteSpace="pre-wrap"
                                                        fontWeight={400}
                                                        mt={.5}>
                                                            {obj.description}
                                                    </Typography>
                                                </Box>

                                                <Box
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                    flexWrap="wrap"> 
                                                    <Typography
                                                        color="#EE7070"
                                                        fontSize="1.125rem"
                                                        fontWeight={700}
                                                        fontFamily="Raleway">
                                                            {calcularDiferencaEntreDatas(obj.date, obj.date_end)}
                                                    </Typography>
                                                    <Typography
                                                        fontSize="1.125rem"
                                                        fontWeight={400}
                                                        color="#EE7070"
                                                        fontFamily="Raleway"
                                                        whiteSpace="pre-wrap">
                                                        {obj.dateFormated}
                                                    </Typography>
                                                </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
        </Box>
    )
}

export default Traject