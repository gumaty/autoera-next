import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import FamilySwiper from "@/components/FamilySwiper";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import BrandContainer from "@/components/BrandContainer";
import GenerationSwiper from "@/components/GenerationSwiper";
import FamilyContainer from "@/components/FamilyContainer";

export default function FamilyHome(props) {

    function convert(text){

        const textBefore   = ["\n\r", "\n\n", "\r\n", "\n", "\r", "m3", "CO2"];
        const textAfter = ["<br><br>", "<br><br>", "<br><br>", "<br><br>", "<br><br>", "m<sup>3</sup>", "CO<sub>2</sub>"];
        let newText = '';

        for (let i = 0; i < textBefore.length; i++) {
            newText = text.replaceAll(textBefore[i], textAfter[i]);
        }
        return newText;
    }

    const router = useRouter();

    const [loadedBrands, setLoadedBrands] = useState([]);

    const { marki, rodziny } = router.query;

    // console.log(marki);
    // console.log(rodziny);

    useEffect(() => {
        fetch(
            `https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/brands.json?orderBy="name"&equalTo="${marki}"`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const brandKey = Object.keys(data)[0];
                const familyList = data[brandKey].families;

                function findFamily(object, value) {
                    for (let key in object) {
                        if (object.hasOwnProperty(key) && typeof object[key] === 'object') {
                            const subObject = object[key];
                            for (let subKey in subObject) {
                                if (subObject.hasOwnProperty(subKey) && subObject[subKey] === value) {
                                    return subObject;
                                }
                            }
                        }
                    }
                    return null;
                }
                const family = rodziny;
                const familyFound = findFamily(familyList, family);

                return familyFound;

            })
            .then((res) => {

                let {brand: name, family: fam, description: describe, image: picture, years: range, galery: gal, generation: gen} = res;

                describe = convert(describe);

                const tryArray = describe.split(/\n/g);

                // console.log(tryArray);

                const newArray = {
                    brand: name,
                    family: fam,
                    description: tryArray,
                    image: picture,
                    years: range,
                    galery: gal,
                    generation: gen
                }

                return newArray;
            })
            .then((data) => {
                setLoadedBrands(data);
            });
    }, []);

    const { brand, family, description, image, years, galery, generation } = loadedBrands;

    const title = `Katalog samochodów seryjnych - ${brand} ${family} (${years})`;

    // console.log(loadedBrands);

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
                    <GenerationSwiper rodzina={loadedBrands} />
                </Box>
                <FamilyContainer title={title} familyData={loadedBrands}/>

            </Container>
        </>
    )
}