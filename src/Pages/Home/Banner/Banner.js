import { Box, Container } from '@mui/material';
import React from 'react';
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import banner from '../../../images/banner.svg'
import arrow from '../../../images/right-arrow.svg'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';

const container = {
    display: { md: 'flex' },
    alignItems: 'center'
}


const Banner = () => {

    const heading = 'Right Social Networking for Marketing';
    const paragraph = 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.'

    return (
        <Container sx={container}>
            <Box sx={{ width: { md: '50%' } }}>
                <SectionHeaders heading={heading} paragraph={paragraph} />
                <Box sx={{mt: '20px'}}>
                    <button style={{marginRight: '20px'}} className='btn ternary-bg'>View More</button>
                <button className='btn primary-bg'>About Us</button>
                </Box>
                
            </Box>
            <Box>
                <MouseParallaxContainer>
                    <MouseParallaxChild factorX={0.03} factorY={0.03} >
                        <Box sx={{marginTop: '30px', marginLeft: '40px'}}>
                            <img src={arrow} alt="" loading='lazy' />
                        </Box>
                        
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.03} factorY={0.08}>
                        <Box sx={{marginTop: '-90px'}}>
                            <img className='banner-img' src={banner} alt="" width='90%' />
                        </Box>
                        
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </Box>
        </Container>

    );
};

export default Banner;