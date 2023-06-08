import Head from 'next/head'
import {Box, Container, Typography} from "@mui/material";
import AddBrandForm from "@/components/forms/AddBrandForm";

const title = "Dodaj nową markę";

export default function BrandNewHome() {

    function addBrandHandler(brandData) {
        fetch(
            'https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/marki.json',
            {
                method: 'POST',
                body: JSON.stringify(brandData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            console.log("Marka dodana")
        });
    }

    return (
        <>
            <Head>
                <title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny</title>
                <meta name="description" content="Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="xl" sx={{bgcolor: '#FFFECC', color: '#153F1A'}}>
                <Box sx={{p: '20px', bgcolor: 'white'}} >
                    <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                        <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{title}</Typography>
                    </Box>
                    <Box sx={{width: {xs: 1, sm: 0.9} , marginInline: 'auto', p: '30px', bgcolor: 'white', border: 1, borderRadius: 5, borderColor: '##153F1A', boxShadow: 10}} >
                        <AddBrandForm onAddBrand={addBrandHandler} />
                    </Box>
                </Box>
            </Container>
        </>
    )
}