import React, {useEffect, useRef, useState} from "react";
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

export default function GenerationSwiper(props) {

    const [numberSlidesPerView, setNumberSlidesPerView] = useState(0);

    const { generacje } = props;


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
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className={classes.swiper}
            >
                {generacje
                    // .slice()
                    // .sort((a, b) => a.family.localeCompare(b.family))
                    .map((generacja) => (
                        <SwiperSlide className={classes.swiperSlide} key={generacja.gener_ID} style={{position: "relative"}}>
                            <a style={{ display: "flex", justifyContent: "center"}}
                                href={`/seryjne/${generacja.marka_gener}/${generacja.typ_gener}/${generacja.gen_gener}`}
                            >
                                <img
                                    src={`http://server090121.nazwa.pl/images/family/tn/${generacja.img_gener}.webp`} alt={`Miniatura ${generacja.marka_gener} ${generacja.typ_gener} ${generacja.gen_gener}`}
                                />
                                <Typography sx={{position: "absolute", bottom: -15, left: 10, mb: 2, color: 'red', fontWeight: 'bold'}}>
                                    {generacja.typ_gener} {generacja.gen_gener}
                                </Typography>
                            </a>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}
