import styles from "@/components/SideBar.module.css";
import SideCard from "@/components/SideCard";
import StudioSideCard from "@/components/StudioSideCard";
import ArticleSideCard from "@/components/ArticleSideCard";


function SideBarMix( {prods, studs, articles} ) {

    return(
        <div className={styles.container}>
            <div className={styles.outer}>
                <h3>Polecamy również:</h3>
                <h4>Seryjne</h4>
                <div  className={styles.inner}>
                    {prods.map((item) => (
                            <SideCard key={item.ID_typy} cardSql={item}/>
                        )
                    )}
                </div>
                <h4>Studialne</h4>
                <div  className={styles.inner}>
                    {studs.map((item) => (
                            <StudioSideCard key={item.ID} cardSql={item}/>
                        )
                    )}
                </div>
                <h4>Artykuły</h4>
                <div  className={styles.inner}>
                    {articles.map((item) => (
                            <ArticleSideCard key={item.art_id} cardSql={item}/>
                        )
                    )}
                </div>
            </div>
        </div>
    )

}

export default SideBarMix;