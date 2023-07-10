import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import StudioModelContainer from "@/components/StudioModelContainer";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

    const marka = context.params.model;
    const model = context.params.typ;

    const result = await prisma.stud.findMany(
        {
            where: {
                marka: marka,
                model: model,
            },
            select: {
                marka: true,
                model: true,
                rok: true,
                opis: true,
                picture: true,
            },
        }

    );

    return {
        props: { result }
    };
}

export default function StudioModelHome({result}) {

    function convert(text){

        const textBefore   = ["\n\r", "\n\n", "\r\n", "\n", "\r", "m3", "CO2"];
        const textAfter = ["<br><br>", "<br><br>", "<br><br>", "<br><br>", "<br><br>", "m<sup>3</sup>", "CO<sub>2</sub>"];
        let newText = '';

        for (let i = 0; i < textBefore.length; i++) {
            newText = text.replaceAll(textBefore[i], textAfter[i]);
        }
        return newText;
    }

    const [loadedBrands, setLoadedBrands] = useState(result);

    // const router = useRouter();
    //
    // const { model, typ } = router.query;

    const { marka, model, opis, picture, rok } = loadedBrands[0];

    const title = `Katalog samochodów studialnych - ${marka} ${model} (${rok})`;

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>

                <StudioModelContainer title={title} modelData={loadedBrands[0]}/>

            </Container>
        </>
    )
}