
import React from 'react';

import Herosection from '../../Components/Herosection/Herosection';
import Service from '../../Components/Service/Service';
import Gallery from '../../Components/Gallery/Gallery';
import Banner from '../../Components/Banner/Banner';



function Home() {
  return (
    <>

    <Banner />
    <Herosection />
    <Service />
    <Gallery />
    </>
  );
};

export default Home;