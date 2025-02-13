import { Drawer, IconButton, Box } from '@mui/material';
import AddContact from './AddContact';
import CloseIcon from '@mui/icons-material/Close';
import ContactDetails from './ContactDetails';


const DrawerMain = ({open,onClose,a}) => {
    return (  
        
        <Drawer anchor="right" open={open} onClose={onClose}>
        <Box p={3} width={300}>
            <IconButton onClick={() => onClose()} sx={{ position: 'absolute', top: 10, right: 10 }}>
                <CloseIcon />
            </IconButton>
        {a=="add" ?<AddContact onClose={onClose}/>:<ContactDetails/>} 
        </Box>
    </Drawer>
    );
}
 
export default DrawerMain;