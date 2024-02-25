import React from 'react';

function SiteMapTypes({ results }) {
	const records = results[1];

	return (
		<>
			{records.map((record) => (
				<url key={record.ID_type}>
					<loc>
						https://www.auto-era.pl/seryjne/{record.nazwa_marka}/
						{record.nazwa_typ}
					</loc>
					<changefreq>weekly</changefreq>
					<priority>0.5</priority>
				</url>
			))}
		</>
	);
}

export default SiteMapTypes;
