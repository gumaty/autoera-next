import styles from "@/components/SideBar.module.css";
import SideCard from "@/components/SideCard";


function SideBar( {sides} ) {

    console.log(sides)

    return(
        <div className={styles.container}>
            <div className={styles.outer}>
                <div  className={styles.inner}>

                    {sides.map((item) => (
                            <SideCard key={item.update_ID} cardSql={item}/>
                        )
                    )}
                </div>
            </div>
        </div>
    )

}

export default SideBar;