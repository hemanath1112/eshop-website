import React, { useState } from 'react';
import StorefrontIcon from "@mui/icons-material/Storefront";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { auth } from './From';
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

            navigate('/');

        })
    .catch((error) => {
    
        console.error(error);
        alert(error.message);
    });
  };

  const register = (e) => {
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        if (userCredential.user) {
        navigate('/');
        }
    })
    .catch((error) => {
        console.error(error);
        alert(error.message);
    });
    };
    return (
    <div className="login">
        <div className="login__top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon fontSize="large" className="header__logoImage" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
        </Link>

        </div>
        <div className="login__signup__from">
            <h2>Sign-in</h2>
          
            <form action="" className="login__form" >
            <label htmlFor="email">E-mail</label>
                <input 
                    type="email"
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                      <button type='submit'onClick={signUp} > sign in</button>
            </form>
                
        
            <p>By sign in your agree to the eShop Website condition of use & Sale Please see our Privacy Notice our Cookies Notice and our interest Based Ads Notice </p>

            <button type='submit' onClick={register}> Create your Eshop Account</button>
        </div>
    </div>
  )
}

export default Login