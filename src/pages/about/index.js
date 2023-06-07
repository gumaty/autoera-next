import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";

const title = "O nas";

export default function AboutHome() {
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
                        Jesteśmy niewielkim zespołem ludzi, którzy interesują się motoryzacją, a swoje zainteresowania przelewają bądź na papier, bądź do komputera. Zdecydowaliśmy się uruchomić serwis ponieważ chcemy zapełnić lukę na rynku, czyli brak kompletnego katalogu samochodów produkowanych seryjnie. Oczywiście nie chcemy ograniczyć się tylko do tej wąskiej dziedziny.<br /><br />
                        W chwili obecnej serwis zawiera katalog samochodów produkowanych seryjnie oraz katalog pojazdów prototypowych i studialnych. Przeczytać tu można również artykuły o tematyce technicznej. Nie chcemy tu powielać pomysłów większych portali i "produkować" wiadomości na temat wszystkiego co łączy się z samochodami. Będziemy się skupiać wyłącznie na informacjach związanych stricte z samochodami lub z ciekawymi wydarzeniami i Salonami Samochodowymi.<br /><br />
                        Działamy stosunkowo niedługo i dlatego na stronie naszego serwisu można znaleźć niewielką jeszcze ilość tych materiałów.<br /><br />
                        Właśnie uruchomiliśmy "Małą encyklopedię samochodową", która w sposób krótki i przejrzysty charakteryzuje zespoły samochodu oraz "rozszyfrowuje" podstawowe skróty stosowane w motoryzacji. Prezentujemy tu również "rozwinięcia" nazw firm, zarówno tych polskich, jak i zagranicznych, które są ściśle związane z motoryzacją.<br /><br />
                        Wraz z upływem czasu planujemy w miarę regularne powiększanie bazy katalogowej, zarówno o pojazdy najnowsze jak i o starsze, dążąc do kompletacji poszczególnych rodzin i marek.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}