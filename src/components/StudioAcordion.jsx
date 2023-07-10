import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";
import Link from "next/link";

export default function StudioAccordion({models}) {

    const [loadedBrands, setLoadedBrands] = useState(models);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function convert(text){

        const textBefore   = ["\n\r", "\n\n", "\r\n", "\n", "\r", "m3", "CO2"];
        const textAfter = ["<br><br>", "<br><br>", "<br><br>", "<br><br>", "<br><br>", "m<sup>3</sup>", "CO<sub>2</sub>"];
        let newText = '';

        for (let i = 0; i < textBefore.length; i++) {
            newText = text.replaceAll(textBefore[i], textAfter[i]);
        }
        return newText;
    }

    return (
        <div style={{maxWidth: 700, width: '100%', marginInline: 'auto'}}>
            <Accordion sx={{ boxShadow: 5 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant='h6' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Wybierz samochód studialny:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {loadedBrands.map((item) => (
                        <Accordion key={item.marka} sx={{maxWidth: 700, width: '100%', marginInline: 'auto', boxShadow: 5}} expanded={expanded === `${item.marka}`} onChange={handleChange(`${item.marka}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='h6' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{item.marka}</Typography>
                            </AccordionSummary>
                            {Object.entries(item.models).map(([key, value]) => {

                                if (typeof value === 'object') {
                                    return (
                                        <AccordionDetails key={key}>
                                            <Link style={{ display: "flex", justifyContent: "center", color: '#153F1A', textDecoration: "none"}}
                                                  href={`/studialne/${value.marka}/${value.model}`}
                                            >
                                                <Typography>
                                                    {value.marka} {value.model} ({value.rok})
                                                </Typography>
                                            </Link>
                                        </AccordionDetails>
                                    )
                                }
                            })}
                        </Accordion>
                    ))
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    );

}