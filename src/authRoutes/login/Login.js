import React,{useState} from "react";
import style from "./login.module.css";
import { Link,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../config/config"

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email === "" || values.password === "") {
      setErrorMessage("fill all fields from form");
      return;
    }
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage(err.message);
      });
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.card}>
          <h1>LOGO</h1>
          <form action="" className={style.form} onSubmit={handleSubmit}>
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
            <p style={{ textAlign: "center" }}>{errorMessage}</p>
            <input type="submit" value="Login" />
          </form>

          <p>
            Don't have any account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
