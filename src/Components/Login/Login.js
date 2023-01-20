import { async } from '@firebase/util';
import { Link, useNavigate } from 'react-router-dom';
import React ,{useState} from 'react';
import {auth} from '../../Firebase/Config'
import { signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [loginEmail,setLoginEmail]=useState('')
  const [loginPassword,setLoginPassword]=useState('')
  const Navigate = useNavigate();
  const handleLogin =async(e)=>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,loginEmail,loginPassword).then(()=>{
        Navigate('/')
      })
    } catch (error) {
      
    }

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={loginEmail}
            onChange={(e)=>setLoginEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname" value={loginPassword}
            onChange={(e)=>setLoginPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/Signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
