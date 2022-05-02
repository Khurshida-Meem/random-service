import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import img from '../../../images/todo.svg'
import SectionHeaders from '../SectionHeaders/SectionHeaders';

const Discover = () => {

    const heading = 'We Provide Best Digital Services';
    const paragraph = 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.'

    return (
        <Container sx={{ display: { md: 'flex' }, alignItems: 'center', marginTop: '100px' }}>
            <Box sx={{ width: { md: '50%' } }}>
                <Typography sx={{ color: '#080337' }} variant="p" component="div" gutterBottom>
                    WHAT WE DO
                </Typography>
                <SectionHeaders heading={heading} paragraph={paragraph} />
                <Box sx={{ mt: '20px' }}>
                    <button className='btn primary-bg'>Discover</button>
                </Box>

            </Box>
            <Box>
                <MouseParallaxContainer>
                    <MouseParallaxChild factorX={0.03} factorY={0.08}>
                        <Box>
                            <img className='banner-img' src={img} alt="" width='90%' />
                        </Box>

                    </MouseParallaxChild>
                </MouseParallaxContainer>
            </Box>
        </Container>
    );
};

export default Discover;