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

function FamilyMain({results}) {


    console.log(results)

    const generacja = results[0].generacja_typ;



    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
                {generacja === "0" ? <FamilySwiper rodziny={results[3]} /> : <GenerationSwiper generacje={results[1]} />}
                <FamilyContainer familyData={results[0]} gallery={results[2]} models={results[4]}/>
            </div>
            <div className={styles.sidebar}>
                <SideBar sides={results[5]}/>
            </div>
        </div>
    )

}

export default FamilyMain;