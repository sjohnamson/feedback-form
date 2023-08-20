import { useDispatch, useSelector, } from 'react-redux';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'
import { Typography } from '@mui/material';

export default function UnderstandingContent({ handleComplete }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newUnderstanding, setNewUnderstanding] = useState('');
    const [newError, setNewError] = useState(false)

    const storeFeedback = () => {
        console.log('in storeFeedback, ', Number(newUnderstanding))
        if (Number(newUnderstanding) >= 1 && Number(newUnderstanding) <= 5) {
            dispatch({ type: 'ADD_FEEDBACK', payload: { key: 'understanding', value: newUnderstanding } })
            // history.push('/understanding')
            handleComplete();
        } else {
            setNewError(true);
        }
    }

    return (
        <Paper
            elevation={8}
            sx={{
                height: 200,
                width: '60%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 4,
                padding: 2
            }}
        >
            <Box
                component="form"
                alignItems="center"
                justifyContent="center"
                noValidate
                autoComplete="off"
            >
                <Typography variant='h5'>
                    How well do you understand today's content?
                </Typography>
                <TextField
                    required
                    onChange={event => { setNewUnderstanding(event.target.value) }}
                    value={newUnderstanding}
                    variant="standard"
                    id="understandingInput"
                    label="1-5"
                    helperText={newError && "please enter a value from 1-5"}
                    error={newError}
                />
                <Box marginTop={4}>
                    <Button
                        onClick={storeFeedback}
                        variant="outlined"
                        endIcon={<NavigateNextIcon
                        />}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}