import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import StudioModelContainer from "@/components/StudioModelContainer";
import ArticleContainer from "@/components/ArticleContainer";

export default function StudioModelHome(props) {

    function convert(text){

        const textBefore   = ["\n\r", "\n\n", "\r\n", "\n", "\r", "m3", "CO2"];
        const textAfter = ["<br><br>", "<br><br>", "<br><br>", "<br><br>", "<br><br>", "m<sup>3</sup>", "CO<sub>2</sub>"];
        let newText = '';

        for (let i = 0; i < textBefore.length; i++) {
            newText = text.replaceAll(textBefore[i], textAfter[i]);
        }
        return newText;
    }

    const [loadedBrands, setLoadedBrands] = useState([]);

    const router = useRouter();

    const { article } = router.query;

    useEffect(() => {
        fetch(
            `https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/articles.json`
        )
            .then((response) => {

                return response.json();
            })
            .then((data) => {
                for (const key in data) {
                    if (key === article) {
                            console.log(data[key])
                            return data[key];
                        }
                    }

            })
            .then((res) => {

                let {subject: topic, content: describe, author: initials} = res;

                describe = convert(describe);

                const tryArray = describe.split(/\n/g);

                // console.log(tryArray);

                const newArray = {
                    subject: topic,
                    content: tryArray,
                    author: initials

                }

                return newArray;
            })
            .then((data) => {
                console.log(data);
                setLoadedBrands(data);
            });
    }, []);


    const { subject, content, author } = loadedBrands;

    const title = `Artykuły - ${subject}`;

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

                <ArticleContainer title={title} article={loadedBrands}/>

            </Container>
        </>
    )
}