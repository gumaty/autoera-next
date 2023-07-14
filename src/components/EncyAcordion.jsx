import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {Box} from "@mui/material";

export default function EncyAccordion(props) {

    const { letter } = props;

    const [loadedBrands, setLoadedBrands] = useState(letter);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{maxWidth: 700, width: '100%', marginInline: 'auto'}}>

                {letter
                    .map((value) => {
                    if (typeof value === 'object') {
                        return (
                            <Accordion key={value.tytul} expanded={expanded === `${value.tytul}`} onChange={handleChange(`${value.tytul}`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{ border: '1', borderColor: '#99CC99' }}
                                >
                                    <Typography variant='h6' component='h3' sx={{ width: '90%', flexShrink: 0 }}>
                                        {value.tytul}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                    {value.image !== '' ? (
                                    <Box>
                                        <img
                                            src={`http://server090121.nazwa.pl/images/encyk/tn/${value.image}.webp`}
                                            alt={`Zdjęcie do hasła: ${value.tytul}`}
                                        />
                                    </Box>
                                ) : null}

                                    <Box>
                                        <Typography sx={{ textAlign: 'justify' }}>
                                            {value.tresc}
                                        </Typography>
                                    </Box>

                                </AccordionDetails>
                            </Accordion>
                        )
                    }
                    }

                )}

        </div>
    );

}