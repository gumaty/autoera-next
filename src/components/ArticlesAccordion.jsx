import * as React from 'react';
import imgstyles from '@/components/Images.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ArticleAccordion({ articles }) {
	const [loadedBrands, setLoadedBrands] = useState(articles);
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div style={{ maxWidth: 700, width: '100%', marginInline: 'auto' }}>
			<Accordion sx={{ boxShadow: 5 }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography
						variant='h6'
						component='h1'
						sx={{ color: '#153F1A', fontWeight: '700' }}
					>
						Wybierz artykuł:
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{loadedBrands.map((item) => (
						<Accordion
							key={item[0]}
							sx={{
								maxWidth: 700,
								width: '100%',
								marginInline: 'auto',
								boxShadow: 5,
							}}
							expanded={expanded === `${item[0]}`}
							onChange={handleChange(`${item[0]}`)}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'
							>
								<Typography
									variant='h6'
									component='h1'
									sx={{ color: '#153F1A', fontWeight: '700' }}
								>
									{item[0]}
								</Typography>
							</AccordionSummary>
							{item[1].map((article) => (
								<AccordionDetails key={article.art_id}>
									<Link
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											color: '#153F1A',
											textDecoration: 'none',
										}}
										href={`/articles/${article.art_title}`}
									>
										<img
											className={imgstyles.mnstyle}
											src={`http://server090121.nazwa.pl/images/articles/${article.art_picture}.jpg`}
											alt={`Zdjęcie do artykułu`}
											style={{ maxWidth: '60px', width: '100%' }}
										/>
										<Typography>
											{article.art_title} ({article.art_author},{' '}
											{article.art_date})
										</Typography>
									</Link>
								</AccordionDetails>
							))}
						</Accordion>
					))}
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
