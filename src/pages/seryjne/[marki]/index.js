import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import FamilySwiper from "@/components/FamilySwiper";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import BrandContainer from "@/components/BrandContainer";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

    const marka = context.params.marki;

    const brand = await prisma.marki.findMany(
        {
            where: {
                nazwa_marka: marka,
            }
        }
    );

    const types = await prisma.typy.findMany(
        {
            where: {
                nazwa_marka: marka,
                OK: '1',
            },
            select: {
                ID_typy: true,
                nazwa_marka: true,
                nazwa_typ: true,
                typ_lata: true,
                generacja_typ: true,
                img_typ: true,
            },
            orderBy: {
                nazwa_typ: "asc"
            }
        }
    );

    const result = brand
    result.push(types);

    return {
        props: { result }
    };
}

export default function SerialHome({result}) {

    const router = useRouter();

    const [loadedBrands, setLoadedBrands] = useState(result);

    const { marki } = router.query;

    const { nazwa_marka, img_typ, typ_lata, generacja_typ } = loadedBrands[0];

    const title = `Katalog samochodów seryjnych - ${nazwa_marka} (${typ_lata})`;

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                <FamilySwiper rodziny={loadedBrands[1]} />
                <BrandContainer title={title} brandData={loadedBrands[0]}/>

            </Container>
        </>
    )
}