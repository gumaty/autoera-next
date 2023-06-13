import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";

export default function StudioAccordion() {

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
            `https://autoera-64fe0-default-rtdb.europe-west1.firebasedatabase.app/studio.json`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // const brandKey = Object.keys(data)[0];
                // const studioList = data[brandKey];

                const studioCars = [];

                for (const key in data) {
                    const studioCar = {
                        id: key,
                        ...data[key],
                    };

                    studioCars.push(studioCar);
                }

                // console.log(studioCars);

                return studioCars;

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
                    <Typography variant='h6' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>Wybierz samochód studialny:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {loadedBrands.map((item) => (
                        <Accordion key={item.id} sx={{maxWidth: 700, width: '100%', marginInline: 'auto', boxShadow: 5}} expanded={expanded === `${item.id}`} onChange={handleChange(`${item.id}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='h6' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{item.id}</Typography>
                            </AccordionSummary>
                            {Object.entries(item).map(([key, value]) => {

                                if (typeof value === 'object') {
                                    return (
                                        <AccordionDetails key={key}>
                                            <Typography>
                                                {value.brand} {value.name} ({value.year})
                                            </Typography>
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