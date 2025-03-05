import React from 'react'

function Gallery() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-[green]
       text-semibold text-center">To Look out Our product!</h1>
      
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2 hover:scale-75 translate-x-4 hover:skew-y-3 transition-duration-500">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block"
           src="https://tse1.mm.bing.net/th?id=OIP.aTRhXRPoGxwL5G3NlMDBQwHaHa&pid=Api&P=0&h=220" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block"
           src="https://tse3.mm.bing.net/th?id=OIP.VWbXLiJ_JQLg1OjiEbbOBAHaDx&pid=Api&P=0&h=220" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block"
           src="https://up.yimg.com/ib/th?id=OIP.DLpXgz7N2lu9mKA9q2l31QHaE8&pid=Api&rs=1&c=1&qlt=95&w=161&h=107" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 hover:scale-75 translate-x-4 hover:skew-y-3 transition-duration-500">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block"
           src="https://tse4.mm.bing.net/th?id=OIP.waqWCNc_pizupnL1Evu7ywAAAA&pid=Api&P=0&h=220" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block"
           src="https://tse2.mm.bing.net/th?id=OIP.Vh363Lo7YCkyAXxm0uq1qgHaE8&pid=Api&P=0&h=220" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block"
           src="https://tse1.mm.bing.net/th?id=OIP.sgh3n-VMj0SLM_CGGa5rgQHaHT&pid=Api&P=0&h=220" />
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  );
};

export default Gallery;