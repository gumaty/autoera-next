import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";

const title = "Encyklopedia";

export default function EncyklopediaHome() {
    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
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
                        Budowa współczesnych samochodów osobowych jest dosyć skomplikowana. Aby poznać i zrozumieć działanie wszystkich mechanizmów i podzespołów tych pojazdów niezbędny jest odpowiedni zasób wiedzy. W tak złożonym wyrobie zawarte są różne materiały i technologie, tak więc niezbędna jest wiedza z wielu dziedzin.<br /><br />
                        W celu ułatwienia naszym internautom przyswojenie technicznej wiedzy o samochodzie wprowadziliśmy dział "Mała encyklopedia samochodowa". Tutaj właśnie znajdują się krótkie opisy działania i budowy poszczególnych układów, zespołów oraz podzespołów, wyjaśnienia terminów i skrótów krajowych oraz zagranicznych stosowanych w literaturze o tematyce motoryzacyjnej. Spotkacie tu również hasła związane ze znanymi ludźmi i organizacjami pracującymi na rzecz szeroko pojętej motoryzacji.<br /><br />
                        To kompendium wiedzy motoryzacyjnej będzie systematycznie uzupełniane o nowe hasła.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}