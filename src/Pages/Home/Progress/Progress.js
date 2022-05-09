import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import './Progress.css';

const Progress = () => {

    const sub = 'ABOUT US';
    const heading = 'We Develop & Create Digital Future';
    const paragraph = 'Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna aliqua.';

    return (
        <Container sx={{mt: '100px'}}>
            <Box sx={{ width: { md: '50%' } }}>
                <Box>
                    <SectionHeaders sub={sub} heading={heading} paragraph={paragraph} />
                </Box>
                
            </Box>
        </Container>
    );
};

export default Progress;