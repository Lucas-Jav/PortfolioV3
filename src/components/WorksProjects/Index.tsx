import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Navicon from '../NavIcon/Index';
import { Projects } from '../../types';
import CardsProjects from './CardsProjects';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';

interface WorksProjectsProps {
    worksProjects: Projects[]
}

function WorksProjects({
    worksProjects
}: WorksProjectsProps) {
    const { language } = useLanguage();

    return (
        <Box
            id="projects"
            sx={{
                width: "100%",
                p: "0px 260px",
            }}>
                <Box 
                data-aos="fade-up"
                data-aos-duration="1500"
                mt={"100px"}
                mb={6}
                className="blockAbout">
                        <Navicon 
                            subTitle={translations[language]['worksProjects']['projects']}/>
                        <Typography
                            className='montserratBold'
                            variant='h3'
                            component="h2">
                                {translations[language]['worksProjects']['worksAndProjects']}
                        </Typography>
                </Box>

                <Grid 
                    alignContent="center"
                    justifyContent="center"
                    container 
                    spacing={{ xs: 2, md: 4 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}>
                        {worksProjects.map((project, index) => (
                            <CardsProjects index={index} worksProject={project} key={project.id}/>
                        ))}
                        <Grid
                        data-aos="fade-up"
                        data-aos-duration={`1500`} 
                        container mt={5} mb={5} className="cardsProjects">
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
                                    {translations[language]['worksProjects']['seeMoreProjectsOnGithub']}
                                    <ArrowRightAltIcon />
                                </Typography>
                            </a>
                        </Grid>
                </Grid>
        </Box>
    )
}

export default WorksProjects;
