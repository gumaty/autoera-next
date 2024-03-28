import styles from '@/components/SerialMain.module.css';
import imgstyles from '@/components/Images.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import LogoSwiper from '@/components/LogoSwiper';
import { Box, Typography } from '@mui/material';
import React from 'react';
import SideBarMix from '@/components/SideBarMix';

function SerialMain({ results, title }) {
	const brands = results[0];

	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<Breadcrumbs />
				<LogoSwiper brands={brands} />
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
							width: { xs: '100%', sm: '90%' },
							borderTop: 2,
							borderBottom: 2,
							marginInline: 'auto',
						}}
					>
						<Box sx={{ marginInline: 'auto' }}>
							<img
								className={imgstyles.imgstyle}
								src={`https://server090121.nazwa.pl/images/linia-czasu.webp`}
								alt={`Linia czasu samochodów seryjnych`}
								style={{ maxWidth: '850px', width: '100%' }}
							/>
						</Box>
					</Box>
					<Typography sx={{ color: '#153F1A', textAlign: 'left' }}>
						Baza danych umieszczona na naszym portalu stanowi ogromny zbiór
						informacji ogólnych i technicznych o samochodach osobowych. Oprócz
						danych technicznych zamieszczamy krótkie opisy poszczególnych marek
						i rodzin pojazdów oraz odpowiednie ilustracje. W odróżnieniu od
						wielu innych portali można tu znaleźć informacje nie tylko o
						pojazdach oferowanych w Polsce, ale również o modelach dostępnych na
						innych rynkach (w tym także spoza Europy). Kolejną szczególną cechą
						tej bazy danych jest zamieszczenie w niej także pojazdów sprzed
						wielu dziesięcioleci. Takie zestawienie pozwala na ocenę zmian w
						konstrukcji samochodów, jakie dokonały się w tym czasie.
						<br />
						<br />
						Opracowana przez nas baza zawiera zestaw danych technicznych
						opisujących każdy samochód osobowy w jednakowy sposób. Przyjęty
						zestaw danych technicznych dość dokładnie opisuje samochody
						współczesne, ale niektóre parametry pojazdów uznawane obecnie za
						istotne nie były dawniej podawane przez producentów (np. moment
						obrotowy silnika, pojemność bagażnika, czas rozpędzania itp.).
						Należy też zwrócić uwagę na fakt, że w tak długim okresie czasu
						zmieniały się sposoby pomiarów niektórych charakterystycznych
						parametrów pojazdów (np. mocy silnika, zużycia paliwa, pojemności
						bagażnika).
						<br />
						<br />
						Zawarte w bazie informacje pochodzą głównie od producentów
						samochodów, ale należy tu podkreślić, że występują pewne różnice w
						danych pochodzących z różnych krajów. Wynika to ze zróżnicowania
						wymagań formalnych, procedur badawczych oraz podstawowego
						wyposażenia samochodu na poszczególnych rynkach. Nasza baza będzie
						stale rozbudowywana i uzupełniana o dane kolejnych modeli
						samochodów, zarówno tych najnowszych jak i starszych, których
						poszukują miłośnicy "oldtimerów" i "youngtimerów".
					</Typography>
				</Box>
			</div>
			<div className={styles.sidebar}>
				<SideBarMix
					prods={results[1]}
					studs={results[2]}
					articles={results[3]}
				/>
			</div>
		</div>
	);
}

export default SerialMain;
