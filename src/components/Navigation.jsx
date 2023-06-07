import {Box, Button, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import {useState} from "react";
import Logo from "@/components/Logo";

const pages = ['Strona główna', 'Samochody seryjne', 'Samochody studialne', 'Mała encyklopedia', 'Kontakt', 'O nas'];

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
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" sx={{color: '#153F1A'}}>{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }}} >
                <Logo />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, px: '6px', color: '#99CC99', fontSize: '14px', textTransform: 'none', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
        </>
    )
}

export default Navigation;