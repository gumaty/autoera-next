import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import MainCard from "@/components/MainCard";
import CardContainer from "@/components/CardContainer";

export default function Home() {

    const prod = [
        {
            id: 1,
            title: "AUDI A3",
            description: "Model A3 wprowadzono na rynek w połowie 1996 roku i był to wówczas najmniejszy model firmy...",
            picture: "aua3_3_fam",
            category: "prod"
        },
        {
            id: 2,
            title: "ALFA ROMEO BRERA",
            description: "Pod nazwą Brera kryje się pełnokrwisty samochód sportowy z nadwoziem typu coupe...",
            picture: "al_brera_fam",
            category: "prod"
        },
        {
            id: 3,
            title: "FORD FOCUS",
            description: "Kompaktowy model o nazwie Focus miał swoją prezentację podczas Salonu Samochodowego w Genewie w marcu 1998 roku...",
            picture: "ford_focus_4_fam",
            category: "prod"
        }
    ];

    const stud = [
        {
            id: 1,
            title: "BMW xActivity",
            description: "Studialny samochód firmy BMW o nazwie xActivity został zaprezentowany podczas Salonu Samochodowego w Detroit w 2003 roku...",
            picture: "bmxactiv",
            category: "stud"
        },
        {
            id: 2,
            title: "ALFA ROMEO KAMAL",
            description: "Studialny model o nazwie Kamal prezentowany był w stoisku Alfy Romeo podczas Salonu Samochodowego w Genewie w 2003 roku...",
            picture: "al_kamal",
            category: "stud"
        },
        {
            id: 3,
            title: "FORD VISOS",
            description: "Studialny pojazd o nazwie Visos stanowił wizję przyszłościowego samochodu sportowego, jakiego brakuje od pewnego czasu w gamie modelowej europejskiego Forda...",
            picture: "fovisos",
            category: "stud"
        }
    ];

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
                    <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700', textAlign: 'center'}}>
                        Auto-era - Twój profesjonalny portal motoryzacyjny
                    </Typography>
                    <Typography variant='h5' component='h2' sx={{color: 'red', fontWeight: '700', textAlign: 'center'}}>
                        WSZYSTKIE AUTA ŚWIATA
                    </Typography>
                    <Typography variant='h5' component='h2' sx={{color: 'red', fontWeight: '700', textAlign: 'center'}}>
                        Nasza misja: INFORMACJA I EDUKACJA
                    </Typography>
                </Box>
                <CardContainer category={'seryjne'} cards={prod} />
                <CardContainer category={'studialne'} cards={stud} />
            </Box>
        </Container>
    </>
  )
}
