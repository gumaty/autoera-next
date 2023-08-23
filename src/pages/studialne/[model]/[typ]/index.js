import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import StudioModelContainer from "@/components/StudioModelContainer";

import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";
import StudioMain from "@/components/StudioMain";
import StudioModelMain from "@/components/StudioModelMain";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

    const marka = context.params.model;
    const model = context.params.typ;

    const models = await prisma.stud.findMany(
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

    const studs = await prisma.stud.findMany({
        select: {
            ID: true,
            marka: true,
            model: true,
            rok: true,
            picture: true,
        },
    });

    const studsArray = [];

    for (let i = 0; i < 4; i++) {
        const number = Math.round(Math.random() * studs.length);
        studsArray.push(studs[number]);
    }

    const result = [];
    result.push(models);
    result.push(studsArray);

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

    const [loadedBrands, setLoadedBrands] = useState(result[0]);

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

                <StudioModelMain results={result} title={title}/>

            </Container>
        </>
    )
}