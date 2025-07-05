import React from 'react';
import Banner from '../Components/Banner/Banner';
import HowItWorks from '../Components/HowItWorks';
import Services from '../Components/Services';
import Teams from '../Components/Teams';
import Benefits from '../Components/Benefits';
import Merchant from '../Components/Marchant';

const Home = () => {
  return (
    <>
      <Banner/>
      <HowItWorks />
      <Services />
      <Teams />
      <Benefits />
      <Merchant/>
    </>
  );
};

export default Home;