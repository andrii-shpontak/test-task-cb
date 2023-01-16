import React from 'react';
import { Button } from '@mui/material';

import './style.scss';

const ErrorPage: React.FC = () => {
    return (
        <div className='error'>
            <p className='error__title'>Something went wrong...</p>
            <Button variant="outlined" className='error__button'><a href='/'>Back to main page</a></Button>
        </div>
    );
};

export default ErrorPage;