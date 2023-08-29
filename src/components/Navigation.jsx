import {Box, Button, IconButton, Link as MuiLink, Menu, MenuItem, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

import classes from './Navigation.module.css';

const pages = [{id: 1, title: 'Strona główna', link: '/'}, {id: 2, title: 'Samochody seryjne', link: '/seryjne'}, {id: 3, title:'Samochody studialne', link: '/studialne'}, {id: 4, title:'Encyklopedia', link: '/encyklopedia'}, {id: 5, title:'Artykuły', link: '/articles'}];

function Navigation() {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
                <Logo />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                            <Link key={page.id} href={page.link} style={{textDecoration: 'none'}}><Typography textAlign="center" sx={{color: '#153F1A', textDecoration: 'none'}}>{page.title}</Typography></Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }}} >
                <Logo />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                {pages.map((page) => (
                    <Link key={page.id} href={page.link} style={{textDecoration: 'none'}} >
                        <Button
                                key={page.id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, px: '6px', color: '#c9ffc9', fontSize: '15px', textDecoration: 'none', textTransform: 'none', display: 'block', borderRight: 1, borderRadius: 0, borderColor: '#99CC99' }}
                            >
                                {page.title}
                            </Button>
                    </Link>
                ))}
            </Box>
        </>
    )
}

export default Navigation;