import styles from '@/components/SerialMain.module.css';
import imgstyles from '@/components/Images.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Box, Typography } from '@mui/material';
import React from 'react';
import StudioAccordion from '@/components/StudioAcordion';
import SideBarMix from '@/components/SideBarMix';

function StudioMain({ results, title }) {
	const result = results[0];

	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<Breadcrumbs />
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
							{title}
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
							marginInline: 'auto',
						}}
					>
						<Box sx={{ marginInline: 'auto' }}>
							<img
								className={imgstyles.imgstyle}
								src={`https://auto-era.pl/images/studialne.webp`}
								alt={`Szkic samochodu studialnego Nissan IMq`}
								style={{ maxWidth: '500px', width: '100%' }}
							/>
						</Box>
					</Box>
					<Box
						sx={{ mb: 2, px: 2, py: 1, display: 'block', textAlign: 'center' }}
					>
						<StudioAccordion models={results[0]} />
					</Box>
					<Typography sx={{ color: '#153F1A', textAlign: 'left' }}>
						Oprócz seryjnych samochodów osobowych prezentowane są pojazdy, które
						nigdy nie były produkowane seryjnie. Pojazdy te powstały jako
						prototypy lub w formie samochodów studialnych (concept cars). W
						pierwszej grupie znajdują się samochody, które z różnych względów
						nigdy nie doczekały się wdrożenia do produkcji lub takie których
						późniejsze wersje produkcyjne zostały istotnie zmienione (np. Ford
						Ka).
						<br />
						<br />
						Samochody studialne są z założenia przeznaczone do badań
						poznawczych, sprawdzenia nowych rozwiązań technicznych lub celów
						marketingowych. W tym ostatnim przypadku celem budowy jest sondaż
						opinii publicznej w zakresie funkcji użytkowej oraz zewnętrznej
						formy nadwozia. Część zastosowanych w tych pojazdach rozwiązań
						trafiała w późniejszym okresie do pojazdów seryjnych, a z niektórych
						prezentowanych pojazdów wykorzystywano tylko nazwę (np. Renault
						Laguna).
						<br />
						<br />W przypadku takich pojazdów, szczegółowe dane techniczne nie
						są zwykle ujawniane, dlatego w naszym serwisie umieszczone są
						jedynie krótkie opisy ich budowy i podstawowe dane techniczne.
						Uzupełnieniem opisów są zdjęcia tych samochodów. Pojazdy tego
						rodzaju są swoistą ozdobą najważniejszych Salonów Samochodowych, ale
						równocześnie świadczą o możliwościach i potencjale poszczególnych
						producentów i firm projektowych, a także wskazują kierunki
						przyszłościowego rozwoju motoryzacji.
					</Typography>
				</Box>
			</div>
			<div className={styles.sidebar}>
				{/*<StudioSideBar sides={results[1]}/>*/}
				<SideBarMix
					prods={results[1]}
					studs={results[2]}
					articles={results[3]}
				/>
			</div>
		</div>
	);
}

export default StudioMain;
