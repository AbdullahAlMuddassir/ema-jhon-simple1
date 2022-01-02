import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useFirebase from '../../hooks/UseFirebase';
import './Header.css';
import useAuth from '../../hooks/UseAuth';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
               {
                   user.email ? <button onClick={logOut}>Log out</button>
                   :
                   <NavLink to="/login">Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;