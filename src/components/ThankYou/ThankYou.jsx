import { useDispatch, useSelector, } from 'react-redux';
import Button from '@mui/material/Button';

import { useHistory } from 'react-router-dom'

export default function ThankYou() {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <>
        <h1>Thank you for your feedback!</h1>
        <Button onClick={() => history.push('/')}>Complete another survey</Button>
        </>
    )
}