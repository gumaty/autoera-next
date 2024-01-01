import styles from '@/components/SerialMain.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react';
import GenerationSwiper from '@/components/GenerationSwiper';
import GenerationContainer from '@/components/GenerationContainer';
import SideBarMix from '@/components/SideBarMix';

function GenerationMain({ results, title }) {
	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<Breadcrumbs />
				<GenerationSwiper generacje={results[1]} />
				<GenerationContainer
					title={title}
					familyData={results[0][0]}
					gallery={results[2]}
					models={results[4]}
				/>
			</div>
			<div className={styles.sidebar}>
				<SideBarMix
					prods={results[5]}
					studs={results[6]}
					articles={results[7]}
				/>
			</div>
		</div>
	);
}

export default GenerationMain;
