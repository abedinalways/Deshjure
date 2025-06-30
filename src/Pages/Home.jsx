import React from 'react';
import Banner from '../Components/Banner/Banner';
import HowItWorks from '../Components/HowItWorks';
import Services from '../Components/Services';
import Teams from '../Components/Teams';

const Home = () => {
  return (
    <>
      <Banner/>
      <HowItWorks />
      <Services />
      <Teams/>
    </>
  );
};

export default Home;