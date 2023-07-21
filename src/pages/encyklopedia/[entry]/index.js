import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import EncyContainer from "@/components/EncyContainer";


import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

    const sign = context.params.entry;

    const result = await prisma.encyk.findMany(
        {
            where: {
                tytul: {
                    startsWith: sign,
                },
                OK: '1',
            },
            select: {
                id: true,
                tytul: true,
                tresc: true,
                image: true,
            },
            orderBy: [
                {
                    tytul: "asc",
                },
            ],
        }
    );

    return {
        props: { result }
    };
}

export default function encyItemHome({ result }) {

    const [loadedBrands, setLoadedBrands] = useState(result);

    const router = useRouter();

    const { entry } = router.query;

    const { tytul, tresc, image } = loadedBrands[0];

    const title = `Hasła encyklopedii - ${tytul}`;

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>

                <Breadcrumbs />
                <EncyContainer entries={result}/>

            </Container>
        </>
    )
}