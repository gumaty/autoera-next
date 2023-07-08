import React, {useEffect, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import classes from "./LogoSwiper.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Link from "next/link";
import { useMediaQuery } from 'react-responsive';
import {Typography} from "@mui/material";
import {log} from "next/dist/server/typescript/utils";

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
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={numberSlidesPerView}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
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
                            <Link style={{ display: "flex", justifyContent: "center"}}
                                key={rodzina.ID_typy}
                                href={`/seryjne/${rodzina.nazwa_marka}/${rodzina.nazwa_typ}`}
                            >
                                <img
                                    src={`http://server090121.nazwa.pl/images/family/tn/${rodzina.img_typ}.webp`} alt={`Miniatura ${rodzina.nazwa_marka} ${rodzina.nazwa_typ}`}
                                />
                                <Typography sx={{position: "absolute", bottom: -15, left: 10, mb: 2, color: 'red', fontWeight: 'bold'}}>
                                    {rodzina.nazwa_typ}
                                </Typography>
                            </Link>
                        </SwiperSlide>
                    ))}



            </Swiper>
        </>
    );
}
