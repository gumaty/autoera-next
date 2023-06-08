import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import ContactForm from "@/components/ContactForm";

const title = "Kontakt";

export default function ContactHome() {
    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                <Box sx={{p: '20px', bgcolor: 'white'}} >
                    <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                        <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{title}</Typography>
                    </Box>
                    <Typography sx={{color: '#153F1A', textAlign: "justify"}}>
                        Chcemy ułatwić Wam kontakt z nami, aby portal ten zawierał informacje, które Was najbardziej interesują. Jeśli macie jakieś sugestie lub propozycje to chętnie dowiemy się co chcielibyście zobaczyć lub czego się dowiedzieć.<br /><br />
                        Będziemy się starali sprostać wszelkim prośbom lub uwagom, ponieważ chcemy aby ten portal był jak najbardziej interesujący i odpowiadający Waszym potrzebom i zainteresowaniom.
                    </Typography>
                </Box>
                <Box sx={{p: '50px', width: 1, bgcolor: 'white'}}>
                    <Box sx={{width: {xs: 1, sm: '500px'} , marginInline: 'auto', p: '30px', bgcolor: 'white', border: 1, borderRadius: 5, borderColor: '##153F1A', boxShadow: 10}} >
                        <ContactForm />
                    </Box>
                </Box>
            </Container>
        </>
    )
}