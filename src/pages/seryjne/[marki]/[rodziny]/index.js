import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import LogoSwiper from "@/components/LogoSwiper";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import BrandContainer from "@/components/BrandContainer";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";




export default function FamilyHome() {

    function convert(text){

        // return text.replace(/\n/g, '<br><br>').replace(/\r/g, '<br /><br />').replace(/\t/g, '<br /><br />');

        // const split = text.split('\r\n') //split up
        // //logging every new line:
        // const tempArray = split.map((item) => {`<p>${item}</p>`});
        // console.log(tempArray);
        // const newText = tempArray.join("")

        const textBefore   = ["\n\r", "\n\n", "\r\n", "\n", "\r", "m3", "CO2"];
        const textAfter = ["<br><br>", "<br><br>", "<br><br>", "<br><br>", "<br><br>", "m<sup>3</sup>", "CO<sub>2</sub>"];
        let newText = '';

        for (let i = 0; i < textBefore.length; i++) {
            newText = text.replaceAll(textBefore[i], textAfter[i]);
        }

        // const newText = text.replaceAll("\r\n", "<br><br>");

        // console.log(newText);

        return newText;
    }

    const router = useRouter();

    const [loadedData, setLoadedData] = useState([]);

    const { marki, rodziny } = router.query;

    useEffect(() => {
        fetch(
            `https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/rodziny.json?orderBy="family"&equalTo="${rodziny}"`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const brandKey = Object.keys(data)[0];
                return data[brandKey];

            })
            .then((res) => {

                let {brand: brandName, family: familyName, description: describe, image: picture, years: range} = res;

                describe = convert(describe);

                const newData = {
                    brand: brandName,
                    family: familyName,
                    description: describe,
                    image: picture,
                    years: range
                }

                return newData;
            })
            .then((data) => {
                setLoadedData(data);
            });
    }, []);

    const { brand, family, description, image, years } = loadedData;

    const title = `Katalog samochodów seryjnych - ${brand} ${family} (${years})`;

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>

                <BrandContainer title={title} brandData={loadedData}/>

            </Container>
        </>
    )
}