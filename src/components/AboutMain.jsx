import styles from "@/components/SerialMain.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoSwiper from "@/components/LogoSwiper";
import {Box, Typography} from "@mui/material";
import React from "react";
import SideBar from "@/components/SideBar";
import SideBarMix from "@/components/SideBarMix";
import CardContainer from "@/components/CardContainer";
import ContactForm from "@/components/ContactForm";

function AboutMain({results, title}) {

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
                <Box sx={{p: '20px', bgcolor: 'white'}} >
                    <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                        <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{title}</Typography>
                    </Box>
                    <Box sx={{display: "flex", mb: 2, py: 2, width: { xs: "100%", sm: "80%" }, borderTop: 2, borderBottom: 2, marginInline: "auto"}}>
                        <Box sx={{marginInline: "auto"}}>
                            <img
                                src={`http://server090121.nazwa.pl/images/about.webp`} alt={`Grafika - palec wskazujący punkt na cyfrowej mapie świata `} style={{maxWidth: "500px", width: "100%"}}
                            />
                        </Box>
                    </Box>
                    <Typography sx={{color: '#153F1A', textAlign: "justify"}}>
                        Jesteśmy niewielkim zespołem ludzi, którzy interesują się motoryzacją, a swoje zainteresowania przelewają bądź na papier, bądź do komputera. Zdecydowaliśmy się uruchomić serwis ponieważ chcemy zapełnić lukę na rynku, czyli brak kompletnego katalogu samochodów produkowanych seryjnie. Oczywiście nie chcemy ograniczyć się tylko do tej wąskiej dziedziny.<br /><br />
                        W chwili obecnej serwis zawiera katalog samochodów produkowanych seryjnie oraz katalog pojazdów prototypowych i studialnych. Przeczytać tu można również artykuły o tematyce technicznej. Nie chcemy tu powielać pomysłów większych portali i "produkować" wiadomości na temat wszystkiego co łączy się z samochodami. Będziemy się skupiać wyłącznie na informacjach związanych stricte z samochodami lub z ciekawymi wydarzeniami i Salonami Samochodowymi.<br /><br />
                        Działamy stosunkowo niedługo i dlatego na stronie naszego serwisu można znaleźć niewielką jeszcze ilość tych materiałów.<br /><br />
                        Właśnie uruchomiliśmy "Małą encyklopedię samochodową", która w sposób krótki i przejrzysty charakteryzuje zespoły samochodu oraz "rozszyfrowuje" podstawowe skróty stosowane w motoryzacji. Prezentujemy tu również "rozwinięcia" nazw firm, zarówno tych polskich, jak i zagranicznych, które są ściśle związane z motoryzacją.<br /><br />
                        Wraz z upływem czasu planujemy w miarę regularne powiększanie bazy katalogowej, zarówno o pojazdy najnowsze jak i o starsze, dążąc do kompletacji poszczególnych rodzin i marek.
                    </Typography>
                </Box>
            </div>
            <div className={styles.sidebar}>
                <SideBarMix prods={results[0]} studs={results[1]} articles={results[2]} />
            </div>
        </div>
    )

}

export default AboutMain;