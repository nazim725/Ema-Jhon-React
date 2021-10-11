import React from 'react';
import './Header.css'
import img from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useauth';

const Header = () => {
  const {user,logOut}=useAuth()
  const   activeStyle={
    fontWeight: "bold",
    color: "red",
    
  }

    return (

      <div className="header">
            <div>
                <img className="logo" src={img} alt="" />
            
            </div>
            <div>
                <nav>
                <NavLink className='link' activeStyle={activeStyle} to="/shop">Shop</NavLink>
                <NavLink className='link' activeStyle={activeStyle} to="/rivew">Order Review</NavLink>
                <NavLink className='link' activeStyle={activeStyle} to="/inventory">Inventory Management here</NavLink>
               {user.email &&  <span style={{color:'white'}}>Hello {user.displayName}</span>}
                
               {user.email?
               <button onClick={logOut}>Log Out</button>
               :
               <NavLink className='link' activeStyle={activeStyle} to="/login">Login</NavLink>

              }
           


                </nav>
                
            </div>
      </div>
    );
};

export default Header;