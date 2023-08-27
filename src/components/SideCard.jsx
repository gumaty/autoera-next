import styles from "./SideCard.module.css";
import Link from "next/link";

function SideCard( {cardSql} ) {

    let updateTitle = `${cardSql.nazwa_marka} ${cardSql.nazwa_typ} (${cardSql.typ_lata})`;


    return (
        <>
            <Link className={styles.cardLink} href={`/seryjne/${cardSql.nazwa_marka}/${cardSql.nazwa_typ}`}>
                <div className={styles.cardContainer}>
                    <img src={`http://server090121.nazwa.pl/images/family/${cardSql.img_typ}.webp`} alt={updateTitle} />
                    <h2>{cardSql.nazwa_marka} {cardSql.nazwa_typ}</h2>
                    <h2>({cardSql.typ_lata})</h2>
                </div>
            </Link>
        </>
    );
}

export default SideCard;