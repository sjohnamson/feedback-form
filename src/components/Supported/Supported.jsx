import { useDispatch} from 'react-redux';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Supported({ handleComplete }) {
    const dispatch = useDispatch();
    const [newSupport, setNewSupport] = useState('');
    const [newError, setNewError] = useState(false)

    // dispatch the feedback to the redux store
    const storeFeedback = () => {
        console.log('in storeFeedback, ', Number(newSupport))
        if (Number(newSupport) >= 1 && Number(newSupport) <= 5) {
            dispatch({ type: 'ADD_FEEDBACK', payload: { key: 'support', value: newSupport } })
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
                    How well did you feel supported today?
                </Typography>
                <TextField
                    required
                    onChange={event => { setNewSupport(event.target.value) }}
                    value={newSupport}
                    variant="standard"
                    id="supportInput"
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