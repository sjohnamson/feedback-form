import { useDispatch, useSelector, } from 'react-redux';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'
import { Typography } from '@mui/material';

export default function Comments({ handleComplete }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('');

    const storeFeedback = () => {
        console.log('in storeFeedback, ', newComment)
        dispatch({ type: 'ADD_FEEDBACK', payload: { key: 'comments', value: newComment } })
        // history.push('/understanding')
        handleComplete();
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
                    Do you have any comments you'd like to share?
                </Typography>
                <TextField
                    multiline
                    onChange={event => { setNewComment(event.target.value) }}
                    value={newComment}
                    variant="standard"
                    id="commentInput"
                    label="comment"
                />
                <Box marginTop={4}>
                    <Button
                        onClick={storeFeedback}
                        variant="outlined"
                        endIcon={<NavigateNextIcon />}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}