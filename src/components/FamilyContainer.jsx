import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import GalleryModal from "@/components/GalleryModal";

function FamilyContainer(props){

    const { familyData } = props;

    return (
        <Box sx={{display: "flex", flexDirection: "column", p: '20px', bgcolor: 'white'}} >
            <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Katalog samochodów seryjnych</Typography>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{familyData.brand} {familyData.family} ({familyData.years})</Typography>
            </Box>
            <Box sx={{display: "flex", mb: 2, py: 2, width: { xs: "100%", sm: "80%" }, borderTop: 2, borderBottom: 2, marginInline: "auto"}}>
                <Box sx={{marginInline: "auto"}}>
                    <img
                        src={`/images/family/${familyData.image}.webp`} alt={`Logo ${familyData.brand} ${familyData.family}`} style={{maxWidth: "500px", width: "100%"}}
                    />
                </Box>
            </Box>
            <Box>
                {familyData.description && Array.isArray(familyData.description) && familyData.description.map((paragraph, index) => (
                    <Typography key={index} sx={{mb: 2, color: '#153F1A', textAlign: "justify"}}>
                        {paragraph}
                    </Typography>
                ))}
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
                {familyData.galery && Array.isArray(familyData.galery) && familyData.galery.map((image) => (
                    <Box key={image} sx={{margin: 1}}>
                        <GalleryModal familyData={familyData} image={image}/>
                    </Box>

                ))}
            </Box>


        </Box>
    )
}

export default FamilyContainer;