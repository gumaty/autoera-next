import styles from "@/components/SerialMain.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoSwiper from "@/components/LogoSwiper";
import {Box, Typography} from "@mui/material";
import React from "react";
import SideBar from "@/components/SideBar";
import FamilySwiper from "@/components/FamilySwiper";
import BrandContainer from "@/components/BrandContainer";

function BrandMain({results}) {



    const brands = results[0];

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <Breadcrumbs />
                <FamilySwiper rodziny={results[1]} />
                <BrandContainer brandData={results[0]}/>
            </div>
            <div className={styles.sidebar}>
                <SideBar sides={results[2]}/>
            </div>
        </div>
    )

}

export default BrandMain;