import React, { useState } from 'react';
import { Drawer, IconButton, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ContactForm from './ContactDetails'; 

const AddContact = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Box position="absolute" top={16} right={16}>
                <Button 
                    variant="contained" 
                    startIcon={<PersonAddIcon />} 
                    onClick={() => setOpen(true)}>
                    הוסף איש קשר
                </Button>
            </Box>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box p={3} width={300}>
                    <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', top: 10, right: 10 }}>
                        <CloseIcon />
                    </IconButton>
                    <ContactForm />
                </Box>
            </Drawer>
        </>
    );
};

export default AddContact;