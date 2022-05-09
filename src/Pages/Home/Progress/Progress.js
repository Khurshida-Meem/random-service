import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SectionHeaders from '../SectionHeaders/SectionHeaders';
import './Progress.css';
import SingleProgressBar from './SingleProgressBar';
import { GoMail } from "react-icons/go";

const email = {
    color: "#080337",
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    mt: '50px'
}


const Progress = () => {

    const sub = 'ABOUT US';
    const heading = 'We Develop & Create Digital Future';
    const paragraph = 'Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna aliqua.';

    return (
        <Container sx={{mt: '100px'}}>
            <Box sx={{ display: {md: 'flex'}}}>
                <Box sx={{ width: { md: '50%' } }}>
                    <SectionHeaders sub={sub} heading={heading} paragraph={paragraph} />

                    <Box sx={email}>
                        <Box sx={{ml: '30px'}}>
                            <GoMail />
                        </Box>
                        <Box sx={{ml: '70px'}}>
                            info@example.com
                         </Box>
                    </Box>
                </Box>
                <Box  sx={{ width: { md: '40%', xs: '80%' }, mt: {md: '250px', xs: '100px'} }}>
                    <SingleProgressBar completed={80} labelTitle={'Design'} />
                    <SingleProgressBar completed={90} labelTitle={'Branding'} />
                    <SingleProgressBar completed={85} labelTitle={'Web Design'} />
                </Box>
                    
            </Box>
        </Container>
    );
};

export default Progress;