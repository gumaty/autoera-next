import MainCard from "@/components/MainCard";
import styles from "./CardContainer.module.css";

function CardContainer(props) {
    const {cards, category} = props;
    return(
        <div className={styles.container}>
            <div className={styles.outer}>
                <h2>Samochody {category} - warto zobaczyć</h2>
                <div  className={styles.inner}>
                    {cards.map((card) => (
                            <MainCard card={card}/>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardContainer;