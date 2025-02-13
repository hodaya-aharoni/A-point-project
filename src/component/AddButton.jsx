import React, { useState } from 'react';
import { IconButton, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import ContactForm from './ContactDetails'; 
import AddContact from './AddContact';
import DrawerMain from './DrawerMain';


const AddButton = ({open,onClose,setOpen}) => {
  
  return (
    <>
      <Box position="absolute" top={16} right={16}>
        <Button
          variant="contained"
          startIcon={<PersonAddIcon />}
          onClick={() => setOpen(true)}
        >
          הוסף איש קשר
        </Button>
      </Box>

      <DrawerMain open={open} onClose={onClose} a="add" />
      {/* <Drawer anchor="right" open={open} onClose={onClose}>
                <Box p={3} width={300}>
                    <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', top: 10, right: 10 }}>
                        <CloseIcon />
                    </IconButton>
                    <AddContact onClose={onClose}/>
                </Box>
            </Drawer> */}
    </>
  );
};

export default AddButton;