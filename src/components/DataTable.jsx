import styles from "./DataTable.module.css";
import {Box, Typography} from "@mui/material";
import React from "react";
function DataTable({ model }) {

    return (
        <div className={styles.container}>
            <div className={styles.tableHeader}>Silnik</div>
            <div></div>
        </div>
    )
}

export default DataTable;