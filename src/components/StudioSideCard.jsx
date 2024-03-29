import styles from './SideCard.module.css';
import imgstyles from '@/components/Images.module.css';
import Link from 'next/link';

function StudioSideCard({ cardSql }) {
	let updateTitle = `${cardSql.marka} ${cardSql.model} (${cardSql.rok})`;

	return (
		<>
			<Link
				className={styles.cardLink}
				href={`/studialne/${cardSql.marka}/${cardSql.model}`}
			>
				<div className={styles.cardContainer}>
					<img
						className={imgstyles.tnstyle}
						src={`http://server090121.nazwa.pl/images/studio/${cardSql.picture}.webp`}
						alt={updateTitle}
						loading='lazy'
					/>
					<h2>
						{cardSql.marka} {cardSql.model}
					</h2>
					<h2>({cardSql.rok})</h2>
				</div>
			</Link>
		</>
	);
}

export default StudioSideCard;
