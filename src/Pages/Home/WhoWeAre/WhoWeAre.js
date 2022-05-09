import { Box, Container } from '@mui/material';
import React from 'react';
import './WhoWeAre.css'
import img from '../../../images/who-we-are.svg'
import arrow from '../../../images/left-arrow.svg'
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';

const container = {
    display: { md: 'flex' },
    alignItems: 'center',
    mt: '100px'
}

const arrowImg = {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    ml: '100px',
    mb: '20px'
}

const WhoWeAre = () => {

    const sub = 'WHO WE ARE'
    const heading = 'Our Experts are Ready to Help';
    const paragraph = 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'

    return (
        <Container sx={container}>
            
            <Box>
                <MouseParallaxContainer>
                <MouseParallaxChild factorX={0.03} factorY={0.03} >
                        <Box sx={arrowImg}>
                            <img className='arrow-img' src={arrow} alt="" loading='lazy' />
                        </Box>
                        
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.03} factorY={0.08}>
                        <Box sx={{marginTop: '-90px'}}>
                            <img className='banner-img' src={img} alt="" width='90%' />
                        </Box>
                        
                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </Box>
            <Box sx={{ width: { md: '50%' } }}>
                <Box>
                    <SectionHeaders sub={sub} heading={heading} paragraph={paragraph} />
                </Box>
                <Box>
                    
                </Box>
            </Box>
        </Container>
    );
};

export default WhoWeAre;