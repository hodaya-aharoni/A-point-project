
import React, { useState } from 'react';
import { Drawer, IconButton, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ContactDetails from './ContactDetails'
import {setCurrentContact} from '../app/contactSlice'
import { useDispatch } from 'react-redux'



const ContactDrawer = ({ contact, open, onClose }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: 450 }}}>
               <Box p={3} sx={{ width: '80%' }}> 
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
                    <CloseIcon />
                </IconButton>
                <ContactDetails />
                <Typography variant="h6" sx={{ marginBottom: 2 }}> </Typography>
            </Box>
        </Drawer>

    );
};

const ContactDrawerTrigger = ({ row }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    let dispatch = useDispatch();
    return (
        <>
            <IconButton onClick={() => {              
                setDrawerOpen(true)   
                dispatch(setCurrentContact(row));
            }}>
                <RemoveRedEyeOutlinedIcon />
            </IconButton>
            <ContactDrawer contact={row} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </>

    );

};

export { ContactDrawer, ContactDrawerTrigger };