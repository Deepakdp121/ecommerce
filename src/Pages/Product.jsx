import React from 'react';
import { useState, useEffect } from 'react';
import http from './http/http';

function Product() {
  
    
     const [products, setproducts] = useState([]);

useEffect(()=>{
    fetchAllUsers();

},[]);
const fetchAllUsers =() => {
    http.get('/Product').then(res=>{
        setproducts(res.data);
    })

}

return (
    <>
    <h2>product listning..</h2>
    <table>
        <thead>
            <tr>
                <td>s.no</td>
                <td>Name</td>
                <td>email</td>
                <td>action</td>
            </tr>
        </thead>
        <tbody>
            {products.map((products,index)=>(

            
            <tr key={products.id}>
                <td>{index}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>edit</td>
            </tr>
        ))}
        </tbody>
    </table>
    </>
  )
}

export default Product