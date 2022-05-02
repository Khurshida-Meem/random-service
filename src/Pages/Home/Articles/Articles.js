import React from 'react';
import './Articles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Container, Box, Typography } from '@mui/material';
import article1 from '../../../images/article1.jpg'
import article2 from '../../../images/article2.jpg'
import article3 from '../../../images/article3.jpg'
import article4 from '../../../images/article4.jpg'
import SingleArticle from './SingleArticle';
import SectionHeaders from '../SectionHeaders/SectionHeaders';

const Articles = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const heading = 'Latest Articles'

    return (
        <Container sx={{ padding: '100px 30px' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#080337' }} variant="p" component="div" gutterBottom>
                    OUR BLOG
                </Typography>
                <Box sx={{ width: { md: '65%' }, marginLeft: { md: '20%' } }}>
                    <SectionHeaders heading={heading} />
                </Box>
            </Box>
            <Slider {...settings}>
                <div>
                    <SingleArticle
                        image={article1}
                        heading={'How to choose the right line for a business'} />
                </div>
                <div>
                <SingleArticle
                        image={article2}
                        heading={'Worrying about a deadline is not worth the outcome'} />
                </div>
                <div>
                <SingleArticle
                        image={article3}
                        heading={'Social media tips: taking your sales to the next level'} />
                </div>
                <div>
                <SingleArticle
                        image={article4}
                        heading={'If your mind needs a vacation, so does your team'} />
                </div>
                
            </Slider>
        </Container>
    );
};

export default Articles;