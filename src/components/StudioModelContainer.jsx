import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import GalleryModal from "@/components/GalleryModal";

function StudioModelContainer(props){

    const { modelData } = props;

    return (
        <Box sx={{display: "flex", flexDirection: "column", p: '20px', bgcolor: 'white'}} >
            <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Katalog samochodów studialnych</Typography>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{modelData.marka} {modelData.model} ({modelData.rok})</Typography>
            </Box>
            <Box sx={{display: "flex", mb: 2, py: 2, width: { xs: "100%", sm: "80%" }, borderTop: 2, borderBottom: 2, borderColor: 'red', marginInline: "auto"}}>
                <Box sx={{marginInline: "auto"}}>
                    <img
                        src={`http://server090121.nazwa.pl/images/studio/${modelData.picture}.webp`} alt={`Miniatura ${modelData.marka} ${modelData.model}`} style={{maxWidth: "500px", width: "100%"}}
                    />
                </Box>
            </Box>
            <Box>
                <Typography sx={{mb: 2, color: '#153F1A', textAlign: "justify"}}>
                    {modelData.opis}
                </Typography>

                {/*{modelData.description && Array.isArray(modelData.opis) && modelData.opis.map((paragraph, index) => (*/}
                {/*    <Typography key={index} sx={{mb: 2, color: '#153F1A', textAlign: "justify"}}>*/}
                {/*        {paragraph}*/}
                {/*    </Typography>*/}
                {/*))}*/}
            </Box>
        </Box>
    )
}

export default StudioModelContainer;