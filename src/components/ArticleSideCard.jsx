import styles from './SideCard.module.css';
import imgstyles from '@/components/Images.module.css';
import Link from 'next/link';

function ArticleSideCard({ cardSql }) {
	let updateTitle = `Artykuł: ${cardSql.art_title}`;

	return (
		<>
			<Link className={styles.cardLink} href={`/articles/${cardSql.art_title}`}>
				<div className={styles.cardContainer}>
					<img
						className={imgstyles.tnstyle}
						src={`https://auto-era.pl/images/articles/${cardSql.art_picture}.jpg`}
						alt={updateTitle}
						loading='lazy'
					/>
					<h2>{cardSql.art_title}</h2>
				</div>
			</Link>
		</>
	);
}

export default ArticleSideCard;
