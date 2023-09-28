import React, {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import classes from "./LogoSwiper.module.css";
import { EffectCoverflow, Pagination } from "swiper";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import {Box, Typography} from "@mui/material";

export default function LogoSwiper({brands}) {

    const [numberSlidesPerView, setNumberSlidesPerView] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newResolutionDividedBy250 = window.innerWidth / 120
            setNumberSlidesPerView(newResolutionDividedBy250);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => { window.removeEventListener('resize', handleResize); };
    }, []);

    const [loadedBrands, setLoadedBrands] = useState(brands);

    return (
        <div className={classes.container}>
            <Box sx={{pt: '20px', bgcolor: 'white'}} >
                <Typography variant='h6' component='h3' sx={{color: '#153F1A', fontWeight: '700', textAlign: 'center'}}>Wybierz markę:</Typography>
            </Box>
            <Box>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={numberSlidesPerView}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -30,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className={classes.swiper}
            >
                {loadedBrands
                    // .slice()
                    // .sort((a, b) => a.nazwa_marka.localeCompare(b.nazwa_marka))
                    .map((brand) => (
                        <SwiperSlide className={classes.swiperSlide} key={brand.marki_ID}>
                            <Link style={{ display: "flex", justifyContent: "center"}}
                                key={brand.marki_ID}
                                href={`/seryjne/${brand.nazwa_marka}`}
                            >
                                <img
                                    src={`http://server090121.nazwa.pl/images/logos/tn/${brand.img_marka}.webp`} alt={`Logo ${brand.nazwa_marka}`}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}

            </Swiper>
            </Box>
        </div>
    );
}
