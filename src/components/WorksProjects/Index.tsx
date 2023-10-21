import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Navicon from '../NavIcon/Index';
import { Projects } from '../../types';
import CardsProjects from './CardsProjects';

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
                height: "100vh",
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
                    container 
                    
                    spacing={{ xs: 2, md: 4 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                        {worksProjects.map((project) => (
                            <CardsProjects worksProject={project} key={project.id}/>
                        ))}
                </Grid>
            </Box>
    )
}

export default WorksProjects;