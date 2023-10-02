import Box from '@mui/material/Box';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
import { User } from '../../types';

interface AboutProps {
    data: Omit<User, 'username' | 'specializes'>
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