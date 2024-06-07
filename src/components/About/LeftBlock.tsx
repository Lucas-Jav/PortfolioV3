import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Navicon from '../NavIcon/Index';
import { Location } from '../../types';
import { calcYears } from '../../utils/mask';

interface LeftBlockProps {
    name: string;
    birthday: Date;
    location: Location;
}

function LeftBlock({
    name,
    birthday,
    location
}: LeftBlockProps) {
    const currentYear = calcYears(birthday, new Date())
    return (
        <Box 
        data-aos="fade-up"
        data-aos-duration="2000"
            className="blockAbout">
                <Navicon  
                    subTitle='sobre-mim'/>
                <Typography
                    className='montserratBold'
                    variant='h3'>
                        {name}, {currentYear} anos, {""}
                        {location.country}, {location.state}
                </Typography>
        </Box>
    )
}

export default LeftBlock;