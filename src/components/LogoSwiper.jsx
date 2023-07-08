import React, {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import classes from "./LogoSwiper.module.css";
import { EffectCoverflow, Pagination } from "swiper";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

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
                                    src={`/images/logos/tn/${brand.img_marka}.webp`} alt={`Logo ${brand.nazwa_marka}`}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}

            </Swiper>
        </>
    );
}
