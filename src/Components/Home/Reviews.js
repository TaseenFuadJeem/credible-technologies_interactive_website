import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import quote from '../../Assets/Icons/quote.png';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <section className='lg:px-24 px-3 mb-32'>
            <div className='flex justify-between items-center'>
                <Slide left>
                    <div>
                        <h3 className='text-primary text-xl font-bold'>Reviews</h3>
                        <h1 className='text-4xl font-semibold my-2'>What Our Customer Say</h1>
                    </div>
                </Slide>
                <Slide right><img className='lg:w-48 w-24' src={quote} alt="" /></Slide>
            </div>
            <div className='grid lg:grid-cols-3 lg:gap-7 gap-20 mt-28 lg:mt-20'>

                {
                    reviews.map(r => <Review key={r.id} review={r} />)
                }

            </div>
        </section>
    );
};

export default Reviews;