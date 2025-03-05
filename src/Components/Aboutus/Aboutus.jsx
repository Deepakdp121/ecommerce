import React from 'react'

function Aboutus() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Technology At Deepshop
        <br className="hidden lg:inline-block" /> INNOVATION
      </h1>
      <p className="mb-8 leading-relaxed">The Flipkart Group is one of India’s leading digital commerce entities and 
        includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, and Cleartrip.

Started in 2007, Flipkart has enabled millions of sellers, merchants, and small businesses to participate in India's digital
 commerce revolution. With a registered customer base of more than 500 million, Flipkart's marketplace offers over 150
  million products across 80+ categories. Today, there are over 14 lakh sellers on the platform, including Shopsy sellers.
   With a focus on empowering and delighting every Indian by delivering value through technology and innovation,
    Flipkart has created lakhs of jobs in the ecosystem while empowering generations of entrepreneurs and MSMEs.
     Flipkart is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns, which are
      customer-centric innovations that have made online shopping more accessible and affordable for millions of Indians. 
      In 2024, Flipkart also introduced the Flipkart UPI handle to further enhance its digital payment offerings for all
       customers and further India’s digital economy vision.
      </p>
      
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who we are?
        <br className="hidden lg:inline-block" />readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Deepshop technology derives path-breaking,customer focused
        innovation that makes high quality products accesible to indian shoppers, besides making the online
        shopping experience convinient, intiuative and seamless</p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://corporate.flipkart.net/assets/images/about-office-image.png" />
    </div>
  </div>
  
</section>
    </>
  );
};

export default Aboutus;