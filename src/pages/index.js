import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import MainCard from "@/components/MainCard";
import CardContainer from "@/components/CardContainer";
import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

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

    const result = [];

    result.push(prodsArray);
    result.push(studsArray);

    return {
        props: { result },
    };
}
export default function Home( { result} ) {

  return (
    <>
      <Head>
        <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny</title>
        <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
            <Breadcrumbs />
            <Box sx={{p: '20px', bgcolor: 'white'}} >
                <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                    <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700', textAlign: 'center'}}>
                        Auto-era - Twój profesjonalny portal motoryzacyjny
                    </Typography>
                    <Typography variant='h5' component='h2' sx={{color: 'red', fontWeight: '700', textAlign: 'center'}}>
                        WSZYSTKIE AUTA ŚWIATA
                    </Typography>
                    <Typography variant='h5' component='h2' sx={{color: 'red', fontWeight: '700', textAlign: 'center'}}>
                        Nasza misja: INFORMACJA I EDUKACJA
                    </Typography>
                </Box>
                <CardContainer category={'seryjne'} cardsSql={result[0]} />
                <CardContainer category={'studialne'} cardsSql={result[1]} />
            </Box>
        </Container>
    </>
  )
}
