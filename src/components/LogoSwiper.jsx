import React, {useEffect, useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import classes from "./LogoSwiper.module.css";
import { EffectCoverflow, Pagination } from "swiper";
import Link from "next/link";

export default function LogoSwiper() {

    const [numberSlidesPerView, setNumberSlidesPerView] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newResolutionDividedBy250 = window.innerWidth / 120
            setNumberSlidesPerView(newResolutionDividedBy250);
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
                                    src={`/images/logos/tn/${brand.image}.jpg`} alt={`Logo ${brand.name}`}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}



            </Swiper>
        </>
    );
}
