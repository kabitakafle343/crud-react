import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setid] = useState(0);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate =  (e) => {
    e.preventDefault();
  axios.put(`https://658adda5ba789a9622380c6b.mockapi.io/react/${id}`, {
      Name: Name,
      Email: Email,
    }
    ).then(()=>{
      navigate("/read");
    });
  };

  return (
    <div className='updata' style={{margin:"10rem",width:"44rem"}}>
      <h1>Update users</h1>
      <form >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Email} onChange={(e) => setEmail(e.target.value)} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={Name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;

