import { Box, Container } from '@mui/material';
import React from 'react';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import img from '../../../images/todo.svg'
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import './Discover.css'

const box = {
    pt: '100px',
    mt: '-10px',
    backgroundColor: '#F9FAFF'
}

const container = {
    display: { md: 'flex' },
    alignItems: 'center'
}

const Discover = () => {

    const heading = 'We Provide Best Digital Services';
    const paragraph = 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.';
    const sub = 'WHAT WE DO';

    return (
        <Box sx={box}>
            <Container sx={container}>
                <Box sx={{ width: { md: '50%' } }}>
                    <SectionHeaders sub={sub} heading={heading} paragraph={paragraph} />
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
        </Box>
    );
};

export default Discover;