import styles from "./SideCard.module.css";
import Link from "next/link";

function ArticleSideCard( {cardSql} ) {

    let updateTitle = `Artykuł: ${cardSql.art_title}`;


    return (
        <>
            <Link className={styles.cardLink} href={`/articles/${cardSql.art_title}`}>
                <div className={styles.cardContainer}>
                    <img src={`http://server090121.nazwa.pl/images/articles/${cardSql.art_picture}.jpg`} alt={updateTitle} />
                    <h2>{cardSql.art_title}</h2>
                </div>
            </Link>
        </>
    );
}

export default ArticleSideCard;