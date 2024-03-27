import React from 'react';

function SiteMapTrades({ results }) {
	const brands = results[0];

	return (
		<>
			
			{brands.map((brand) => (
				<url key={brand.marki_ID}>
					<loc>https://auto-era.pl/seryjne/{brand.nazwa_marka}</loc>
					<changefreq>weekly</changefreq>
					<priority>0.5</priority>
				</url>
			))}
		</>
	);
}

export default SiteMapTrades;
