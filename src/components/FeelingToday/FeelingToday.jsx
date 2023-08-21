import { useDispatch} from 'react-redux';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function FeelingToday({ handleComplete }) {
    
    const dispatch = useDispatch();
    const [newFeelings, setNewFeelings] = useState('');
    const [newError, setNewError] = useState(false);

    // dispatch the feedback to the redux store
    const storeFeedback = () => {
        console.log('in storeFeedback, ', Number(newFeelings))
        if (Number(newFeelings) >= 1 && Number(newFeelings) <= 5) {
            dispatch({ type: 'ADD_FEEDBACK', payload: { key: 'feeling', value: newFeelings } })
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
                    How are you feeling today?
                </Typography>
                <TextField
                    required
                    onChange={event => { setNewFeelings(event.target.value) }}
                    value={newFeelings}
                    variant="standard"
                    id="feelingInput"
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