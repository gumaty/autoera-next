import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import GalleryModal from "@/components/GalleryModal";
import ModelsAccordion from "@/components/ModelsAcordion";

function FamilyContainer(props){

    let { familyData, gallery, models } = props;

    if (familyData.generacja_typ === "1") gallery = [];

    const descriptionArray = familyData.opis_typ.split(/\n/g);

    return (
        <Box sx={{display: "flex", flexDirection: "column", p: '20px', bgcolor: 'white'}} >
            <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Katalog samochodów seryjnych</Typography>
                <Typography variant='h5' component='h1' textAlign="center"  sx={{color: '#153F1A', fontWeight: '700'}}>{familyData.nazwa_marka} {familyData.nazwa_typ} ({familyData.typ_lata})</Typography>
            </Box>
            <Box sx={{display: "flex", mb: 2, py: 2, width: { xs: "100%", sm: "80%" }, borderTop: 2, borderBottom: 2, borderColor: 'red', marginInline: "auto"}}>
                <Box sx={{marginInline: "auto"}}>
                    <img
                        src={`http://server090121.nazwa.pl/images/family/${familyData.img_typ}.webp`} alt={`Logo ${familyData.nazwa_marka} ${familyData.nazwa_typ}`} style={{maxWidth: "500px", width: "100%"}}
                    />
                </Box>
            </Box>
            <Box>
                {familyData.generacja_typ === "0" ? <ModelsAccordion models={ models }/> : null}
            </Box>
            <Box>
                {descriptionArray && Array.isArray(descriptionArray) && descriptionArray.map((paragraph, index) => (
                    <Typography key={index} sx={{mb: 2, color: '#153F1A', textAlign: "justify"}}>
                        {paragraph}
                    </Typography>
                ))}
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
                {gallery && Array.isArray(gallery) && gallery.map((image) => (
                    <Box key={image.image_ID} sx={{margin: 1}}>
                        <GalleryModal image={image}/>
                    </Box>

                ))}
            </Box>
        </Box>
    )
}

export default FamilyContainer;