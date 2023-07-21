import {useRouter} from "next/router";
import styles from "./Breadcrumbs.module.css";
import Link from "next/link";

function Breadcrumbs() {

    const router = useRouter();

    const routes = router.asPath;
    const routesArray = routes.split("/")

    const linksArray = [];
    let link = {};

    for (let i = 0; i < routesArray.length; i++){
        if (i === 0) {
            link = {
                name: `Główna`,
                anchor: `/`
            }
        } else if (i === 1) {
            link = {
                name: `${routesArray[i].replaceAll("%20", " ")}`,
                anchor: `/${routesArray[i]}`
        }

        } else {
            link = {
                name: `${routesArray[i].replaceAll("%20", " ")}`,
                anchor: `${linksArray[i - 1].anchor}/${routesArray[i]}`
            }

        }
        linksArray.push(link)

    }

    console.log(linksArray)

    return (
        <div className={styles.container}>
            {linksArray.map((routeLink, index) => (
                <Link className={styles.linkCrumb} key={index} href={routeLink.anchor}>
                    <div className={styles.crumb}>
                        {`${routeLink.name} >`}
                    </div>
                </Link>
            ))}
        </div>
    )

}

export default Breadcrumbs;