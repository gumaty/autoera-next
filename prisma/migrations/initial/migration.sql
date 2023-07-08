-- CreateTable
CREATE TABLE `encyk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tytul` VARCHAR(100) NULL,
    `tresc` LONGTEXT NULL,
    `image` VARCHAR(50) NULL,
    `OK` CHAR(1) NOT NULL DEFAULT '1',

    INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gallery` (
    `image_ID` SMALLINT NOT NULL AUTO_INCREMENT,
    `marka` VARCHAR(100) NOT NULL,
    `typ` VARCHAR(100) NOT NULL,
    `generacja` VARCHAR(10) NOT NULL,
    `katalog` VARCHAR(20) NULL,
    `image_name` VARCHAR(40) NULL,
    `image_opis` VARCHAR(60) NOT NULL DEFAULT '',
    `gal_ID` VARCHAR(4) NOT NULL DEFAULT '0',

    INDEX `image_ID`(`image_ID`),
    PRIMARY KEY (`image_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generacje` (
    `gener_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `marka_gener` VARCHAR(100) NOT NULL DEFAULT '',
    `typ_gener` VARCHAR(100) NOT NULL DEFAULT '',
    `gen_gener` VARCHAR(10) NOT NULL DEFAULT '',
    `lata` VARCHAR(9) NOT NULL DEFAULT '',
    `opis` TEXT NOT NULL,
    `img_gener` VARCHAR(30) NOT NULL DEFAULT '',
    `gal` VARCHAR(4) NOT NULL DEFAULT '',
    `OK` CHAR(1) NOT NULL DEFAULT '0',

    INDEX `gener_ID`(`gener_ID`),
    PRIMARY KEY (`gener_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marki` (
    `marki_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `nazwa_marka` VARCHAR(30) NOT NULL DEFAULT '',
    `lata_marka` VARCHAR(9) NOT NULL DEFAULT '',
    `opis_marka` TEXT NOT NULL,
    `img_marka` VARCHAR(20) NOT NULL DEFAULT '',
    `OK` CHAR(1) NOT NULL DEFAULT '0',

    INDEX `marki_ID`(`marki_ID`),
    PRIMARY KEY (`marki_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `markistud` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nazwa_marki` VARCHAR(100) NOT NULL,
    `opis_marki` TEXT NOT NULL,
    `image` VARCHAR(40) NOT NULL,

    INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seryjne` (
    `model_ID` SMALLINT NOT NULL AUTO_INCREMENT,
    `marka` VARCHAR(30) NOT NULL DEFAULT '',
    `rodzina` VARCHAR(30) NOT NULL DEFAULT '',
    `generacja` VARCHAR(4) NOT NULL DEFAULT '',
    `model` VARCHAR(60) NOT NULL DEFAULT '',
    `rodz_naped` VARCHAR(20) NOT NULL DEFAULT '',
    `kod_fabr` VARCHAR(15) NOT NULL DEFAULT '',
    `rok_uruch` SMALLINT NULL,
    `rok_zakoncz` SMALLINT NULL,
    `kraj_producenta` VARCHAR(30) NOT NULL DEFAULT '',
    `struktura_nosna` VARCHAR(30) NOT NULL DEFAULT '',
    `typ_nadwozia` VARCHAR(30) NOT NULL DEFAULT '',
    `liczba_drzwi` TINYINT NULL,
    `ilosc_bryl` VARCHAR(6) NULL,
    `liczba_miejsc` TINYINT NULL,
    `cx` VARCHAR(6) NULL,
    `pow_czolowa` VARCHAR(6) NULL,
    `kod_silnika` VARCHAR(30) NOT NULL DEFAULT '',
    `cykl_pracy_silnika` VARCHAR(30) NOT NULL DEFAULT '',
    `rodzaj_zaplonu` CHAR(2) NOT NULL DEFAULT '',
    `liczba_cylindow` TINYINT NULL,
    `uklad_cylindrow` CHAR(2) NOT NULL DEFAULT '',
    `umieszczenie_silnika` VARCHAR(30) NOT NULL DEFAULT '',
    `srednica_cyl` VARCHAR(6) NULL,
    `skok_tloka` VARCHAR(6) NULL,
    `pojemnosc_skokowa` SMALLINT NULL,
    `moc_maks` SMALLINT NULL,
    `obr_mocy_maks` SMALLINT NULL,
    `moment_maks` SMALLINT NULL,
    `obr_momentu_maks` SMALLINT NULL,
    `stopien_sprezania` VARCHAR(6) NULL,
    `liczba_lozysk_glownych` TINYINT NULL,
    `rodzaj_zasilania` VARCHAR(50) NOT NULL DEFAULT '',
    `katalizator` CHAR(2) NOT NULL DEFAULT '',
    `doladowanie` VARCHAR(50) NOT NULL DEFAULT '',
    `intercooler` CHAR(2) NOT NULL DEFAULT '',
    `ukl_rozrz` VARCHAR(10) NOT NULL DEFAULT '',
    `l_zaw_cyl` TINYINT NULL,
    `chlodzenie` VARCHAR(15) NOT NULL DEFAULT '',
    `uklad_napedowy` VARCHAR(35) NOT NULL DEFAULT '',
    `rodzaj_skrzyni` VARCHAR(35) NOT NULL DEFAULT '',
    `liczba_biegow` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_I` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_II` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_III` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_IV` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_V` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_VI` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_VII` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_VIII` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_IX` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_X` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_wstecz` VARCHAR(6) NOT NULL DEFAULT '',
    `przelozenie_przekl_gl` VARCHAR(6) NOT NULL DEFAULT '',
    `zawieszenie_prz` VARCHAR(35) NOT NULL DEFAULT '',
    `elementy_res_prz` VARCHAR(35) NOT NULL DEFAULT '',
    `zawieszenie_tyl` VARCHAR(35) NOT NULL DEFAULT '',
    `elementy_res_tyl` VARCHAR(35) NOT NULL DEFAULT '',
    `hamulce_przed` VARCHAR(35) NOT NULL DEFAULT '',
    `hamulce_tyl` VARCHAR(35) NOT NULL DEFAULT '',
    `ogumienie_przed` VARCHAR(35) NOT NULL DEFAULT '',
    `ogumienie_tyl` VARCHAR(35) NOT NULL DEFAULT '',
    `rozstaw_osi` SMALLINT NULL,
    `rozstaw_k_prz` SMALLINT NULL,
    `rozstaw_k_tyl` SMALLINT NULL,
    `dlugosc_calk` SMALLINT NULL,
    `szerokosc_calk` SMALLINT NULL,
    `wysokosc_calk` SMALLINT NULL,
    `zwis_przedni` SMALLINT NULL,
    `objet_bagaz_podst` SMALLINT NULL,
    `objet_bagaz_maks` SMALLINT NULL,
    `kat_natarcia` VARCHAR(6) NOT NULL DEFAULT '',
    `kat_zejscia` VARCHAR(6) NOT NULL DEFAULT '',
    `kat_rampowy` VARCHAR(6) NOT NULL DEFAULT '',
    `masa_wl` SMALLINT NULL,
    `masa_dop_calk` SMALLINT NULL,
    `dop_obc_osi_prz` SMALLINT NULL,
    `dop_obc_osi_tyl` SMALLINT NULL,
    `dop_masa_przyczepy_z_ham` SMALLINT NULL,
    `predkosc_maks` SMALLINT NULL,
    `rodzaj_paliwa` VARCHAR(25) NOT NULL DEFAULT '',
    `zuzycie_paliwa_wg` VARCHAR(10) NOT NULL DEFAULT '',
    `zuzycie_I` VARCHAR(6) NOT NULL DEFAULT '',
    `zuzycie_II` VARCHAR(6) NOT NULL DEFAULT '',
    `zuzycie_III` VARCHAR(6) NOT NULL DEFAULT '',
    `zuzycie_sr` VARCHAR(6) NOT NULL DEFAULT '',
    `emisja_CO2` VARCHAR(6) NOT NULL DEFAULT '',
    `czas_rozp_0_100` VARCHAR(6) NOT NULL DEFAULT '',
    `srednica_zawr` VARCHAR(6) NOT NULL DEFAULT '',
    `poj_zbior_pal` VARCHAR(6) NOT NULL DEFAULT '',
    `grupa_pojazdow` CHAR(1) NOT NULL DEFAULT '',
    `kod_kontynentu` CHAR(2) NOT NULL DEFAULT '',
    `liczba siln_el` INTEGER NOT NULL DEFAULT 0,
    `moc_sil_1` VARCHAR(10) NOT NULL DEFAULT '',
    `moc_sil_2` VARCHAR(10) NOT NULL DEFAULT '',
    `moc_sil_3` VARCHAR(10) NOT NULL DEFAULT '',
    `moment_sil_1` VARCHAR(10) NOT NULL DEFAULT '',
    `moment_sil_2` VARCHAR(10) NOT NULL DEFAULT '',
    `moment_sil_3` VARCHAR(10) NOT NULL DEFAULT '',
    `moc_system` VARCHAR(10) NOT NULL DEFAULT '',
    `moment_system` VARCHAR(10) NOT NULL DEFAULT '',
    `napiecie` VARCHAR(6) NOT NULL DEFAULT '',
    `typ_akumul` VARCHAR(20) NOT NULL DEFAULT '',
    `poj_akumul` VARCHAR(10) NOT NULL DEFAULT '',
    `zasieg_elekt` INTEGER NOT NULL DEFAULT 0,
    `katalog` VARCHAR(15) NOT NULL DEFAULT '',

    INDEX `model_ID`(`model_ID`),
    PRIMARY KEY (`model_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stud` (
    `ID` SMALLINT NOT NULL AUTO_INCREMENT,
    `marka` VARCHAR(100) NOT NULL DEFAULT '',
    `model` VARCHAR(100) NOT NULL DEFAULT '',
    `rok` YEAR NOT NULL DEFAULT 0,
    `opis` TEXT NOT NULL,
    `dlugosc` VARCHAR(4) NOT NULL DEFAULT '',
    `szerokosc` VARCHAR(4) NOT NULL DEFAULT '',
    `wysokosc` VARCHAR(4) NOT NULL DEFAULT '',
    `pojemnosc` VARCHAR(4) NOT NULL DEFAULT '',
    `cx` VARCHAR(4) NOT NULL DEFAULT '',
    `rozs_osi` VARCHAR(4) NOT NULL DEFAULT '',
    `predkosc` CHAR(3) NOT NULL DEFAULT '',
    `moc` CHAR(3) NOT NULL DEFAULT '',
    `obroty` VARCHAR(4) NOT NULL DEFAULT '',
    `zuzycie` CHAR(3) NOT NULL DEFAULT '',
    `picture` VARCHAR(25) NOT NULL DEFAULT '',
    `OK` CHAR(1) NOT NULL DEFAULT '0',

    INDEX `ID`(`ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `typy` (
    `ID_typy` INTEGER NOT NULL AUTO_INCREMENT,
    `nazwa_marka` VARCHAR(100) NOT NULL DEFAULT '',
    `nazwa_typ` VARCHAR(100) NOT NULL DEFAULT '',
    `typ_lata` VARCHAR(9) NOT NULL DEFAULT '',
    `opis_typ` TEXT NOT NULL,
    `generacja_typ` CHAR(1) NOT NULL DEFAULT '0',
    `img_typ` VARCHAR(25) NOT NULL DEFAULT '',
    `gal` VARCHAR(4) NOT NULL DEFAULT '',
    `OK` CHAR(1) NOT NULL DEFAULT '0',

    INDEX `ID_typy`(`ID_typy`),
    PRIMARY KEY (`ID_typy`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

