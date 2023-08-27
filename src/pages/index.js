import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import MainCard from "@/components/MainCard";
import CardContainer from "@/components/CardContainer";
import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import HomeMain from "@/components/HomeMain";

const prisma = new PrismaClient();

export async function getServerSideProps() {

    const prods = await prisma.updatesy.findMany({
        where: {
            update_strona: "prod"
        },
        select: {
            update_ID: true,
            update_tresc: true,
            update_image: true,
            update_link: true,
            update_data: true,
            update_strona: true,
        },
        orderBy:{
            update_data: "desc",
        },
        take: 3,
    });

    const studs = await prisma.updatesy.findMany({
        where: {
            update_strona: "stud"
        },
        select: {
            update_ID: true,
            update_tresc: true,
            update_image: true,
            update_link: true,
            update_data: true,
            update_strona: true,
        },
        orderBy:{
            update_data: "desc",
        },
        take: 3,
    });

    const prodsArray = prods.map((item) => {
        let date = new Date(item.update_data)
        item.update_data = date.toLocaleDateString('pl-PL',);
        return item;
    });

    const studsArray = studs.map((item) => {
        let date = new Date(item.update_data)
        item.update_data = date.toLocaleDateString('pl-PL',);
        return item;
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

    result.push(prodsArray);
    result.push(studsArray);
    result.push(prodsTeaserArray);
    result.push(studsTeaserArray);
    result.push(articlesTeaserArray);

    return {
        props: { result },
    };
}
export default function Home( { result } ) {

  return (
    <>
      <Head>
        <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny</title>
        <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
            <HomeMain results={result}/>
        </Container>
    </>
  )
}
