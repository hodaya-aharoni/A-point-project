import { TableRow, TableCell, IconButton } from "@mui/material";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { ContactDrawerTrigger } from './DrawerMUI'
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import { useDispatch } from "react-redux";
import { setCurrentContact, statusStar } from '../app/contactSlice.js'
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DrawerMain from "./DrawerMain.jsx";

const TableItem = ({ row ,open,onClose,setOpen}) => {
    const [value, setValue] = useState(0);
    let dispatch = useDispatch();

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell >{row.profilePicture}<Face6OutlinedIcon /></TableCell>
            <TableCell component="th" scope="row">{row.contactType}</TableCell>
            <TableCell >{row.firstName + " " + row.lastName}</TableCell>
            <TableCell>{row.role}</TableCell>
            <TableCell >
                <PersonOutlineOutlinedIcon />
                <LocalPhoneOutlinedIcon />
                <EmailOutlinedIcon />
            </TableCell>
            <TableCell ><Rating max={1} name="simple-controlled"
                value={value} onChange={(event, newValue) => {
                    setValue(newValue);
                    dispatch(statusStar(row))


                }}
                sx={{
                    '& .MuiRating-iconFilled': {
                        color: 'blue',
                    },

                }}
            />

            </TableCell>
            <TableCell >
                <ContactDrawerTrigger row={row} />

                {/* <IconButton onClick={() => {
                    setOpen(true)
                    dispatch(setCurrentContact(row));
                }}>
                    <RemoveRedEyeOutlinedIcon />
                </IconButton>
                <DrawerMain open={open} onClose={onClose} a="show" /> */}

            </TableCell>
        </TableRow>
    );
}

export default TableItem;