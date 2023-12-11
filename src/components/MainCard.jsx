import styles from './MainCard.module.css';
import imgstyles from '@/components/Images.module.css';
import Link from 'next/link';

function MainCard(props) {
	const { cardSql } = props;

	const titleArray = cardSql.update_link.split('/');

	let updateTitle = titleArray[2];
	for (let i = 3; i < titleArray.length; i++) {
		updateTitle += ` ${titleArray[i]}`;
	}

	return (
		<>
			<Link className={styles.cardLink} href={`${cardSql.update_link}`}>
				<div className={styles.cardContainer}>
					<img
						className={imgstyles.tnstyle}
						src={`http://server090121.nazwa.pl/images/updatesy/${cardSql.update_image}.webp`}
						alt={updateTitle}
						loading='lazy'
					/>
					<h2>{updateTitle}</h2>
					<p>{cardSql.update_tresc}</p>
					<p className={styles.cardData}>{cardSql.update_data}</p>
				</div>
			</Link>
		</>
	);
}

export default MainCard;
