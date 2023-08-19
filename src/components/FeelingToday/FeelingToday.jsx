import { useDispatch, useSelector, } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';

import { useHistory } from 'react-router-dom'

export default function FeelingToday() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newFeelings, setNewFeelings] = useState('');

    const storeFeedback = () => {
        dispatch({type: 'ADD_FEEDBACK', payload: newFeelings})
        // history.push('/checkoutpage')
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                onChange={event => {setNewFeelings(event.target.value)}}
                value={newFeelings}
                id="feelingInput"
                label="Feeling?"
                variant="standard"
            />
            <Button
                variant="outlined"
                endIcon={<NavigateNextIcon
                />}
            >
                Next
            </Button>
        </Box>
    )
}