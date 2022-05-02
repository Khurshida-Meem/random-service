import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Footer.css'
import img from '../../../images/arrow-right-long-solid.svg'

const links = ['Home', 'Services', 'About Us', 'Our Team', 'Contacts'];
const socialLinks = ['Facebook', 'Twitter', 'Dribble', 'Instagram'];

const Footer = () => {
    return (
        <>
            <div className='curved upper'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#080337" fill-opacity="1" d="M0,224L26.7,218.7C53.3,213,107,203,160,176C213.3,149,267,107,320,112C373.3,117,427,171,480,208C533.3,245,587,267,640,261.3C693.3,256,747,224,800,192C853.3,160,907,128,960,138.7C1013.3,149,1067,203,1120,213.3C1173.3,224,1227,192,1280,192C1333.3,192,1387,224,1413,240L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z" data-darkreader-inline-fill=""></path></svg>
            </div>
            <Box sx={{ background: '#080337' }}>
                <Container sx={{ pb: '50px' }}>
                    <Grid container spacing={{ xs: 12, md: 3 }}>
                        <Grid item sm={12} md={3}>
                            <Typography sx={{ color: '#fff', fontFamily: 'Quicksand', fontWeight: '700', mb: '20px' }} variant="h6" component="div" gutterBottom>
                                Office
                            </Typography>
                            <Typography sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                                Germany —
                                785 15h Street, Office 478
                                Berlin, De 81566

                                info@email.com
                                <hr style={{ margin: '10px 0 20px 0' }} />
                                <span style={{ color: '#fff' }}>1234567</span>

                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={3} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: '#fff', fontWeight: '700', mb: '20px' }} variant="h6" component="div" gutterBottom>
                                Links
                            </Typography>

                            {
                                links.map(link => (
                                    <Box>
                                        <Typography className='links' sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                                        {link}
                                        </Typography>
                                        <div className='border'></div>
                                    </Box>
                                    
                                ))
                            }
                        </Grid>
                        <Grid item sm={12} md={3} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: '#fff', fontWeight: '700', mb: '20px' }} variant="h6" component="div" gutterBottom>
                                Socials
                            </Typography>

                            {
                                socialLinks.map(link => (
                                    <Box>
                                        <Typography className='links' sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                                        {link}
                                        </Typography>
                                        <div className='border'></div>
                                    </Box>
                                    
                                ))
                            }
                        </Grid>
                        <Grid item sm={12} md={3} sx={{ textAlign: 'center' }}>
                        <Typography sx={{ color: '#fff', fontWeight: '700', mb: '20px' }} variant="h6" component="div" gutterBottom>
                                Newsletter
                            </Typography>
                            <Box>
                                <input className='newsletter' type="email" placeholder='Enter your email ' />
                                <button className='btn secondary-bg input-btn'><img src={img} alt="" width='20px' /> </button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box>
                        <hr style={{ margin: '50px 0 20px 0' }} />
                        <Typography sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                            © 2022. All Rights Reserved.
                        </Typography>
                    </Box>

                </Container>

            </Box>
        </>
    );
};

export default Footer;