import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate =useNavigate();

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/login')
        
      })
      .catch((error) => {
      console.log(error)
      });
  };

  return (
    <div>
      <h1> this is home page</h1>

      <div>{props.name ?  <button onClick={logout}>logout</button>: <Link to="/login">Login page</Link> }</div>

      {/* <button onClick={logout}>logout</button> */}

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
};

export default Home;
