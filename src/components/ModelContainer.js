import {Box, Typography} from "@mui/material";
import ModelsAccordion from "@/components/ModelsAcordion";
import GalleryModal from "@/components/GalleryModal";
import React from "react";
import DataTable from "@/components/DataTable";

function ModelContainer({ model }) {

    return (
        <Box sx={{display: "flex", flexDirection: "column", p: '20px', bgcolor: 'white'}} >
            <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Katalog samochodów seryjnych</Typography>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{model.marka} {model.rodzina} {model.generacja} {model.model} {model.typ_nadwozia} {model.liczba_drzwi}-drzwiowy ({model.rok_uruch}-{model.rok_zakoncz})</Typography>
            </Box>
            <Box>
                <DataTable model={model} />
            </Box>
        </Box>
    )

}

export default ModelContainer;