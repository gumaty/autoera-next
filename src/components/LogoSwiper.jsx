import React, { useRef, useState } from "react";
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

export default function LogoSwiper() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
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
                <SwiperSlide className={classes.swiperSlide}>
                    <Link href={"http://www.auto-era.pl/nowa/index.php?action=marki&brand=ACURA"}>
                        <img src="http://www.auto-era.pl/nowa/src/images/logos/acura.jpg" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <Link href={"http://www.auto-era.pl/nowa/index.php?action=marki&brand=ALFA%20ROMEO"}>
                        <img src="http://www.auto-era.pl/nowa/src/images/logos/alfa.jpg" />
                    </Link>

                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <img src="http://www.auto-era.pl/nowa/src/images/logos/audi.jpg" />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <img src="http://www.auto-era.pl/nowa/src/images/logos/bentley.jpg" />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <img src="http://www.auto-era.pl/nowa/src/images/logos/bmw.jpg" />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <img src="http://www.auto-era.pl/nowa/src/images/logos/cadillac.jpg" />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <img src="http://www.auto-era.pl/nowa/src/images/logos/chevrolet.jpg" />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <img src="http://www.auto-era.pl/nowa/src/images/logos/chrysler.jpg" />
                </SwiperSlide>
                <SwiperSlide className={classes.swiperSlide}>
                    <img src="http://www.auto-era.pl/nowa/src/images/logos/citroen.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
