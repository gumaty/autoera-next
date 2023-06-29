import styles from "./MainCard.module.css";

function MainCard(props) {

    const {card} =props;

    return (
        <div className={styles.cardContainer}>{
            card.category === "prod" ? (<img src={`/images/family/${card.picture}.webp`} alt={card.title} />) : card.category === "stud" ? (<img src={`/images/studio/${card.picture}.webp`} alt={card.title} />) : ''
        }
           <h2>{card.title}</h2>
            <p>{card.description}</p>
        </div>
    );
}

export default MainCard;