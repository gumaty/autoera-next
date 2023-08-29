import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";

import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import GenerationSwiper from "@/components/GenerationSwiper";
import GenerationContainer from "@/components/GenerationContainer";
import { PrismaClient } from '@prisma/client';
import Breadcrumbs from "@/components/Breadcrumbs";
import FamilyMain from "@/components/FamilyMain";
import GenerationMain from "@/components/GenerationMain";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {

    const marka = context.params.marki;
    const rodzina = context.params.rodziny;
    const generacja = context.params.generacje;

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

    const generation = await prisma.generacje.findMany(
        {
            where: {
                marka_gener: marka,
                typ_gener: rodzina,
                gen_gener: generacja,
                OK: '1',
            },
            select: {
                gener_ID: true,
                marka_gener: true,
                typ_gener: true,
                gen_gener: true,
                lata: true,
                opis: true,
                img_gener: true,
            }
        }
    );

    const galeria = await prisma.gallery.findMany(
        {
            where: {
                marka: marka,
                typ: rodzina,
                generacja: generacja
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

    const nadwozia = await prisma.seryjne.findMany(
        {
            where: {
                marka: marka,
                rodzina: rodzina,
                generacja: generacja,
            },
            select: {
                typ_nadwozia: true,
                liczba_drzwi: true,
            },
            orderBy: [
                {
                    typ_nadwozia: "asc"
                },
                {
                    liczba_drzwi: "asc"
                }
            ]

        }
    );

    const modele = await prisma.seryjne.findMany(
        {
            where: {
                marka: marka,
                rodzina: rodzina,
                generacja: generacja,
            },
            select: {
                model_ID: true,
                marka: true,
                rodzina: true,
                generacja: true,
                model: true,
                typ_nadwozia: true,
                liczba_drzwi: true,
                rok_uruch: true,
                rok_zakoncz: true,
                moc_maks: true,
            },
            orderBy: {
                model: "asc"
            }

        }
    );

    const uniqueCarBodies = [...new Set(nadwozia.map((object) =>  JSON.stringify(object))),].map((string) => JSON.parse(string))

    const models = uniqueCarBodies.map((carBody, index) => {
        const body = [];
        let models = [];
        for (let i = 0; i < modele.length; i++) {
            if (modele[i].typ_nadwozia === carBody.typ_nadwozia && modele[i].liczba_drzwi === carBody.liczba_drzwi) {
                models.push(modele[i])
            }
        }
        const carItem = {...carBody, index, models};
        body.push(carItem);

        return body;
    })

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
    result.push(generation);
    result.push(generations);
    result.push(galeria);
    result.push(types);
    result.push(models);
    result.push(prodsTeaserArray);
    result.push(studsTeaserArray);
    result.push(articlesTeaserArray);

    return {
        props: { result }
    };
}

export default function GenerationHome({result}) {

    const router = useRouter();

    const [loadedBrands, setLoadedBrands] = useState(result);

    const { marki, rodziny, generacje } = router.query;

    const { marka_gener, typ_gener, lata, gen_gener } = loadedBrands[0];

    const title = `AUTO-ERA - Twój profesjonalny portal motoryzacyjny - Katalog samochodów seryjnych - ${marka_gener} ${typ_gener} ${gen_gener} (${lata})`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                <GenerationMain results={result} title={title}/>
            </Container>
        </>
    )
}