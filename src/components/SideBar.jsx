import styles from "@/components/SideBar.module.css";
import SideCard from "@/components/SideCard";


function SideBar( {sides} ) {

    return(
        <div className={styles.container}>
            <div className={styles.outer}>
                <div  className={styles.inner}>
                    <h2>Zobacz również:</h2>
                    {sides.map((item) => (
                            <SideCard key={item.ID} cardSql={item}/>
                        )
                    )}
                </div>
            </div>
        </div>
    )

}

export default SideBar;