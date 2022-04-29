import { Box, Container } from '@mui/material';
import React from 'react';
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import banner from '../../../images/banner.svg'
import arrow from '../../../images/right-arrow.svg'

const Banner = () => {

    const heading = 'Right Social Networking for Marketing';
    const paragraph = 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.'

    return (
        <Container sx={{ display: { md: 'flex' }, alignItems: 'center' }}>
            <Box sx={{width: {md: '50%'}}}>
                <SectionHeaders heading={heading} paragraph={paragraph} />
            </Box>
            <Box>
                <img className='banner-img' src={banner} alt="" width='90%' />
            </Box>

        </Container>
    );
};

export default Banner;