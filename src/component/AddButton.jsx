import { useState } from "react";
import React from 'react';
import { Box, Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DrawerMain from './DrawerMain';


const AddButton = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);


  return (
    <>
      <Box position="absolute" top={16} right={16}>
        <Button
          variant="contained"
          startIcon={<PersonAddIcon />}
          onClick={() => setDrawerOpen(true)}
        >
          הוסף איש קשר
        </Button>
      </Box>
      <DrawerMain open={drawerOpen} onClose={() => setDrawerOpen(false)} mode="add" contact={null} />
    </>
  );
};

export default AddButton;