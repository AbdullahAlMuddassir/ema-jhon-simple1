import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import './Login.css';

const Login = () => {
        const {googleSignInUse}=useAuth();
        const location=useLocation();
        const history =useHistory();
        console.log("came from",location.state?.from);
        const handleGoogleInSign =()=>{
            googleSignInUse()
                .then (result =>{
                    history.push(location.state?.from || '/shop')
            })
        }
    return (
        <div className='login-from'>
            <div>
                <h2>Login</h2>
                <from>
                    <input type="email" name=""id="" placeholder="Your E-mail"/>
                    <br/>
                    <input type="password" name=""id="" placeholder=""/>
                    <br/>
                    <input type ="submit" value="submit" />
                </from>
                <p>New ema jhon? <Link to="/register">Create Account</Link></p>
                <div>-----------------or----------------------</div>
                    <button onClick={handleGoogleInSign}className="btn-regular">Google Sing In</button>
            </div>
        </div>
    );
};

export default Login;