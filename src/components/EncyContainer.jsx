import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import GalleryModal from "@/components/GalleryModal";
import {useRouter} from "next/router";
import EncyAccordion from "@/components/EncyAcordion";

function EncyContainer({ entries }){

    const router = useRouter();

    const { entry } = router.query;

    return (
        <Box sx={{display: "flex", flexDirection: "column", p: '20px', bgcolor: 'white'}} >
            <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Encyklopedia samochodu</Typography>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Hasła na: {entry}</Typography>
            </Box>
                    <EncyAccordion letter={entries}/>
        </Box>
    )
}

export default EncyContainer;