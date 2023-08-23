import styles from "@/components/SerialMain.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoSwiper from "@/components/LogoSwiper";
import {Box, Typography} from "@mui/material";
import React from "react";
import SideBar from "@/components/SideBar";
import FamilySwiper from "@/components/FamilySwiper";
import BrandContainer from "@/components/BrandContainer";
import GenerationSwiper from "@/components/GenerationSwiper";
import FamilyContainer from "@/components/FamilyContainer";
import GenerationContainer from "@/components/GenerationContainer";

function GenerationMain({results, title}) {

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
                <GenerationSwiper generacje={results[1]} />
                <GenerationContainer title={title} familyData={results[0]} gallery={results[2]} models={results[4]}/>
            </div>
            <div className={styles.sidebar}>
                <SideBar sides={results[5]}/>
            </div>
        </div>
    )

}

export default GenerationMain;