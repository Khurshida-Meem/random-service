import { Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';

const Experience = ({ title, value }) => {
    return (
        <>
            <Typography sx={{ color: '#080337', fontFamily: 'Quicksand', fontWeight: '700' }} variant="h5" component="div" gutterBottom>
                {title}
            </Typography>
            <Typography sx={{ color: '#080337', fontFamily: 'Quicksand', fontWeight: '700' }} variant="h2" component="div" gutterBottom>
                <CountUp enableScrollSpy={true}  end={value} />+
            </Typography>
        </>
    );
};

export default Experience;