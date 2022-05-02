import { Box, Rating, Typography } from '@mui/material';
import React from 'react';

const card = {
    m: '20px',
    background: '#fff',
    padding: '36px 24px',
    borderRadius: '15px'
}

const Review = (props) => {
    const {star, desc, name, designation } = props.review;
    return (
        <Box sx={card}>
            <Rating name="read-only" value={star} readOnly />
            <Typography sx={{color: '#787C8B', my: '20px'}} variant="p" component="div" gutterBottom>
                {desc}
            </Typography>
            <Typography sx={{color: '#080337', fontWeight:'700' }} variant="h6" component="div" gutterBottom>
                {name}
            </Typography>
            <Typography sx={{color: '#787C8B'}} variant="p" component="div" gutterBottom>
                {designation}
            </Typography>
        </Box>
    );
};

export default Review;