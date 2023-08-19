import { useDispatch, useSelector, } from 'react-redux';
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
    const [newError, setNewError] = useState(false)

    const storeFeedback = () => {
        console.log('in storeFeedback, ', newFeelings)
        if (newFeelings) {
            dispatch({ type: 'ADD_FEEDBACK', payload: { key: 'feeling', value: newFeelings } })
            history.push('/understanding')
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
                onChange={event => { setNewFeelings(event.target.value) }}
                value={newFeelings}
                variant="standard"
                id="feelingInput"
                label="How are you feeling today? "
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