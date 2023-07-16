import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";
import Link from "next/link";

export default function ModelsAccordion({models}) {

    const [loadedBrands, setLoadedBrands] = useState(models);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{maxWidth: 700, width: '100%', marginInline: 'auto'}}>
            <Accordion sx={{ boxShadow: 5 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant='h6' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Wybierz model samochodu:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {loadedBrands.map((item) => (
                        <Accordion key={item[0].index} sx={{maxWidth: 700, width: '100%', marginInline: 'auto', boxShadow: 5}} expanded={expanded === `${item[0].index}`} onChange={handleChange(`${item[0].index}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='h6' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{item[0].typ_nadwozia} {item[0].liczba_drzwi}-drzwiowy</Typography>
                            </AccordionSummary>
                            {Object.entries(item[0].models).map(([key, value]) => {
                                if (typeof value === 'object') {
                                    return (
                                        <AccordionDetails key={value.model_ID}>
                                            <Link style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                color: '#153F1A',
                                                textDecoration: "none"
                                            }}
                                                  href={`/seryjne/${value.marka}/${value.rodzina}/${value.generacja}/${value.typ_nadwozia}/${value.liczba_drzwi}/${value.model}`}
                                            >
                                                <Typography>
                                                    {value.model} ({value.rok_uruch}-{value.rok_zakoncz})
                                                </Typography>
                                            </Link>
                                        </AccordionDetails>
                                    )
                                }
                                }
                            )}
                        </Accordion>
                    ))
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    );

}