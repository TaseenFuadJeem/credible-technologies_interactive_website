import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import PageTitle from '../PageTitle/PageTitle';
import Delivery from './Delivery';
import Faq from './Faq';
import ProductsForHomePage from './ProductsForHomePage';
import Reviews from './Reviews';

const Home = () => {
    return (
        <section>

            <PageTitle title="Home" />

            <Banner />
            <BusinessSummery />
            <ProductsForHomePage />
            <Delivery />
            <Reviews />
            <Faq />
        </section>
    );
};

export default Home;