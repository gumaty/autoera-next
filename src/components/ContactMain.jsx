import styles from '@/components/SerialMain.module.css';
import imgstyles from '@/components/Images.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import LogoSwiper from '@/components/LogoSwiper';
import { Box, Typography } from '@mui/material';
import React from 'react';
import SideBar from '@/components/SideBar';
import SideBarMix from '@/components/SideBarMix';
import CardContainer from '@/components/CardContainer';
import ContactForm from '@/components/ContactForm';

function ContactMain({ results, title }) {
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
								src={`http://server090121.nazwa.pl/images/email.webp`}
								alt={`Zdjęcie rentgenowskie samochody wyścigowego`}
								style={{ maxWidth: '500px', width: '100%' }}
							/>
						</Box>
					</Box>
					<Typography sx={{ color: '#153F1A', textAlign: 'justify' }}>
						Chcemy ułatwić Wam kontakt z nami, aby portal ten zawierał
						informacje, które Was najbardziej interesują. Jeśli macie jakieś
						sugestie lub propozycje to chętnie dowiemy się co chcielibyście
						zobaczyć lub czego się dowiedzieć.
						<br />
						<br />
						Będziemy się starali sprostać wszelkim prośbom lub uwagom, ponieważ
						chcemy aby ten portal był jak najbardziej interesujący i
						odpowiadający Waszym potrzebom i zainteresowaniom.
					</Typography>
				</Box>
				<Box sx={{ p: '30px', width: 1, bgcolor: 'white' }}>
					<Box
						sx={{
							width: { xs: 1, sm: '500px' },
							marginInline: 'auto',
							p: '30px',
							bgcolor: 'white',
							border: 1,
							borderRadius: 5,
							borderColor: '##153F1A',
							boxShadow: 10,
						}}
					>
						<ContactForm />
					</Box>
				</Box>
			</div>
			<div className={styles.sidebar}>
				<SideBarMix
					prods={results[0]}
					studs={results[1]}
					articles={results[2]}
				/>
			</div>
		</div>
	);
}

export default ContactMain;
