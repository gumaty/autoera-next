import MainCard from "@/components/MainCard";
import styles from "./CardContainer.module.css";

function CardContainer(props) {
    const {category, cardsSql} = props;

    return(
        <div className={styles.container}>
            <div className={styles.outer}>
                <h2>Samochody {category} - warto zobaczyć</h2>
                <div  className={styles.inner}>

                    {cardsSql.map((item) => (
                            <MainCard key={item.update_ID} cardSql={item}/>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardContainer;