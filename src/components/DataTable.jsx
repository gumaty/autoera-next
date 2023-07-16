import styles from "./DataTable.module.css";
import {Box, Typography} from "@mui/material";
import React from "react";
function DataTable({ model }) {

    return (
        <div className={styles.container}>
            <div className={styles.tableHeader}>Silnik</div>

            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Rodzaj silnika:</div>
                <div className={styles.tableRowData}>{model.cykl_pracy_silnika}/{model.rodzaj_zaplonu}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Liczba cylindrów:</div>
                <div className={styles.tableRowData}>{model.liczba_cylindow}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Objętość skokowa:</div>
                <div className={styles.tableRowData}>{model.pojemnosc_skokowa} cm3</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Moc:</div>
                <div className={styles.tableRowData}>{Math.round(model.moc_maks/1.36)} kW ({model.moc_maks} KM) przy {model.obr_mocy_maks} obr/min</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Moment:</div>
                <div className={styles.tableRowData}>{model.moment_maks} Nm przy {model.obr_momentu_maks} obr/min</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Rodzaj zasilania:</div>
                <div className={styles.tableRowData}>{model.rodzaj_zasilania}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Katalizator:</div>
                <div className={styles.tableRowData}>{model.katalizator}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Typ doładowania:</div>
                <div className={styles.tableRowData}>{model.doladowanie}</div>
            </div>

            <div className={styles.tableHeader}>Nadwozie</div>

            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Typ nadwozia:</div>
                <div className={styles.tableRowData}>{model.typ_nadwozia}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Liczba drzwi:</div>
                <div className={styles.tableRowData}>{model.liczba_drzwi}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Liczba osób:</div>
                <div className={styles.tableRowData}>{model.liczba_miejsc}</div>
            </div>

            <div className={styles.tableHeader}>Podwozie</div>

            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Układ napędowy:</div>
                <div className={styles.tableRowData}>{model.uklad_napedowy}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Skrzynia biegów:</div>
                <div className={styles.tableRowData}>{model.rodzaj_skrzyni}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Liczba biegów:</div>
                <div className={styles.tableRowData}>{model.liczba_biegow}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Hamulce przednie:</div>
                <div className={styles.tableRowData}>{model.hamulce_przed}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Hamulce tylne:</div>
                <div className={styles.tableRowData}>{model.hamulce_tyl}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Ogumienie przednie</div>
                <div className={styles.tableRowData}>{model.ogumienie_przed}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Ogumienie tylne:</div>
                <div className={styles.tableRowData}>{model.ogumienie_tyl}</div>
            </div>

            <div className={styles.tableHeader}>Wymiary i masy</div>

            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Długość całkowita:</div>
                <div className={styles.tableRowData}>{model.dlugosc_calk} mm</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Szerokość całkowita:</div>
                <div className={styles.tableRowData}>{model.szerokosc_calk} mm</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Wysokość całkowita:</div>
                <div className={styles.tableRowData}>{model.wysokosc_calk} mm</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Masa własna:</div>
                <div className={styles.tableRowData}>{model.masa_wl} kg</div>
            </div>

            <div className={styles.tableHeader}>Dane eksploatacyjne</div>

            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Prędkość maksymalna:</div>
                <div className={styles.tableRowData}>{model.dlugosc_calk} km/h</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Czas rozpędzania 0-100 km/h</div>
                <div className={styles.tableRowData}>{model.czas_rozp_0_100
                } s</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Średnie zużycie paliwa / wg:</div>
                <div className={styles.tableRowData}>{model.zuzycie_sr} l/100km / wg {model.zuzycie_paliwa_wg}</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableRowLabel}>Zbiornik paliwa:</div>
                <div className={styles.tableRowData}>{model.poj_zbior_pal} dm3</div>
            </div>
        </div>
    )
}

export default DataTable;