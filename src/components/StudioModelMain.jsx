import styles from '@/components/SerialMain.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react';
import StudioModelContainer from '@/components/StudioModelContainer';
import SideBarMix from '@/components/SideBarMix';

function StudioModelMain({ results, title }) {
	const result = results[0];

	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<Breadcrumbs />
				<StudioModelContainer title={title} modelData={result[0]} />
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

export default StudioModelMain;
