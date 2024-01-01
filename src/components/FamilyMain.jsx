import styles from '@/components/SerialMain.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react';
import FamilySwiper from '@/components/FamilySwiper';
import GenerationSwiper from '@/components/GenerationSwiper';
import FamilyContainer from '@/components/FamilyContainer';
import SideBarMix from '@/components/SideBarMix';

function FamilyMain({ results }) {
	const generacja = results[0][0].generacja_typ;

	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<Breadcrumbs />
				{generacja === '0' ? (
					<FamilySwiper rodziny={results[3]} />
				) : (
					<GenerationSwiper generacje={results[1]} />
				)}
				<FamilyContainer
					familyData={results[0]}
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

export default FamilyMain;
