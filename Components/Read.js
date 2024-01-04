import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Components/Read.css"

const Read = () => {
  const [data ,setdata]=useState([])
const readata=()=>{
axios.get("https://658adda5ba789a9622380c6b.mockapi.io/react").then((res)=>{
  console.log(res.data);
  setdata(res.data);
})
  };
  const handleDelete=(id)=>{
axios.delete(`https://658adda5ba789a9622380c6b.mockapi.io/react/${id}`).then(()=>{getdata();});
  }

const setToLocalStorage=(id,Name,Email)=>{
  localStorage.setItem('id',id);
  localStorage.setItem('name',Name);
  localStorage.setItem('email',Email);
}
  useEffect(()=>{
    readata();
  },[data])
  readata();
  return (
    <>
    <div className='read'>
    <Link to='/'> <button className='btn-primary btn'> click me</button></Link>
    <h1>Read users</h1>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
   
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {data.map((item)=>{
    return (
      <tbody>
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
        
          <td>
          <Link to='/update'>
            <button type="button" class="btn btn-primary" onClick={()=>setToLocalStorage(item.id,item.Name,item.Email)}>Edit</button>  </Link> </td>
            <td>  <button type="button" class="btn btn-danger" onClick={()=>handleDelete(item.id)}>

        Delete </button>   </td>
      
        </tr>
      </tbody>
    )
  })}
   
</table></div>
    </>
  );
};

export default Read
