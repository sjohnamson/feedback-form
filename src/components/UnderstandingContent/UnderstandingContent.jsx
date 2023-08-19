import { useDispatch, useSelector, } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';

import { useHistory } from 'react-router-dom'

export default function UnderstandingContent() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newUnderstanding, setNewUnderstanding] = useState('');

    const storeFeedback = () => {
        dispatch({ type: 'ADD_FEEDBACK', payload: {key: 'understanding', value: newUnderstanding }})
        history.push('/support')
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
                onChange={event => { setNewUnderstanding(event.target.value) }}
                value={newUnderstanding}
                id="understandingInput"
                label="Understanding?"
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