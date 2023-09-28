import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import React from "react";
import EncyAccordion from "@/components/EncyAcordion";
import EncySwiper from "@/components/EncySwiper";

import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";
import EncyMain from "@/components/EncyMain";

const prisma = new PrismaClient();

export async function getServerSideProps() {


    const entries = await prisma.encyk.findMany(
        {
            select: {
                tytul: true,
            },
            orderBy: [
                {
                    tytul: "asc",
                },
            ],
        }
    );
    let tempArray = [];
    for (let i = 0; i < entries.length; i++) {
        const letter = entries[i].tytul.substring(0, 1).toUpperCase();
        if (letter !== "Ć" && letter !== "Ł" && letter !== "Ś" && letter !== "Ż" && letter !== "Ź") {
            tempArray.push(letter);
        }

    }

    const prodsTeaser = await prisma.typy.findMany({
        where: {
            OK: '1',
        },
        select: {
            ID_typy: true,
            nazwa_marka: true,
            nazwa_typ: true,
            typ_lata: true,
            img_typ: true,
        },
    });

    const prodsTeaserArray = [];

    for (let i = 0; i < 2; i++) {
        const number = Math.round(Math.random() * prodsTeaser.length);
        prodsTeaserArray.push(prodsTeaser[number]);
    }

    const studsTeaser = await prisma.stud.findMany({
        select: {
            ID: true,
            marka: true,
            model: true,
            rok: true,
            picture: true,
        },
    });

    const studsTeaserArray = [];

    for (let i = 0; i < 2; i++) {
        const number = Math.round(Math.random() * studsTeaser.length);
        studsTeaserArray.push(studsTeaser[number]);
    }


    const articlesTeaser = await prisma.articles.findMany({
        select: {
            art_id: true,
            art_title: true,
            art_picture: true,
            art_author: true,
            art_date: true,
        },
    });

    const articlesTempArray = [];

    for (let i = 0; i < 2; i++) {
        const number = Math.round(Math.random() * articlesTeaser.length);
        articlesTempArray.push(articlesTeaser[number]);
    }

    const articlesTeaserArray = articlesTempArray.map((item) => {
        let date = new Date(item.art_date)
        item.art_date = date.toLocaleDateString('pl-PL',);
        return item;
    });

    const letters = [...new Set(tempArray)];

    const result =[];
    result.push(letters);
    result.push(prodsTeaserArray);
    result.push(studsTeaserArray);
    result.push(articlesTeaserArray);

    return {
        props: { result }
    };
}

const title = "Encyklopedia";

export default function EncyklopediaHome({result}) {

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                <EncyMain results={result} title={title}/>
            </Container>
        </>
    )
}