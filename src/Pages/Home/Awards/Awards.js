import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './Awards.css'
import AwardTimeline from './AwardTimeline';

const Awards = () => {
    return (
        <Box sx={{ background: '#080337', margin: '150px 0' }}>
            <Container>
                <Box sx={{ padding: '60px 0' }}>
                    <Box>
                        <Typography sx={{ color: '#fff' }} variant="p" component="div" gutterBottom>
                            HUGE HONOR
                        </Typography>
                        <Typography sx={{ color: '#fff' }} variant="h2" component="div" gutterBottom>
                            Our Awards
                        </Typography>
                    </Box>
                    <Box>
                        <AwardTimeline />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Awards;