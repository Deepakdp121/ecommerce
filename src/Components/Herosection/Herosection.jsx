import React, { useEffect, useState } from "react";
import http from "../../Pages/http/http";




import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Herosection = () => {
    const imgdata = [
        {
            url: 'https://tse1.mm.bing.net/th?id=OIP.qaHLIYzNst85RYiJsYEw9gHaE8&pid=Api&P=0&h=220',
        },
        {
            url: 'https://tse3.mm.bing.net/th?id=OIP.toqZsdZTstZ4R09WGjilfwHaJ4&pid=Api&P=0&h=220',
        },
        {
            url: 'https://tse1.mm.bing.net/th?id=OIP.GG49Uk_OSi0uzkIcFqwa5AHaHa&pid=Api&P=0&h=220'
        },
        {
            url: 'https://tse3.mm.bing.net/th?id=OIP.BEpVA7VZj8rTtpbiumP9IQHaDt&pid=Api&P=0&h=220'
         },
        {
            url: 'https://tse4.mm.bing.net/th?id=OIP.WCjQERmwObosZ4gM4d1lOAHaD4&pid=Api&P=0&h=220',
        },
      
    ];
    const [slider, setslider] = useState(0)
    const handleplus = ()=>{
        setslider(slider === imgdata.length-1? 0:slider+1)

    };
    const handleminus = ()=>{
        setslider(slider==imgdata.length-1? 0:slider-1)
        
    };
    useEffect(() =>{
    const sliderclear = setInterval(() => {
            handleplus();
            
        }, 2000);
        return()=>clearInterval(sliderclear)

    },[slider])

    const [Category, setAllcategory] = useState([]);

      useEffect(()=>{
        fetchAllUsers();
      },[]);

       const fetchAllUsers = () =>{
        http.get('category').then(res=>{
            setAllcategory(res.data);
        })
      }
    return(
        <>
       
        <div>
            <div className="flex w-full h-[50vh] mt-5">
            <img src={imgdata[slider].url} alt=" " className="w-[100%] justify-center justify-between" />
        
            <div className="flex justify-between w-full px-5 absolute top-[140%] text-white">
            <FaChevronLeft size={30} className="cursor-pointer" onClick={handleminus}/>
            <FaChevronRight size={30} className="cursor-pointer" onClick={handleplus} />
            </div>
        </div>
        </div>
        <div className="">
            <h2>select category</h2>
            {
            Category.map((cat_name,index) =>(
                <tr>
                <td>{cat_name.id}</td>
                <td>{cat_name.cat_name}</td>
            </tr>

            ))
        }
           
        </div>
       
        </>
    
    );
};

export default Herosection;