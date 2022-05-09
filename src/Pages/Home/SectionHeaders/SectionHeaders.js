import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionHeaders = ({ sub, heading, paragraph }) => {
    return (
        <Box>
            <Typography sx={{ color: '#080337' }} variant="p" component="div" gutterBottom>
                {sub}
            </Typography>
            <Typography sx={{ color: '#080337', fontFamily: 'Quicksand', fontWeight: '700' }} variant="h2" component="div" gutterBottom>
                {heading}
            </Typography>
            <Typography sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                {paragraph}
            </Typography>
        </Box>
    );
};

export default SectionHeaders;