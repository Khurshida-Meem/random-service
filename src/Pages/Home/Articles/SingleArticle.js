import { Typography } from '@mui/material';
import React from 'react';
import './Articles.css'

const SingleArticle = ({ image, heading }) => {
    return (
        <div className='card'>
            <img src={image} alt="" width='100%' />
            <Typography sx={{ fontFamily: 'Quicksand', margin: '10px 0' }} variant="p" component="div" gutterBottom>
                STARTUP
            </Typography>
            <Typography sx={{ color: '#080337', fontFamily: 'Quicksand', fontWeight: '700' }} variant="h5" component="div" gutterBottom>
                {heading}
            </Typography>
            <Typography sx={{ color: '#787C8B', fontFamily: 'Quicksand', fontWeight: '700' }} variant="p" component="div" gutterBottom>
                Apr 21, 2020 . 0 Comments
            </Typography>
        </div>
    );
};

export default SingleArticle;