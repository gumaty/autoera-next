import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Box } from "@mui/material";

export default function GalleryModal(props) {

    const {familyData, image} = props;

    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Box sx={{margin: 1}}>
                <img onClick={() => setOpen(true)}
                    src={`/images/wsp/${familyData.catalogue}/tn/${image}.jpg`} alt={`Miniatura ${familyData.brand} ${familyData.family}`}
                />
            </Box>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 750,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose
                        variant="outlined"
                        sx={{
                            top: 'calc(-1/4 * var(--IconButton-size))',
                            right: 'calc(-1/4 * var(--IconButton-size))',
                            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                            borderRadius: '50%',
                            bgcolor: 'background.body',
                        }}
                    />
                    <Typography variant='h5' component='h1' sx={{color: '#153F1A', fontWeight: '700'}}>{familyData.brand} {familyData.family}  {familyData.generation}</Typography>
                    <Box sx={{margin: 1}}>
                        <img style={{maxWidth: "700px", width: "100%"}} onClick={() => setOpen(true)}
                             src={`/images/wsp/${familyData.catalogue}/${image}.jpg`} alt={`Miniatura ${familyData.brand} ${familyData.family}  ${familyData.generation}`}
                        />
                    </Box>
                </Sheet>
            </Modal>
        </>
    );
}