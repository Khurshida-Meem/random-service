import { Box, Typography } from '@mui/material';
import React from 'react';

const AwardContent = ({ heading }) => {
    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography sx={{ color: '#fff' }} variant="h5" component="div" gutterBottom>
                    {heading}
                </Typography>
            <Typography sx={{ color: '#787C8B' }} variant="p" component="div" >
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </Typography>
        </Box>
    );
};

export default AwardContent;