import React from 'react';

function SiteMapModels({ results }) {
	const records = results[3];

	return (
		<>
			{records.map((record) => (
				<url key={record.model_ID}>
					<loc>
						https://auto-era.pl/seryjne/{record.marka}/{record.rodzina}/
						{record.generacja}/{record.typ_nadwozia}/{record.liczba_drzwi}/
						{record.model}
					</loc>
					<changefreq>weekly</changefreq>
					<priority>0.5</priority>
				</url>
			))}
		</>
	);
}

export default SiteMapModels;
