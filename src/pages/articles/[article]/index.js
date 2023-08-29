import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import ArticleContainer from "@/components/ArticleContainer";
import ArticleDetailMain from "@/components/ArticleDetailMain";

import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

    const article = context.params.article;
    const model = context.params.typ;

    const articles = await prisma.articles.findMany(
        {
            where: {
                art_title: article,
            },
            select: {
                art_id: true,
                art_title: true,
                art_content: true,
                art_type: true,
                art_author: true,
                art_date: true,
            },
        }

    );

    const results = articles.map((article) => {
        let date = new Date(article.art_date)
        article.art_date = date.toLocaleDateString('pl-PL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        return article;
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
        props: { result }
    };
}

export default function ArticleDetailHome( { result } ) {

    const [loadedBrands, setLoadedBrands] = useState(result);

    const router = useRouter();

    const { article } = router.query;

    const { art_title, art_content, art_author } = loadedBrands[0];

    const title = `AUTO-ERA - Twój profesjonalny portal motoryzacyjny - Artykuły - ${art_title}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>

                <ArticleDetailMain results={result} title={title} />

            </Container>
        </>
    )
}