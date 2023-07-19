import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";

import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import GenerationSwiper from "@/components/GenerationSwiper";
import GenerationContainer from "@/components/GenerationContainer";
import { PrismaClient } from '@prisma/client';
import ModelContainer from "@/components/ModelContainer";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
    const marka = context.params.marki;
    const rodzina = context.params.rodziny;
    let generacja = context.params.generacje;
    const nadwozie = context.params.nadwozie;
    const drzwi = parseInt(context.params.drzwi);
    const model = context.params.model;

    const type = await prisma.typy.findMany({
        where: {
            nazwa_marka: marka,
            nazwa_typ: rodzina,
        },
    });

    if (type.length > 0 && type[0].generacja_typ === "0") generacja = "";

    let resultQuery = {
        where: {
            marka: marka,
            rodzina: rodzina,
            generacja: generacja,
            typ_nadwozia: nadwozie,
            liczba_drzwi: drzwi,
            model: model,
        },
        select: {
            model_ID: true,
            marka: true,
            rodzina: true,
            generacja: true,
            model: true,
            typ_nadwozia: true,
            liczba_drzwi: true,
            liczba_miejsc: true,
            rok_uruch: true,
            rok_zakoncz: true,
            kraj_producenta: true,
            struktura_nosna: true,
            cykl_pracy_silnika: true,
            rodzaj_zaplonu: true,
            liczba_cylindow: true,
            uklad_cylindrow: true,
            pojemnosc_skokowa: true,
            moc_maks: true,
            obr_mocy_maks: true,
            moment_maks: true,
            obr_momentu_maks: true,
            rodzaj_zasilania: true,
            katalizator: true,
            doladowanie: true,
            uklad_napedowy: true,
            rodzaj_skrzyni: true,
            liczba_biegow: true,
            hamulce_przed: true,
            hamulce_tyl: true,
            ogumienie_przed: true,
            ogumienie_tyl: true,
            rozstaw_osi: true,
            dlugosc_calk: true,
            szerokosc_calk: true,
            wysokosc_calk: true,
            masa_wl: true,
            predkosc_maks: true,
            czas_rozp_0_100: true,
            zuzycie_sr: true,
            zuzycie_paliwa_wg: true,
            poj_zbior_pal: true,
            rodz_naped: true,
            napiecie: true,
            typ_akumul: true,
            moc_system: true,
            moc_sil_1: true,
            moc_sil_2: true,
            moc_sil_3: true,
            poj_akumul: true,
            zasieg_elekt: true,
        },
    };

    const galeriaQuery = {
        where: {
            marka: marka,
            typ: rodzina,
            generacja: generacja,
        },
        orderBy: {
            image_name: "asc",
        },
    };

    if (generacja === "") {
        delete resultQuery.where.generacja;
        delete galeriaQuery.where.generacja;
    }

    const result = await prisma.seryjne.findMany(resultQuery);
    const galeria = await prisma.gallery.findMany(galeriaQuery);

    result.push(galeria);
    result.push(type);

    return {
        props: { result },
    };
}

export default function ModelHome({result}) {

    const router = useRouter();

    const [loadedBrands, setLoadedBrands] = useState(result);

    const { marki, rodziny, generacje } = router.query;

    const { marka, rodzina, generacja, model, typ_nadwozia, liczba_drzwi, rok_uruch, rok_zakoncz} = loadedBrands[0];

    const title = `AUTO-ERA - Twój profesjonalny portal motoryzacyjny - Katalog samochodów seryjnych - ${marka} ${rodzina} ${generacja} ${model} ${typ_nadwozia} ${liczba_drzwi}-drzwiowy (${rok_uruch}-${rok_zakoncz})`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>

                <ModelContainer model={loadedBrands[0]} gallery={loadedBrands[1]}/>

            </Container>
        </>
    )
}