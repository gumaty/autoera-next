import {Container} from "@mui/material";

function Footer() {

    const year = new Date();
    return (
        <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#99CC99'}}>
            <Container maxWidth="xl" sx={{p: '2px', bgcolor: '#153F1A', color: '#99CC99', fontSize: '10px', textAlign: 'center'}}>
                <p className="light-text">Wszelkie prawa zastrzeżone - AUTO-ERA - 2002-{year.getFullYear()}</p>
            </Container>
        </Container>
    )
}

export default Footer;