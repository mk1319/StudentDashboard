import React, { useState } from "react";
import axios from 'axios';
import jwt from 'jwt-simple';

function LoginForm() {
  
  const [values, setValues] = useState({
    email: "",
    password: "",
    msg:""
  });


  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://data.educationmandal.com/api/User/Login',{
      Email:values.email,
      Password:values.password
    })
    .then((res)=>{
        if(res.data.isLogin)
        {

          localStorage.setItem("StudetntLogin",jwt.encode(res.data,process.env.REACT_APP_KEY))
          window.location.href=`${process.env.PUBLIC_URL}/`
        }
        setValues({
          email:"",
          password:"",
          msg:res.data.msg 
        })
      })

      setTimeout(()=>{
        setValues((value)=>{return {...value,msg:""}})
      },2000)

  };


  return (
    <div>
    
      <h1 style={{padding:"20px"}}> Student Login</h1>
      <h2 style={{color:"#22B874"}}>{values.msg}</h2>
      <form
        autoComplete="off"
        className="form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          required
          type="email"
          value={values.email}
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <br/><br/>
        <input
          required
          type="password"
          value={values.password}
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <div>
          <button style={{border:"1px solid black",padding:"5px"}}>LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
