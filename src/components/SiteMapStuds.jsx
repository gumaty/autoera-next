import React from 'react';

function SiteMapStuds({ results }) {
	const records = results[4];

	return (
		<>
			{records.map((record) => (
				<url key={record.ID}>
					<loc>
						https://auto-era.pl/studialne/{record.marka}/{record.model}
					</loc>
					<changefreq>weekly</changefreq>
					<priority>0.5</priority>
				</url>
			))}
		</>
	);
}

export default SiteMapStuds;
