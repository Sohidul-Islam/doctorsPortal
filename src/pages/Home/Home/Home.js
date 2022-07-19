import React from 'react';
import Navigation from '../../Share/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ContactCard from '../ContactCard/ContactCard';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Testimonials from './../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <ContactCard />
            <Services />
            <AppointmentBanner />
            <Testimonials />
            <Contact></Contact>
            <Footer />
        </div>
    );
};

export default Home;