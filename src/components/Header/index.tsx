import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LanguageSwitch, useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { language, toggleLanguage } = useLanguage();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navItems = [
        {
            name: translations[language]['nav']['home'],
            href: "#home"
        },
        {
            name: translations[language]['nav']['about'],
            href: "#about"
        },
        {
            name: translations[language]['nav']['projects'],
            href: "#projects"
        },
        {
            name: translations[language]['nav']['trajectory'],
            href: "#trajectory"
        },
        {
            name: translations[language]['nav']['contact'],
            href: "#contact"
        }
    ];

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                bgcolor: "#121212",
                color: "#fff",
                height: "100%",
            }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Menu
            </Typography>
            <Divider color='#ccc' />
            <List>
                {navItems.map((item) => (
                    <a href={item.href} key={item.name} >
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </a>
                ))}
                <ListItem disablePadding>
                    <LanguageSwitch
                        language={language}
                        toggleLanguage={toggleLanguage}
                    />
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                component="nav" sx={{
                    bgcolor: "#121212"
                }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        color="#fff"
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}
                    >
                        LO
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: "#fff" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <a href={item.href} key={item.name}>
                                <Button sx={{ color: '#fff' }}>
                                    {item.name}
                                </Button>
                            </a>
                        ))}
                        <LanguageSwitch
                            language={language}
                            toggleLanguage={toggleLanguage}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    anchor="right"
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}