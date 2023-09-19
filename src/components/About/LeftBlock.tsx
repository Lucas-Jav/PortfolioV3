import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Navicon from '../NavIcon/Index';

interface LeftBlockProps {
    name: string;
    birthday: Date;
    location: {
        state: string;
        country: string;
    };
}

function LeftBlock({
    name,
    birthday,
    location
}: LeftBlockProps) {
    const yearBirthday = birthday.getFullYear()
    const currentYear = new Date().getFullYear()
    console.log(name, birthday, location)
    return (
        <Box 
            className="blockAbout">
                <Navicon 
                    subTitle='sobre-mim'/>
                <Typography
                    className='montserratBold'
                    variant='h3'>
                        {name}, {currentYear - yearBirthday} anos, {""}
                        {location.country}, {location.state}
                </Typography>
        </Box>
    )
}

export default LeftBlock;