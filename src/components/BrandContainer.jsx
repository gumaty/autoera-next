import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

function BrandContainer(props){

    const { brandData } = props;

    return (
        <Box sx={{p: '20px', bgcolor: 'white'}} >
            <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{props.title}</Typography>
            </Box>
            <img
                src={`/images/logos/${brandData.img_marka}.webp`} alt={`Logo ${brandData.nazwa_marka}`} style={{float: "left"}}
            />

            <Typography sx={{mb: 2, color: '#153F1A', textAlign: "justify"}}>
                {brandData.opis_marka}
            </Typography>

        </Box>
    )
}

export default BrandContainer;