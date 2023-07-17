import React, {useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper React components
// import { register } from 'swiper/element/bundle';

// Import Swiper styles
import "swiper/element/css";
import "swiper/element/css/effect-coverflow";
import "swiper/element/css/pagination";

import classes from "./LogoSwiper.module.css";

// import required modules

import Link from "next/link";
import {Box, Typography} from "@mui/material";

// register();
export default function FamilySwiper(props) {

    const [numberSlidesPerView, setNumberSlidesPerView] = useState(0);

    const { rodziny } = props;

    useEffect(() => {
        const handleResize = () => {
            const newResolutionDividedBy250 = window.innerWidth / 185
            setNumberSlidesPerView(newResolutionDividedBy250);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <Box sx={{pt: '20px', bgcolor: 'white'}} >
                <Typography variant='h6' component='h3' sx={{color: '#153F1A', fontWeight: '700', textAlign: 'center'}}>Wybierz rodzinę:</Typography>
            </Box>
            <Box>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={numberSlidesPerView}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -20,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className={classes.swiper}
            >
                {rodziny
                    // .slice()
                    // .sort((a, b) => a.family.localeCompare(b.family))
                    .map((rodzina) => (
                        <SwiperSlide className={classes.swiperSlide} key={rodzina.ID_typy} style={{position: "relative"}}>
                            <a style={{ display: "flex", justifyContent: "center"}}
                                href={`/seryjne/${rodzina.nazwa_marka}/${rodzina.nazwa_typ}`}
                            >
                                <img
                                    src={`http://server090121.nazwa.pl/images/family/tn/${rodzina.img_typ}.webp`} alt={`Miniatura ${rodzina.nazwa_marka} ${rodzina.nazwa_typ}`}
                                />
                                <Typography sx={{position: "absolute", bottom: 70, left: 10, mb: 2, color: 'red', fontWeight: 'bold'}}>
                                    {rodzina.nazwa_typ}
                                </Typography>
                            </a>
                        </SwiperSlide>
                    ))}
            </Swiper>
            </Box>
        </>
    );


}
