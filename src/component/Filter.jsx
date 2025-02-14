
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, InputAdornment, IconButton, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { insert } from "../app/contactSlice";
import contactData from "../contact.json";
import FilterModal from "./FilterModal";

const Filter = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  

  const contactsCount = useSelector((state) => state.contact.arr.length);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    const filteredData = contactData.filter(contact =>
      (`${contact.firstName} ${contact.lastName}`).toLowerCase().includes(value.toLowerCase())
    );

    dispatch(insert(filteredData));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
  

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton  color="primary" onClick={() => setOpen(true)}>
          <FilterAltOutlinedIcon fontSize="medium" />
        </IconButton>
        <Typography variant="h6" fontWeight="bold" color="primary">
          Filter
        </Typography>
      </Box>


      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          variant="outlined"
          placeholder="חפש לפי שם"
          value={search}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "100%",
            maxWidth: 300,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              fontSize: "14px",
            },
          }}
          size="small"
        />
        
 
        <Typography variant="body1" color="textSecondary">
          {contactsCount} contact 
        </Typography>
      </Box>
      <FilterModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default Filter;

