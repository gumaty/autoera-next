import imgstyles from '@/components/Images.module.css';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GalleryModal from '@/components/GalleryModal';
import ModelsAccordion from '@/components/ModelsAcordion';

function GenerationContainer(props) {
	const { familyData, gallery, models } = props;

	const descriptionArray = familyData.opis.split(/\n/g);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				p: '20px',
				bgcolor: 'white',
			}}
		>
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
					Katalog samochodów seryjnych
				</Typography>
				<Typography
					variant='h5'
					component='h1'
					textAlign='center'
					sx={{ color: '#153F1A', fontWeight: '700' }}
				>
					{familyData.marka_gener} {familyData.typ_gener} {familyData.gen_gener}{' '}
					({familyData.lata})
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					mb: 2,
					py: 2,
					width: { xs: '100%', sm: '80%' },
					borderTop: 2,
					borderBottom: 2,
					borderColor: 'red',
					marginInline: 'auto',
				}}
			>
				<Box sx={{ marginInline: 'auto' }}>
					<img
						className={imgstyles.imgstyle}
						src={`http://server090121.nazwa.pl//images/family/${familyData.img_gener}.webp`}
						alt={`Miniatura ${familyData.marka_gener} ${familyData.typ_gener}`}
						style={{ maxWidth: '500px', width: '100%' }}
						loading='lazy'
					/>
				</Box>
			</Box>
			<Box>
				<ModelsAccordion models={models} />
			</Box>
			<Box>
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
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					flexWrap: 'wrap',
					borderTop: 2,
					borderBottom: 2,
					borderColor: 'red',
					marginInline: 'auto',
				}}
			>
				{gallery &&
					Array.isArray(gallery) &&
					gallery.map((image) => (
						<Box
							key={image.image_ID}
							sx={{ margin: 1, '&:hover': { cursor: 'pointer' } }}
						>
							<GalleryModal image={image} />
						</Box>
					))}
			</Box>
		</Box>
	);
}

export default GenerationContainer;
