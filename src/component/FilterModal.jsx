import { useState } from "react";
import { Box, Typography, Modal, Button, MenuItem, Select, Switch, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FilterModal = ({ open, onClose, onSave }) => {
  const [filters, setFilters] = useState({
    contactType: "All",
    tags: "All",
    activeContact: "All",
    isMaim: 0
  });

  return (
    <Modal open={open} onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ backgroundColor: "white", padding: 3, borderRadius: 2, width: 300, boxShadow: 3 }}>
       
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">Filter</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Button variant="outlined" size="small" sx={{ mb: 2 }} onClick={() => setFilters({
          contactType: "All",
          tags: "All",
          activeContact: "All",
          isMaim: 0
        })}>
          x Clear all
        </Button>

        <Typography variant="body1">Contact Type</Typography>
        <Select fullWidth value={filters.contactType} onChange={(e) => setFilters({ ...filters, contactType: e.target.value })}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Cleaner">Cleaner</MenuItem>
          <MenuItem value="Gardener">Gardener</MenuItem>
          <MenuItem value="Electrician">Electrician</MenuItem>
          <MenuItem value="Plumber">Plumber</MenuItem>
          <MenuItem value="Contractor">Contractor</MenuItem>
          <MenuItem value="Tenant">Tenant</MenuItem>
          <MenuItem value="Owner">Owner</MenuItem>
          <MenuItem value="Resident">Resident</MenuItem>
        </Select>

        <Typography variant="body1">Tags</Typography>
        <Select fullWidth value={filters.tags} onChange={(e) => setFilters({ ...filters, tags: e.target.value })}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="VIP">VIP</MenuItem>
          <MenuItem value="New">New</MenuItem>
        </Select>

        <Typography variant="body1">Active Contact</Typography>
        <Select fullWidth value={filters.activeContact} onChange={(e) => setFilters({ ...filters, activeContact: e.target.value })}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>

        <Typography variant="body1">Main Contact</Typography>
        <Switch checked={filters.isMaim} onChange={(e) => setFilters({ ...filters, isMaim: e.target.checked })} />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button variant="text" onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={() => { 
            onSave(filters); 
            onClose();    
          }}>Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FilterModal;
