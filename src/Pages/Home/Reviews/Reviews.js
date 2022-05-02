import { Container } from '@mui/material';
import React from 'react';
import Slider from 'react-slick/lib/slider';
import Review from './Review';
import './Reviews.css';

const reviews = [
    {
        id: 1,
        star: 5,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, beatae.',
        name: 'Mary Jones',
        designation: 'CEO, Business Co.'
    },
    {
        id: 2,
        star: 5,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro doloribus in quas consectetur mollitia magni aliquam minima quae velit nesciunt!',
        name: 'Kylie Foster',
        designation: 'Editor, CEO'
    },
    {
        id: 3,
        star: 4,
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo est consequatur ab deserunt qui? Sit!',
        name: 'Lisa Matthews',
        designation: 'Photographer'
    },
    {
        id: 4,
        star: 5,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem earum eaque vel asperiores aliquam, ducimus vero quibusdam quam sapiente libero nisi quidem voluptatem tempora provident minus doloribus nulla aut.',
        name: 'Justin Lee',
        designation: 'SEO Instructor'
    },
    {
        id: 5,
        star: 5,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem earum eaque vel asperiores aliquam, ducimus vero quibusdam quam sapiente libero nisi quidem voluptatem tempora provident minus doloribus nulla aut.',
        name: 'Nick Moore',
        designation: 'CEO, Business Co.'
    },
    {
        id: 6,
        star: 4,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque rem earum eaque vel asperiores aliquam, ducimus vero quibusdam quam sapiente libero nisi quidem voluptatem tempora provident minus doloribus nulla aut.',
        name: 'John Dou',
        designation: 'CEO, Business Co.'
    }
]


const Reviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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

    return (
        <Container sx={{ padding: '100px 30px' }}>
            <Slider {...settings}>
                {
                    reviews.map(review => (
                        <Review review={review} key={review.id }/>
                    ))
                }
            </Slider>
        </Container>
    );
};

export default Reviews;