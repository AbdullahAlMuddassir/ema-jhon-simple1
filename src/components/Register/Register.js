import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import useFirebase from '../../hooks/UseFirebase';

const Register = () => {
    const {googleSignInUse}=useAuth();
    return (
        < div className='login-from'>
            <div>
                <h2>Sign:Register</h2>
                <from>
                    <input type="name" name=""id="" placeholder="Your name"/>
                    <br/>
                    <input type="email" name=""id="" placeholder="Your E-mail"/>
                    <br/>
                    <input type ="password" name="" id="" placeholder="Password"/>
                    <br/>
                    <input type ="password" name="" id="" placeholder="Re-enter password" />
                    <br/>
                    <input type ="submit" value="submit"/>
                </from>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-----------------or----------------------</div>
                    <button onClick={googleSignInUse}className="btn-regular">Google Sing In</button>
            </div>
        </div>
    );
};

export default Register;