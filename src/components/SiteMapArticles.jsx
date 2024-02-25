import React from 'react';

function SiteMapArticles({ results }) {
	const records = results[5];

	return (
		<>
			{records.map((record) => (
				<url key={record.art_id}>
					<loc>https://www.auto-era.pl/articles/{record.art_title}</loc>
					<changefreq>weekly</changefreq>
					<priority>0.5</priority>
				</url>
			))}
		</>
	);
}

export default SiteMapArticles;
