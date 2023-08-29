import styles from "@/components/SerialMain.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoSwiper from "@/components/LogoSwiper";
import {Box, Typography} from "@mui/material";
import React from "react";
import SideBar from "@/components/SideBar";
import SideBarMix from "@/components/SideBarMix";
import EncySwiper from "@/components/EncySwiper";
import ArticlesAccordion from "@/components/ArticlesAccordion";
import ArticleContainer from "@/components/ArticleContainer";

function ArticleDetailMain({results, title}) {

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
                <ArticleContainer title={title} article={results[0][0]}/>
            </div>
            <div className={styles.sidebar}>
                <SideBarMix prods={results[1]} studs={results[2]} articles={results[3]} />
            </div>
        </div>
    )

}

export default ArticleDetailMain;