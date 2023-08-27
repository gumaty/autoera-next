import styles from "@/components/SerialMain.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoSwiper from "@/components/LogoSwiper";
import {Box, Typography} from "@mui/material";
import React from "react";
import SideBar from "@/components/SideBar";
import SideBarMix from "@/components/SideBarMix";
import CardContainer from "@/components/CardContainer";

function HomeMain({results}) {

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
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
                    <CardContainer category={'seryjne'} cardsSql={results[0]} />
                    <CardContainer category={'studialne'} cardsSql={results[1]} />
                </Box>
            </div>
            <div className={styles.sidebar}>
                {/*<SideBar sides={results[2]}/>*/}
                <SideBarMix prods={results[2]} studs={results[3]} articles={results[4]} />
            </div>
        </div>
    )

}

export default HomeMain;