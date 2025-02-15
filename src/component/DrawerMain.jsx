import { Drawer, IconButton, Box } from '@mui/material';
import AddContact from './AddContact';
import CloseIcon from '@mui/icons-material/Close';
import ContactDetails from './ContactDetails';


const DrawerMain = ({ open, onClose, mode, contact }) => {
    return (

        <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: 450 } }}>
            <Box p={3} >
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
                    <CloseIcon />
                </IconButton>
                {mode === "view" && <ContactDetails contact={contact} onEdit={() => mode = "edit"} />}
                {mode === "edit" && <AddContact contact={contact} isEdit={true} onClose={onClose} />}
                {mode === "add" && <AddContact contact={null} isEdit={false} onClose={onClose} />}
            </Box> 
        </Drawer>
    );
}

export default DrawerMain;
