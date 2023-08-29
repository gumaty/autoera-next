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
import ModelContainer from "@/components/ModelContainer";
import StudioAccordion from "@/components/StudioAcordion";
import StudioSideBar from "@/components/StudioSideBar";
import StudioModelContainer from "@/components/StudioModelContainer";
import SideBarMix from "@/components/SideBarMix";

function StudioModelMain({results, title}) {

    const result = results[0];

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
                <StudioModelContainer title={title} modelData={result[0]}/>
            </div>
            <div className={styles.sidebar}>
                <SideBarMix prods={results[1]} studs={results[2]} articles={results[3]} />
            </div>
        </div>
    )

}

export default StudioModelMain;