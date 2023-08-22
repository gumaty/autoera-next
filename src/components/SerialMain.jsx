import styles from "@/components/SerialMain.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoSwiper from "@/components/LogoSwiper";
import {Box, Typography} from "@mui/material";
import React from "react";
import SideBar from "@/components/SideBar";

function SerialMain({results, title}) {



    const brands = results[0];

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
                <LogoSwiper brands={brands}/>
                <Box sx={{p: '20px', bgcolor: 'white'}} >
                    <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                        <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{title}</Typography>
                    </Box>
                    <Typography sx={{color: '#153F1A', textAlign: "justify"}}>
                        Baza danych umieszczona na naszym portalu stanowi ogromny zbiór informacji ogólnych i technicznych o samochodach osobowych. Nasz zbiór z pewnością zainteresuje zarówno nabywców i użytkowników samochodów, miłośników pojazdów tego rodzaju (w tym także o charakterze zabytkowym) jak i profesjonalistów związanych z tą dziedziną techniki. <br /><br />
                        Oprócz danych technicznych zamieszczamy krótkie opisy poszczególnych marek i rodzin pojazdów oraz odpowiednie ilustracje. W odróżnieniu od wielu innych portali można tu znaleźć informacje nie tylko o pojazdach aktualnie oferowanych w Polsce, ale również o modelach dostępnych na innych rynkach (w tym także spoza Europy). Kolejną szczególną cechą tej bazy danych jest zamieszczenie w niej także starszych pojazdów, a więc z okresu wielu dziesięcioleci. Takie zestawienie pozwala na ocenę zmian w konstrukcji samochodów, jakie dokonały się w tym czasie.<br /><br />
                        Opracowana przez Redakcję portalu AUTO-ERA baza zawiera zestaw danych technicznych opisujących każdy samochód osobowy w jednakowy sposób. Przyjęty zestaw danych technicznych dość dokładnie opisuje samochody współczesne, ale niektóre parametry pojazdów uznawane obecnie za bardzo istotne nie były dawniej podawane przez producentów (np. moment obrotowy silnika, pojemność bagażnika, czas rozpędzania itp.). Należy też zwrócić uwagę na fakt, że w tak długim okresie czasu zmieniały się sposoby pomiarów niektórych charakterystycznych parametrów pojazdów (np. mocy silnika, zużycia paliwa, objętości bagażnika). Porównywanie takich parametrów, ze względu na odmienne metody pomiaru w różnych krajach i w różnych okresach czasu może mieć jedynie charakter przybliżony. Dokładniejsze analizy mogą być prowadzone jedynie w ramach określonych regionów świata oraz w węższych okresach (np. w Europie, po 2000 roku).<br /><br />
                        Zawarte w bazie informacje pochodzą głównie od producentów samochodów, ale należy tu podkreślić, że występują pewne różnice w danych pochodzących z różnych krajów. Wynika to ze zróżnicowania wymagań formalnych, procedur badawczych oraz podstawowego wyposażenia samochodu na poszczególnych rynkach.<br /><br />
                        Wymogi komputerowego zapisu i prezentacji określonych danych technicznych wprowadziły pewne ograniczenia i narzuciły sposoby wyszukiwania konkretnego samochodu i odpowiedniego zestawu jego danych technicznych. Ogólnodostępna baza informacji z pewnością zadowoli znaczne grono internautów, ale w przypadku poszukiwania dalszych dokładniejszych danych można będzie je u nas uzyskać w niedalekiej przyszłości za niewielką opłatą.<br /><br />
                        Nasza baza będzie stale rozbudowywana i uzupełniana o dane kolejnych modeli samochodów, zarówno tych najnowszych jak i starszych, których poszukują miłośnicy "oldtimerów" i "youngtimerów".
                    </Typography>
                </Box>
            </div>
            <div className={styles.sidebar}>
                <SideBar sides={results[1]}/>
            </div>
        </div>
    )

}

export default SerialMain;