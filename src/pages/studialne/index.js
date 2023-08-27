import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import StudioAccordion from "@/components/StudioAcordion";
import React from "react";

import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";
import StudioMain from "@/components/StudioMain";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {


    const brands = await prisma.stud.groupBy(
        {
            by: ['marka'],
            orderBy: {
                marka: 'asc',
            },
        }
    );

    const cars = await prisma.stud.findMany(
        {
            select: {
                marka: true,
                model: true,
                rok: true,
                opis: true,
                picture: true,
            },
            orderBy: [
                {
                    marka: "asc",
                },
                {
                    model: "asc",
                },
            ],
        }
    );

    const tempArray = [];

    for (let i = 0; i < brands.length; i++) {
        const obj = {};
        obj['marka'] = brands[i].marka;
        obj['models'] = [];
        for (let j = 0; j < cars.length; j++) {
            if (cars[j].marka === brands[i].marka) {
                obj['models'].push(cars[j]);
            }
        }
        tempArray.push(obj);
    }

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
    result.push(tempArray);
    result.push(studsArray);

    return {
        props: { result }
    };
}

const title = "Pojazdy studialne i prototypowe";

export default function StudioHome( {result} ) {

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>

                <StudioMain results={result} title={title}/>

            </Container>
        </>
    )
}