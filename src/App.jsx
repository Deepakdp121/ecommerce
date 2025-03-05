import react, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Allproduct from './Components/Allproduct/Allproduct';
import Aboutus from './Components/Aboutus/Aboutus';
import Contactus from './Components/Contactus/Contactus';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Signup from './Components/Signup/Signup';
import Singleproduct from './Pages/Singleproduct/Singleproduct';
import View from './Pages/View';
import Product from './Pages/Product';



function App() {
  const [cart, setcart] = useState([]);

  const [ promocode, setpromocode] = useState("")
  const [discount, setdiscount] = useState(0)
  
  const AddToCart= (products, handledec, handleinc) =>{
    const isproductsExist = cart.find((finditem) =>finditem.id === products.id)
    if(isproductsExist){
      const updatecart = cart.map((item) =>(
        item.id === products.id?{...item, quantity:item.quantity+1}:item
      ))
      setcart(updatecart);
      alert("product added")
  
    }else{

      setcart([...cart, {...products, quantity:1}]);
    }

    
  
  };
  const handleinc = (id) =>{
    const incquantity = cart.map((item) =>(
      item.id ===id ? {...item, quantity:item.quantity+1}:item
    ))
    setcart(incquantity)

  }
  const handledec = (id) =>{
    const decquantity = cart.map((item) =>(
      item.id ===id && item.quantity>1? {...item, quantity:item.quantity-1}:item
    ))
    setcart(decquantity)

  };

  //handle remove
  const handleremove =(id) =>{
  const updatefilter =  cart.filter((filteritem) =>filteritem.id !==id)
  setcart(updatefilter)
  }
  
//calculate price
  const gettotalprice= () =>{
  const totalprice=  cart.reduce((total, cartReduceitem) =>{
      return total + cartReduceitem.price * cartReduceitem.quantity;
  }, 0)
  return totalprice-discount;
  };

 

  const applypromocode = () =>{
    if(promocode == "deepak10"){
      setdiscount(gettotalprice()*0.1)
      setpromocode("")

    }else{
      alert("invalid")
    }
  }

  return (
    <>
    <BrowserRouter>
    <Header cart={cart} />
    <Routes>
     
    
    <Route path ="/" element ={<Home />} />
    <Route path ="/Allproduct" element ={<Allproduct AddToCart={AddToCart}/>} />
    <Route path ="/Aboutus" element ={<Aboutus />} />
    <Route path ="/Contactus" element ={<Contactus />} />
    <Route path ="/Login" element ={<Login />} />
    <Route path ="/Cart" element ={<Cart cart={cart} handledec={handledec} handleinc={handleinc} handleremove={handleremove}
     gettotalprice={gettotalprice} applypromocode={applypromocode} discount={discount}/>} /> 
    <Route path ="/Signup" element ={<Signup />} />
    <Route path ="/Singleproduct/:productId" element ={<Singleproduct AddToCart={AddToCart}/>} />
    <Route path ="/view" element ={<View />} />
    <Route path ="/Product" element ={<Product />} />

   
    </Routes>
    <Footer />
    
    </BrowserRouter>
    </>
  )
}

export default App;
