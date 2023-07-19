import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";
import Link from "next/link";

export default function ArticleAccordion() {

    const [loadedBrands, setLoadedBrands] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

        useEffect(() => {
        fetch(
            `https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/articles.json`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                const articles = [];

                for (const key in data) {
                    const article = {
                        id: key,
                        ...data[key],
                    };

                    articles.push(article);
                }
                return articles;

            })

            .then((data) => {
                setLoadedBrands(data);
            });
    }, []);

    return (
        <div style={{maxWidth: 700, width: '100%', marginInline: 'auto'}}>
            <Accordion sx={{ boxShadow: 5 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant='h6' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Wybierz artykuł:</Typography>
                </AccordionSummary>
                <AccordionDetails>

                        <Accordion sx={{maxWidth: 700, width: '100%', marginInline: 'auto', boxShadow: 5}} expanded={expanded === `panel1`} onChange={handleChange(`panel1`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='h6' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Artykuły historyczne</Typography>
                            </AccordionSummary>
                            {loadedBrands.map((item) => (

                                <AccordionDetails key={item.id}>
                                    <Link style={{ display: "flex", justifyContent: "center", color: '#153F1A', textDecoration: "none"}}
                                          href={`/articles/${item.id}`}
                                    >
                                        <Typography>
                                            {item.subject}
                                        </Typography>
                                    </Link>
                                </AccordionDetails>
                            ))
                            }
                        </Accordion>
                </AccordionDetails>
            </Accordion>
        </div>
    );

}