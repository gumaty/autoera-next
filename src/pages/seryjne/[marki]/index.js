import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import FamilySwiper from "@/components/FamilySwiper";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import BrandContainer from "@/components/BrandContainer";
import { getBrand } from '../../../scripts/api';

export default function SerialHome() {

    const router = useRouter();

    const [loadedBrands, setLoadedBrands] = useState([]);

    const { marki } = router.query;

    useEffect(() => {
        fetch(
            `https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/brands.json?orderBy="name"&equalTo="${marki}"`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const brandKey = Object.keys(data)[0];
                return data[brandKey];

            })
            .then((res) => {

                let {name: brand, description: describe, image: picture, years: range, families: rodziny} = res;

                const tryArray = describe.split(/\n/g);

                const newArray = {
                    name: brand,
                    description: tryArray,
                    image: picture,
                    years: range,
                    families: rodziny
                }

                return newArray;
            })
            .then((data) => {
                setLoadedBrands(data);
            });
    }, [router.query.marki, router.isReady]);

    const { name, description, image, years, families } = loadedBrands;

    const title = `Katalog samochodów seryjnych - ${name} (${years})`;

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                <Box>
                    <FamilySwiper marka={loadedBrands} />
                </Box>
                <BrandContainer title={title} brandData={loadedBrands}/>

            </Container>
        </>
    )
}