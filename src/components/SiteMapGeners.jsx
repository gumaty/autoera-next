import React from 'react';

function SiteMapGeners({ results }) {
	const records = results[2];

	return (
		<>
			{records.map((record) => (
				<url key={record.gener_ID}>
					<loc>
						https://auto-era.pl/seryjne/{record.marka_gener}/{record.typ_gener}/{record.gen_gener}
					</loc>
					<changefreq>weekly</changefreq>
					<priority>0.5</priority>
				</url>
			))}
		</>
	);
}

export default SiteMapGeners;
