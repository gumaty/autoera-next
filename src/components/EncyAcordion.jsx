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

    const [loadedBrands, setLoadedBrands] = useState([]);
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

    useEffect(() => {
        fetch(
            `https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/encyklopedia.json`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                const allEntries = [];

                for (const key in data) {
                    if (key === letter) {
                        const entry = {
                            id: key,
                            ...data[key],
                        };
                        return entry;

                    }

                }
                // console.log(entry);

                return entry;

            })

            .then((data) => {
                setLoadedBrands(data);
            });
    }, []);

    return (
        <div style={{maxWidth: 700, width: '100%', marginInline: 'auto'}}>

                {Object.entries(loadedBrands)
                    .map(([key, value]) => {
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
                                            src={`/images/encyk/tn/${value.image}.webp`}
                                            alt={`Zdjęcie dohasła: ${value.tytul}`}
                                        />
                                    </Box>
                                ) : null}

                                    <Box>
                                        <Typography>
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