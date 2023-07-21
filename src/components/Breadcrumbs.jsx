import {useRouter} from "next/router";
import styles from "./Breadcrumbs.module.css";
import Link from "next/link";

function Breadcrumbs({generacja}) {

    const router = useRouter();

    const routes = router.asPath;

    const routesArray = routes.length === 1 ? [""] : routes.split("/");

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


    if (routesArray[1] === "seryjne" ) {
        if (linksArray.length > 5 && generacja && generacja !== "") {
            linksArray[5].anchor = linksArray[4].anchor;
            linksArray[6].anchor = linksArray[4].anchor;
        } else if (linksArray.length > 4 && generacja === ""){
            linksArray[4].anchor = linksArray[3].anchor;
            linksArray[5].anchor = linksArray[3].anchor;
            linksArray[6].anchor = linksArray[3].anchor;
        }
    } else if (routesArray[1] === "studialne") {
        if (linksArray.length > 2) {
            linksArray[2].anchor = linksArray[1].anchor;
            linksArray[3].anchor = linksArray[1].anchor;
        }
    }



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