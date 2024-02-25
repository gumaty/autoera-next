import React from 'react';

function SiteMapEncy({ results }) {
	const records = results[6];

	return (
		<>
			{records.map((record) => (
				<url key={record}>
					<loc>https://www.auto-era.pl/encyklopedia/{record}</loc>
					<changefreq>weekly</changefreq>
					<priority>0.5</priority>
				</url>
			))}
		</>
	);
}

export default SiteMapEncy;
