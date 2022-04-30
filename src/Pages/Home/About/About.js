import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import './About.css';

const About = () => {

    const heading = `We Offer Expert SEO and Marketing Services`;
    
    return (
        <Container sx={{ marginTop: '100px' }}>
            <Box sx={{ textAlign: 'center'}}>
                <Typography sx={{ color: '#080337', fontWeight: '700' }} variant="h6" component="div" gutterBottom>
                    About Us
                </Typography>
                <SectionHeaders heading={heading} />
            </Box>
        </Container>
    );
};

export default About;