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

   const { brand, family, description, image, years, catalogue, galery, generation } = loadedBrands;

    const title = `Katalog samochodów seryjnych - ${brand} ${family} (${years})`;

    console.log(result);

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>

                {/*<Box sx={{pt: '20px', bgcolor: 'white'}} >*/}
                {/*    <Typography variant='h6' component='h3' sx={{color: '#153F1A', fontWeight: '700', textAlign: 'center'}}>Wybierz rodzinę:</Typography>*/}
                {/*</Box>*/}
                {/*<Box>*/}
                {/*    <FamilySwiper rodziny={loadedBrands[3]} />*/}
                {/*</Box>*/}

                <Box sx={{pt: '20px', bgcolor: 'white'}} >
                    <Typography variant='h6' component='h3' sx={{color: '#153F1A', fontWeight: '700', textAlign: 'center'}}>Wybierz generację:</Typography>
                </Box>
                <Box>
                    <GenerationSwiper generacje={loadedBrands[1]} />
                </Box>
                <FamilyContainer title={title} familyData={loadedBrands[0]} gallery={loadedBrands[2]}/>

            </Container>
        </>
    )
}