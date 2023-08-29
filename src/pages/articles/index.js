import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import ArticlesAccordion from "@/components/ArticlesAccordion";
import React from "react";



import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticlesMain from "@/components/ArticlesMain";

const prisma = new PrismaClient();

export async function getServerSideProps() {

    let types = await prisma.articles.findMany({
        select: {
            art_type: true,
            },
        orderBy:{
                art_type: "asc",
            },
    });

    const articles = await prisma.articles.findMany({
        select: {
            art_id: true,
            art_title: true,
            art_content: true,
            art_type: true,
            art_author: true,
            art_date: true,
        },
        orderBy:[
            {
                art_type: "asc",
            },
            {
                art_id: "desc",
            },
        ]
    });

    let articlesArray = articles.map((article) => {
        let date = new Date(article.art_date)
        article.art_date = date.toLocaleDateString('pl-PL');
        return article;
    });

    let newTypes = types.map((type) => {
        return type.art_type
    });

    newTypes = [...new Set(newTypes)];

    const results = newTypes.map((type) => {
        const types = [];

        if (type === "hist") {
            types.push("Artykuły historyczne");
        } else if (type === "org") {
            types.push("Artykuły ogólne");
        }  else if (type === "tech") {
            types.push("Artykuły techniczne");
        }

        const articles = [];
        types.push(articles);
        for (let i = 0; i < articlesArray.length; i++) {
            if (type === articlesArray[i].art_type) {
                articles.push(articlesArray[i]);
            }
        }
        return types;
    });

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


    const result = [];
    result.push(results);
    result.push(prodsTeaserArray);
    result.push(studsTeaserArray);
    result.push(articlesTeaserArray);

    return {
        props: { result },
    };
}

export default function ArticlesHome( { result } ) {

    const title = "Artykuły motoryzacyjne";

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                <ArticlesMain results={result} title={title} />
            </Container>
        </>
    )
}