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

export default function EncySwiper() {

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

    useEffect(() => {
        fetch(
            'https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/encyklopedia.json'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const allEntries = [];

                for (const key in data) {
                    const entry = {
                        id: key,
                        ...data[key],
                    };
                    allEntries.push(entry);
                }
                setLoadedBrands(allEntries);
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
                    .sort((a, b) => a.id.localeCompare(b.id))
                    .map((brand) => (
                        <SwiperSlide className={classes.swiperSlide} key={brand.id}>
                            <Link style={{ display: "flex", justifyContent: "center"}}
                                key={brand.id}
                                href={`/encyklopedia/${brand.id}`}
                            >
                                <img
                                    src={`/images/letters/${brand.id.toLowerCase()}.webp`} alt={`Znak ${brand.id}`}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}



            </Swiper>
        </>
    );
}
