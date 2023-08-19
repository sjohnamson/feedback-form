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
    const [newError, setNewError] = useState(false);

    const storeFeedback = () => {
        if (newSupported) {
        dispatch({type: 'ADD_FEEDBACK', payload: {key: 'support', value: newSupported }})
        history.push('/comments')
    } else {
        setNewError(true);
    }
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
                helperText={newError && "field is required, please enter a value from 1-5"}
                error={newError}
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