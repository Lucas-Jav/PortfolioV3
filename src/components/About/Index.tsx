import Box from '@mui/material/Box';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

interface AboutProps {
    data: {
        name: string;
        birthday: Date;
        location: {
            state: string;
            country: string;
        };
        descriptions: string[];
    }
}

function About({
    data
}:AboutProps) {
    
    return (
        <Box 
            id="about"
            >
                
                <LeftBlock 
                    name={data.name}
                    birthday={data.birthday}
                    location={data.location}/>

                <RightBlock 
                    descriptions={data.descriptions}/>
        </Box>
    )
}

export default About;