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


  const displayedContacts = useSelector((state) => state.contact.arr);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    if (value === "") {
      dispatch(insert(contactData));
    } else {
      const filteredData = displayedContacts.filter(contact =>
        (`${contact.firstName} ${contact.lastName}`).toLowerCase().includes(value.toLowerCase())
      );
      dispatch(insert(filteredData));
    }
  };

  const handleSaveFilters = (filters) => {
    let filteredData = contactData;

    if (filters.contactType !== "All") {
      filteredData = filteredData.filter(contact => contact.contactType === filters.contactType);
    }

    if (filters.tags !== "All") {
      filteredData = filteredData.filter(contact => contact.tags === filters.tags);
    }

    if (filters.activeContact !== "All") {
      const isActive = filters.activeContact === "Yes";
      filteredData = filteredData.filter(contact => contact.activeContact === isActive);
    }
    if (filters.mainContact) {
      filteredData = filteredData.filter(contact => contact.isMain === filters.isMain);
    }
    dispatch(insert(filteredData));
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton color="primary" onClick={() => setOpen(true)}>
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
          {displayedContacts.length} contacts
        </Typography>
      </Box>

      <FilterModal open={open} onClose={() => setOpen(false)} onSave={handleSaveFilters} />
    </Box>
  );
};

export default Filter;

