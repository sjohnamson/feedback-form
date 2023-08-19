import { useDispatch, useSelector, } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';


export default function FeedbackReview() {
    const history = useHistory();
    const feedback = useSelector(store => store.feedback);
    const dispatch = useDispatch();

    console.log('in review', feedback.feeling)

    const handleSubmit = () => {
        axios
            .post('/feedback', feedback)
            .then(response => {
                console.log('entry posted to DB');
                dispatch({type: 'CLEAR_FEEDBACK'})
            })
            .catch(err => {
                console.log('put failed:', err);
            });
            history.push('/thankyou')
    }

    return (
        <><h1>Review your feedback:</h1>
            <h3>Feeling: {feedback.feeling}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Support: {feedback.support}</h3>
            <h3>Comment: {feedback.comments}</h3>
            <Button
                onClick={handleSubmit}
                variant="outlined"
                endIcon={<AddIcon
                />}>
                Submit
            </Button>
        </>
    )
}