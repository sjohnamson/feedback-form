import { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AdminPage() {

    const [feedback, setFeedback] = useState([])

    useEffect(() => {fetchEntries()}, [])

    const fetchEntries = () => {
        axios
            .get('/feedback')
            .then(response => {
                console.log('in get', response.data)
                setFeedback(response.data);
            })
            .catch(err => {
                console.error('error in GET/ feedback entries')
            })
    }

    return (
        <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Feeling</TableCell>
              <TableCell align="right">Comprehension</TableCell>
              <TableCell align="right">Support</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedback.map((entry, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {entry.feeling}
                </TableCell>
                <TableCell align="right">{entry.understanding}</TableCell>
                <TableCell align="right">{entry.support}</TableCell>
                <TableCell align="right">{entry.comments}</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}