import { useDispatch, useSelector, } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

import { useHistory } from 'react-router-dom'

export default function Header() {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
    <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
    </header>
    )
};