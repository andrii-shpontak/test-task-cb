import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from './error.gif'

import './style.scss';

const ErrorPage: React.FC = () => {
    return (
        <div className='error'>
            <p className='error__title'>Something went wrong...</p>
            <img className='error__img' src={img} alt="error" />
            <Button variant="outlined" className='error__button'><a href='/'>Back to main page</a></Button>
        </div>
    );
};

export default ErrorPage;