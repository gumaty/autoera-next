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



export default function EncySwiper({ letters }) {

    const [numberSlidesPerView, setNumberSlidesPerView] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newDevidedResolution = window.innerWidth / 120
            setNumberSlidesPerView(newDevidedResolution);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [loadedBrands, setLoadedBrands] = useState([]);

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={numberSlidesPerView}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -45,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className={classes.swiper}
            >
                {letters
                    // .slice()
                    // .sort((a, b) => a.id.localeCompare(b.id))
                    .map((brand) => (
                        <SwiperSlide className={classes.swiperSlide} key={brand}>
                            <Link style={{ display: "flex", justifyContent: "center"}}
                                href={`/encyklopedia/${brand}`}
                            >
                                <img
                                    src={`http://server090121.nazwa.pl/images/letters/${brand.toLowerCase()}.webp`} alt={`Znak ${brand}`}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}



            </Swiper>
        </>
    );
}
