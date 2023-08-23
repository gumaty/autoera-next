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

function ModelMain({results, title}) {

    const generation = results[0].generacja;

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs generacja={generation}/>
                <ModelContainer model={results[0]} gallery={results[1]}/>
            </div>
            <div className={styles.sidebar}>
                <SideBar sides={results[3]}/>
            </div>
        </div>
    )

}

export default ModelMain;