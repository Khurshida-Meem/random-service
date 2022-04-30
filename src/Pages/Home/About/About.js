import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import './About.css';
import AboutCard from './AboutCard';
import about1 from '../../../images/about1.svg'
import about2 from '../../../images/about2.svg'
import about3 from '../../../images/about3.svg'
import about4 from '../../../images/about4.svg'

const About = () => {

    const heading = `We Offer Expert SEO and Marketing Services`;
    const cardParagraph = 'Consectetur adipiscing elit, sed do eiusmod tempo.'


    return (
        <Container sx={{ marginTop: '150px' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#080337' }} variant="h6" component="div" gutterBottom>
                    About Us
                </Typography>
                <Box sx={{ width: { md: '65%' }, marginLeft: { md: '20%' } }}>
                    <SectionHeaders heading={heading} />
                </Box>
            </Box>

            {/* ======================= Service card =============================== */}
            <Box sx={{marginTop: '50px'}}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item sm={12} md={3} sx={{textAlign: 'center'}}>
                        <AboutCard image={about1} heading={'Optimization'} paragraph={cardParagraph} />
                    </Grid>
                    <Grid item sm={12} md={3} sx={{textAlign: 'center'}}>
                        <AboutCard image={about2} heading={'Branding'} paragraph={cardParagraph} />
                    </Grid>
                    <Grid item sm={12} md={3} sx={{textAlign: 'center'}}>
                        <AboutCard image={about3} heading={'Development'} paragraph={cardParagraph} />
                    </Grid>
                    <Grid item sm={12} md={3} sx={{textAlign: 'center'}}>
                        <AboutCard image={about4} heading={'Support'} paragraph={cardParagraph} />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{textAlign: 'center', marginTop: '60px'}}>
            <button style={{padding: '16px 24px'}} className='secondary-btn'>More Features</button>
            </Box>
        </Container>
    );
};

export default About;