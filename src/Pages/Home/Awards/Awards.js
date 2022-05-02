import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './Awards.css'
import AwardTimeline from './AwardTimeline';

const Awards = () => {
    return (
        <>
            <div className='curved upper'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#080337" fill-opacity="1" d="M0,224L26.7,218.7C53.3,213,107,203,160,176C213.3,149,267,107,320,112C373.3,117,427,171,480,208C533.3,245,587,267,640,261.3C693.3,256,747,224,800,192C853.3,160,907,128,960,138.7C1013.3,149,1067,203,1120,213.3C1173.3,224,1227,192,1280,192C1333.3,192,1387,224,1413,240L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z" data-darkreader-inline-fill=""></path></svg>
            </div>
            <Box sx={{ background: '#080337' }}>
                <Container>
                    <Box>
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
                <svg className='svg-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#E8E9F1" fill-opacity="1" d="M0,224L26.7,218.7C53.3,213,107,203,160,176C213.3,149,267,107,320,112C373.3,117,427,171,480,208C533.3,245,587,267,640,261.3C693.3,256,747,224,800,192C853.3,160,907,128,960,138.7C1013.3,149,1067,203,1120,213.3C1173.3,224,1227,192,1280,192C1333.3,192,1387,224,1413,240L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z" data-darkreader-inline-fill=""></path></svg>
            </Box>

        </>
    );
};

export default Awards;