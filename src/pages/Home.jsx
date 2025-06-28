import React from 'react';
import Banner from '../components/Banner';
import ServiceHome from '../components/ServiceHome';
import Room from '../components/Room';
import Testimonial from '../components/Testimonial';
import Gallery from '../components/Gallery';
import AboutHome from '../components/AboutHome';
import ContactHome from '../components/ContactHome';

const Home = ({ mode }) => {
  return (
    <div>
      <Banner mode={mode} />
      <AboutHome mode={mode} />
      <ServiceHome mode={mode} />
      <Room mode={mode} />
      <Testimonial mode={mode} />
      <Gallery mode={mode} />
      <ContactHome mode={mode} />
    </div>
  );
};

export default Home;
