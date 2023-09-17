import { Context, useContext } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";


import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface BasicSpeedDialProps {
    colorModeContext: Context<{
        toggleColorMode: () => void;
    }>;
}

export default function BasicSpeedDial({
    colorModeContext
}:BasicSpeedDialProps) {
    const theme = useTheme();
    const colorMode = useContext(colorModeContext);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const actions = [
        { 
            icon: <ExpandLessIcon color="secondary"/>, 
            name: "To Top", 
            func: scrollToTop 
        },
        { 
            icon: theme.palette.mode === 'light' ? (
                <Brightness4Icon color="secondary"/>
            ): (
                <Brightness7Icon color="secondary"/>
            ), name: `${theme.palette.mode === 'light' ? 'Dark': 'Light'} mode`, 
            func: colorMode.toggleColorMode
        },
    ];


    return (
            <SpeedDial
                FabProps={{color:"secondary"}}
                ariaLabel="Ver mais"
                sx={{ position: "fixed", bottom: 56, right: 56 }}
                icon={<MoreVertIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        onClick={action.func}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        
    );
}