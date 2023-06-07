import {Container, CssBaseline} from "@mui/material";
import MainContent from "@/components/MainContent";

export default function MainContainer() {
    return (
        <>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC'}}>
                <MainContent />
            </Container>
        </>
    );
}