import {Box, Container, Typography} from "@mui/material";
import Link from "next/link";

function Footer() {

    const year = new Date();
    return (
        <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#99CC99'}}>
            <Container maxWidth="xl" sx={{display:'flex', flexDirection: { xs: 'column-reverse', md: 'row' } ,alignItems: 'center', justifyContent: 'center', gap: { xs: '5px', md: '30px' }, p: '5px', bgcolor: '#153F1A', color: '#99CC99', fontSize: '12px', textAlign: 'center'}}>
                <Box sx={{my:0, py: 0}}>
                    <p style={{margin: 0}}>Wszelkie prawa zastrzeżone - AUTO-ERA - 2002-{year.getFullYear()}</p>
                </Box>
                <Box sx={{my:0.5, py: 0}}>
                    <Link href={'/about'} style={{textDecoration: 'none'}}><Typography textAlign="center" sx={{color: '#99CC99', textDecoration: 'none', fontSize: '12px'}}>O nas</Typography></Link>
                </Box>
            </Container>
        </Container>
    )
}

export default Footer;