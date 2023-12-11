import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function BrandContainer({ brandData }) {
	console.log(brandData);

	const descriptionArray = brandData[0].opis_marka.split(/\n/g);

	return (
		<Box sx={{ p: '20px', bgcolor: 'white' }}>
			<Box
				sx={{
					mb: 2,
					px: 2,
					py: 1,
					display: 'block',
					borderLeft: 10,
					borderColor: 'red',
				}}
			>
				<Typography
					variant='h5'
					component='h1'
					sx={{ color: '#153F1A', fontWeight: '700' }}
				>
					Katalog samochodów seryjnych - {brandData[0].nazwa_marka} (
					{brandData[0].lata_marka})
				</Typography>
			</Box>
			<img
				src={`http://server090121.nazwa.pl/images/logos/${brandData[0].img_marka}.webp`}
				alt={`Logo ${brandData[0].nazwa_marka}`}
				style={{ float: 'left' }}
			/>

			{descriptionArray &&
				Array.isArray(descriptionArray) &&
				descriptionArray.map((paragraph, index) => (
					<Typography
						key={index}
						sx={{ mb: 2, color: '#153F1A', textAlign: 'left' }}
					>
						{paragraph}
					</Typography>
				))}
		</Box>
	);
}

export default BrandContainer;
