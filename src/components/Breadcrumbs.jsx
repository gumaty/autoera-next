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
        let name = routesArray[i]
            .replaceAll("%20", " ")
            .replaceAll("%C4%86", "Ć")
            .replaceAll("%C5%81", "Ł")
            .replaceAll("%C3%93", "Ó")
            .replaceAll("%C5%9A", "Ś")
            .replaceAll("%C5%BB", "Ż")
            .replaceAll("%C5%B9", "Ź")
            .replaceAll("%C4%85", "ą")
            .replaceAll("%C4%87", "ć")
            .replaceAll("%C4%99", "ę")
            .replaceAll("%C5%82", "ł")
            .replaceAll("%C5%84", "ń")
            .replaceAll("%C3%B3", "ó")
            .replaceAll("%C5%9B", "ś")
            .replaceAll("%C5%BC", "ż")
            .replaceAll("%C5%BA", "ź");
        if (i === 0) {
            link = {
                name: `Główna`,
                anchor: `/`
            }
        } else if (i === 1) {
            link = {
                name: `${name}`,
                anchor: `/${routesArray[i]}`
        }

        } else {
            link = {
                name: `${name}`,
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