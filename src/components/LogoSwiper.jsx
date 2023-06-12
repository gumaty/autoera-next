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

export default function LogoSwiper() {

    const isSmallestScreen = useMediaQuery({ query: '(max-width: 370px)' });
    const isSmallerScreen = useMediaQuery({ query: '((min-width: 371px) and (max-width: 480px)' });
    const isSmallScreen = useMediaQuery({ query: '(min-width: 481px) and (max-width: 600px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 601px) and (max-width: 680px)' });
    const isBigScreen = useMediaQuery({ query: '(min-width: 681px) and (max-width: 780px)' });
    const isBiggerScreen = useMediaQuery({ query: '(min-width: 781px) and (max-width: 900px)' });
    const isBiggestScreen = useMediaQuery({ query: '(min-width: 901px) and (max-width: 1020px)' });
    const isHugeScreen = useMediaQuery({ query: '(min-width: 1021px) and (max-width: 1200px)' });
    const isVeryHugeScreen = useMediaQuery({ query: '(min-width: 1201px) and (max-width: 1536px)' });

    let numberSlidesPerView = 10; // Domyślna wartość

    if (isSmallestScreen) {
        numberSlidesPerView = 2.5; // Wartość dla małego ekranu
    } else if (isSmallerScreen) {
        numberSlidesPerView = 3; // Wartość dla średniego ekranu
    } else if (isSmallScreen) {
        numberSlidesPerView = 4; // Wartość dla średniego ekranu
    } else if (isMediumScreen) {
        numberSlidesPerView = 5; // Wartość dla średniego ekranu
    } else if (isBigScreen) {
        numberSlidesPerView = 6; // Wartość dla średniego ekranu
    } else if (isBiggerScreen) {
        numberSlidesPerView = 7; // Wartość dla średniego ekranu
    } else if (isBiggestScreen) {
        numberSlidesPerView = 8; // Wartość dla średniego ekranu
    } else if (isHugeScreen) {
        numberSlidesPerView = 9; // Wartość dla średniego ekranu
    }else if (isVeryHugeScreen) {
        numberSlidesPerView = 10; // Wartość dla średniego ekranu
    }

    const [loadedBrands, setLoadedBrands] = useState([]);

    useEffect(() => {
        fetch(
            'https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/brands.json'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const brands = [];

                for (const key in data) {
                    const brand = {
                        id: key,
                        ...data[key],
                    };

                    brands.push(brand);
                }

                setLoadedBrands(brands);
            });
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
                {loadedBrands
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((brand) => (
                        <SwiperSlide className={classes.swiperSlide} key={brand.name}>
                            <Link style={{ display: "flex", justifyContent: "center"}}
                                key={brand.name}
                                href={`/seryjne/${brand.name}`}
                            >
                                <img
                                    src={`http://www.auto-era.pl/nowa/src/images/logos/tn/${brand.image}.jpg`} alt={`Logo ${brand.name}`}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}



            </Swiper>
        </>
    );
}
