import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import GenerationSwiper from "@/components/GenerationSwiper";
import FamilyContainer from "@/components/FamilyContainer";
import { PrismaClient } from '@prisma/client';
import FamilySwiper from "@/components/FamilySwiper";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

    const marka = context.params.marki;
    const rodzina = context.params.rodziny;

    const type = await prisma.typy.findMany(
        {
            where: {
                nazwa_marka: marka,
                nazwa_typ: rodzina,
            }
        }
    );

    const generations = await prisma.generacje.findMany(
        {
            where: {
                marka_gener: marka,
                typ_gener: rodzina,
                OK: '1',
            },
            select: {
                gener_ID: true,
                marka_gener: true,
                typ_gener: true,
                gen_gener: true,
                lata: true,
                img_gener: true,
            },
            orderBy: {
                gen_gener: "asc"
            }
        }
    );

    const galeria = await prisma.gallery.findMany(
        {
            where: {
                marka: marka,
                typ: rodzina,
                generacja: ''
            },
            orderBy: {
                image_name: "asc"
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

    const result = type;
    result.push(generations);
    result.push(galeria);
    result.push(types);

    return {
        props: { result }
    };
}

export default function FamilyHome({result}) {

    const router = useRouter();

    const [loadedBrands, setLoadedBrands] = useState(result);

    const { marki, rodziny } = router.query;

   const { nazwa_marka, nazwa_typ, typ_lata, generacja_typ } = loadedBrands[0];

    const mainText = `AUTO-ERA - Twój profesjonalny portal motoryzacyjny - Katalog samochodów seryjnych - ${nazwa_marka} ${nazwa_typ} (${typ_lata})`;


    return (
        <>
            <Head>
                <title>{mainText}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                {generacja_typ === "0" ? <FamilySwiper rodziny={loadedBrands[3]} /> : <GenerationSwiper generacje={loadedBrands[1]} />}
                <FamilyContainer familyData={loadedBrands[0]} gallery={loadedBrands[2]}/>
            </Container>
        </>
    )
}