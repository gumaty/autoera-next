import styles from "@/components/SideBar.module.css";
import SideCard from "@/components/SideCard";
import StudioSideCard from "@/components/StudioSideCard";


function StudioSideBar( {sides} ) {

    return(
        <div className={styles.container}>
            <div className={styles.outer}>
                <div  className={styles.inner}>
                    <h2>Zobacz również:</h2>
                    {sides.map((item) => (
                            <StudioSideCard key={item.ID} cardSql={item}/>
                        )
                    )}
                </div>
            </div>
        </div>
    )

}

export default StudioSideBar;