import React, { useEffect, useState } from "react";
import style from "./signup.module.css";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/config";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage,setErrorMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.username==="" || values.email==="" || values.password ==="") {
      setErrorMessage("fill all fields from form");
      return;
    }
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.username,
        });
        navigate(0);
        setTimeout(()=>{
          navigate("/")
        },1000)
       
      })
      .catch((err) => 
      {console.log(err.message)
      setErrorMessage(err.message)}
      );
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.card}>
          <h1>LOGO</h1>
          <form action="" className={style.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter username"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            <input
              type="email"
              placeholder="Enter you Email"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
               <p style={{textAlign:"center"}}>{errorMessage}</p>
            <input type="submit" value="Signup" />
          </form>
       

          <p>
            Don't have any account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
