import React, { useEffect, useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
// Import Swiper React components
// import { register } from 'swiper/element/bundle';

// Import Swiper styles
import 'swiper/element/css';
import 'swiper/element/css/effect-coverflow';
import 'swiper/element/css/pagination';

import classes from './LogoSwiper.module.css';

// import required modules
import imgstyles from '@/components/Images.module.css';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

// register();
export default function FamilySwiper(props) {
	const [numberSlidesPerView, setNumberSlidesPerView] = useState(0);

	const { rodziny } = props;

	useEffect(() => {
		const handleResize = () => {
			const newResolutionDividedBy250 = window.innerWidth / 185;
			setNumberSlidesPerView(newResolutionDividedBy250);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={classes.container}>
			<Box sx={{ pt: '20px', bgcolor: 'white' }}>
				<Typography
					variant='h6'
					component='h3'
					sx={{ color: '#153F1A', fontWeight: '700', textAlign: 'center' }}
				>
					Wybierz rodzinę:
				</Typography>
			</Box>
			<Box>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={numberSlidesPerView}
					coverflowEffect={{
						rotate: 0,
						stretch: -50,
						depth: 0,
						modifier: 1,
						slideShadows: false,
					}}
					pagination={false}
					navigation={true}
					modules={[EffectCoverflow, Pagination]}
					className={classes.swiper}
				>
					{rodziny
						// .slice()
						// .sort((a, b) => a.family.localeCompare(b.family))
						.map((rodzina) => (
							<SwiperSlide
								className={classes.swiperSlide}
								key={rodzina.ID_typy}
								style={{ position: 'relative' }}
							>
								<a
									style={{ display: 'flex', justifyContent: 'center' }}
									href={`/seryjne/${rodzina.nazwa_marka}/${rodzina.nazwa_typ}`}
								>
									<img
										className={imgstyles.tnstyle}
										src={`http://server090121.nazwa.pl/images/family/tn/${rodzina.img_typ}.webp`}
										alt={`Miniatura ${rodzina.nazwa_marka} ${rodzina.nazwa_typ}`}
										loading='lazy'
									/>
									<Typography
										sx={{
											position: 'absolute',
											top: 5,
											left: -15,
											mb: 2,
											px: 1,
											background: '#ffffff88',
											borderRadius: 2,
											color: 'red',
											fontWeight: 'bold',
										}}
									>
										{rodzina.nazwa_typ}
									</Typography>
								</a>
							</SwiperSlide>
						))}
				</Swiper>
			</Box>
		</div>
	);
}
