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

    const { marka } = props;

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

            const data = marka.families;

                const families = [];

                for (const key in data) {
                    const family = {
                        id: key,
                        ...data[key],
                    };

                    families.push(family);
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
                {families
                    .slice()
                    .sort((a, b) => a.family.localeCompare(b.family))
                    .map((data) => (
                        <SwiperSlide className={classes.swiperSlide} key={data.id} style={{position: "relative"}}>
                            <Link style={{ display: "flex", justifyContent: "center"}}
                                key={data.id}
                                href={`/seryjne/${data.brand}/${data.family}`}
                            >
                                <img
                                    src={`/images/family/tn/${data.image}.webp`} alt={`Miniatura ${data.brand} ${data.family}`}
                                />
                                <Typography sx={{position: "absolute", bottom: -15, left: 10, mb: 2, color: 'red', fontWeight: 'bold'}}>
                                    {data.family}
                                </Typography>
                            </Link>
                        </SwiperSlide>
                    ))}



            </Swiper>
        </>
    );
}
