import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";


function ArticleContainer(props){

    const { article } = props;

    const descriptionArray = article.art_content.split(/\n/g);

    return (
        <Box sx={{display: "flex", flexDirection: "column", p: '20px', bgcolor: 'white'}} >
            <Box sx={{mb:2, px: 2, py: 1, display:'block', borderLeft: 10, borderColor: 'red'}}>
                <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{article.art_title}</Typography>
            </Box>

            <Box>
                {descriptionArray && Array.isArray(descriptionArray) && descriptionArray.map((paragraph, index) => (
                    paragraph.includes(".jpg") ? (
                      <Box key={index} sx={{display: "flex", mb: 2, py: 2, width: { xs: "100%", sm: "80%" }, borderTop: 2, borderBottom: 2, borderColor: 'red', marginInline: "auto"}}>
                        <Box sx={{marginInline: "auto"}}>
                            <img
                                src={`/images/articles/${paragraph}`} alt={`Zdjęcie do artykułu`} style={{maxWidth: "500px", width: "100%"}}
                            />
                        </Box>
                        </Box>
                        ) : (
                            <Typography key={index} sx={{mb: 2, color: '#153F1A', textAlign: "justify"}}>
                                {paragraph}
                            </Typography>
                        )

                ))}
            </Box>
        </Box>
    )
}

export default ArticleContainer;