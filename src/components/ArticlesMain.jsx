import styles from '@/components/SerialMain.module.css';
import imgstyles from '@/components/Images.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import LogoSwiper from '@/components/LogoSwiper';
import { Box, Typography } from '@mui/material';
import React from 'react';
import SideBar from '@/components/SideBar';
import SideBarMix from '@/components/SideBarMix';
import EncySwiper from '@/components/EncySwiper';
import ArticlesAccordion from '@/components/ArticlesAccordion';

function ArticlesMain({ results, title }) {
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
							borderColor: 'red',
							marginInline: 'auto',
						}}
					>
						<Box sx={{ marginInline: 'auto' }}>
							<img
								className={imgstyles.imgstyle}
								src={`http://server090121.nazwa.pl/images/articles.webp`}
								alt={`Laptop i notatnik`}
								style={{ maxWidth: '500px', width: '100%' }}
							/>
						</Box>
					</Box>
					<Box
						sx={{ mb: 2, px: 2, py: 1, display: 'block', textAlign: 'center' }}
					>
						<ArticlesAccordion articles={results[0]} />
					</Box>
					<Typography sx={{ color: '#153F1A', textAlign: 'left' }}>
						Naszą misją i pasją jest promowanie oraz przekazywanie rzetelnej
						wiedzy z dziedziny techniki motoryzacyjnej i jej historii. W tym
						celu publikujemy regularnie artykuły i felietony związane z tematykę
						motoryzacyjną skupiając się nie tylko na kontekście historycznym,
						ale również na nowych technologiach i trendach rozwoju motoryzacji.
						<br />
						<br />
						Przybliżamy historię marek samochodowych, ważnych postaci dla świata
						motoryzacji oraz rozwiązań inżynierskich, które miały wpływ na
						rozwój motoryzacji zarówno z perspektywy technicznej jak i
						społecznej, ekonomicznej i geopolitycznej.
						<br />
						<br />
						Jesteśmy również otwarci na opracowywanie tematów i tekstów
						proponowanych przez naszych Czytelników.
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

export default ArticlesMain;
