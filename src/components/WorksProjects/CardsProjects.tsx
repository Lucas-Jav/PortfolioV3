import { Box, Grid, Typography } from '@mui/material';
import { Projects } from '../../types';

interface CardsProjectsProps {
    worksProject: Projects;
}

function CardsProjects({
    worksProject
}: CardsProjectsProps) {
    
    console.log(worksProject)
    return (
        <Grid 
            item>
                <Box
                    className="cardsProjects"
                    sx={{
                        height: "30.75rem",
                        width: "26rem",
                        p: "2rem",
                        borderRadius: "1rem",
                        bgcolor: "#EE707033",
                        boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        "&:hover": {
                            bgcolor: "#FFD0D0",
                            cursor: "pointer",
                            boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.2)"
                        },
                        "&:hover div.imgShow": {
                            display: "flex"
                        }   
                    }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: "1.25rem",
                                    fontWeight: "700"
                                }}>
                                {worksProject.name}
                            </Typography>
                            <Typography
                                mt={2}
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: "0.875rem",
                                    fontWeight: "400",
                                    lineHeight: "normal",
                                    fontStyle: "normal",
                                    color: "#54595FCC"
                                }}>
                                {worksProject.description}
                            </Typography>
                        </Box>

                        <Box>
                            <Box mb="1.37rem">
                                <Box sx={{
                                    display: "flex",
                                    gap: "0.5rem"
                                }}>
                                    {worksProject.technologies.map((tech, index) => (
                                        <Typography
                                            sx={{
                                                borderRadius: 2,
                                                fontSize: "1rem",
                                                color: "#EE7070",
                                                bgcolor: "#EE70701A",
                                                fontWeight: "700",
                                                fontFamily: "Raleway",
                                                textAlign: "center",
                                                p: "5px 8px",
                                            }}
                                            key={index}>
                                            {tech}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                            <Box
                            height="13.5rem"
                            width="100%"
                            borderRadius="0.5rem"
                            position="relative">
                                <img 
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "0.5rem",
                                    objectFit: "cover"
                                }}
                                srcSet={worksProject.img}
                                alt={worksProject.name}
                                src={worksProject.img}
                                loading='lazy'/>

                                <Box 
                                className="imgShow"
                                display="none"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                gap={2}
                                position="absolute"
                                width="100%"
                                height="100%"
                                bgcolor="#FFD0D092"
                                top={0}>

                                    {worksProject.links.map((link) => (
                                        <Box
                                            key={link.id}
                                            padding=".5rem"
                                            borderRadius="1.5rem"
                                            border="1px solid #EE7070"
                                            width="120px"
                                            height="auto"
                                            bgcolor="#fff"
                                            color="#EE7070"
                                            sx={{
                                                "&:hover": {
                                                    bgcolor: "#f5f5f5",
                                                    boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.2)"
                                                }
                                            }}>
                                            <a 
                                            href={link.link} 
                                            target='_blank'
                                            style={{
                                                display:"flex",
                                                justifyContent:"center",
                                                gap: 5,
                                                alignItems:"center",
                                                fontSize: ".8rem",
                                                fontWeight: "700",
                                                fontFamily: "Montserrat"
                                            }}>
                                                {link.icon}
                                                {link.type}
                                            </a>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                        </Box>
                </Box>
        </Grid>
    )
}

export default CardsProjects;