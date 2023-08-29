import styles from "@/components/SerialMain.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoSwiper from "@/components/LogoSwiper";
import {Box, Typography} from "@mui/material";
import React from "react";
import SideBar from "@/components/SideBar";
import SideBarMix from "@/components/SideBarMix";
import EncySwiper from "@/components/EncySwiper";

function EncyMain({results, title}) {



    const brands = results[0];

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
                <Box sx={{pt: '20px', bgcolor: 'white'}} >
                    <Typography variant='h6' component='h3' sx={{color: '#153F1A', fontWeight: '700', textAlign: 'center'}}>Wybierz pierwszą literę hasła:</Typography>
                </Box>
                <Box>
                    <EncySwiper letters={results[0]}/>
                </Box>
                <Box sx={{p: '20px', bgcolor: 'white'}} >
                    <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                        <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{title}</Typography>
                    </Box>
                    <Box sx={{display: "flex", mb: 2, py: 2, width: { xs: "100%", sm: "80%" }, borderTop: 2, borderBottom: 2, borderColor: 'red', marginInline: "auto"}}>
                        <Box sx={{marginInline: "auto"}}>
                            <img
                                src={`http://server090121.nazwa.pl/images/encyklopedia.webp`} alt={`Zdjęcie rentgenowskie samochody wyścigowego`} style={{maxWidth: "500px", width: "100%"}}
                            />
                        </Box>
                    </Box>
                    <Typography sx={{color: '#153F1A', textAlign: "justify"}}>
                        Budowa współczesnych samochodów osobowych jest dosyć skomplikowana. Aby poznać i zrozumieć działanie wszystkich mechanizmów i podzespołów tych pojazdów niezbędny jest odpowiedni zasób wiedzy. W tak złożonym wyrobie zawarte są różne materiały i technologie, tak więc niezbędna jest wiedza z wielu dziedzin.<br /><br />
                        W celu ułatwienia naszym internautom przyswojenie technicznej wiedzy o samochodzie wprowadziliśmy dział "Mała encyklopedia samochodowa". Tutaj właśnie znajdują się krótkie opisy działania i budowy poszczególnych układów, zespołów oraz podzespołów, wyjaśnienia terminów i skrótów krajowych oraz zagranicznych stosowanych w literaturze o tematyce motoryzacyjnej. Spotkacie tu również hasła związane ze znanymi ludźmi i organizacjami pracującymi na rzecz szeroko pojętej motoryzacji.<br /><br />
                        To kompendium wiedzy motoryzacyjnej będzie systematycznie uzupełniane o nowe hasła.
                    </Typography>
                </Box>
            </div>
            <div className={styles.sidebar}>
                <SideBarMix prods={results[1]} studs={results[2]} articles={results[3]} />
            </div>
        </div>
    )

}

export default EncyMain;