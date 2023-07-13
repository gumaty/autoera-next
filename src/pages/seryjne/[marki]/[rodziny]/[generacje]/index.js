import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";

import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import GenerationSwiper from "@/components/GenerationSwiper";
import GenerationContainer from "@/components/GenerationContainer";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

    const marka = context.params.marki;
    const rodzina = context.params.rodziny;
    const generacja = context.params.generacje;

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

    const generation = await prisma.generacje.findMany(
        {
            where: {
                marka_gener: marka,
                typ_gener: rodzina,
                gen_gener: generacja,
                OK: '1',
            },
            select: {
                gener_ID: true,
                marka_gener: true,
                typ_gener: true,
                gen_gener: true,
                lata: true,
                opis: true,
                img_gener: true,
            }
        }
    );

    const galeria = await prisma.gallery.findMany(
        {
            where: {
                marka: marka,
                typ: rodzina,
                generacja: generacja
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
                img_typ: true,
            },
            orderBy: {
                nazwa_typ: "asc"
            }
        }
    );

    const result = generation;
    result.push(generations);
    result.push(galeria);
    result.push(types);

    return {
        props: { result }
    };
}

export default function FamilyHome({result}) {

    function convert(text){

        const textBefore   = ["\n\r", "\n\n", "\r\n", "\n", "\r", "m3", "CO2"];
        const textAfter = ["<br><br>", "<br><br>", "<br><br>", "<br><br>", "<br><br>", "m<sup>3</sup>", "CO<sub>2</sub>"];
        let newText = '';

        for (let i = 0; i < textBefore.length; i++) {
            newText = text.replaceAll(textBefore[i], textAfter[i]);
        }
        return newText;
    }

    const router = useRouter();

    const [loadedBrands, setLoadedBrands] = useState(result);

    const { marki, rodziny, generacje } = router.query;

    // console.log(marki);
    // console.log(rodziny);

    const { brand, family, description, image, years, catalogue, galery, generation } = loadedBrands;

    const title = `Katalog samochodów seryjnych - ${brand} ${family} ${generation} (${years})`;

    // console.log(loadedBrands);

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                <Box sx={{pt: '20px', bgcolor: 'white'}} >
                    <Typography variant='h6' component='h3' sx={{color: '#153F1A', fontWeight: '700', textAlign: 'center'}}>Wybierz generację:</Typography>
                </Box>
                <Box>
                    <GenerationSwiper generacje={loadedBrands[1]} />
                </Box>
                <GenerationContainer title={title} familyData={loadedBrands[0]} gallery={loadedBrands[2]}/>

            </Container>
        </>
    )
}