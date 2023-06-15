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

    const { rodzina } = props;


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

            const data = rodzina.generation;

                const generations = [];

                for (const key in data) {
                    const generation = {
                        id: key,
                        ...data[key],
                    };

                    generations.push(generation);
                }

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
                {generations
                    .slice()
                    .sort((a, b) => a.family.localeCompare(b.family))
                    .map((data) => (
                        <SwiperSlide className={classes.swiperSlide} key={data.id} style={{position: "relative"}}>
                            <Link style={{ display: "flex", justifyContent: "center"}}
                                key={data.id}
                                href={`/seryjne/${data.brand}/${data.family}/${data.generation}`}
                            >
                                <img
                                    src={`/images/family/tn/${data.image}.jpg`} alt={`Miniatura ${data.brand} ${data.family} ${data.generation}`}
                                />
                                <Typography sx={{position: "absolute", bottom: -15, left: 10, mb: 2, color: 'red', fontWeight: 'bold'}}>
                                    {data.family} {data.generation}
                                </Typography>
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}
