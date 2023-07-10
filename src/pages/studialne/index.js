import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import StudioAccordion from "@/components/StudioAcordion";
import React from "react";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {


    const brands = await prisma.stud.groupBy(
        {
            by: ['marka'],
            orderBy: {
                marka: 'asc',
            },
        }
    );

    const cars = await prisma.stud.findMany(
        {
            select: {
                marka: true,
                model: true,
                rok: true,
                opis: true,
                picture: true,
            },
            orderBy: [
                {
                    marka: "asc",
                },
                {
                    model: "asc",
                },
            ],
        }
    );

    const tempArray = [];

    for (let i = 0; i < brands.length; i++) {
        const obj = {};
        obj['marka'] = brands[i].marka;
        obj['models'] = [];
        for (let j = 0; j < cars.length; j++) {
            if (cars[j].marka === brands[i].marka) {
                obj['models'].push(cars[j]);
            }
        }
        tempArray.push(obj);
    }


    const result = tempArray;

    return {
        props: { result }
    };
}

const title = "Pojazdy studialne i prototypowe";

export default function StudioHome({result}) {

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
                    <Box sx={{display: "flex", mb: 2, py: 2, width: { xs: "100%", sm: "80%" }, borderTop: 2, borderBottom: 2, marginInline: "auto"}}>
                        <Box sx={{marginInline: "auto"}}>
                            <img
                                src={`http://server090121.nazwa.pl/images/studialne.webp`} alt={`Szkic samochodu studialnego Nissan IMq`} style={{maxWidth: "500px", width: "100%"}}
                            />
                        </Box>
                    </Box>
                    <Box sx={{mb:2, px: 2, py: 1, display:'block', textAlign: 'center'}}>

                        <StudioAccordion models={result}/>
                    </Box>
                    <Typography sx={{color: '#153F1A', textAlign: "justify"}}>
                        Oprócz seryjnych samochodów osobowych prezentowane są pojazdy, które nigdy nie były produkowane seryjnie. Pojazdy te powstały jako prototypy lub w formie samochodów studialnych (concept cars).<br /><br />
                        W pierwszej grupie znajdują się samochody, które z różnych względów nigdy nie doczekały się wdrożenia do produkcji lub takie których późniejsze wersje produkcyjne zostały istotnie zmienione (np. Ford Ka).<br /><br />
                        Samochody studialne są z założenia przeznaczone do badań poznawczych, sprawdzenia nowych rozwiązań konstrukcyjnych czy technologicznych lub celów marketingowych. W tym ostatnim przypadku celem budowy takich pojazdów jest sondaż opinii publicznej w zakresie funkcji użytkowej oraz zewnętrznej formy nadwozia.<br /><br />
                        Część zastosowanych w tych pojazdach rozwiązań technicznych trafiała w późniejszym okresie do pojazdów seryjnych, a z niektórych prezentowanych pojazdów wykorzystywano tylko nazwę (np. Renault Laguna).<br /><br />
                        W przypadku takich pojazdów, szczegółowe dane techniczne nie są zwykle ujawniane, dlatego w naszym serwisie umieszczone są jedynie krótkie opisy ich budowy i podstawowe dane techniczne. Uzupełnieniem opisów są zdjęcia tych samochodów. Pojazdy tego rodzaju są swoistą ozdobą najważniejszych Salonów Samochodowych, ale równocześnie świadczą o możliwościach i potencjale poszczególnych producentów i firm projektowych, a także wskazują kierunki przyszłościowego rozwoju motoryzacji.<br /><br />
                        Baza danych umieszczona na naszym portalu stanowi ogromny zbiór informacji ogólnych i technicznych o samochodach osobowych. Nasz zbiór z pewnością zainteresuje zarówno nabywców i użytkowników samochodów, miłośników pojazdów tego rodzaju (w tym także o charakterze zabytkowym) jak i profesjonalistów związanych z tą dziedziną techniki.<br /><br />
                        Oprócz danych technicznych zamieszczamy krótkie opisy poszczególnych marek i rodzin pojazdów oraz odpowiednie ilustracje. W odróżnieniu od wielu innych portali można tu znaleźć informacje nie tylko o pojazdach aktualnie oferowanych w Polsce, ale również o modelach dostępnych na innych rynkach (w tym także spoza Europy). Kolejną szczególną cechą tej bazy danych jest zamieszczenie w niej także starszych pojazdów, a więc z okresu wielu dziesięcioleci. Takie zestawienie pozwala na ocenę zmian w konstrukcji samochodów, jakie dokonały się w tym czasie.<br /><br />
                        Opracowana przez Redakcję portalu AUTO-ERA baza zawiera zestaw danych technicznych opisujących każdy samochód osobowy w jednakowy sposób. Przyjęty zestaw danych technicznych dość dokładnie opisuje samochody współczesne, ale niektóre parametry pojazdów uznawane obecnie za bardzo istotne nie były dawniej podawane przez producentów (np. moment obrotowy silnika, pojemność bagażnika, czas rozpędzania itp.). Należy też zwrócić uwagę na fakt, że w tak długim okresie czasu zmieniały się sposoby pomiarów niektórych charakterystycznych parametrów pojazdów (np. mocy silnika, zużycia paliwa, objętości bagażnika). Porównywanie takich parametrów, ze względu na odmienne metody pomiaru w różnych krajach i w różnych okresach czasu może mieć jedynie charakter przybliżony. Dokładniejsze analizy mogą być prowadzone jedynie w ramach określonych regionów świata oraz w węższych okresach (np. w Europie, po 2000 roku).<br /><br />
                        Zawarte w bazie informacje pochodzą głównie od producentów samochodów, ale należy tu podkreślić, że występują pewne różnice w danych pochodzących z różnych krajów. Wynika to ze zróżnicowania wymagań formalnych, procedur badawczych oraz podstawowego wyposażenia samochodu na poszczególnych rynkach.<br /><br />
                        Wymogi komputerowego zapisu i prezentacji określonych danych technicznych wprowadziły pewne ograniczenia i narzuciły sposoby wyszukiwania konkretnego samochodu i odpowiedniego zestawu jego danych technicznych. Ogólnodostępna baza informacji z pewnością zadowoli znaczne grono internautów, ale w przypadku poszukiwania dalszych dokładniejszych danych można będzie je u nas uzyskać w niedalekiej przyszłości za niewielką opłatą.<br /><br />
                        Nasza baza będzie stale rozbudowywana i uzupełniana o dane kolejnych modeli samochodów, zarówno tych najnowszych jak i starszych, których poszukują miłośnicy "oldtimerów" i "youngtimerów".
                    </Typography>
                </Box>
            </Container>
        </>
    )
}