import styles from '@/components/SerialMain.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react';
import SideBarMix from '@/components/SideBarMix';
import EncyContainer from '@/components/EncyContainer';

function EncyLetterMain({ results, title }) {
	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<Breadcrumbs />
				<EncyContainer entries={results[0]} />
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

export default EncyLetterMain;
