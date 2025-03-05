import React, { useEffect, useState } from 'react';
import http from './http/http';

function View() {
    const[users, setusers] = useState([]);

    useEffect(()=>{
        fetchAllUsers();

    },[]);

    const fetchAllUsers =()=>{
        http.get('/users').then(res=>{
            setusers(res.data);
        })
    }
  return (
    <>
    <h2>user listning..</h2>
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
            {users.map((users,index)=>(

            
            <tr key={users.id}>
                <td>{index}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>edit</td>
            </tr>
        ))}
        </tbody>
    </table>
    </>
  )
}

export default View