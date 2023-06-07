import {
    AppBar,
    Container, CssBaseline,
    Toolbar,
} from "@mui/material";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";


function ResponsiveAppBar() {

    return (
        <>
        <CssBaseline />
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#99CC99'}}>
                <AppBar position="static">
                    <Container maxWidth="xl" sx={{bgcolor: '#153F1A', color: '#99CC99'}}>
                        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Navigation />
                        </Toolbar>
                    </Container>
                </AppBar>
            </Container>
        </>
    );
}
export default ResponsiveAppBar;