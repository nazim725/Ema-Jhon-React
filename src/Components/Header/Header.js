import React from 'react';
import './Header.css'
import img from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                </nav>
                
            </div>
      </div>
    );
};

export default Header;