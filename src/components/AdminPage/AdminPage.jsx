import { useState, useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FlagIcon from '@mui/icons-material/Flag';


export default function AdminPage() {
    // all the feedback
    const [feedback, setFeedback] = useState([])
    // state for the popover anchor
    const [anchorEl, setAnchorEl] = useState(null);

    // renders the entries on load 
    useEffect(() => { fetchEntries() }, [])

    // GET entries for the table
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

    // DELETE entries from the table
    const deleteEntry = (entry) => {
        console.log('Image to delete: ', entry)
        axios
            .delete(`/feedback/${entry.id}`)
            .then((response) => {
                console.log('Deleted: ', entry.id);
                fetchEntries();
                handleClose();
            })
            .catch((error) => {
                console.log('Error in DELETE/ feedback', error);
            })
    }

    // function to flag/unflag entries
    const handleFlag = (entry) => {
        console.log('flagged?', entry.flagged)
        axios
            .put(`/feedback/${entry.id}`, { flagged: !entry.flagged })
            .then((response) => {
                console.log('Flagged: ', entry.id);
                fetchEntries();
            })
            .catch((error) => {
                console.log('Error in PUT/ feedback', error);
            })

    }

    // functions to create the delete button popover effect
    const handlePopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //  variables for the popover
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <TableContainer component={Paper} sx={{ width: '80%', m: 'auto', minWidth: 650 }}>
            <Table stickyHeader aria-label='simple table'>
                <TableHead sx={{
                    '& th': {
                        color: '#fcf2e7',
                        backgroundColor: '#17603d'
                    }
                }}>
                    <TableRow >
                        <TableCell>Feeling</TableCell>
                        <TableCell>Comprehension</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Flag</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedback.map((entry, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: entry.flagged === true && "#faff3f" }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                            >{entry.feeling}</TableCell>
                            <TableCell >{entry.understanding}</TableCell>
                            <TableCell >{entry.support}</TableCell>
                            <TableCell >{entry.comments}</TableCell>
                            <TableCell >{entry.date}</TableCell>
                            {/* buttons to flag and delete */}
                            <TableCell >
                                <IconButton onClick={() => handleFlag(entry)} aria-label="delete" color="error">
                                    <FlagIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell >
                                <IconButton onClick={handlePopover} aria-label="delete" color="error">
                                    <DeleteIcon />
                                </IconButton>

                                {/* popover info */}
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                >
                                    <Typography sx={{ margin: 5 }}>
                                        Are you sure you want to delete this entry?
                                    </Typography>
                                    <Stack sx={{ margin: 5 }}
                                        direction='row' spacing={8}>
                                        <Button onClick={handleClose}
                                            aria-label="delete"
                                            color="secondary"
                                            variant='outlined'
                                        >
                                            No, Save!
                                        </Button>
                                        <Button
                                            onClick={() => deleteEntry(entry)}
                                            startIcon={<DeleteIcon />}
                                            aria-label="delete"
                                            color="error"
                                            variant='outlined'
                                        >
                                            Yes, Delete!
                                        </Button>
                                    </Stack>
                                </Popover>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}