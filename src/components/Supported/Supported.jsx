import { useDispatch, useSelector, } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';

import { useHistory } from 'react-router-dom'

export default function Supported() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newSupported, setNewSupported] = useState('');

    const storeFeedback = () => {
        dispatch({type: 'ADD_FEEDBACK', payload: {key: 'support', value: newSupported }})
        history.push('/comments')
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
                onChange={event => {setNewSupported(event.target.value)}}
                value={newSupported}
                id="supportedInput"
                label="Supported?"
                variant="standard"
            />
            <Button
            onClick={storeFeedback}
                variant="outlined"
                endIcon={<NavigateNextIcon
                />}
            >
                Next
            </Button>
        </Box>
    )
}