import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Navicon from '../NavIcon/Index';
import { Projects } from '../../types';
import CardsProjects from './CardsProjects';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface WorksProjectsProps {
    worksProjects: Projects[]
}

function WorksProjects({
    worksProjects
}: WorksProjectsProps) {

    return (
        <Box
            id="projects"
            sx={{
                width: "100%",
                p: "0px 260px",
            }}>
                <Box 
                    mt={"100px"}
                    mb={6}
                    className="blockAbout">
                        <Navicon 
                            subTitle='trabalhos'/>
                        <Typography
                            className='montserratBold'
                            variant='h3'>
                                Trabalhos e projetos
                        </Typography>
                </Box>

                <Grid 
                    alignContent="center"
                    justifyContent="center"
                    container 
                    spacing={{ xs: 2, md: 4 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                        {worksProjects.map((project) => (
                            <CardsProjects worksProject={project} key={project.id}/>
                        ))}
                        <Grid container mt={5} mb={5} className="cardsProjects">
                            <a href="https://github.com/Lucas-Jav?tab=repositories"
                                target='_blank'
                                style={{
                                    display: "block",
                                    margin: "0 2% 0 auto"
                                }}>
                                <Typography 
                                    sx={{
                                        fontFamily: "Tourney",
                                        color: "#EE707080",
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "1rem"
                                    }}>
                                    Ver mais projetos no github
                                    <ArrowRightAltIcon />
                                </Typography>
                            </a>
                        </Grid>
                </Grid>
        </Box>
    )
}

export default WorksProjects;