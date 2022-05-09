import { Box, Typography } from '@mui/material';
import React from 'react';

const headingColor = {
    color: '#080337',
}

const paragraphStyle = {
    color: '#787C8B',
    lineHeight: '24px',
    fontSize: '18px'
}

const SectionHeaders = ({ sub, heading, paragraph }) => {
    return (
        <Box>
            <Typography sx={headingColor} variant="p" component="div" gutterBottom>
                {sub}
            </Typography>
            <Typography sx={headingColor} variant="h2" component="div" gutterBottom>
                {heading}
            </Typography>
            <Typography sx={paragraphStyle} variant="p" component="div" gutterBottom>
                {paragraph}
            </Typography>
        </Box>
    );
};

export default SectionHeaders;