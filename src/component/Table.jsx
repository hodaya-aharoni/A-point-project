import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableItem from './TableItem';
import { useSelector } from 'react-redux';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
export default function CTable() {
  let arr = useSelector(state=>state.contact.arr)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><FaceOutlinedIcon/></TableCell>
                        <TableCell>ContactType</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell >Role</TableCell>
                        <TableCell >ContactDetails</TableCell>
                        <TableCell >MainContact</TableCell>
                        <TableCell >...</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {arr.map((row,index) => (
                        <TableItem row={row} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
