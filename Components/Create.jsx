import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../Components/Create.css"
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const history=useNavigate();

  // const header = {"Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('doneeeeeeeeeeeeeeeeeeeeeeeee')
    console.log(Name, Email);
    axios.post("https://658adda5ba789a9622380c6b.mockapi.io/react", {
      Name: Name,
      Email: Email,
   
    }).then(()=>{
    history("/read")
  })
};

  return (
    <>
      <div className='form'>
        <h1>Create users</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} />
          </div>
          {Name}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Create;

