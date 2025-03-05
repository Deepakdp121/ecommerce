import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function AllProducts({AddToCart}) {
  const [allProducts, setAllProducts] = useState([]);
  const [orginalproducts, setoriginalproducts] = useState([])
  const [allCategory, setAllCategory] = useState([]);
  
  const [SelectProducts, setselectProducts] = useState("");

  const [searchitem, setsearchitem] = useState("")

  useEffect(()=> {
    const Allproducts = async() => {
      const res = await axios("https://dummyjson.com/products");
      setAllProducts(res.data.products);
      setoriginalproducts(res.data.products)
     
    
    };
    Allproducts();
  },[]);


// 'https://dummyjson.com/products/category-list'
useEffect(()=>{
  const getAllProducts = async() =>{
    try {
    const res = await axios("https://dummyjson.com/products/category-list")
    setAllCategory(res.data)
    } catch (error){
    setProduct(error);
    }
  };
  getAllProducts();

},[]);

const filterProducts = (selectcategory) => {
  setselectProducts(selectcategory);
  

  const data = selectcategory ? orginalproducts.filter((filteritem) =>filteritem.category === selectcategory)
  :orginalproducts;
  setAllProducts(data)

}
//search product

 
const handlesearchitem = () =>{
  const searchproduct = orginalproducts.filter((searchFilteritem)=> (
    searchFilteritem.title.toLowerCase().includes(searchitem.toLowerCase())
  ))
 setAllProducts(searchproduct);

};


//product filter by price






  return (
    <>
    <div className='text-center mt-4'>
      <select className='border-4 w-[250px]' onChange={(e)=>filterProducts(e.target.value)}>
        <option>Filter by Category</option>
      {allCategory.map((item, index) => (
          
            <option value={item} key={index}>
             
              {item}
            </option>
        ))
        
      } 
      </select>
      </div>
      <div className='text-center mt-4 text-1xl'>
        <input placeholder='search item' className='border-4 px-2 py-2 w-[250px]' onChange ={(e)=>setsearchitem(e.target.value)} 
        value={searchitem}
        />
        <button className='bg-black text-white px-2 py-2 ml-4 rounded-md' onClick={handlesearchitem}>Search Product</button>
      </div>
           


<div className='flex flex-wrap justify-center gap-4 mt-5'>
        {allProducts.map((Allitems, index)=>(
          <div key={Allitems.id} className='border w-[350px]'>
            <Link className='block relative h-68 rounded overflow-hidden' to={`/Singleproduct/${Allitems.id}`}>
            <img src={Allitems.thumbnail} alt='' className='object-cover object-center block'/>
            </Link>
            <div className="mt-4 my-3 text-center">
             <h3 className="text-[black] text-xl tracking-widest title-font mb-1 text-center">Title: {Allitems.title}</h3>
             <h2 className="text-gray-900 title-font text-lg font-medium text-center">rating: {Allitems.rating}</h2>
             <p className="mt-1 text-center">Price: {Allitems.price}</p>
             <button className='bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
             rounded-lg text-sm px-5 py-2.5 dark:bg-blue ' onClick={() =>AddToCart(Allitems)}>Add to cart</button>
           </div>
           

          </div>
        )

       ) }
        

      </div>

      

  
      
      
    </>
    
  );
};

export default AllProducts;